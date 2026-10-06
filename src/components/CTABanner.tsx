import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, Star } from 'lucide-react';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/43e0503c-7a4b-40af-b1f4-d82b88fc3b44/_result.png"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-desert-900/95 via-desert-800/90 to-desert-900/95" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-desert-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Rating stars */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-1 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-desert-400 text-desert-400" />
            ))}
            <span className="text-white/70 text-sm ml-2">Rated 4.9/5 by 15,000+ guests</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Ready for an Unforgettable
            <br />
            <span className="text-gradient-animated">Desert Adventure?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Book your Dubai Desert Safari today starting from just <span className="text-desert-300 font-bold">AED 120</span>.
            Instant confirmation via WhatsApp. Pickup & drop-off included!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/971566289116?text=Hi! I'd like to book a Dubai Desert Safari."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 211, 102, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full text-lg flex items-center gap-2 shadow-lg"
            >
              <MessageCircle size={20} />
              Book on WhatsApp
            </motion.a>
            <motion.a
              href="tel:+971566289116"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white font-semibold rounded-full text-lg flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <Phone size={20} />
              Call: +971 56 628 9116
            </motion.a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs"
          >
            <span className="flex items-center gap-1">✓ Instant Confirmation</span>
            <span className="flex items-center gap-1">✓ Free Cancellation</span>
            <span className="flex items-center gap-1">✓ Best Price Guarantee</span>
            <span className="flex items-center gap-1">✓ 24/7 Support</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
