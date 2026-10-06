import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    title: 'Dune Bashing Adventure',
    description: 'Feel the thrill as our expert drivers navigate the golden dunes',
    thumbnail: 'https://image.qwenlm.ai/generated-images/29339b1c-e78c-4a3d-9fc6-61d68f685a29/_result.png',
    videoId: 'dQw4w9WgXcQ', // placeholder - replace with actual video
  },
  {
    title: 'Desert Camp Experience',
    description: 'Enjoy authentic Arabian entertainment under the stars',
    thumbnail: 'https://image.qwenlm.ai/generated-images/99f9520e-608d-4a1c-a2f0-f471073a8686/_result.png',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    title: 'Camel Ride at Sunset',
    description: 'A magical camel ride through the desert at golden hour',
    thumbnail: 'https://image.qwenlm.ai/generated-images/933a95a4-89f3-4f2b-b631-a88dafc80d7b/_result.png',
    videoId: 'dQw4w9WgXcQ',
  },
];

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a1a] overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/c8f04675-5be9-44f9-80cb-26f3f066584a/_result.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-transparent to-[#0a0a1a]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-desert-400 font-script text-2xl">Watch & Experience</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-4">
            See the <span className="text-gradient">Magic</span> Unfold
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get a glimpse of what awaits you in the Dubai desert. Watch our guests
            experience the thrill and beauty of Arabian adventures.
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setActiveVideo(i)}
            >
              <div className="relative h-64 img-zoom">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-desert-500/80 group-hover:border-desert-400 transition-all duration-300"
                  >
                    <Play className="text-white ml-1" size={24} fill="white" />
                  </motion.div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 relative rounded-3xl overflow-hidden"
        >
          <div className="relative h-[300px] md:h-[400px] img-zoom">
            <img
              src="https://image.qwenlm.ai/generated-images/c8f04675-5be9-44f9-80cb-26f3f066584a/_result.png"
              alt="Dubai Desert Safari Experience"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div className="max-w-lg">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                  Experience the Ultimate Desert Adventure
                </h3>
                <p className="text-white/70 mb-6">
                  Watch how our guests enjoy the complete Dubai Safari experience — from thrilling dune bashing to magical evenings under the stars.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveVideo(0)}
                  className="px-6 py-3 bg-gradient-to-r from-desert-500 to-desert-600 text-white font-semibold rounded-full flex items-center gap-2 shadow-lg shadow-desert-500/30"
                >
                  <Play size={18} fill="white" />
                  Watch Full Experience
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {activeVideo !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
            {/* Video placeholder - in production, replace with actual video embed */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-desert-900 to-[#0a0a1a]">
              <div className="text-center">
                <Play className="text-desert-400 mx-auto mb-4" size={64} />
                <h3 className="text-white text-xl font-display font-bold">{videos[activeVideo].title}</h3>
                <p className="text-white/50 mt-2">Video player - Connect your video source</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-desert-400 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-desert-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full bg-desert-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
