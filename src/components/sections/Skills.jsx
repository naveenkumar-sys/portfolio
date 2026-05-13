import { motion } from "framer-motion";
import skills from "../../data/skills";
import { useState } from "react";
import TiltCard from "../animations/TittleCard";

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="relative py-20 bg-[#15181D]  text-white overflow-hidden">
      {/* ANIMATED GRADIENT BACKGROUND
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="w-full h-full bg-[linear-gradient(270deg,#ff7a18,#32d2ff,#a855f7,#ff7a18)] bg-[length:400%_400%]"
        />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
            Skills & Tools
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl">
            Technologies I use to build modern web experiences.
          </p>
        </motion.div>

        {/* SKILL GROUPS */}
        <div className="space-y-16">
          {skills.map((group, gIndex) => (
            <motion.div
              key={gIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: gIndex * 0.1 }}
            >
              <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-6">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <TiltCard
                      skill={skill}
                      hovered={hovered === `${gIndex}-${i}`}
                      setHovered={() => setHovered(`${gIndex}-${i}`)}
                      clearHover={() => setHovered(null)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
