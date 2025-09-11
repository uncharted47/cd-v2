import React from "react";

const Visit360 = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto flex flex-col gap-10 px-5">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Visite virtuelle <span className="text-main-black block">de l’appartement</span>
        </h2>
        <iframe
          title="Lazrak 360° Visit"
          src="https://axeon.ma/CLIENT/LAZRAKIMMO/Lazrak-Immobilier_Dar_Essalam/VISITE_360/VR1/index.html"
          width="100%"
          frameBorder="0"
          className="h-[300px] lg:h-[700px]"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Visit360;
