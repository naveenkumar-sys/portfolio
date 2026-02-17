import maaza from "/images/project/3d.webp";
import ecom from "/images/project/eccomerce.jpg";
import movie from "/images/project/movieReview.png";
import recipe from "/images/project/RecipeHub.webp";
import zion from "/images/project/zion.png";
import sd from "/images/project/physiocare.png"

const projects = [
  {
    title: "Movie Review",
    image: movie,
    link: "https://movie-review-453f.vercel.app/",
    points: ["React", "API Fetch", "Responsive UI"],
  },
  {
    title: "Recipe Hub",
    image: recipe,
    link: "https://recipe-hub-lime.vercel.app/",
    points: ["Search recipes", "Dynamic UI", "Clean layout"],
  },
  {
    title: "MAAZA 3D Website",
    image: maaza,
    link: "https://maaza.vercel.app/",
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
    image: zion,
    link: "https://ziongroups.com",
    points: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "physiotherapy website",
    image: zion,
    link: "https://physiocare-p5wf.vercel.app/",
    points: ["React", "Tailwind", "Framer Motion"],
  },
];

export default projects;
