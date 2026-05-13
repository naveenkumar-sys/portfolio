import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Marquee = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <div ref={container} className="bg-[#15181D] py-10 overflow-hidden border-y border-white/5">
      <motion.div style={{ x }} className="flex whitespace-nowrap gap-10 sm:gap-20">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-10 sm:gap-20 items-center">
            <span className="text-5xl sm:text-7xl lg:text-9xl font-heading text-transparent stroke-white stroke-2 opacity-10">
              MERN STACK
            </span>
            <span className="text-5xl sm:text-7xl lg:text-9xl font-heading text-green-500/20">
              FULLSTACK
            </span>
            <span className="text-5xl sm:text-7xl lg:text-9xl font-heading text-transparent stroke-white stroke-2 opacity-10">
              DEVELOPER
            </span>
          </div>
        ))}
      </motion.div>
      
      {/* Reverse Marquee */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 1], [-500, 0]) }} 
        className="flex whitespace-nowrap gap-10 sm:gap-20 mt-4 sm:mt-8"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-10 sm:gap-20 items-center">
            <span className="text-5xl sm:text-7xl lg:text-9xl font-heading text-green-500/10">
              CREATIVE
            </span>
            <span className="text-5xl sm:text-7xl lg:text-9xl font-heading text-transparent stroke-white stroke-2 opacity-10">
              MODERN
            </span>
            <span className="text-5xl sm:text-7xl lg:text-9xl font-heading text-green-500/10">
              SCALABLE
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
