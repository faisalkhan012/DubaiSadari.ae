import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const pkg = formData.get('package');
    const date = formData.get('date');
    const message = formData.get('message');
    
    const whatsappMessage = `Hi! I'd like to book a safari.\n\nName: ${name}\nPhone: ${phone}\nPackage: ${pkg}\nPreferred Date: ${date}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/971566289116?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

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
            Ready for an unforgettable desert experience? Contact us via WhatsApp for instant
            booking or fill out the form below. We respond within minutes!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Phone *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Package *</label>
                  <select
                    name="package"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                  >
                    <option value="" className="bg-[#0a0a1a]">Select Package</option>
                    <option value="Standard Safari - AED 120" className="bg-[#0a0a1a]">Standard Safari - AED 120</option>
                    <option value="Premium Safari - AED 140" className="bg-[#0a0a1a]">Premium Safari - AED 140</option>
                    <option value="VIP Safari - AED 150" className="bg-[#0a0a1a]">VIP Safari - AED 150</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-2 block">Preferred Date *</label>
                  <input
                    name="date"
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/70 text-sm mb-2 block">Number of Guests</label>
                <input
                  name="guests"
                  type="number"
                  min="1"
                  placeholder="How many people?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all"
                />
              </div>

              <div>
                <label className="text-white/70 text-sm mb-2 block">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any special requirements or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-desert-400/50 focus:outline-none focus:ring-2 focus:ring-desert-400/20 transition-all resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 bg-gradient-to-r from-desert-500 to-desert-600 text-white font-semibold rounded-xl shadow-lg shadow-desert-500/30 hover:shadow-desert-500/50 transition-shadow flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </motion.button>
                <motion.a
                  href="https://wa.me/971566289116?text=Hi! I'd like to book a Dubai Desert Safari."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 bg-[#25D366] text-white font-semibold rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Direct WhatsApp
                </motion.a>
              </div>
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
                detail: 'Free pickup from any hotel in Dubai & Sharjah',
              },
              {
                icon: Phone,
                title: 'Phone / WhatsApp',
                info: '+971 56 628 9116',
                detail: 'Available 24/7 for bookings & inquiries',
                link: 'https://wa.me/971566289116',
              },
              {
                icon: Mail,
                title: 'Email',
                info: 'info@dubaisafari.com',
                detail: 'We reply within 1 hour',
                link: 'mailto:info@dubaisafari.com',
              },
              {
                icon: Clock,
                title: 'Safari Timings',
                info: 'Pickup: 3:00 PM - 3:30 PM',
                detail: 'Return: 9:00 PM - 9:30 PM (Evening Safari)',
              },
            ].map((item, i) => (
              <motion.a
                key={item.title}
                href={item.link || '#'}
                target={item.link?.startsWith('http') ? '_blank' : undefined}
                rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-desert-400/20 transition-all group block"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-desert-400/20 to-desert-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-desert-400/30 group-hover:to-desert-600/30 transition-all">
                  <item.icon className="text-desert-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.info}</p>
                  <p className="text-white/40 text-xs mt-1">{item.detail}</p>
                </div>
              </motion.a>
            ))}

            {/* Quick booking card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-desert-500/10 to-desert-600/10 border border-desert-400/20"
            >
              <h3 className="text-white font-display font-bold text-lg mb-2">Quick Booking</h3>
              <p className="text-white/60 text-sm mb-4">
                For instant booking, message us on WhatsApp. Our team responds within minutes!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs">Standard: AED 120</span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs">Premium: AED 140</span>
                <span className="px-3 py-1 rounded-full bg-desert-500/20 text-desert-300 text-xs">VIP: AED 150</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
