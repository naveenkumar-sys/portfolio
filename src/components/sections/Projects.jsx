import { motion } from "framer-motion";
import { useState } from "react";
import projects from "../../data/projects";

const FeaturedWork = () => {
  const [active, setActive] = useState("info");
  return (
    <section className="bg-[#15181D] py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 flex items-center flex-col pb-10">
        <h2 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-[110%] mb-6">
          Projects
        </h2>
        <p className="text-neutral-400">
          Design without compromise. Explore digital product design and
          development.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* MOBILE + TABLET LAYOUT */}
        <div className="flex flex-col gap-6 lg:hidden">
          {/* ALL WORK CARD */}
          <div className="bg-black text-white rounded-[24px] p-8">
            <h2 className="text-2xl font-heading mb-3">Featured Work</h2>
            <p className="text-neutral-400 mb-6">
              Design without compromise. Explore digital product design and
              development.
            </p>
            <a
              href="https://github.com/naveenkumar-sys"
              className="bg-neutral-900 px-6 py-3 rounded-lg"
              target="_blank"
            >
              All Work
            </a>
          </div>

          {/* PROJECT LIST */}
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative rounded-[22px] overflow-hidden h-[240px] shadow-lg active:scale-[0.98] transition">
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-xs text-neutral-300">
                    Tap to view project →
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex gap-6 h-[520px] items-start">
          {/* ALL WORK CARD */}
          <motion.div
            onMouseEnter={() => setActive("info")}
            animate={{
              width: active === "info" ? 360 : 260,
              height: active === "info" ? 460 : 420,
            }}
            transition={{ duration: 0.45 }}
            className="bg-black text-white  p-10 flex flex-col justify-between shrink-0"
          >
            <div>
              <h2 className="text-3xl font-heading mb-4">Featured Work</h2>
              <p className="text-neutral-400">
                Design without compromise. Explore our blend of digital product
                design, website design, and branding.
              </p>
            </div>

            <a
              href="https://github.com/naveenkumar-sys?tab=repositories"
              className="bg-neutral-900 px-6 py-10 rounded-lg text-center hover:bg-green-500"
              target="_blank"
            >
              All Work
            </a>
          </motion.div>

          {/* PROJECT CARDS */}
          <div className="flex gap-6 flex-1 items-start">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                animate={{
                  width: active === i ? 360 : 180,
                  height: active === i ? 460 : 340,
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="overflow-hidden cursor-pointer shadow-lg"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* EXISTING OVERLAY */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
    opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-end"
                  >
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {project.title}
                    </h3>

                    <ul className="text-sm text-neutral-300 space-y-1">
                      {project.points.map((p, idx) => (
                        <li className="py-1" key={idx}>
                          • {<span className="bg-white/20 py-1 px-2">{p}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* NEW VIEW PROJECT TEXT */}
                  <div
                    className="absolute inset-0 flex items-center justify-center 
    opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none hover:bg-green-500"
                  >
                    <span className="bg-white text-black text-sm px-4 py-2 rounded-sm font-medium shadow-md">
                      View Project
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
