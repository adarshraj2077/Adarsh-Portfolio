import { useEffect, useState } from 'react';
import './App.css';

import Navbar   from "./components/NavbarSection";
import Hero     from "./components/HeroSection";
import About    from "./components/AboutSection";
import Skills   from "./components/SkillsSection";
import Projects from "./components/ProjectsSection";
import Contact  from "./components/Contact";

function App() {
  const [theme, setTheme] = useState('dark');
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    // Scroll progress bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08 }
    );

    const observe = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    };
    observe();
    const t = setTimeout(observe, 600);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Background blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <div className="reveal-on-scroll"><Hero /></div>
      <div className="reveal-on-scroll"><About /></div>
      <div className="reveal-on-scroll"><Skills /></div>
      <div className="reveal-on-scroll"><Projects /></div>
      <div className="reveal-on-scroll"><Contact /></div>
    </div>
  );
}

export default App;