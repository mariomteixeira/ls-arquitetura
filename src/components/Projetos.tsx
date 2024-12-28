import React from "react";
import ImageCard from "./ImageCard";
import "../css/projetos.css";

// Importa manualmente todas as imagens da pasta cards
const cards = [
  {
    id: 1,
    image: require("../assets/cards/card1.jpeg"),
    title: "Projeto 1",
    description: "Detalhes completos do Projeto 1.",
  },
  {
    id: 2,
    image: require("../assets/cards/card2.png"),
    title: "Projeto 2",
    description: "Descrição detalhada do Projeto 2.",
  },
  {
    id: 3,
    image: require("../assets/cards/card3.jpeg"),
    title: "Projeto 3",
    description: "Saiba mais sobre o Projeto 3.",
  },
  {
    id: 4,
    image: require("../assets/cards/card4.jpeg"),
    title: "Projeto 4",
    description: "Explore os detalhes do Projeto 4.",
  },
  {
    id: 5,
    image: require("../assets/cards/card5.png"),
    title: "Projeto 5",
    description: "Projeto 5 com design inovador e tecnologia de ponta.",
  },
  {
    id: 6,
    image: require("../assets/cards/card6.png"),
    title: "Projeto 6",
    description: "Conheça o Projeto 6 e suas soluções criativas.",
  },
  {
    id: 7,
    image: require("../assets/cards/card7.jpeg"),
    title: "Projeto 7",
    description: "Um olhar mais atento ao desenvolvimento do Projeto 7.",
  },
  {
    id: 8,
    image: require("../assets/cards/card8.png"),
    title: "Projeto 8",
    description: "Projeto 8 - Transformando ideias em realidade.",
  },
  {
    id: 9,
    image: require("../assets/cards/card9.png"),
    title: "Projeto 9",
    description: "Detalhes e inovação no Projeto 9.",
  },
];

const Projetos: React.FC = () => {
  return (
    <section
      id="projects"
      className="section min-h-screen flex justify-center items-center scroll-mt-12"
    >
      <div className="container mx-auto px-4">
        <p className="text-3xl text-center mb-2 text-white font-bebas-neue drop-shadow-[1px_1px_2px_rgba(0,0,0,0.9)]">
          Clique em nossos cards para ver mais detalhes
        </p>
        <ImageCard cards={cards} />
      </div>
    </section>
  );
};

export default Projetos;
