import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "project" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Certification", id: "certification" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  /* SCROLL SPY */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom >= 160) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* NAVIGATION */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: "auto" });
    setOpen(false);
  };

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        animate={{
          scale: scrolled ? 0.96 : 1,
          y: scrolled ? 6 : 0,
        }}
        transition={{ duration: 0.35 }}
        className={`
          flex items-center justify-between
          w-full max-w-6xl h-16 px-6
          rounded-2xl transition-all duration-500
          ${
            scrolled
              ? "bg-gradient-to-r from-white/[0.08] to-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.45)]"
              : "bg-transparent border-transparent"
          }
        `}
      >
        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer text-white font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Naveenkumar R
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-2 p-1 rounded-xl">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                active === link.id
                  ? "bg-green-500/20 border border-green-400/40 text-white"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 70 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 w-[92%] max-w-6xl bg-[#15181D] border border-white/10 rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-lg ${
                    active === link.id
                      ? "bg-green-500/20 text-white"
                      : "text-neutral-300"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
