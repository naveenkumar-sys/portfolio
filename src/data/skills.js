import { FaHtml5, FaCss3Alt, FaReact, FaGit, FaNodeJs } from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiPostman,
  SiMysql,
  SiGithub,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", level: 85, icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind", level: 85, icon: SiTailwindcss, color: "#38B2AC" },
      { name: "JavaScript", level: 80, icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", level: 75, icon: FaReact, color: "#61DAFB" },
    ],
  },

  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 70, icon: FaNodeJs, color: "#68A063" },
      { name: "Express", level: 70, icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", level: 65, icon: SiMongodb, color: "#47A248" },
      { name: "SQL", level: 60, icon: SiMysql, color: "#00758F" },
    ],
  },

  {
    category: "Tools",
    items: [
      { name: "Git", level: 80, icon: FaGit, color: "#F05032" },
      { name: "GitHub", level: 85, icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", level: 75, icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", level: 95, icon: VscVscode, color: "#007ACC" },
    ],
  },
];

export default skills;
