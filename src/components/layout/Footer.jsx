import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1115] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold  w-50 text-center bg-green-800 py-2 rounded">Naveenkumar R</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              MERN Stack Developer building responsive and scalable web
              applications with modern UI and smooth user experience.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-neutral-400">
              Navigation
            </h3>

            <div className="space-y-3 flex flex-col">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#project" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative inline-block text-neutral-300 hover:text-white transition"
                >
                  {link.name}

                  {/* animated underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-12 bg-green-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-neutral-400">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/naveenkumar-sys"
                target="_blank"
                className="bg-white/5 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/naveenkumar2003/"
                target="_blank"
                className="bg-white/5 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://wa.me/916369626461"
                target="_blank"
                className="bg-white/5 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/__groovy.__"
                target="_blank"
                className="bg-white/5 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="mailto:naveenrnk69@gmail.com"
                className="bg-white/5 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© {year} Naveenkumar R. All rights reserved.</p>
          <p>Built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
