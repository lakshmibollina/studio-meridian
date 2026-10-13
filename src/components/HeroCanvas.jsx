import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Pastel palette sampled from the site's Tailwind theme
 * (coral / grape / amberpop), kept light and airy.
 */
const PALETTE = ['#ffb3a0', '#c9b8ff', '#ffd98a', '#ff8f70', '#a78bfa', '#ffc44d'];

// Deterministic pseudo-random so SSR/build snapshots stay stable.
function mulberry(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function usePointerRef() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return pointer;
}

function Shape({ item }) {
  const mesh = useRef();
  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * item.spinX;
    mesh.current.rotation.y += delta * item.spinY;
  });

  const material = (
    <meshStandardMaterial
      color={item.color}
      roughness={0.55}
      metalness={0.05}
      transparent
      opacity={0.92}
    />
  );

  return (
    <Float
      speed={item.floatSpeed}
      rotationIntensity={0.25}
      floatIntensity={1.1}
      floatingRange={[-0.35, 0.35]}
    >
      <mesh ref={mesh} position={item.position} rotation={item.rotation} scale={item.scale}>
        {item.geo === 0 && <icosahedronGeometry args={[1, 0]} />}
        {item.geo === 1 && <torusGeometry args={[0.9, 0.34, 20, 40]} />}
        {item.geo === 2 && <sphereGeometry args={[1, 28, 28]} />}
        {item.geo === 3 && <tetrahedronGeometry args={[1.15]} />}
        {item.geo === 4 && <torusKnotGeometry args={[0.7, 0.24, 90, 14]} />}
        {material}
      </mesh>
    </Float>
  );
}

function ShapeField({ pointer, density }) {
  const group = useRef();

  const items = useMemo(() => {
    const rand = mulberry(20261013);
    const list = [];
    // A few larger "hero" shapes pushed to the edges so copy stays readable.
    const anchors = [
      { x: -5.4, y: 1.7, s: 1.15, geo: 1 },
      { x: 5.2, y: -1.4, s: 1.3, geo: 4 },
      { x: 4.4, y: 2.2, s: 0.85, geo: 2 },
      { x: -4.6, y: -2.1, s: 0.9, geo: 3 },
      { x: 0.2, y: 2.9, s: 0.7, geo: 0 },
    ];
    anchors.forEach((a, i) => {
      list.push({
        position: [a.x, a.y, -1.5 - rand() * 1.5],
        rotation: [rand() * Math.PI, rand() * Math.PI, 0],
        scale: a.s,
        geo: a.geo,
        color: PALETTE[i % PALETTE.length],
        spinX: 0.12 + rand() * 0.2,
        spinY: 0.1 + rand() * 0.25,
        floatSpeed: 1 + rand() * 0.8,
      });
    });
    // Scatter of small shapes = the "particle" layer.
    const small = density === 'full' ? 26 : 14;
    for (let i = 0; i < small; i++) {
      list.push({
        position: [(rand() - 0.5) * 13, (rand() - 0.5) * 7, -2.5 - rand() * 2],
        rotation: [rand() * Math.PI, rand() * Math.PI, 0],
        scale: 0.12 + rand() * 0.3,
        geo: Math.floor(rand() * 5),
        color: PALETTE[Math.floor(rand() * PALETTE.length)],
        spinX: 0.2 + rand() * 0.6,
        spinY: 0.2 + rand() * 0.6,
        floatSpeed: 1.4 + rand() * 1.4,
      });
    }
    return list;
  }, [density]);

  useFrame((_, delta) => {
    // Gentle tilt of the whole field toward the pointer.
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.current.x * 0.22,
      2.2,
      delta,
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -pointer.current.y * 0.14,
      2.2,
      delta,
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      pointer.current.x * 0.5,
      2.2,
      delta,
    );
  });

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <Shape key={i} item={item} />
      ))}
    </group>
  );
}

/** Subtle camera drift driven by the hero's scroll progress (framer-motion MotionValue). */
function CameraRig({ progress }) {
  useFrame((state, delta) => {
    const p = progress ? THREE.MathUtils.clamp(progress.get(), 0, 1) : 0;
    const cam = state.camera;
    cam.position.y = THREE.MathUtils.damp(cam.position.y, p * 1.5, 2.5, delta);
    cam.position.z = THREE.MathUtils.damp(cam.position.z, 9 + p * 2.2, 2.5, delta);
    cam.lookAt(0, p * 0.6, 0);
  });
  return null;
}

function useFullDensity() {
  const [full, setFull] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1280px)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)');
    const update = () => setFull(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return full;
}

export default function HeroCanvas({ progress }) {
  const pointer = usePointerRef();
  const full = useFullDensity();
  // Note: Hero only mounts this on >=768px screens, so mobile never loads WebGL.

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 9], fov: 42 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      {/* soft studio lighting — bright, no dark tones */}
      <ambientLight intensity={0.75} color="#ffffff" />
      <hemisphereLight args={['#ffffff', '#ffe9d6', 0.85]} />
      <directionalLight position={[6, 8, 6]} intensity={1.15} color="#fff7ee" />
      <directionalLight position={[-6, -4, 4]} intensity={0.35} color="#e8e0ff" />
      <ShapeField pointer={pointer} density={full ? 'full' : 'light'} />
      <CameraRig progress={progress} />
    </Canvas>
  );
}
