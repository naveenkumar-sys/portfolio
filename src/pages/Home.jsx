import React, { lazy, Suspense } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Intro from "../components/sections/Intro";
import Marquee from "../components/sections/Marquee";

// Lazy load below-the-fold sections
const Projects = lazy(() => import("../components/sections/Projects"));
const Skills = lazy(() => import("../components/sections/Skills"));
const About = lazy(() => import("../components/sections/About"));
const Contact = lazy(() => import("../components/sections/Contact"));
const Footer = lazy(() => import("../components/layout/Footer"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Certification = lazy(() => import("../components/sections/Certification"));

const Home = () => {
  return (
    <div className=" bg-black text-white">
      <Navbar />
      <article>
        <Hero />
        <Intro />
      </article>
      <Suspense fallback={<div className="h-screen bg-[#15181D]" />}>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certification />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
