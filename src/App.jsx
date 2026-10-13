import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import WorkGrid from './components/WorkGrid.jsx';
import Services from './components/Services.jsx';
import Story from './components/Story.jsx';
import StatsBand from './components/StatsBand.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';

export default function App() {
  useEffect(() => {
    // Buttery smooth scrolling. Lenis drives the native window scroll position,
    // so framer-motion's useScroll (incl. the pinned Story section) keeps working.
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      anchors: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-cream font-body text-ink">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WorkGrid />
        <Services />
        <Story />
        <StatsBand />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
