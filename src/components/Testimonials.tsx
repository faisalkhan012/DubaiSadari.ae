import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    text: 'Absolutely incredible experience! The dune bashing was thrilling, and the dinner under the stars was magical. Our guide Ahmed was fantastic and made us feel so welcome.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Best safari experience in Dubai! The overnight package was worth every dirham. Sleeping under the desert sky was a once-in-a-lifetime experience. Highly recommend!',
    avatar: '👨‍💻',
  },
  {
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    rating: 5,
    text: 'We booked the evening safari for our family and it exceeded all expectations. The kids loved the camel ride and the fire show was spectacular. Professional team!',
    avatar: '👩‍🎨',
  },
  {
    name: 'David Williams',
    location: 'New York, USA',
    rating: 5,
    text: 'From pickup to dropoff, everything was perfectly organized. The sunset views were breathtaking and the BBQ dinner was delicious. Will definitely book again!',
    avatar: '👨‍🔬',
  },
  {
    name: 'Aisha Al-Maktoum',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Even as a local, this safari was a wonderful experience. The cultural activities and authentic Arabian hospitality made it truly special. A must-do for everyone!',
    avatar: '👩‍⚕️',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#0d0d20]" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-desert-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-desert-400 font-script text-2xl">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-4">
            What Our <span className="text-gradient">Guests Say</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from thousands of satisfied guests
            who've experienced the magic of Dubai Safari.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <Quote className="text-desert-400/30 mb-4" size={48} />
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-desert-400 to-desert-600 flex items-center justify-center text-2xl">
                {testimonials[currentIndex].avatar}
              </div>
              <div>
                <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-white/50 text-sm">{testimonials[currentIndex].location}</p>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-desert-400 text-desert-400" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-desert-400 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-desert-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-desert-400 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
