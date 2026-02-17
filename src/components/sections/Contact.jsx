import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hello Naveen,

Name: ${name}
Email: ${email}
Message: ${message}`,
    );

    window.open(`https://wa.me/916369626461?text=${text}`, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-[#15181D] text-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-4">
            Contact
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Let’s build something together. Reach out anytime.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* CONTACT INFO PANEL */}
          <div className="bg-[#1B1F26] p-6 sm:p-8 rounded-2xl space-y-6 shadow-lg">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Naveenkumar R
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base">
                MERN Stack Developer focused on building responsive and scalable
                web applications.
              </p>
            </div>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=naveenrnk69@gmail.com"
                target="_blank"
                className="flex items-center gap-3 hover:text-green-400 transition"
              >
                <Mail size={18} />
                naveenrnk69@gmail.com
              </a>

              <a
                href="tel:+916369626461"
                className="flex items-center gap-3 hover:text-green-400 transition"
              >
                <Phone size={18} />
                +91 6369626461
              </a>

              <a
                href="https://maps.google.com/?q=Salem,Tamil Nadu"
                target="_blank"
                className="flex items-center gap-3 hover:text-green-400 transition"
              >
                <MapPin size={18} />
                Salem, Tamil Nadu
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/naveenkumar-sys"
                target="_blank"
                className="bg-neutral-800 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/naveenkumar2003/"
                target="_blank"
                className="bg-neutral-800 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://wa.me/916369626461"
                target="_blank"
                className="bg-neutral-800 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/__groovy.__"
                target="_blank"
                className="bg-neutral-800 p-3 rounded-lg hover:bg-green-500 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-[#1B1F26] p-6 sm:p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#15181D] border border-white/10 p-3 rounded-lg outline-none focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#15181D] border border-white/10 p-3 rounded-lg outline-none focus:border-green-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#15181D] border border-white/10 p-3 rounded-lg outline-none focus:border-green-500"
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-black py-3 rounded-lg font-semibold"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
