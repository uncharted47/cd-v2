"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface GallerySliderProps {
  images: string[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images }) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="rounded-2xl shadow-2xl"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image
                src={src}
                alt={`Galerie image ${idx + 1}`}
                fill
                className="object-cover rounded-2xl"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
