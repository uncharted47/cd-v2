import React from 'react';
import ImageGrid from '@/components/ui/ImageGrid';

const chapitre1Images = [
  '/Galeriee/Chapitre 01/DJI_20250522204640_0114_D-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/DJI_20250522204907_0121_D-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/DJI_20250523032241_0085_D-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8398-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/DJI_20250523032303_0088_D-Migliorato-NR-Pano.jpg',
  
  '/Galeriee/Chapitre 01/IMG_8344-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8351-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8383-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/DJI_20250523032006_0072_D-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8403-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8405-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8414-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8415-Migliorato-NR-Pano.jpg',
  '/Galeriee/Chapitre 01/IMG_8445-Migliorato-NR - Copie.jpg',
  '/Galeriee/Chapitre 01/IMG_8508-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8662-Migliorato-NR-Pano.jpg',
  '/Galeriee/Chapitre 01/IMG_8685-Migliorato-NR-HDR.jpg',
  '/Galeriee/Chapitre 01/IMG_8690-Migliorato-NR-HDR-Panorama.jpg',
  '/Galeriee/Chapitre 01/IMG_8710-Migliorato-NR-HDR-Panorama.jpg',
  '/Galeriee/Chapitre 01/IMG_8725-Migliorato-NR-HDR.jpg',
  '/Galeriee/Chapitre 01/IMG_8740-Migliorato-NR-HDR.jpg',
  '/Galeriee/Chapitre 01/DJI_20250523034416_0105_D-Migliorato-NR.jpg',
];

const Chapitre1Section = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-[30vh]">
        {/* <h2 className="text-4xl md:text-6xl font-bold text-main-black mb-6 drop-shadow-lg text-center lg:text-center">Le chapitre I s’est cloturé</h2> */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center lg:text-center mb-8 drop-shadow">
        Clé Blanche a ouvert son histoire avec une première phase livrée, symbole de rigueur, d’excellence et de raffinement        </p>
      </div>
      <ImageGrid images={chapitre1Images} />
    </div>
  </section>
);

export default Chapitre1Section;
