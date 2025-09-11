import fontTitle from "@/lib/font";
import Image from "next/image";

const FirstBreathHero = () => {
  return (
    <>
      <div className="py-24 gap-10  z-10">
        <div className="flex flex-col gap-5 lg:w-3/4 text-center my-5 container mx-auto">
          <h2 className={`text-3xl md:text-5xl font-bold text-main-black ${fontTitle.className}`}>
            Saraya Holding & A.Lazrak Group
            <span className="block">Un partenariat d’excellence</span>
          </h2>
          <div className="flex flex-col gap-3 md:gap-2 text-black mt-3 md:mt-5">
            <p>
              Partie intégrante de l’ADN des fondateurs de la marque, cette
              culture de l’innovation et de l’authenticité est cultivée chaque
              jour par l’ensemble de nos collaborateurs afin de proposer sur nos
              marchés des solutions toujours renouvelées.
            </p>
            <p>
              Ce partenariat d’expertise autour de la prestigieuse marque Clé
              Blanche ambitionne donc de donner naissance à des projets de très
              haut standing, centrés autour de la qualité, de la recherche
              d’innovation et de l’expérience du nouvel habitat.
            </p>
            <p>Une vision commune d’excellence.</p>
          </div>
        </div>
        <div className="relative w-full h-[400px] md:h-[760px]">
          <Image
            src="/saraya.webp"
            alt="Banner 1"
            fill
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default FirstBreathHero;
