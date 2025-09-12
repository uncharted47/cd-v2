import BannerCta from "@/components/home-page/BannerCta";
import FeaturesGrid from "@/components/home-page/FeaturesGrid";
import FirstBreathHero from "@/components/home-page/FirstBreathHero";
// import Faq from '@/components/home-page/Faq'
import GalerieImage from "@/components/home-page/GalerieImage";
import Hero from "@/components/home-page/Hero";
import HowCanHelpYou from "@/components/home-page/HowCanHelpYou";
import Numbers from "@/components/home-page/Numbers";
import FormContact from "@/components/ui/FormContact";
import fontTitle from "@/lib/font";
import Image from "next/image";
// import Visit360 from '@/components/home-page/Visit360'
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      {/* Banner images en mode Hero */}
      <div className="container mx-auto my-24 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div className="flex flex-col gap-4 p-4">
          <h2
            className={`text-2xl lg:text-5xl font-semibold text-main-black ${fontTitle.className}`}
          > 
            Conjuguant style de vie urbain et ambiance sereine
          </h2>
                    <p className={`text-2xl ${fontTitle.className}`}>
            L&apos;ultime chapitre s&apos;ouvre 
            {/* <br /> L&apos;exclusivité pour adresse */}
          </p>
          <p >
            Nichée au cœur du quartier résidentiel prisé de Souissi, à deux pas
            du domaine Dar Essalam et du Royal Golf, Clé Blanche incarne un art
            de vivre rare, à la croisée du confort urbain et de l&apos;évasion
            naturelle.
          </p>
          <p >
            La première phase, aujourd&apos;hui livrée, témoigne de la promesse tenue
            : offrir un cadre de vie paisible, raffiné, et harmonieusement
            intégré dans un environnement préservé.
          </p>
          <p >
            Pensé comme un écrin de verdure, le projet conjugue architecture
            contemporaine, espaces ouverts et matériaux de qualité, pour créer
            des lieux de vie qui respirent la sérénité. Ici, l&apos;espace se vit
            pleinement : lumière naturelle, volumes généreux, circulation fluide
            entre intérieur et extérieur.
          </p>
          <p >Une continuité inspirée, un nouveau chapitre</p>
          <p >
            Dans la continuité de la première phase, le second chapitre Clé
            Blanche Souissi s&apos;inscrit dans la même philosophie d&apos;exigence, de
            discrétion et de bien-être. Chaque détail est pensé pour prolonger
            cette expérience résidentielle unique à Rabat.
          </p>
        </div>
        <div>
          <Image
            src={"/SiteWeb_TrancheII.jpg"}
            alt="Tranche 1"
            width={650}
            height={650}
            className="w-full"
          />
        </div>
      </div>

      <div className="relative w-full h-[400px] md:h-[600px] mb-12">
        <Image
          src="/galerie/slide-1.jpeg"
          alt="Banner 1"
          fill
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <HowCanHelpYou />
      <Numbers />
      <FirstBreathHero />

      <FeaturesGrid />

      {/* <Visit360 /> */}
      <GalerieImage />

      <BannerCta />
      <div id="contact-form">
        <FormContact />
      </div>
      {/* <Faq /> */}
    </div>
  );
};

export default page;
