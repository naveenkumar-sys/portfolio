import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const ref = useRef(null);
  const triggerRef = useRef(null);

  const isInView = useInView(triggerRef);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  /* TYPEWRITER */
  const fullText = "Building modern web experiences";
  const [typedText, setTypedText] = useState("");

  /* SCRAMBLE NAME */
  const finalName = "Naveenkumar R";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayName, setDisplayName] = useState(finalName);

  useEffect(() => {
    if (!isInView) return;

    /* reset animations */
    setTypedText("");
    setDisplayName(finalName);

    /* typing animation */
    let typeIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, typeIndex));
      typeIndex++;
      if (typeIndex > fullText.length) clearInterval(typingInterval);
    }, 40);

    /* name scramble */
    let iteration = 0;
    const scrambleInterval = setInterval(() => {
      setDisplayName(
        finalName
          .split("")
          .map((letter, index) => {
            if (index < iteration) return finalName[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      iteration += 0.5;

      if (iteration >= finalName.length) {
        clearInterval(scrambleInterval);
        setDisplayName(finalName);
      }
    }, 40);

    return () => {
      clearInterval(typingInterval);
      clearInterval(scrambleInterval);
    };
  }, [isInView]);

  return (
    <section ref={ref} id="home" className="relative h-[160vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/55" />

        <motion.div
          ref={triggerRef}
          style={{ scale, opacity, y }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-[110%] tracking-tight">
            {typedText}
          </h1>

          <p className="mt-6 text-lg md:text-xl font-medium opacity-90">
            {displayName}
          </p>

          <p className="mt-2 text-sm md:text-base opacity-70 max-w-md">
            MERN Stack Developer crafting scalable applications with clean UI
            and smooth user interactions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
