import React from 'react';
import Image from 'next/image';
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
        <h2 className={`text-4xl md:text-6xl font-bold text-main-black mb-6 drop-shadow-lg text-center lg:text-center ${fontTitle.className}`}>Notre appartement témoin</h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center lg:text-center mb-8 drop-shadow">
          Clé Blanche vous ouvre les portes de son appartement témoin. Un espace aménagé avec soin pour vous permettre de visualiser votre futur quotidien, de ressentir l’harmonie des volumes, la qualité des finitions et la chaleur des intérieurs.
        </p>
      </div>
      
      <div className="image-grid-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {temoinImages.map((src, idx) => (
            <div 
              key={idx} 
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={src}
                  alt={`Appartement témoin ${idx + 1}`}
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
      
      <div className="mt-8 text-center">
        <a href="/contact" className="inline-block bg-main text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-main/90 transition-all">
          Prendre rendez-vous pour une visite privée
        </a>
      </div>
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

export default TemoinSection;
