import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mountain, Camera, UtensilsCrossed, Music, Flame, Bird } from 'lucide-react';

const activities = [
  {
    icon: Mountain,
    title: 'Dune Bashing',
    description: 'Heart-pumping 4x4 ride over golden sand dunes with expert drivers.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Camera,
    title: 'Sunset Photography',
    description: 'Capture breathtaking desert sunsets at the most scenic viewpoints.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: UtensilsCrossed,
    title: 'BBQ Dinner',
    description: 'Savor authentic Arabian BBQ under the stars with unlimited refreshments.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Music,
    title: 'Belly Dance Show',
    description: 'Mesmerizing traditional Tanoura and belly dance performances.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Flame,
    title: 'Fire Show',
    description: 'Spectacular fire breathing and fire dancing performances.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Bird,
    title: 'Falcon Encounter',
    description: 'Get up close with majestic falcons, the pride of Arabian heritage.',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Activities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="activities" className="relative py-24 lg:py-32 bg-[#0d0d20]" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(240, 168, 52, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-desert-400 font-script text-2xl">What We Offer</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-4">
            Thrilling <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From adrenaline-pumping adventures to cultural experiences,
            our safari packages include a wide range of exciting activities.
          </p>
        </motion.div>

        {/* Activities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-desert-400/20 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <activity.icon className="text-white" size={24} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-desert-300 transition-colors">
                {activity.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {activity.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-desert-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-sm font-medium">Learn more</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
