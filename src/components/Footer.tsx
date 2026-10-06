import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050510] pt-16 pb-8">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,0 L0,0 Z"
            fill="#0a0a1a"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-desert-400 to-desert-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">Dubai Safari</h3>
                <p className="text-[10px] text-desert-300 tracking-widest uppercase">Desert Adventures</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Your premier destination for authentic desert safari experiences in Dubai.
              Creating unforgettable memories since 2014.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-desert-400 hover:border-desert-400/30 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Safari Packages', 'Activities', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-sm hover:text-desert-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Safari Types */}
          <div>
            <h4 className="text-white font-semibold mb-4">Safari Types</h4>
            <ul className="space-y-2">
              {['Morning Safari', 'Evening Safari', 'Overnight Safari', 'Private Safari', 'Group Safari', 'VIP Safari'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-sm hover:text-desert-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">
              Subscribe for exclusive offers and desert adventure tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:border-desert-400/50 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 bg-gradient-to-r from-desert-500 to-desert-600 text-white text-sm font-semibold rounded-lg"
              >
                →
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Dubai Safari. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-desert-500 to-desert-600 text-white flex items-center justify-center shadow-lg shadow-desert-500/30 z-40"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
