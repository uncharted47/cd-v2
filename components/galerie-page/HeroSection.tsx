import React from 'react';
import Image from 'next/image';
import SplitText from "../ui/SplitText";
import fontTitle from "@/lib/font";

const HeroSection = () => (
  <section className="relative min-h-[70vh] flex flex-col items-center justify-center py-16">
    <style dangerouslySetInnerHTML={{
      __html: `
        .relative.z-10 * {
          line-height: 1.2 !important;
        }
        .relative.z-10 div[style*="line-height"] {
          line-height: 1.2 !important;
        }
      `
    }} />

    <div className="absolute inset-0 w-full h-full">
      <Image
        src="/galerie/1.webp"
        alt="Galerie"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-main/70 via-black/40 to-main/60"></div>
    </div>
   
    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      <SplitText
      text="Galerie"
      className={`text-6xl md:text-8xl lg:text-9xl font-semibold mb-8 text-white ${fontTitle.className}`}
      delay={80}
      duration={1.8}
      ease="power3.out"
      splitType="chars"
      from={{ 
        opacity: 0, 
        y: 15, 
        scale: 1.02
      }}
      to={{ 
        opacity: 1, 
        y: 0, 
        scale: 1
      }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      />
      <SplitText
      text="Plongez en images dans l'équilibre subtil entre élégance, confort et nature, au fil des deux chapitres de Clé Blanche."
      className={`text-xl md:text-3xl lg:text-4xl text-white max-w-4xl text-center ${fontTitle.className}`}
      delay={60}
      duration={2.0}
      ease="power2.out"
      splitType="words"
      from={{ 
        opacity: 0, 
        y: 12,
        scale: 1.01
      }}
      to={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </div>
  </section>
);

export default HeroSection;
