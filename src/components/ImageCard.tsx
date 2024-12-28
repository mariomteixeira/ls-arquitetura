import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/projetos.css";

interface ImageCardProps {
  cards: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

const ImageCard: React.FC<ImageCardProps> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  // Função para abrir o modal
  const openModal = (card: any) => {
    setSelectedCard(card);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedCard(null);
  };

  // Bloqueia o scroll enquanto o modal está aberto
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden"; // Scroll lock
    } else {
      document.body.style.overflow = "unset"; // Libera o scroll
    }
    return () => {
      document.body.style.overflow = "unset"; // Garante que o scroll volta ao normal
    };
  }, [selectedCard]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layout
            onClick={() => openModal(card)}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
          >
            <motion.img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover"
            />
            <motion.div className="p-4 bg-white">
              <h3 className="text-xl font-semibold">{card.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white rounded-lg p-6 w-[900px] h-[600px] max-w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <motion.img
                src={selectedCard.image}
                alt={selectedCard.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <h2 className="text-3xl font-bold mt-6">{selectedCard.title}</h2>
              <p className="text-lg mt-2 text-center">
                {selectedCard.description}
              </p>
              <button
                className="mt-6 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                onClick={closeModal}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageCard;
