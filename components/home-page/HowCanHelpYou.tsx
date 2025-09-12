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
        "Chaque espace respire, ouvert sur l'extérieur, baigné d'une clarté changeante. Sobres et épurés, nos intérieurs marient luxe discret et matériaux bruts dans une palette neutre, propice à l'expression personnelle.",
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
  ];

  return (
    <div className="my-12 md:my-24 px-4">
      <div className="flex flex-col gap-3 items-center text-center my-8 md:my-12">
        <p className={`text-2xl md:text-3xl lg:text-5xl font-semibold text-main-black ${fontTitle.className}`}>
          Se sentir libre à l&apos;abri des regards
        </p>
      </div>

      <div className="flex flex-col gap-2 relative">
        {data.map((item) => (
          <div
            key={item.id}
            className={`relative w-full ${
              isMobile ? "h-[400px]" : "h-[500px]"
            } rounded-md overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]`}
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
            <div className="absolute bottom-0 w-full p-4 md:p-8 space-y-3 md:space-y-4">
              {/* Title - Always Visible */}
              <h2 className={`text-xl md:text-2xl lg:text-4xl font-bold text-white drop-shadow-lg transition-all duration-500 translate-y-0 ${fontTitle.className}`}>
                {item.title}
              </h2>

              <p className="text-sm md:text-lg lg:text-xl text-white leading-relaxed">
                {item.description}
              </p>
              
              <Link href="/chapitre-2">
                <Button className="text-xs sm:text-sm md:text-lg lg:text-xl border border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 py-2 px-3 sm:py-3 sm:px-6 md:py-5 md:px-12 rounded-lg w-full sm:w-auto">
                  <span className="block xs:hidden">Laissez-vous guider dans nos résidences</span>
                  <span className="hidden sm:block">Laissez-vous guider dans nos résidences</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowCanHelpYou;
