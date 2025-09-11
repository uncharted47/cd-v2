"use client";

import React, { useState } from 'react';
import ImageGrid from '@/components/ui/ImageGrid';
import fontTitle from '@/lib/font';

const chapitre2Images = [
  '/Galeriee/Chapitre 02/E01.jpg',
  '/Galeriee/Chapitre 02/E02.jpg',
  '/Galeriee/Chapitre 02/E03.jpg',
  '/Galeriee/Chapitre 02/E04.jpg',
  '/Galeriee/Chapitre 02/SALLE DE SPORT.jpg',

];

const IMAGES_PER_PAGE = 8;

const Chapitre2Section = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(chapitre2Images.length / IMAGES_PER_PAGE);
  const startIdx = (page - 1) * IMAGES_PER_PAGE;
  const endIdx = startIdx + IMAGES_PER_PAGE;
  const imagesToShow = chapitre2Images.slice(startIdx, endIdx);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center min-h-[30vh]">
          <h2 className={`text-4xl md:text-6xl font-bold text-main-black mb-6 drop-shadow-lg text-center lg:text-center ${fontTitle.className}`}>
          Clé Blanche entame son Chapitre II
          </h2>
          <p >
          des espaces revisités, où chaque détail contribue à réécrire l’art de vivre contemporain
          </p>
        </div>
        <ImageGrid images={imagesToShow} />
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              className="px-4 py-2 rounded bg-main text-white font-semibold disabled:opacity-50"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Précédent
            </button>
            <span className="text-main-black font-bold">
              Page {page} / {totalPages}
            </span>
            <button
              className="px-4 py-2 rounded bg-main text-white font-semibold disabled:opacity-50"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Chapitre2Section;
