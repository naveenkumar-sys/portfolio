import projects from "../../data/projects";

const FeaturedWork = () => {
  return (
    <section id="project" className="bg-[#15181D] py-10">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">
          Projects
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto">
          Selected work showcasing design, development, and real-world
          problem-solving through modern web applications.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden bg-neutral-900 shadow-lg"
          >
            {/* IMAGE */}
            <div className="h-[260px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* FLOATING PANEL */}
            <div className="relative -mt-16 mx-4 bg-black/70 p-5 rounded-xl border border-white/10">
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-sm mb-4">
                {project.description ||
                  "Modern web application built with responsive UI and scalable frontend architecture."}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.points?.map((p, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/10 text-neutral-300 px-2 py-1 rounded"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                className="block text-center bg-green-500 text-black text-sm py-2 rounded-lg font-medium"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
