import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const images = [
  require("../assets/image1.jpg"),
  require("../assets/image2.jpg"),
  require("../assets/image3.jpg"),
];

const Inicio: React.FC = () => {
  return (
    <section id="home" className="section h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
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
