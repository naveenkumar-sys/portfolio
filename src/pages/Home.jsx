import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Intro from "../components/sections/Intro";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/skills";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import Experience from "../components/sections/Experience";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <article>
        <Hero />
        <Intro />
      </article>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
