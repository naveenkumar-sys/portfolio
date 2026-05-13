import maaza from "/images/project/3d.webp";
import ecom from "/images/project/eccomerce.webp";
import movie from "/images/project/movieReview.webp";
import recipe from "/images/project/RecipeHub_compressed.webp";
import zion from "/images/project/zion.webp";
import sd from "/images/project/physiocare.webp"

const projects = [
  {
    title: "LAX360 Full Stack App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "https://www.lax360.in/",
    description: "A complete business platform with JWT auth and automated transactional emails.",
    points: ["MERN Stack", "Brevo API", "JWT Auth"],
  },
  {
    title: "Real-Time Chat App",
    image: "https://images.unsplash.com/photo-1611743572844-ced2ce5dca3e?q=80&w=2574&auto=format&fit=crop",
    link: "https://chat-app-j8av.vercel.app/",
    description: "Secure real-time messaging application with optimized latency and responsive UI.",
    points: ["Socket.io", "MERN Stack", "State Management"],
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
    title: "Zion Groups Website",
    image: zion,
    link: "https://ziongroups.com",
    points: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "physiotherapy website",
    image: sd,
    link: "https://www.sdphysiocare.com/",
    points: ["React", "Tailwind", "Framer Motion"],
  },
];

export default projects;
