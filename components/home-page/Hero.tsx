"use client";

import { Phone } from "lucide-react";
import React from "react";
import SplitText from "../ui/SplitText";
import BackgroundVideo from "./BackgroundVideo";
import fontTitle from "@/lib/font";

const Hero = () => {
  return (
    <div className="min-h-screen text-white ">
      <BackgroundVideo />
      <div className="min-h-screen bg-[#00000040] w-full flex flex-col justify-center items-center py-12">
        <div className="flex flex-col gap-5 lg:w-3/4 mx-auto text-center">
          <SplitText
            text="Deuxième et dernière phase"
            className={`text-4xl lg:text-7xl font-semibold ${fontTitle.className}`}
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
            text="Une opportunité unique"
            className={`text-4xl lg:text-7xl font-semibold ${fontTitle.className}`}
            delay={60}
            duration={2.0}
            ease="power2.out"
            splitType="chars"
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
          {/* <SplitText
            text="Un projet encore inédit au Maroc"
            className="lg:text-4xl"
            delay={50}
            duration={0.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          /> */}
        </div>
        <div className="md:w-3/4lg:w-1/2 mt-5 items-center justify-center gap-5">
          <button 
            onClick={() => {
              const formSection = document.getElementById('contact-form');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center justify-center gap-2 px-6 py-2 rounded-md border-main border text-main-black font-bold bg-main hover:bg-transparent hover:text-white  group duration-300 ease-in-out transition-all"
          >
            <div className="h-8 w-8 p-1.5 flex justify-center items-center rounded-full bg-white text-main-black  group-hover:bg-main">
              <Phone />
            </div>
            Demander une visite privée
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
