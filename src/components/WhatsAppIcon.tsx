import React from "react";
import whatsappIcon from "../assets/whatsapp_2.png"; // Ícone do WhatsApp

const WhatsAppIcon: React.FC = () => {
  return (
    <a
      href="https://wa.me/5561994108524" // Substitua pelo seu número de WhatsApp com DDD
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 hover:scale-110 transition-transform"
    >
      <img
        src={whatsappIcon}
        alt="Fale conosco pelo WhatsApp"
        className="w-12 h-12"
      />
    </a>
  );
};

// Upando

export default WhatsAppIcon;
