import './App.css';

import Navbar from "./components/NavbarSection";
import Hero from "./components/HeroSection";
import About from "./components/AboutSection";
import Skills from "./components/SkillsSection";
import Projects from "./components/ProjectsSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;