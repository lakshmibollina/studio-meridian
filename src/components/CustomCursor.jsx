import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Site-wide custom cursor.
 * - Small ink dot by default, grows into a ring over links/buttons,
 *   and expands into a labeled "View" pill over [data-cursor="view"] cards.
 * - Disabled entirely on touch / coarse-pointer devices (native cursor stays).
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState('default'); // default | hover | view

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 550, damping: 45, mass: 0.55 });
  const sy = useSpring(y, { stiffness: 550, damping: 45, mass: 0.55 });

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const labeled = e.target.closest?.('[data-cursor]');
      if (labeled) {
        setVariant(labeled.getAttribute('data-cursor'));
      } else if (e.target.closest?.('a, button')) {
        setVariant('hover');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = variant === 'view' ? 84 : variant === 'hover' ? 44 : 12;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] grid place-items-center"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        className="grid place-items-center rounded-full"
        animate={{
          width: size,
          height: size,
          backgroundColor:
            variant === 'view' ? '#1b1b26' : variant === 'hover' ? 'rgba(27,27,38,0.08)' : '#1b1b26',
          borderWidth: variant === 'hover' ? 1.5 : 0,
          borderColor: 'rgba(27,27,38,0.35)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        <motion.span
          className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-white"
          animate={{ opacity: variant === 'view' ? 1 : 0, scale: variant === 'view' ? 1 : 0.6 }}
          transition={{ duration: 0.18 }}
        >
          View
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
