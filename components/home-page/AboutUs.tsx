import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col  my-12 md:my-24 gap-10 container mx-auto ">
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-center">
        <div className="flex flex-col gap-2 order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold text-main-black">
            Un site unique pour {" "}
            <span className="text-second">une résidence d’exception</span>
          </h2>
          <div className="flex flex-col gap-3 md:gap-2 text-gray-800 mt-3 md:mt-5">
            <p>
              Sous un ciel vaste et silencieux, le Domaine Dar Es Salam s’étend,
              immuable. Plus loin, le Golf Royal s’étire entre ombre et lumière,
              vaste et serein.
            </p>
            <p>
              Aux abords de ce sanctuaire, Clé Blanche s’élève avec la même
              retenue. Une résidence où l’élégance se fond dans le paysage, où
              la pierre capte la lumière, où le luxe n’est qu’un écho à la
              beauté environnante.
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src={"/about-1.png"}
            alt="About us"
            className="w-full"
            width={450}
            height={450}
          />
        </div>
      </div>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-center">
        <div className="flex justify-start order-2 md:order-1">
          <Image
            src={"/about-2.png"}
            alt="About us"
            className="w-full"
            width={450}
            height={450}
          />
        </div>
        <div className="flex flex-col gap-2 order-1 md:order-2">
          <p className="text-xl"></p>
          <h2 className="text-3xl md:text-5xl font-bold text-main-black">
            Bien plus qu’une résidence {" "}
            <span className="text-second">une vision</span>
          </h2>
          <div className="flex flex-col gap-3 md:gap-2 text-gray-800 mt-3 md:mt-5">
            <p>
              Chez Clé Blanche, tout est pensé pour durer ; une construction
              durable, élaborée pour que le chez vous de demain soit toujours
              identique à celui d’aujourd’hui Ici, la pierre respire, le bois
              vit, la lumière danse sur des espaces ouverts à la nature. Clé
              Blanche n’impose rien, elle s’intègre, fluide, silencieuse. Un
              espace de vie où rien n’est effacé, où le véritable luxe se fait
              harmonie et sérénité.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
