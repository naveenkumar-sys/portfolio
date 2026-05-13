import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 origin-left z-[100] shadow-[0_0_10px_rgba(34,197,94,0.5)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
