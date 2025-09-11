import React from "react";
import Image from "next/image";
import { Home, Maximize2, Car } from "lucide-react";
import fontTitle from '@/lib/font';
// import BackgroundVideo from "../home-page/BackgroundVideo";

const Section02 = () => {
  const apartments = [
    {
      title: "Appartement Plénitude 3",
      rooms: "2 chambres + salon",
      surface: "78 m² à 106 m²",
      image: "/chapitre2/Section%2002/Appartemetn%20pl%C3%A9niude%203.jpg",
      type: "Plénitude",
    },
    {
      title: "Appartement Plénitude 4",
      rooms: "3 chambres + salon",
      surface: "113 m² à 128 m²",
      image: "/chapitre2/Section%2002/Appartemetn%20pl%C3%A9niude%204.jpg",
      type: "Plénitude",
    },
    {
      title: "Appartement amplitude 4",
      rooms: "3 chambres + salon + chambre de personnel",
      surface: "140 m² à 184 m²",
      image: "/chapitre2/Section%2002/Appartement%20amplitude%204.jpg",
      type: "Amplitude",
    },
    {
      title: "Appartement amplitude 5",
      rooms: "4 chambres + salon + chambre de personnel",
      surface: "182 m² à 226 m²",
      image: "/chapitre2/Section%2002/Appartement%20amplitude%205.jpg",
      type: "Amplitude",
    },
    {
      title: "Penthouse 4",
      rooms: "3 chambres + salon + chambre de personnel",
      surface: "157 m² à 210 m²",
      image: "/chapitre2/Section%2002/Penthouse%204.jpg",
      type: "Penthouse",
    },
    {
      title: "Penthouse 5",
      rooms: "4 chambres + salon + chambre de personnel",
      surface: "209 m² à 225 m²",
      image: "/chapitre2/Section%2002/Penthouse%205.jpg",
      type: "Penthouse",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Plénitude":
        return "bg-blue-100 text-blue-800";
      case "Amplitude":
        return "bg-green-100 text-green-800";
      case "Penthouse":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gray-50" style={{ backgroundColor: "#d5d5d5" }}>
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          

          <h2 className={`text-2xl lg:text-5xl font-bold  mb-6 text-gray-900 ${fontTitle.className}`}>
            Un confort infiniment  durable 
          </h2>

          <p className="max-w-2xl mx-auto">
            D’un style épuré et d’une esthétique intégrant tous les codes de la
            sobriété intemporelle du luxe, nos intérieurs à dominance thématique
            neutre et matériaux bruts vous permettront de laisser libre cours à
            vos inspirations de décoration d’intérieur. Une sublime page vierge
            pensée pour devenir votre tableau de maître.
          </p>
        </div>

        <div className="space-y-16">
          {apartments.map((apartment, index) => (
            <div
              key={index}
              className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={apartment.image}
                alt={apartment.title}
                fill
                className="object-cover w-full h-full"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 
                 className={`text-2xl lg:text-4xl font-bold  mb-6 text-white drop-shadow-lg ${fontTitle.className}`}
                >
                  {apartment.title}
                </h3>
                <div className="flex flex-wrap gap-6 mb-2">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${fontTitle} ${getTypeColor(
                      apartment.type
                    )} shadow-lg`}
                  >
                    {apartment.type}
                  </span>
                  <span className="flex items-center gap-2 text-white/90 text-lg">
                    <Home className="w-5 h-5 text-white/80" />
                    {apartment.rooms}
                  </span>
                  <span className="flex items-center gap-2 text-white/90 text-lg">
                    <Maximize2 className="w-5 h-5 text-white/80" />
                    {apartment.surface}
                  </span>
                  <span className="flex items-center gap-2 text-white/90 text-lg">
                    <Car className="w-5 h-5 text-white/80" />
                    2 places de parking titrées
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section02;
