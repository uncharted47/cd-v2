"use client";
import React from "react";
import Image from "next/image";
import fontTitle from "@/lib/font";

const cards = [
  {
    image: "/m1.webp", // à remplacer par la vraie image
    title: "Notre Style",
    desc: "Urbain | Minéral | Graphique | Moderne | Avant-gardiste | Minimaliste | Luxueux",
  },
  {
    image: "/m2.webp", // à remplacer par la vraie image
    title: "Notre Expertise",
    desc: "Haute-technicité | Innovation | Robustesse",
  },
  {
    image: "/m3.webp", // à remplacer par la vraie image
    title: "Nos Valeurs",
    desc: "Excellence | Fiabilité | Rigueur | Pérennité",
  },
];

import { useRef, useEffect, useState } from "react";

const SectionMarqueAnimated = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full flex flex-col md:flex-row gap-0 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {cards.map((card, idx) => (
        <div
          key={card.title}
          className="group relative flex-1 h-[300px] md:h-[420px] overflow-hidden cursor-pointer transition-all duration-500"
        >
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover object-center scale-100 group-hover:scale-110 group-hover:brightness-75 transition-all duration-700 ease-out"
            style={{ zIndex: 1 }}
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 group-hover:from-black/30 group-hover:to-black/80 transition-all duration-700 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg ${fontTitle.className} animate-fade-in-down`}>{card.title}</h3>
            <p className="text-white text-base md:text-lg font-light drop-shadow animate-fade-in-up opacity-80 group-hover:opacity-100 transition-all duration-700">
              {card.desc}
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none group-hover:backdrop-blur-[2px] transition-all duration-700" />
        </div>
      ))}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(.4,1.7,.7,1) both; }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(.4,1.7,.7,1) both; }
      `}</style>
    </div>
  );
};

export default SectionMarqueAnimated;
