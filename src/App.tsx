import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import WhatsAppIcon from "./components/WhatsAppIcon"; // Importando o ícone do WhatsApp
import "./App.css";
import "./css/inicio.css";

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
        <Projetos />
        <Sobre />
        <section id="contact" className="section h-screen">
          Contato
        </section>
      </div>

      {/* Ícone do WhatsApp fixo no canto inferior esquerdo */}
      <WhatsAppIcon />
    </div>
  );
};

export default App;
