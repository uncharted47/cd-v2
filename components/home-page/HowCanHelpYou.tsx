"use client";
// import { Bed, Car, Ruler } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import fontTitle from "@/lib/font";

const HowCanHelpYou = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      id: 0,
      image: "/houses/APPARTEMENT-PLENITUDE-4.webp",
      title: "Un large éventail de surfaces",
      description:
        "Chaque espace respire, ouvert sur l’extérieur, baigné d’une clarté changeante. Sobres et épurés, nos intérieurs marient luxe discret et matériaux bruts dans une palette neutre, propice à l’expression personnelle.",
    },
    // {
    //   id: 1,
    //   image: "/houses/APPARTEMENT-PLENITUDE-3.webp",
    //   title: "APPARTEMENT PLÉNITUDE 3",
    //   info: {
    //     room: "2 chambres + salon",
    //     surface: "78 m² à 106 m²",
    //     parking: "2 places de parking titrées",
    //   },
    // },
    // {
    //   id: 2,
    //   image: "/houses/APPARTEMENT-PLENITUDE-4.webp",
    //   title: "APPARTEMENT PLÉNITUDE 4",
    //   info: {
    //     room: "3 chambres + salon",
    //     surface: "113 m² à 128 m²",
    //     parking: "2 places de parking titrées",
    //   },
    // },
    // {
    //   id: 3,
    //   image: "/houses/APPARTEMENT-AMPLITUDE-4.webp",
    //   title: "APPARTEMENT AMPLITUDE 4",
    //   info: {
    //     room: "3 chambres + salon + chambre de personnel",
    //     surface: "140 m² à 184 m²",
    //     parking: "2 places de parking titrées",
    //   },
    // },
    // {
    //   id: 4,
    //   image: "/houses/APPARTEMENT-AMPLITUDE-5.webp",
    //   title: "APPARTEMENT AMPLITUDE 5",
    //   info: {
    //     room: "4 chambres + salon + chambre de personnel",
    //     surface: "182 m² à 226 m²",
    //     parking: "2 places de parking titrées",
    //   },
    // },
    // {
    //   id: 5,
    //   image: "/houses/PENTHOUSE-4.webp",
    //   title: "PENTHOUSE 4",
    //   info: {
    //     room: "3 chambres + salon + chambre de personnel",
    //     surface: "157 m² à 210 m²",
    //     parking: "2 places de parking titrées",
    //   },
    // },
    // {
    //   id: 6,
    //   image: "/houses/PENTHOUSE-05.webp",
    //   title: "PENTHOUSE 5",
    //   info: {
    //     room: "4 chambres + salon + chambre de personnel",
    //     surface: "209 m² à 225 m²",
    //     parking: "2 places de parking titrées",
    //   },
    // },
  ];

  return (
    <div className="my-12 md:my-24 px-4">
      <div className="flex flex-col gap-3 items-center text-center my-8 md:my-12">
        {/* <h2 className="text-lg md:text-xl text-gray-600  ${fontTitle.className}`}">Se sentir libre</h2> */}
        <p className={`text-2xl lg:text-5xl font-semibold text-main ${fontTitle.className}`}>
       Se sentir libre  à l’abri des regards
        </p>
      </div>

      <div
        className={`grid grid-cols-1 ${
          isMobile ? "flex-col" : "flex-row"
        } gap-2 relative`}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={`relative ${
              isMobile ? "h-64 w-full" : "h-[500px]"
            }  w-1/2 rounded-md overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              !isMobile && activeCard === item.id
                ? "w-full"
                : isMobile
                ? "w-full"
                : "w-full"
            }`}
            onMouseEnter={!isMobile ? () => setActiveCard(item.id) : undefined}
            onMouseLeave={!isMobile ? () => setActiveCard(null) : undefined}
            onClick={
              isMobile
                ? () => setActiveCard(activeCard === item.id ? null : item.id)
                : undefined
            }
          >
            {/* Background Image with Scale Animation */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                backgroundImage: `url(${item.image})`,
                transform: activeCard === item.id ? "scale(1.05)" : "scale(1)",
              }}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 ${
                activeCard === item.id ? "opacity-90" : "opacity-80"
              }`}
            />

            {/* Content Container */}
            <div className="absolute bottom-0 w-full p-4 md:p-8 space-y-3">
              {/* Title - Always Visible */}
              <h2 className="text-xl md:text-4xl font-bold text-white drop-shadow-lg transition-all duration-500 translate-y-0">
                {item.title}
              </h2>

              <p className="text-xl text-white">{item.description}</p>
              <Link href="/chapitre-2">
                <Button className="text-xl border border-white bg-transparent !py-5 !px-12">
                  Laissez-vous guider dans nos résidences
                </Button>
              </Link>

              {/* Description - Animated */}
              {/* <div className="overflow-hidden">
                <div
                  className={`text-white/90 text-base md:text-lg leading-snug transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeCard === item.id || isMobile
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    willChange: "transform, opacity",
                    transitionDelay: activeCard === item.id ? "300ms" : "0ms",
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <p className="px-2 flex items-center gap-2">
                      <Bed className="w-6 h-6" />
                      {item.info.room} chambres
                    </p>
                    <p className="px-2 flex items-center gap-2">
                      <Ruler className="w-5 h-5" />
                      {item.info.surface}
                    </p>
                    <p className="px-2 flex items-center gap-2">
                      <Car className="w-6 h-6" />
                      {item.info.parking}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowCanHelpYou;
