"use client";
// import { arch } from "os";
// import { Bed, Car, Ruler } from "lucide-react";
import React, { useState, useEffect } from "react";
 

const Section05Marque = () => {
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
      image: "/archi.webp",
      title: "Le mot des architectes",
      description:
        `Nous avons pensé Clé Blanche comme une alliance entre la matière 
                et le temps. Une architecture minérale, chaleureuse et ancrée dans 
                son époque, où chaque texture et chaque détail portent une vision 
                du prestige et du raffinement.`,
      architect: {
        name: "Amine KANOUNI",
        name2: "Boubker SEFRIOUI",      }
    },
   
  ];

  return (
    <div className="my-10 md:my-24 px-4">
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
              <p className="text-lg text-white mt-4">
                {item.architect.name} <br></br> {item.architect.name2}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Section05Marque;