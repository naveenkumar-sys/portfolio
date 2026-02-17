import { motion } from "framer-motion";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#15181D] text-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-heading mt-3">
            Professional Journey
          </h2>
        </div>

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
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center "
                >
                  {/* LEFT CARD */}
                  {!isRight && (
                    <div className="hidden md:block w-1/2 pr-12">
                      <div className="bg-[#1B1F26] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-neutral-400 text-sm">
                          {exp.company} • {exp.period}
                        </p>

                        <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
                          {exp.points.map((p, idx) => (
                            <li key={idx}>• {p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* CENTER DOT */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-12 h-12 rounded-full bg-white text-black items-center justify-center shadow-lg">
                    <Icon size={18} />
                  </div>

                  {/* RIGHT CARD */}
                  {isRight && (
                    <div className="hidden md:block w-1/2 pl-12 ml-auto">
                      <div className="bg-[#1B1F26] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-neutral-400 text-sm">
                          {exp.company} • {exp.period}
                        </p>

                        <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
                          {exp.points.map((p, idx) => (
                            <li key={idx}>• {p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* MOBILE CARD */}
                  <div className="md:hidden w-full">
                    <div className="bg-[#1B1F26] p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-neutral-400 text-sm">
                        {exp.company} • {exp.period}
                      </p>

                      <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
                        {exp.points.map((p, idx) => (
                          <li key={idx}>• {p}</li>
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
