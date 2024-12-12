import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import "./App.css";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id") as string;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="background-container"></div>
      <Navbar activeSection={activeSection} />
      <div className="main-content">
        <Inicio />
        <section id="projects" className="section h-screen">
          Projetos
        </section>
        <section id="about" className="section h-screen">
          Sobre
        </section>
        <section id="contact" className="section h-screen">
          Contato
        </section>
      </div>
    </div>
  );
};

export default App;
