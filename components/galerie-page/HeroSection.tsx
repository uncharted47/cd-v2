import React from 'react';


import Image from 'next/image';

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex flex-col items-center justify-center py-16">

    <div className="absolute inset-0 w-full h-full">
      <Image
        src="/galerie/1.webp"
        alt="Galerie Hero"
        fill
        className="object-cover"
        priority
      />
  <div className="absolute inset-0 bg-gradient-to-br from-main/70 via-black/40 to-main/60"></div>
    </div>
   
    <div className="relative z-10 flex flex-col items-center justify-center">
       <p className="text-xl md:text-2xl text-white max-w-2xl text-center drop-shadow">
      Plongez en images dans l’équilibre subtil entre élégance, confort et nature, au fil des deux chapitres de Clé Blanche.
      </p>
    </div>
  </section>
);

export default HeroSection;
