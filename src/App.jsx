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

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream font-body text-ink">
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
