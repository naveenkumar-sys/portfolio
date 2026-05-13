import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import certifications from "../../data/certification";

const CertificationSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certification" className="bg-[#15181D] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <Award size={14} className="text-green-400" />
            <span className="text-xs tracking-wider text-green-400 uppercase font-medium">
              Credentials
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-4">
            Certifications
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto text-sm sm:text-base">
            Courses and certifications that strengthened my development skills.
          </p>
        </div>

        {/* CERTIFICATION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(cert)}
              className="group relative bg-[#1B1F26] rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all duration-500 cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F26] via-transparent to-transparent" />

                {/* Index badge */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs font-medium text-neutral-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">
                {/* Issuer tag */}
                <span className="inline-block text-[10px] sm:text-xs uppercase tracking-widest text-green-400 font-medium mb-2">
                  {cert.issuer}
                </span>

                <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-xs bg-white/5 text-neutral-400 px-2.5 py-1 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#1B1F26] rounded-2xl sm:rounded-3xl overflow-hidden max-w-2xl w-full border border-white/10 shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition"
              >
                <X size={16} />
              </button>

              {/* Full image */}
              <div className="w-full h-[200px] sm:h-[280px] md:h-[340px]">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-5 sm:p-8">
                <span className="inline-block text-xs uppercase tracking-widest text-green-400 font-medium mb-2">
                  {selected.issuer}
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  {selected.title}
                </h3>

                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-5">
                  {selected.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selected.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full border border-green-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationSection;
