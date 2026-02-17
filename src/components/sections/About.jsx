import pic1 from "/images/about/1.jpg";
import pic2 from "/images/about/2.jpg";
import pic3 from "/images/about/3.JPG";

const images = [pic3, pic2, pic1];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#15181D] text-white py-5 md:py-20 lg:py-32 min-h-[140vh]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-28 px-6 md:px-10">

        {/* ---------- MOBILE IMAGE ---------- */}
        <div className="lg:hidden flex justify-center">
          <img
            src={pic3}
            alt="profile"
            loading="lazy"
            className="w-[280px] h-[320px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* ---------- DESKTOP IMAGE STACK ---------- */}
        <div className="hidden lg:grid gap-8 justify-center">
          {images.map((src, i) => (
            <figure
              key={i}
              className="sticky top-28 h-[560px] flex justify-center items-center"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-[420px] h-[520px] object-cover rounded-[32px] shadow-2xl"
              />
            </figure>
          ))}
        </div>

        {/* ---------- TEXT ---------- */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center">
          <div className="space-y-6 max-w-lg text-center lg:text-left">
            <p className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              About me
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading leading-[100%]">
              MERN Stack Developer focused on building scalable and modern web
              applications.
            </h2>

            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              I’m <span className="bg-white/10 px-3">Naveenkumar R</span>, a developer passionate about creating
              responsive, performance-driven web applications using modern
              technologies like React, Node.js, and MongoDB. I enjoy turning
              ideas into real products through clean UI design, efficient backend
              architecture, and smooth user experiences.
            </p>

            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              My goal is to continuously improve my problem-solving skills and
              build meaningful digital products that deliver value to users and
              businesses.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
