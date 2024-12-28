import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect: React.FC = () => {
  return (
    <div
      className="text-white text-6xl font-bebas-neue max-w-[700px] leading-snug break-words text-left"
      style={{ whiteSpace: "pre-line" }}
    >
      <Typewriter
        options={{
          strings: [
            "A arquitetura\nmolda o modo\ncomo vivemos.",
            "Cada espaço\ninspira novas\nhistórias.",
            "Transforme\ndetalhes\nem identidade.",
          ],
          autoStart: true,
          loop: true,
          delay: 65,
          deleteSpeed: 80,
        }}
      />
    </div>
  );
};

export default TypingEffect;
