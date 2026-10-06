import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Expand, X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://image.qwenlm.ai/generated-images/43e0503c-7a4b-40af-b1f4-d82b88fc3b44/_result.png',
    alt: 'Desert Landscape at Golden Hour',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/99f9520e-608d-4a1c-a2f0-f471073a8686/_result.png',
    alt: 'Luxury Desert Camp at Night',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/933a95a4-89f3-4f2b-b631-a88dafc80d7b/_result.png',
    alt: 'Camel Riding at Sunset',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/29339b1c-e78c-4a3d-9fc6-61d68f685a29/_result.png',
    alt: 'Dune Bashing Adventure',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/c8f04675-5be9-44f9-80cb-26f3f066584a/_result.png',
    alt: 'Sunset Over Red Sands',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://image.qwenlm.ai/generated-images/846bb796-74de-46d4-b137-5696fcd5d8ef/_result.png',
    alt: 'Sandboarding Adventure',
    span: 'col-span-2 row-span-1',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
            Every moment is a memory worth capturing.
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
              onClick={() => setLightboxImage(image.src)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer img-zoom ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
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

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightboxImage}
            alt="Gallery full view"
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
