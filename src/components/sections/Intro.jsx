import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

const Intro = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.6], [0.96, 1]);

  const textStart = "Building digital products that combine performance,";
  const textHighlight = " design, and modern web technology.";

  const [openVideo, setOpenVideo] = useState(false);

  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-[#15181D] flex flex-col justify-center px-6 md:px-10 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto w-full space-y-12 md:space-y-20">
        {/* VIDEO PANEL */}
        <motion.div
          layoutId="introVideo"
          style={{ scale: videoScale }}
          className="relative w-full h-[260px] sm:h-[360px] md:h-[520px] lg:h-[620px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-xl"
          onClick={() => setOpenVideo(true)}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>

          {/* Hover preview (desktop only) */}
          {hovering && (
            <motion.div
              style={{
                left: smoothX,
                top: smoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden md:flex pointer-events-none absolute w-24 h-10 rounded-xl border border-white/20 shadow-2xl bg-white backdrop-blur-sm items-center justify-center text-sm font-semibold text-black"
            >
              • View
            </motion.div>
          )}
        </motion.div>

        {/* TEXT PANEL */}
        <motion.div className="text-center max-w-5xl mx-auto leading-[115%] tracking-tight">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold">
            {textStart.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="inline-block mr-2 text-white"
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="inline-block text-orange-400 ml-2"
            >
              {textHighlight}
            </motion.span>
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
            <motion.div layoutId="introVideo" className="w-full h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/intro.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Intro;
