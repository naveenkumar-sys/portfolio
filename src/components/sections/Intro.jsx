import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Intro = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  // Only play video when section is visible (saves GPU)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const textStart = "Building digital products that combine performance,";
  const textHighlight = " design, and modern web technology.";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#15181D] flex flex-col justify-center px-6 md:px-10 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12 md:space-y-20">
        {/* VIDEO PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full h-[260px] sm:h-[360px] md:h-[520px] lg:h-[620px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-xl cursor-pointer group"
          onClick={() => setOpenVideo(true)}
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ willChange: "auto" }}
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>

          {/* Simple hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-24 h-10 rounded-xl bg-green-500/20 border border-green-400/40 backdrop-blur-sm items-center justify-center text-sm font-semibold text-white">
              • View
            </div>
          </div>
        </motion.div>

        {/* TEXT PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto leading-[115%] tracking-tight"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold">
            <span className="text-white">{textStart}</span>
            <span className="text-orange-400">{textHighlight}</span>
          </h2>
        </motion.div>
      </div>

      {/* FULLSCREEN VIDEO */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenVideo(false)}
          >
            <div className="w-full h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Intro;
