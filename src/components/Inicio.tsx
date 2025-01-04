import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/inicio.css";

import { Autoplay } from "swiper/modules";

const images = [
  require("../assets/image1.jpg"),
  require("../assets/image2.jpg"),
  require("../assets/image3.jpg"),
];

const Inicio: React.FC = () => {
  return (
    <section id="home" className="section min-h-[85vh]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1.1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Inicio;
