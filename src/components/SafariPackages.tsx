import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Star, Check } from 'lucide-react';

const packages = [
  {
    name: 'Morning Safari',
    price: '150',
    duration: '4 Hours',
    groupSize: 'Max 6',
    rating: 4.8,
    popular: false,
    features: [
      'Dune bashing adventure',
      'Sandboarding experience',
      'Camel riding',
      'Refreshments included',
      'Hotel pickup & dropoff',
    ],
    image: 'https://image.qwenlm.ai/generated-images/29339b1c-e78c-4a3d-9fc6-61d68f685a29/_result.png',
  },
  {
    name: 'Evening Safari',
    price: '250',
    duration: '7 Hours',
    groupSize: 'Max 6',
    rating: 4.9,
    popular: true,
    features: [
      'Dune bashing adventure',
      'Sunset photography stop',
      'Camel riding',
      'BBQ Dinner buffet',
      'Belly dance show',
      'Fire show performance',
      'Henna painting',
      'Hotel pickup & dropoff',
    ],
    image: 'https://image.qwenlm.ai/generated-images/99f9520e-608d-4a1c-a2f0-f471073a8686/_result.png',
  },
  {
    name: 'Overnight Safari',
    price: '450',
    duration: '18 Hours',
    groupSize: 'Max 4',
    rating: 5.0,
    popular: false,
    features: [
      'Everything in Evening Safari',
      'Luxury desert camp stay',
      'Stargazing session',
      'Traditional breakfast',
      'Quad biking',
      'Falcon photography',
      'VIP seating area',
      'Professional photographer',
    ],
    image: 'https://image.qwenlm.ai/generated-images/933a95a4-89f3-4f2b-b631-a88dafc80d7b/_result.png',
  },
];

export default function SafariPackages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="safaris" className="relative py-24 lg:py-32 bg-[#0a0a1a]" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-desert-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-desert-400 font-script text-2xl">Our Packages</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-4">
            Choose Your <span className="text-gradient">Adventure</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select from our carefully curated safari packages designed to give you
            the ultimate desert experience in Dubai.
          </p>
        </motion.div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative rounded-3xl overflow-hidden card-hover ${
                pkg.popular ? 'ring-2 ring-desert-400/50' : 'bg-white/5 border border-white/10'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-desert-500 to-desert-600 text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 img-zoom">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 pt-0">
                <h3 className="text-xl font-display font-bold text-white mb-2">{pkg.name}</h3>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-white/50">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {pkg.groupSize}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={14} className="fill-desert-400 text-desert-400" /> {pkg.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">AED {pkg.price}</span>
                  <span className="text-white/40 text-sm ml-1">/ person</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                      <Check size={14} className="text-desert-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-desert-500 to-desert-600 text-white shadow-lg shadow-desert-500/30'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
