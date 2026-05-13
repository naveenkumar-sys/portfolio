import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import ScrollProgress from "./components/animations/ScrollProgress";
import BackToTop from "./components/animations/BackToTop";
import "lenis/dist/lenis.css";

const App = () => {
  return (
    <ReactLenis root options={{ 
      duration: 1.2, 
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1 
    }}>
      <ScrollProgress />
      <BackToTop />
      <Home />
    </ReactLenis>
  );
};

export default App;
