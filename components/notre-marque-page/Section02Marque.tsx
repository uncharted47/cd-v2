import Image from "next/image";
import React from "react";
import fontTitle from "@/lib/font";

const Section02Marque = () => {
  return (
    <div className="flex flex-col my-12 md:my-24 gap-10 container mx-auto">
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-center">
        <div className="flex justify-start order-2 md:order-1">
          <Image
            src={"/chapitre-2.webp"}
            alt="Clé Blanche résidence"
            className="w-full"
            width={450}
            height={450}
          />
        </div>
        <div className="flex flex-col gap-2 order-1 md:order-2">
          <h2 className={`text-3xl md:text-5xl font-bold text-main-black ${fontTitle.className}`}>
            Bien plus qu&apos;une résidence, {" "}
            <span className="block">une vision</span>
          </h2>
          <div className="flex flex-col gap-3 md:gap-2 text-black mt-3 md:mt-5">
            <p>
              À Clé Blanche, tout est pensé pour durer ; une construction
              durable, élaborée pour que le chez vous de demain soit toujours
              identique à celui d&apos;aujourd&apos;hui. Ici, la pierre respire, le bois
              vit, la lumière danse sur des espaces ouverts à la nature.
            </p>
            <p>
              Clé Blanche n&apos;impose rien, elle s&apos;intègre, fluide, silencieuse.
              Un espace de vie où rien n&apos;est effacé, où le véritable luxe se fait
              harmonie et sérénité.
            </p>
            <p>
              Dans un monde qui cherche à revenir à l&apos;essentiel, Clé Blanche offre
              une réponse : un refuge, un équilibre, une promesse pérenne de quiétude.
              Un espace préservé, où le temps s&apos;étire, où la nature n&apos;est pas un décor,
              mais une présence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02Marque;