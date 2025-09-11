"use client";

import React, { useState } from 'react';
import Image from 'next/image';
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
      <style dangerouslySetInnerHTML={{
        __html: `
          .image-grid-container * {
            line-height: 1.2 !important;
          }
          
          .scroll-reveal-image {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-reveal-image.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        `
      }} />
      
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center min-h-[30vh]">
          <h2 className={`text-4xl md:text-6xl font-bold text-main-black mb-6 drop-shadow-lg text-center lg:text-center ${fontTitle.className}`}>
          Clé Blanche entame son Chapitre II
          </h2>
          <p >
          des espaces revisités, où chaque détail contribue à réécrire l’art de vivre contemporain
          </p>
        </div>
        
        <div className="image-grid-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {imagesToShow.map((src, idx) => (
              <div 
                key={idx} 
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={src}
                    alt={`Chapitre 2 image ${idx + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
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
      
      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              });
            }, { 
              threshold: 0.2, 
              rootMargin: '0px 0px -10% 0px'
            });
            
            const initAnimation = () => {
              // Add scroll reveal class to all images
              const mediaElements = document.querySelectorAll('.image-grid-container img, .image-grid-container [class*="image"]');
              mediaElements.forEach(element => {
                element.closest('div').classList.add('scroll-reveal-image');
                observer.observe(element.closest('div'));
              });
              
              // Also observe any image containers
              const imageContainers = document.querySelectorAll('.image-grid-container > div > div');
              imageContainers.forEach(container => {
                container.classList.add('scroll-reveal-image');
                observer.observe(container);
              });
            };
            
            const checkForImages = () => {
              const mediaElements = document.querySelectorAll('.image-grid-container img, .image-grid-container [class*="image"]');
              if (mediaElements.length > 0) {
                initAnimation();
              } else {
                setTimeout(checkForImages, 100);
              }
            };
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', checkForImages);
            } else {
              checkForImages();
            }
          }
        `
      }} />
    </section>
  );
};

export default Chapitre2Section;
