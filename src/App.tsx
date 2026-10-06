import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import SafariPackages from './components/SafariPackages';
import Activities from './components/Activities';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <SafariPackages />
      <Activities />
      <VideoSection />
      <Gallery />
      <Testimonials />
      <Contact />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
