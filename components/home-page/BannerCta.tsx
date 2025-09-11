"use client";
import fontTitle from "@/lib/font";
import { Download } from "lucide-react";
import React, { useState } from "react";
import BrochureModal from "./BrochureModal";

const BannerCta = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div
      className=" my-24 bg-cover"
      style={{ backgroundImage: `url(/ai.webp)`, height: '500px' }}
    >
      <div className="py-12 w-full h-full  bg-[#0000008c] transition-opacity duration-700">
        <div className="container mx-auto text-white px-5">
          <div className="flex flex-col gap-3 items-center text-center my-12 ">
            <h2 className="text-lg mt-6">
              Une nouvelle page s’écrit…
            </h2>
            <p className={`text-3xl lg:text-5xl font-semibold text-second ${fontTitle.className}`}>
              Deuxième et dernière phase, une opportunité unique !
            </p>
            <button
              className="my-5 flex items-center gap-2 px-2 lg:px-6 py-2 rounded-md border-main border text-main bg-white hover:bg-main hover:text-white duration-300 ease-in-out transition-all group"
              onClick={() => setModalOpen(true)}
            >
              <Download className="h-8 w-8 p-1  rounded-full bg-main text-white group-hover:bg-white group-hover:text-main " />
              Télécharger la brochure
            </button>
            <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCta;
