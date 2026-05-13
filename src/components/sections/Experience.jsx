import { motion } from "framer-motion";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#15181D] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-heading mt-3">
            Professional Journey
          </h2>
        </motion.div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-neutral-700 -translate-x-1/2 hidden md:block" />

          <div className="space-y-20">
            {experience.map((exp, i) => {
              const Icon = exp.icon;
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-center "
                >
                  {/* LEFT CARD (Desktop) */}
                  {!isRight && (
                    <div className="hidden md:block w-1/2 pr-12">
                      <div className="bg-[#1B1F26] p-6 rounded-2xl shadow-lg border border-white/5 hover:border-green-500/20 transition-all duration-500">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-neutral-400 text-sm">
                          {exp.company} • {exp.period}
                        </p>

                        <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
                          {exp.points.map((p, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-green-500">•</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* CENTER DOT (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-12 h-12 rounded-full bg-white text-black items-center justify-center shadow-lg z-10 border-4 border-black">
                    <Icon size={18} />
                  </div>

                  {/* RIGHT CARD (Desktop) */}
                  {isRight && (
                    <div className="hidden md:block w-1/2 pl-12 ml-auto">
                      <div className="bg-[#1B1F26] p-6 rounded-2xl shadow-lg border border-white/5 hover:border-green-500/20 transition-all duration-500">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-neutral-400 text-sm">
                          {exp.company} • {exp.period}
                        </p>

                        <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
                          {exp.points.map((p, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-green-500">•</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* MOBILE CARD */}
                  <div className="md:hidden w-full">
                    <div className="bg-[#1B1F26] p-6 rounded-2xl shadow-lg border border-white/5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <p className="text-neutral-400 text-xs">
                            {exp.company} • {exp.period}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 text-neutral-300 text-sm">
                        {exp.points.map((p, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-green-500">•</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
