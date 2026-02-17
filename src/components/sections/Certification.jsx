import { useState } from "react";
import { motion } from "framer-motion";
import certifications from "../../data/certification";

const CertificationSection = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="certification" className="bg-[#15181D] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-4">
            Certifications
          </h2>
          <p className="text-neutral-400">
            Courses and certifications that strengthened my development skills.
          </p>
        </div>

        {/* DESKTOP VERSION */}
        <div className="hidden lg:block space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              animate={{ height: active === i ? 200 : 80 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1B1F26] rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="flex h-full">
                {/* IMAGE */}
                <a href={cert.link} className="w-[260px] hidden lg:block">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </a>

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-4 justify-between">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {cert.title}
                    </h3>

                    <span className="text-neutral-500 text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-neutral-400 mt-3 text-sm max-w-xl"
                    >
                      {cert.description}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE VERSION */}
        <div className="grid sm:grid-cols-2 gap-6 lg:hidden">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-[#1B1F26] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-[160px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-neutral-400 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
