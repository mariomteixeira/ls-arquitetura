import React from "react";
import mainlogo from "../assets/logost/svg/Horizontal/HORIZONTAL - V1.svg";

// Mapeamento de seções em português para IDs sem acento
const sectionMap: Record<string, string> = {
  Inicio: "home",
  Projetos: "projects",
  Sobre: "about",
  Contato: "contact",
};

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  return (
    <nav className="flex justify-between items-center p-6 fixed top-0 w-full z-10 transition-all duration-300">
      <div className="flex items-center">
        <img src={mainlogo} alt="Logo" className="w-72 h-20" />
      </div>

      {activeSection !== "projects" && (
        <ul className="flex space-x-4 list-none">
          {["Inicio", "Projetos", "Sobre", "Contato"].map((section) => (
            <li
              key={section}
              className={`nav-item ${
                activeSection === section ? "text-white" : "text-blue-steel"
              }`}
            >
              <a
                href={`#${sectionMap[section]}`}
                className="hover:text-white font-bebas-neue text-2xl"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
