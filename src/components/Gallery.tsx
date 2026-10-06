import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Expand } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://image.qwenlm.ai/generated-images/43e0503c-7a4b-40af-b1f4-d82b88fc3b44/_result.png',
    alt: 'Desert Landscape',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/99f9520e-608d-4a1c-a2f0-f471073a8686/_result.png',
    alt: 'Desert Camp',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/933a95a4-89f3-4f2b-b631-a88dafc80d7b/_result.png',
    alt: 'Camel Riding',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/29339b1c-e78c-4a3d-9fc6-61d68f685a29/_result.png',
    alt: 'Dune Bashing',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/43e0503c-7a4b-40af-b1f4-d82b88fc3b44/_result.png',
    alt: 'Sunset View',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/99f9520e-608d-4a1c-a2f0-f471073a8686/_result.png',
    alt: 'Night Camp',
    span: 'col-span-2 row-span-1',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-[#0a0a1a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-desert-400 font-script text-2xl">Our Gallery</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-4">
            Captured <span className="text-gradient">Moments</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A glimpse into the magical experiences that await you in the Dubai desert.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer img-zoom ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 transition-opacity duration-300 ${
                hoveredIndex === i ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="flex items-center justify-between w-full">
                  <span className="text-white font-medium text-sm">{image.alt}</span>
                  <Expand size={18} className="text-desert-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
