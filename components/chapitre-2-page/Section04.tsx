"use client";
import React, { useRef, useState } from "react";
import fontTitle from "@/lib/font";
// import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const Section04 = () => {
  const [percent, setPercent] = useState(0.5);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Synchroniser le slider avec la souris
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setPercent(Math.max(0, Math.min(1, x / rect.width)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    setPercent(Math.max(0, Math.min(1, x / rect.width)));
  };

  return (
    <section
      className="relative py-24 px-0 flex items-center overflow-hidden select-none"
      style={{ margin: "0 0 80px 0" }}
    >
      <div
        ref={sliderRef}
        className="relative w-full h-[400px] md:h-[600px] rounded-2xl shadow-xl overflow-hidden flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ cursor: 'ew-resize' }}
      >
        {/* Image avant (left) */}
        <img
          src="/houses/PENTHOUSE-05.webp"
          alt="Avant"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
        />
        {/* Image après (right) */}
        <img
          src="/Image 04.jpeg"
          alt="Après"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${percent * 100}%)` }}
          draggable={false}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 pointer-events-none z-10" />
        {/* Titre centré */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h2 className={`text-2xl lg:text-5xl font-bold text-white leading-[1.1] drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] max-w-5xl mx-auto text-center ${fontTitle.className}`}
            style={{ marginBottom: 0 }}
          >
            Le soleil pour invité<br />
            des premières lueurs du jour<br />
            au crépuscule
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Section04;
