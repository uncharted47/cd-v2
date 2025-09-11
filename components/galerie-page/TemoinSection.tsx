import React from 'react';
import ImageGrid from '@/components/ui/ImageGrid';
import fontTitle from '@/lib/font';

const temoinImages = [
  '/Galeriee/Appartement-temoin/IMG_7910-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_7920-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_7957-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_7974-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_7991-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_8021-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_8037-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_8050-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_8082-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_8141-1.jpg',
  '/Galeriee/Appartement-temoin/IMG_8154-1.jpg',
];

const TemoinSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-[30vh]">
        <h2 className={`text-4xl md:text-6xl font-bold text-main-black mb-6 drop-shadow-lg text-center lg:text-center ${fontTitle.className}`}>Notre appartement témoin</h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center lg:text-center mb-8 drop-shadow">
          Clé Blanche vous ouvre les portes de son appartement témoin. Un espace aménagé avec soin pour vous permettre de visualiser votre futur quotidien, de ressentir l’harmonie des volumes, la qualité des finitions et la chaleur des intérieurs.
        </p>
      </div>
      <ImageGrid images={temoinImages} />
      <div className="mt-8 text-center">
        <a href="/contact" className="inline-block bg-main text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-main/90 transition-all">
          Prendre rendez-vous pour une visite privée
        </a>
      </div>
    </div>
  </section>
);

export default TemoinSection;
