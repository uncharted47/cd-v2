"use client";

import fontTitle from "@/lib/font";
import { Leaf, MapPin, Building2, Gem, Sun, Trees } from "lucide-react";
const features = [
  {
    title: "Une expérience d’habitat durable et de luxe inédite",
    description:
      "Un quotidien tourné vers l’optimisation du bien-être, dans un cocon aux croisées de la nature et de l’innovation, dans un cadre immobilier de prestige.",
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
      "Des volumes épurés d’une surface allant de 120m² à 412m², inondés de lumière, esthétiques, fonctionnels, innovants et intemporels.",
    icon: Building2,
  },
  {
    title: "Matériaux d’exception et finitions haut standing",
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
      "Au cœur d’une biodiversité préservée, de vastes jardins et points d’eau, salle de fitness, aire de jeux pour enfants… une enceinte de déconnexion.",
    icon: Trees,
  },
];

const FeaturesGrid = () => {
  return (
    <div className="py-24" style={{ backgroundImage: `url("/inter.webp")`, backgroundSize: 'cover', backgroundPosition: 'center'   }}>
      <h2
        className={`font-bold text-6xl text-white text-center my-12 ${fontTitle.className}`}
      >
        Clé Blanche Chapitre II
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto p-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-4 p-6 rounded-2xl shadow-sm bg-white hover:shadow-sm transition"
          >
            <feature.icon className="w-10 h-10 text-white bg-main p-1.5 rounded-full" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
