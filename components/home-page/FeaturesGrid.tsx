"use client";

import fontTitle from "@/lib/font";
import { Leaf, MapPin, Building2, Gem, Sun, Trees } from "lucide-react";

const features = [
  {
    title: "Une expérience d&apos;habitat durable et de luxe inédite",
    description:
      "Un quotidien tourné vers l&apos;optimisation du bien-être, dans un cocon aux croisées de la nature et de l&apos;innovation, dans un cadre immobilier de prestige.",
    icon: Leaf,
  },
  {
    title: "Un emplacement exceptionnel en plein Souissi",
    description:
      "Un cadre de vie résidentiel sans équivalent à Rabat, dans un quartier de prestige bercé par une étonnante douceur de vivre.",
    icon: MapPin,
  },
  {
    title: "Appartements et penthouses",
    description:
      "Des volumes épurés d&apos;une surface allant de 120m² à 412m², inondés de lumière, esthétiques, fonctionnels, innovants et intemporels.",
    icon: Building2,
  },
  {
    title: "Matériaux d&apos;exception et finitions haut standing",
    description:
      "Marbre, pierres nobles, domotique, climatisation centralisée… des aménagements contemporains de très haute qualité.",
    icon: Gem,
  },
  {
    title: "De vastes et lumineuses terrasses",
    description:
      "Pensées comme de véritables espaces de vie qui métamorphoseront votre quotidien, avec des surfaces de baies vitrées exceptionnelles.",
    icon: Sun,
  },
  {
    title: "Un écrin de verdure paysagé",
    description:
      "Au cœur d&apos;une biodiversité préservée, de vastes jardins et points d&apos;eau, salle de fitness, aire de jeux pour enfants… une enceinte de déconnexion.",
    icon: Trees,
  },
];

const FeaturesGrid = () => {
  return (
    <div
      className="py-12 md:py-18 px-4"
      style={{
        backgroundImage: `url("/inter.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center mb-8 md:mb-12 px-4 ${fontTitle.className}`}
      >
        Clé Blanche Chapitre II
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 container mx-auto max-w-7xl">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow duration-300"
          >
            <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white bg-main p-1.5 rounded-full flex-shrink-0" />
            <h3 className="text-sm md:text-base font-semibold leading-tight">
              {feature.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
