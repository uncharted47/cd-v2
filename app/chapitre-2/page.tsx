"use client";

import Section01 from "@/components/chapitre-2-page/Section01";
import Section02 from "@/components/chapitre-2-page/Section02";
import Section04 from "@/components/chapitre-2-page/Section04";
// import Section05 from "@/components/chapitre-2-page/Section05";
import SplitText from "@/components/ui/SplitText";
import FormContact from "@/components/ui/FormContact";
import fontTitle from "@/lib/font";
import { Phone } from "lucide-react";
import React from "react";

const Chapitre2Page = () => {
  return (
    <div>
      <div className="min-h-screen text-white relative">
        <div className="absolute inset-0 w-full h-full bg-hero-2" />

        <div className="min-h-screen bg-[#00000040] w-full flex flex-col justify-center items-center py-12 relative z-0">
          <div className="flex flex-col gap-5 lg:w-3/4 mx-auto text-center">
                        <SplitText
              text="Appartements et penthouses d'exception"
              className={`text-5xl font-semibold ${fontTitle.className}`}
              delay={51}
              duration={1.15}
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
              text="Dans un environnement exclusif"
              className={`text-5xl ${fontTitle.className}`}
              delay={38}
              duration={1.28}
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
          </div>

          <div className="md:w-3/4 lg:w-1/2 mt-5 flex items-center justify-center gap-5">
            <button 
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-md border-main border text-white bg-main hover:bg-transparent hover:text-white group duration-300 ease-in-out transition-all"
            >
              <div className="h-8 w-8 p-1.5 flex justify-center items-center rounded-full bg-white text-main group-hover:bg-main group-hover:text-white">
                <Phone />
              </div>
              Demander une visite privée
            </button>
          </div>
        </div>
      </div>
      <Section01 />
      <Section02 />
      <Section04 />
      {/* <Section05 /> */}
      
      <div id="contact-form">
        <FormContact />
      </div>
    </div>
  );
};

export default Chapitre2Page;
