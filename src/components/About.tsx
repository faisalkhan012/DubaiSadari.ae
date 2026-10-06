import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Heart, Compass } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Licensed & insured drivers with top-maintained vehicles for your complete safety.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as the best safari operator in Dubai for 5 consecutive years.',
  },
  {
    icon: Heart,
    title: 'Guest Focused',
    description: 'Personalized experiences tailored to create unforgettable memories.',
  },
  {
    icon: Compass,
    title: 'Expert Guides',
    description: 'Multilingual guides with deep knowledge of desert culture and history.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a1a]" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-desert-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-desert-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden img-zoom">
              <img
                src="https://image.qwenlm.ai/generated-images/99f9520e-608d-4a1c-a2f0-f471073a8686/_result.png"
                alt="Desert Safari Camp"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-6 max-w-[200px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-3xl font-bold text-gradient">10+</div>
              <div className="text-sm text-white/70 mt-1">Years of creating desert memories</div>
            </motion.div>

            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-desert-400/30 rounded-tl-3xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-desert-400 font-script text-2xl">About Us</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-6">
              Your Gateway to
              <br />
              <span className="text-gradient">Arabian Adventures</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              For over a decade, Dubai Safari has been the premier choice for desert
              adventures in the UAE. We combine thrilling experiences with authentic
              Arabian hospitality to create memories that last a lifetime. Our expert
              team ensures every moment of your safari is safe, comfortable, and
              absolutely magical.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-desert-400/30 transition-all group"
                >
                  <feature.icon className="text-desert-400 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <h3 className="text-white font-semibold text-sm">{feature.title}</h3>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
