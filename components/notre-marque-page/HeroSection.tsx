"use client";

import { Phone } from "lucide-react";
import React from "react";
import SplitText from "../ui/SplitText";
import fontTitle from "@/lib/font";
import Link from "next/link";

const HeroSection = () => {
  // const scrollToContact = () => {
  //   const contactForm = document.getElementById('contact-form');
  //   if (contactForm) {
  //     contactForm.scrollIntoView({ 
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  //   }
  // };

  return (
    <div className="min-h-screen text-white relative">
    
      <div className="absolute inset-0 w-full h-full bg-hero-chapitre2" />
      
    
      <div className="min-h-screen bg-[#00000040] w-full flex flex-col justify-center items-center py-12 relative z-0">
        <div className="flex flex-col gap-5 lg:w-3/4 md:w-full mx-auto text-center">
          <SplitText
            text="Bien plus qu'une résidence "
            className={`text-6xl font-semibold ${fontTitle.className}`}
            delay={51}
            duration={1.15}
            ease="power3.out"
            splitType="words"
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
            text="Un luxe discret, une élégance intemporelle"
            className={`lg:text-4xl ${fontTitle.className}`}
            delay={38}
            duration={1.28}
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
        
    
        <div className="md:w-3/4 lg:w-1/2 mt-5 flex items-center justify-center gap-5">
          <Link href="/contact">
            <button 
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-md border-main border text-white bg-main hover:bg-transparent hover:text-white group duration-300 ease-in-out transition-all"
            >
              <div className="h-8 w-8 p-1.5 flex justify-center items-center rounded-full bg-main text-main-black group-hover:bg-main">
                <Phone />
              </div>
              Demander une visite privée
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;