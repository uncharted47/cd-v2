import Image from "next/image";
import React from "react";
import fontTitle from "@/lib/font";

const Section04Marque = () => {
  return (
    <div className="flex flex-col my-12 md:my-24 gap-10 container mx-auto">
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-center">
        <div className="flex justify-start order-2 md:order-1">
          <Image
            src={"/vert.webp"}
            alt="Habiter plus Vert"
            className="w-full"
            width={450}
            height={450}
          />
        </div>
        <div className="flex flex-col gap-2 order-1 md:order-2">
          <h2 className={`text-3xl md:text-5xl font-bold text-main ${fontTitle.className}`}>
            Habiter plus Vert
          </h2>
          <div className="flex flex-col gap-3 md:gap-2 text-black mt-3 md:mt-5">
            <p>
              Clé Blanche fait de la nature une évidence. Habiter plus Vert, c&apos;est 
              lui donner la place qu&apos;elle mérite, non comme un décor, mais comme une 
              respiration. Ici, chaque arbre, chaque allée, chaque plan d&apos;eau prolonge 
              un engagement : offrir un cadre de vie où l&apos;air est plus léger, le temps plus doux.
            </p>
            <p>
              Un lieu où l&apos;on marche lentement, où l&apos;on s&apos;arrête pour lire, rêver, 
              regarder les enfants jouer. Où l&apos;eau s&apos;étire le long des chemins, 
              où les jardins murmurent au vent.
            </p>
            <p>
              Un espace pensé pour vivre autrement, plus proche de l&apos;essentiel. 
              Plus proche de la nature. Si près du cœur de la ville et pourtant 
              si loin de son tumulte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section04Marque;