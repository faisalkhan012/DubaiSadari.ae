import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import SafariPackages from './components/SafariPackages';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <SafariPackages />
      <Activities />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
