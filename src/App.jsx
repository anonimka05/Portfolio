import { useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

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
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
