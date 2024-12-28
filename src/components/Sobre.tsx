import React from "react";
import TypingEffect from "./TypingEffect";
import personalImage from "../assets/personalimage.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="flex items-start justify-center min-h-screen px-12 pt-12"
    >
      <div className="w-[400px] flex justify-center ml-44">
        <img
          src={personalImage}
          alt="Personal"
          className="w-[400px] h-[500px] object-cover rounded-lg shadow-2xl"
        />
      </div>

      <div className="flex-grow flex flex-col justify-start ml-6">
        <TypingEffect />
      </div>
    </section>
  );
};

export default About;
