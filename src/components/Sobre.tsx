import React from "react";
import Typewriter from "typewriter-effect";
import personalImage from "../assets/personalimage.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex items-start justify-center min-h-screen px-12 pt-12"
    >
      {/* Imagem da Arquiteta */}
      <div className="w-[400px] flex justify-center ml-44">
        <img
          src={personalImage}
          alt="Personal"
          className="w-[400px] h-[500px] object-cover rounded-lg shadow-2xl"
        />
      </div>

      {/* Texto à Direita da Imagem */}
      <div className="flex-grow flex flex-col justify-start ml-6">
        {/* TypingEffect dentro do About */}
        <div className="p-8 max-w-[800px] w-full text-left mb-0">
          <div
            className="text-blue-steel text-5xl font-bebas-neue leading-snug break-words"
            style={{ whiteSpace: "pre-line" }}
          >
            <Typewriter
              options={{
                strings: [
                  "cada projeto nasce com um proposito.",
                  "despertar sensações e acolher histórias.",
                ],
                autoStart: true,
                loop: true,
                delay: 65,
                deleteSpeed: 100,
              }}
            />
          </div>
        </div>

        {/* Texto Fixo Abaixo do TypingEffect */}
        <div className="p-6 rounded-lg max-w-[800px] w-full">
          <p className="text-xl text-left text-blue-steel mt-2 leading-relaxed">
            Olá, eu sou a Léia, arquiteta e urbanista. Ao longo dos meus
            projetos, busco criar ambientes que acolhem, inspiram e refletem a
            essência de cada cliente. Sou apaixonada por neuroarquitetura e por
            espaços que despertam sensações, trazendo conforto e equilíbrio.
          </p>
          <p className="text-xl text-left text-blue-steel mt-4 leading-relaxed">
            Se você deseja transformar seu ambiente em um lugar especial, estou
            aqui para dar vida às suas ideias. Vamos criar juntos um espaço que
            conta sua história e traduz o seu jeito de viver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
