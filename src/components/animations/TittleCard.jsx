import React, { useState } from "react";
import { motion } from "framer-motion";

const TiltCard = ({ skill, setHovered, clearHover }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientY - rect.top;
    const y = e.clientX - rect.left;

    const rotateX = (x / rect.height - 0.5) * 10;
    const rotateY = (y / rect.width - 0.5) * -10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const Icon = skill.icon; // ← THIS is the fix

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseEnter={setHovered}
      onMouseLeave={() => {
        setRotate({ x: 0, y: 0 });
        clearHover();
      }}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      className="bg-[#1B1F26] rounded-2xl p-6 flex flex-col items-center justify-center
      shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/5"
    >
      {/* ICON (React Icons) */}
      <div style={{ transform: "translateZ(40px)" }} className="mb-4">
        <Icon size={40} color={skill.color} className="drop-shadow-lg" />
      </div>

      {/* NAME */}
      <p className="text-sm mb-3 font-medium text-neutral-300">{skill.name}</p>

      {/* PROFICIENCY BAR */}
      <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-white"
        />
      </div>
    </motion.div>
  );
};

export default TiltCard;
