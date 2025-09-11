"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import fontTitle from "@/lib/font";

const chapitre1Images = [
  // '/Galeriee/Chapitre 01/DJI_20250522204640_0114_D-Migliorato-NR.jpg',
  // '/Galeriee/Chapitre 01/DJI_20250522204907_0121_D-Migliorato-NR.jpg',
  // '/Galeriee/Chapitre 01/DJI_20250523032241_0085_D-Migliorato-NR.jpg',
  // '/Galeriee/Chapitre 01/IMG_8398-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/DJI_20250523032303_0088_D-Migliorato-NR-Pano.jpg',
  
  '/Galeriee/Chapitre 01/IMG_8344-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8351-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8383-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/DJI_20250523032006_0072_D-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8403-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8405-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8414-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8415-Migliorato-NR-Pano.jpg',
  // '/Galeriee/Chapitre 01/IMG_8445-Migliorato-NR - Copie.jpg',
  '/Galeriee/Chapitre 01/IMG_8508-Migliorato-NR.jpg',
  '/Galeriee/Chapitre 01/IMG_8662-Migliorato-NR-Pano.jpg',
  // '/Galeriee/Chapitre 01/IMG_8685-Migliorato-NR-HDR.jpg',
  '/Galeriee/Chapitre 01/IMG_8690-Migliorato-NR-HDR-Panorama.jpg',
  '/Galeriee/Chapitre 01/IMG_8710-Migliorato-NR-HDR-Panorama.jpg',
  '/Galeriee/Chapitre 01/IMG_8725-Migliorato-NR-HDR.jpg',
  '/Galeriee/Chapitre 01/IMG_8740-Migliorato-NR-HDR.jpg',
  '/Galeriee/Chapitre 01/DJI_20250523034416_0105_D-Migliorato-NR.jpg',
];

const mixedMediaItems = [
  ...chapitre1Images.slice(0, 3),
  { type: 'video', src: '/nouvelle-video-cle-blanche-realisee-avec-clipchamp.webm', poster: '/image.png' },
  ...chapitre1Images.slice(3),
];

const Chapitre1Section = () => {
  const [videoPlaying, setVideoPlaying] = useState<{ [key: number]: boolean }>({});

  const handleVideoClick = (idx: number) => {
    setVideoPlaying(prev => ({ ...prev, [idx]: true }));
  };

  return (
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
        
        .video-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        
        .video-overlay:hover {
          background: rgba(0, 0, 0, 0.5);
        }
        
        .play-button {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .play-button:hover {
          background: white;
          transform: scale(1.1);
        }
        
        .play-button svg {
          width: 24px;
          height: 24px;
          margin-left: 3px;
        }
      `
    }} />
    
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center min-h-[30vh]">
        <p className={`text-xl md:text-3xl lg:text-4xl text-gray-700 max-w-4xl text-center mb-8 ${fontTitle.className}`}>
          Clé Blanche a ouvert son histoire avec une première phase livrée, symbole de rigueur, d&apos;excellence et de raffinement
        </p>
      </div>
      
      <div className="image-grid-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mixedMediaItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {typeof item === 'string' ? (
                // Image
                <div className="relative">
                  <Image
                    src={item}
                    alt={`Galerie image ${idx + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ) : (
                // Video
                <div className="relative cursor-pointer" onClick={() => handleVideoClick(idx)}>
                  {!videoPlaying[idx] ? (
                    // Video poster with play button overlay
                    <>
                      <Image
                        src={item.poster || '/Galeriee/Chapitre 01/DJI_20250523032303_0088_D-Migliorato-NR-Pano.jpg'}
                        alt={`Video thumbnail ${idx + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="video-overlay">
                        <div className="play-button">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Actual video player
                    <video
                      className="w-full h-64 object-cover"
                      controls
                      autoPlay
                      muted
                      playsInline
                      poster={item.poster}
                    >
                      <source src={item.src} type="video/webm" />
                      <p>Your browser doesn&apos;t support HTML5 video.</p>
                    </video>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
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
            // Add scroll reveal class to all images and videos
            const mediaElements = document.querySelectorAll('.image-grid-container img, .image-grid-container video, .image-grid-container [class*="image"]');
            mediaElements.forEach(element => {
              element.closest('div').classList.add('scroll-reveal-image');
              observer.observe(element.closest('div'));
            });
            
            // Also observe any media containers
            const mediaContainers = document.querySelectorAll('.image-grid-container > div > div');
            mediaContainers.forEach(container => {
              container.classList.add('scroll-reveal-image');
              observer.observe(container);
            });
          };
          
          const checkForImages = () => {
            const mediaElements = document.querySelectorAll('.image-grid-container img, .image-grid-container video, .image-grid-container [class*="image"]');
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

export default Chapitre1Section;
