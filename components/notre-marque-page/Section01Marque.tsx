// import Image from "next/image";
import React from "react";
import fontTitle from "@/lib/font";

const Section01Marque = () => {
  return (
    <div className="flex flex-col my-12 md:my-24 gap-10 container mx-auto text-center">
      <h2 className={`text-3xl md:text-5xl font-bold text-main-black ${fontTitle.className}`}>
        {/* Un site unique pour {" "} */}
        Sobriété, raffinement et harmonie
        {/* <span className="block">une résidence d&apos;exception</span> */}
      </h2>
      
      <p>Fruit d&apos;un partenariat d&apos;excellence entre le groupe Saraya Holding et A.Lazrak, cet élégant projet de nouvelle génération a souhaité placer au cœur de l&apos;ensemble de ses études de développement et de conception la mise en valeur de matériaux d&apos;exception.
        <br></br>
        De par leur esthétique et leurs performances techniques, nos sélections de matériaux nobles ont permis d&apos;apporter une vaste palette de solutions et de rendus haut de gamme.  
        
        Une construction durable, pensée pour une pérennité à long terme, pour que votre chez vous d&apos;aujourd&apos;hui soit toujours identique à celui de demain, inchangé dans la longévité.
      </p>
    </div>
  );
};

export default Section01Marque;