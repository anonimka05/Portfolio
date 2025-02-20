import { useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skils from "./components/Skils";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const { isLightMode } = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.className = isLightMode ? "" : "dark";
  }, [isLightMode]);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skils />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
