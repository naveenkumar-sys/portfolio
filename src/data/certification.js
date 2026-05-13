import python from "/public/images/certificate/python.webp";
import html from "/public/images/certificate/guvi.webp";
import bec from "/public/images/certificate/bec.webp";

const certifications = [
  {
    title: "Python Basics",
    issuer: "HackerRank",
    description:
      "Completed Python Basics certification covering problem solving, logic building, and programming fundamentals.",
    image: python,
    tags: ["Python", "Problem Solving", "Logic"],
  },
  {
    title: "HTML & CSS",
    issuer: "GUVI",
    description:
      "Learned HTML and CSS to create visually appealing and responsive web pages.",
    image: html,
    tags: ["HTML", "CSS", "Web Design"],
  },
  {
    title: "Business English",
    issuer: "Certification Program",
    description:
      "Developed professional communication skills for workplace collaboration and presentations.",
    image: bec,
    tags: ["Communication", "Professional", "English"],
  },
];

export default certifications;
