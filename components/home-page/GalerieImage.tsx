"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import fontTitle from "@/lib/font";

const GalerieImage = () => {
  const options = [
    {
      picture: "/boxes/jardins.jpeg",
      title: "Cœur d’ilots",
    },
    {
      picture: "/boxes/salle-de-sport.jpeg",
      title: "Fitness Center",
    },
    {
      picture: "/boxes/fontaines.jpeg",
      title: "Fontaines",
    },
    {
      picture: "/boxes/terrases.jpeg",
      title: "Terrasses",
    },
    {
      picture: "/boxes/euvres-art.webp",
      title: "Œuvres d'art",
    },
  ];

  return (
    <div className="my-24">
      <h2 className={`text-center text-3xl md:text-5xl font-bold text-main ${fontTitle.className}`}>
        Un Art de vivre réinventé
        
      </h2>
      <p className="text-center py-2 lg:w-3/4 mx-auto">
        Vivre à Clé Blanche, c’est avoir tout à portée de main, sans bruit, sans
        attente.
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="my-12"
      >
        {options.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group overflow-hidden rounded-md">
              <div className="relative w-full h-[400px]">
                <Image
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.picture}
                  alt={item.title}
                  width={500}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xl font-semibold text-white opacity-90 group-hover:opacity-100 transition-opacity duration-200 delay-150">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalerieImage;
