import Image from "next/image";
import React from "react";
// import fontTitle from "@/lib/font";

const Section03Marque = () => {
  return (
    <div className="flex flex-col my-12 md:my-24 gap-10  mx-auto">

      <Image
            src={"/demo-1.jpeg"}
            alt="Notre style et expertise"
            className="w-full"
            width={450}
            height={450}
          />
      {/* <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-center"> */}

        
        {/* <div className="flex flex-col gap-2 order-2 md:order-1">
          <h2 className={`text-3xl md:text-5xl font-bold text-main-black mb-6 ${fontTitle.className}`}>
            Notre <span className="block">Style</span>
          </h2>
          <div className="flex flex-col gap-3 md:gap-2 text-black mt-3 md:mt-5">
            <p className="text-lg font-medium">
              Urbain | Minéral | Graphique | Moderne | Avant-gardiste | Minimaliste | Luxueux
            </p>
          </div>
          
          <h3 className={`text-2xl md:text-3xl font-bold text-main-black mt-8 mb-4 ${fontTitle.className}`}>
            Notre <span className="block">Expertise</span>
          </h3>
          <div className="flex flex-col gap-3 md:gap-2 text-black">
            <p className="text-lg font-medium">
              Haute-technicité | Innovation | Robustesse
            </p>
          </div>
          
          <h3 className={`text-2xl md:text-3xl font-bold text-main-black mt-8 mb-4 ${fontTitle.className}`}>
            Nos <span className="block">Valeurs</span>
          </h3>
          <div className="flex flex-col gap-3 md:gap-2 text-black">
            <p className="text-lg font-medium">
              Excellence | Fiabilité | Rigueur | Pérennité
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src={"/PAGE NOTRE MARQUE/SECTION 03.jpg"}
            alt="Notre style et expertise"
            className="w-full"
            width={450}
            height={450}
          />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Section03Marque;