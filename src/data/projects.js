import maaza from "/images/project/3d.webp";
import ecom from "/images/project/eccomerce.jpg";
import movie from "/images/project/movieReview.png";
import recipe from "/images/project/RecipeHub.webp";
import zion from "/images/project/zion.png";

const projects = [
  {
    title: "Movie Review",
    image: movie,
    link: "https://github.com/naveenkumar-sys/movie-Review",
    points: ["React", "API Fetch", "Responsive UI"],
  },
  {
    title: "Recipe Hub",
    image: recipe,
    link: "https://github.com/naveenkumar-sys/Recipe-Hub",
    points: ["Search recipes", "Dynamic UI", "Clean layout"],
  },
  {
    title: "MAAZA 3D Website",
    image: maaza,
    link: "https://github.com/naveenkumar-sys/maaza",
    points: ["Three.js", "Scroll animation", "3D UI"],
  },
  {
    title: "E-commerce Website",
    image: ecom,
    link: "https://github.com/naveenkumar-sys",
    points: ["Cart system", "Product UI", "Fullstack app"],
  },
  {
    title: "Zion Groups Website",
    description:
      "Corporate website built with modern UI, responsive layout, and optimized performance for production hosting.",
    image: zion,
    tech: ["React", "Tailwind", "Framer Motion"],
    role: "Frontend Development",
    github: "https://github.com/...",
    live: "https://ziongroups.com",
  },
];

export default projects;
