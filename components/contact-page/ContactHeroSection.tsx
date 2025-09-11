"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import fontTitle from "@/lib/font";

const ContactHeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          .contact-hero-text * {
            line-height: 1.2 !important;
            color: white !important;
          }
        `
      }} />
      
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/contact/IMG_3450.JPG"
          alt="Équipe Clé Blanche à votre service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-24 contact-hero-text">
        

        <div className="flex flex-col gap-3 mx-auto text-center mb-8">
          <SplitText
            text="Notre équipe est"
            className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-white ${fontTitle.className}`}
            delay={40}
            duration={1.4}
            ease="power4.out"
            splitType="chars"
            from={{ 
              opacity: 0, 
              y: 30, 
              scale: 0.95,
              rotationX: -15
            }}
            to={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotationX: 0
            }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="center"
          />
          <SplitText
            text="à votre écoute"
            className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide text-white ${fontTitle.className}`}
            delay={60}
            duration={1.4}
            ease="power4.out"
            splitType="chars"
            from={{ 
              opacity: 0, 
              y: 35,
              scale: 0.92,
              rotationX: -20
            }}
            to={{ 
              opacity: 1, 
              y: 0,
              scale: 1,
              rotationX: 0
            }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="center"
          />
        </div>

        <div className="flex flex-col gap-2">
          <SplitText
            text="pour toute information"
            className={`text-xl md:text-2xl lg:text-3xl font-extralight tracking-wider text-white max-w-4xl mx-auto leading-relaxed ${fontTitle.className}`}
            delay={80}
            duration={1.2}
            ease="power3.out"
            splitType="chars"
            from={{ 
              opacity: 0, 
              y: 25,
              scale: 0.98
            }}
            to={{ 
              opacity: 0.9, 
              y: 0,
              scale: 1
            }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="center"
          />
          <SplitText
            text="ou prise de rendez-vous personnalisé"
            className={`text-xl md:text-2xl lg:text-3xl font-extralight tracking-wider text-white max-w-4xl mx-auto leading-relaxed ${fontTitle.className}`}
            delay={60}
            duration={1.2}
            ease="power3.out"
            splitType="chars"
            from={{ 
              opacity: 0, 
              y: 25,
              scale: 0.98
            }}
            to={{ 
              opacity: 0.9, 
              y: 0,
              scale: 1
            }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="center"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-md border-main border text-main-black font-bold bg-[#e5dac5] hover:bg-transparent hover:text-white  group duration-300 ease-in-out transition-all">
            <Phone />
            Prendre RDV
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
