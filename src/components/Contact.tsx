import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0a0a1a]" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-desert-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-desert-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-desert-400 font-script text-2xl">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-4">
            Book Your <span className="text-gradient">Adventure</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready for an unforgettable desert experience? Contact us to book your
            safari or ask any questions. We're here to help!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Phone</label>
                  <input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Package</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all">
                    <option value="" className="bg-[#0a0a1a]">Select Package</option>
                    <option value="morning" className="bg-[#0a0a1a]">Morning Safari</option>
                    <option value="evening" className="bg-[#0a0a1a]">Evening Safari</option>
                    <option value="overnight" className="bg-[#0a0a1a]">Overnight Safari</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-white/70 text-sm mb-2 block">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                />
              </div>

              <div>
                <label className="text-white/70 text-sm mb-2 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-desert-500 to-desert-600 text-white font-semibold rounded-xl shadow-lg shadow-desert-500/30 hover:shadow-desert-500/50 transition-shadow flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Booking Request
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Info cards */}
            {[
              {
                icon: MapPin,
                title: 'Location',
                info: 'Dubai Desert Conservation Reserve, Dubai, UAE',
                detail: 'Pickup from any hotel in Dubai',
              },
              {
                icon: Phone,
                title: 'Phone',
                info: '+971 50 123 4567',
                detail: 'Available 24/7 for bookings',
              },
              {
                icon: Mail,
                title: 'Email',
                info: 'info@dubaisafari.com',
                detail: 'We reply within 1 hour',
              },
              {
                icon: Clock,
                title: 'Working Hours',
                info: 'Daily: 6:00 AM - 11:00 PM',
                detail: 'Safari timings vary by package',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-desert-400/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-desert-400/20 to-desert-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-desert-400/30 group-hover:to-desert-600/30 transition-all">
                  <item.icon className="text-desert-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.info}</p>
                  <p className="text-white/40 text-xs mt-1">{item.detail}</p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-48 bg-white/5 border border-white/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-desert-900/20 to-desert-700/20" />
              <div className="text-center relative z-10">
                <MapPin className="text-desert-400 mx-auto mb-2" size={32} />
                <p className="text-white/50 text-sm">Dubai Desert Conservation Reserve</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
