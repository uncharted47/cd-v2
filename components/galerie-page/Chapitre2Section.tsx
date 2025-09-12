"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import fontTitle from '@/lib/font';

const chapitre2Images = [
  '/Galeriee/Chapitre 02/E01.jpg',
  '/Galeriee/Chapitre 02/E02.jpg',
  '/Galeriee/Chapitre 02/E03.jpg',
  '/Galeriee/Chapitre 02/E04.jpg',
  '/Galeriee/Chapitre 02/SALLE DE SPORT.jpg',
];

const Chapitre2Section = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const [showArrows, setShowArrows] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlideEnabled) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % chapitre2Images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [autoSlideEnabled]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % chapitre2Images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + chapitre2Images.length) % chapitre2Images.length);
  };

  const openModal = (index: number) => {
    setCurrentModalImage(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore background scrolling
  };

  const nextModalImage = () => {
    setCurrentModalImage((prev) => (prev + 1) % chapitre2Images.length);
  };

  const prevModalImage = () => {
    setCurrentModalImage((prev) => (prev - 1 + chapitre2Images.length) % chapitre2Images.length);
  };

  const handleSliderClick = () => {
    setAutoSlideEnabled(false); // Stop auto-slide when clicked
    setShowArrows(true); // Show arrows when clicked
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoSlideEnabled(false); // Stop auto-slide when user manually navigates
    setShowArrows(true); // Show arrows when dots are clicked
  };

  return (
    <section className="py-16 bg-gray-50">
      <style dangerouslySetInnerHTML={{
        __html: `
          .slider-container-chap2 * {
            line-height: 1.2 !important;
          }
          
          .scroll-reveal-slider-chap2 {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-reveal-slider-chap2.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .slider-container-chap2 {
            position: relative;
            height: 60vh; /* Fixed height for the slider */
          }

          .slider-nav-button-chap2 {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            transition: all 0.3s ease;
            z-index: 10;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
          }

          .slider-nav-button-chap2.show {
            opacity: 1;
            visibility: visible;
          }

          .slider-nav-button-chap2:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
          }

          .slider-nav-button-chap2.prev {
            left: -70px;
          }

          .slider-nav-button-chap2.next {
            right: -70px;
          }

          .modal-overlay-chap2 {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(15px);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            opacity: 0;
            animation: fadeInChap2 0.3s ease-out forwards;
          }

          .modal-content-chap2 {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            width: auto;
            height: auto;
            transform: scale(0.9);
            animation: scaleInChap2 0.3s ease-out forwards;
          }

          .modal-content-chap2 img {
            max-width: 100%;
            max-height: 90vh;
            width: auto;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .modal-nav-button-chap2 {
            position: fixed; /* Position relative to viewport */
            top: 50vh; /* Center vertically in viewport */
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.95);
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 24px;
            font-weight: bold;
            transition: all 0.3s ease;
            z-index: 10000; /* Ensure it's on top */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .modal-nav-button-chap2:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
          }

          .modal-nav-button-chap2.prev {
            left: 50px; /* Fixed distance from left edge */
          }

          .modal-nav-button-chap2.next {
            right: 50px; /* Fixed distance from right edge */
          }

          .close-button-chap2 {
            position: fixed; /* Position relative to viewport */
            top: 40px;
            right: 40px;
            background: rgba(255, 255, 255, 0.95);
            border: none;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 24px;
            font-weight: bold;
            transition: all 0.3s ease;
            color: #333;
            z-index: 10001; /* Ensure it's on top of everything */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .close-button-chap2:hover {
            background: white;
            transform: scale(1.1);
          }

          .slider-dots-chap2 {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 25px;
          }

          .dot-chap2 {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .dot-chap2.active {
            background: #333;
            transform: scale(1.2);
          }

          .image-counter-chap2 {
            font-size: 16px;
            color: #666;
            font-weight: 500;
          }

          .slider-image-chap2 {
            width: 100% !important;
            height: 100% !important; /* Fill the fixed container */
            object-fit: cover !important;
          }

          @keyframes fadeInChap2 {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleInChap2 {
            from { transform: scale(0.9); }
            to { transform: scale(1); }
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .slider-container-chap2 {
              height: 40vh;
            }
            .slider-nav-button-chap2 {
              display: none !important;
            }
            .modal-nav-button-chap2 {
              width: 50px;
              height: 50px;
              font-size: 20px;
            }
            .modal-nav-button-chap2.prev {
              left: 20px;
            }
            .modal-nav-button-chap2.next {
              right: 20px;
            }
            .close-button-chap2 {
              width: 40px;
              height: 40px;
              font-size: 20px;
              top: 20px;
              right: 20px;
            }
            .image-counter-chap2 {
              font-size: 14px;
            }
          }
        `
      }} />
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[30vh]">
            <h2 className={`text-xl md:text-2xl font-bold text-main-black mb-4 text-center lg:text-center ${fontTitle.className}`}>
            Clé Blanche entame son Chapitre II
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-center max-w-4xl">
            des espaces revisités, où chaque détail contribue à réécrire l&apos;art de vivre contemporain
            </p>
        </div>
        
        <div className="slider-container-chap2 w-[80%] mx-auto scroll-reveal-slider-chap2">
          <button
            className={`slider-nav-button-chap2 prev ${showArrows ? 'show' : ''}`}
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          >
            ‹
          </button>
          <button
            className={`slider-nav-button-chap2 next ${showArrows ? 'show' : ''}`}
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          >
            ›
          </button>
          <div className="relative overflow-hidden h-full" onClick={handleSliderClick}>
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {chapitre2Images.map((src, idx) => (
                <div 
                  key={idx}
                  className="w-full flex-shrink-0 cursor-pointer h-full"
                  onClick={(e) => { e.stopPropagation(); openModal(idx); }}
                >
                  <Image
                    src={src}
                    alt={`Chapitre 2 image ${idx + 1}`}
                    width={1200}
                    height={600}
                    className="slider-image-chap2 hover:scale-105 transition-transform duration-300"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="slider-dots-chap2">
            <div className="image-counter-chap2">
              {currentSlide + 1} / {chapitre2Images.length}
            </div>
            {chapitre2Images.map((_, idx) => (
              <button
                key={idx}
                className={`dot-chap2 ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay-chap2" onClick={closeModal}>
          <button className="close-button-chap2" onClick={closeModal}>
            ×
          </button>
          <button
            className="modal-nav-button-chap2 prev"
            onClick={(e) => { e.stopPropagation(); prevModalImage(); }}
          >
            ‹
          </button>
          <button
            className="modal-nav-button-chap2 next"
            onClick={(e) => { e.stopPropagation(); nextModalImage(); }}
          >
            ›
          </button>
          <div className="modal-content-chap2" onClick={(e) => e.stopPropagation()}>
            <Image
              src={chapitre2Images[currentModalImage]}
              alt={`Chapitre 2 image ${currentModalImage + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>
        </div>
      )}
      
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
            
            const initAnimationChap2 = () => {
              const slider = document.querySelector('.slider-container-chap2');
              if (slider) {
                observer.observe(slider);
              }
            };
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initAnimationChap2);
            } else {
              initAnimationChap2();
            }

            const handleKeydownChap2 = (e) => {
              if (document.querySelector('.modal-overlay-chap2')) {
                if (e.key === 'ArrowRight') {
                  document.querySelector('.modal-nav-button-chap2.next')?.click();
                } else if (e.key === 'ArrowLeft') {
                  document.querySelector('.modal-nav-button-chap2.prev')?.click();
                } else if (e.key === 'Escape') {
                  document.querySelector('.close-button-chap2')?.click();
                }
              }
            };
            document.addEventListener('keydown', handleKeydownChap2);
          }
        `
      }} />
    </section>
  );
};

export default Chapitre2Section;
