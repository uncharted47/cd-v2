import React from "react";
import GallerySlider from "@/components/ui/GallerySlider";


const Section03 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         
          <div className="space-y-8">
         
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-second"></div>
              <span className="text-xs uppercase text-second font-semibold tracking-widest">
                Nos penthouses
              </span>
            </div>

           
            <h2 className="text-4xl md:text-6xl font-bold text-main mb-6 drop-shadow-lg text-center lg:text-left">
              Un luxe ultime{' '}
              <span className="text-main font-bold">suspendu</span>{' '}
              <span className="text-gray-900 font-bold">entre ciel et terre</span>
            </h2>

          
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center lg:text-left mb-4">
                <span className="text-main font-bold">Vivre en hauteur.</span> Sentir l&apos;air circuler librement, dompter la lumière. Les penthouses de Clé Blanche offrent un horizon sans limites.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center lg:text-left mb-4">
                Sous la pergola bioclimatique, la lumière se module, le vent s&apos;adoucit, l&apos;espace s&apos;adapte au rythme du jour. Plus loin, une piscine suspendue reflète le ciel, fusionne avec l&apos;instant.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center lg:text-left">
                <span className="text-main font-bold">Ici, rien ne contraint, tout respire.</span> L&apos;extérieur n&apos;est plus une frontière mais une extension naturelle du dedans.
              </p>
            </div>

       
            

          
            
          </div>

       
          <div className="relative">
            {/* Slider d'images des penthouses */}
            <GallerySlider images={["/chapitre2/SECTION 03.png"]} />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-second/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-main/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;