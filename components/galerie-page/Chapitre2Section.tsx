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
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          .slider-container * {
            line-height: 1.2 !important;
          }
          
          .scroll-reveal-slider {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-reveal-slider.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .slider-nav-button {
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

          .slider-nav-button.show {
            opacity: 1;
            visibility: visible;
          }

          .slider-nav-button:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
          }

          .slider-nav-button.prev {
            left: 20px;
          }

          .slider-nav-button.next {
            right: 20px;
          }

          .modal-overlay {
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
            animation: fadeIn 0.3s ease-out forwards;
          }

          .modal-content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            width: auto;
            height: auto;
            transform: scale(0.9);
            animation: scaleIn 0.3s ease-out forwards;
          }

          .modal-content img {
            max-width: 100%;
            max-height: 90vh;
            width: auto;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .modal-nav-button {
            position: absolute;
            top: 50%;
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
            z-index: 10;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .modal-nav-button:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
          }

          .modal-nav-button.prev {
            left: -80px;
          }

          .modal-nav-button.next {
            right: -80px;
          }

          .close-button {
            position: absolute;
            top: -60px;
            right: 0;
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
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .close-button:hover {
            background: white;
            transform: scale(1.1);
          }

          .slider-dots {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 25px;
          }

          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .dot.active {
            background: #333;
            transform: scale(1.2);
          }

          .image-counter {
            font-size: 16px;
            color: #666;
            font-weight: 500;
          }

          /* Fixed image sizing */
          .slider-image {
            width: 100% !important;
            height: 60vh !important;
            object-fit: cover !important;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleIn {
            from { transform: scale(0.9); }
            to { transform: scale(1); }
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .slider-nav-button {
              display: none !important;
            }

            .modal-nav-button {
              width: 50px;
              height: 50px;
              font-size: 20px;
            }

            .modal-nav-button.prev {
              left: -60px;
            }

            .modal-nav-button.next {
              right: -60px;
            }

            .close-button {
              width: 40px;
              height: 40px;
              font-size: 20px;
              top: -50px;
            }

            .image-counter {
              font-size: 14px;
            }

            .slider-image {
              height: 50vh !important;
            }
          }

          /* Remove any borders/outlines */
          .slider-container img {
            outline: none !important;
            border: none !important;
          }
        `
      }} />
      
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center min-h-[30vh]">
          <h2 className={`text-2xl md:text-4xl font-bold text-main-black mb-4 drop-shadow-lg text-center lg:text-center ${fontTitle.className}`}>
            Clé Blanche entame son Chapitre II
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-4xl">
            des espaces revisités, où chaque détail contribue à réécrire l&apos;art de vivre contemporain
          </p>
        </div>
        
        {/* Slider Container - 80% width */}
        <div className="slider-container relative w-[80%] mx-auto">
          <div className="relative overflow-hidden" onClick={handleSliderClick}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {chapitre2Images.map((src, idx) => (
                <div 
                  key={idx}
                  className="w-full flex-shrink-0 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(idx);
                  }}
                >
                  <Image
                    src={src}
                    alt={`Chapitre 2 image ${idx + 1}`}
                    width={1200}
                    height={600}
                    className="slider-image hover:scale-105 transition-transform duration-300"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons - Show only when clicked */}
            <button
              className={`slider-nav-button prev ${showArrows ? 'show' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
            >
              ‹
            </button>
            <button
              className={`slider-nav-button next ${showArrows ? 'show' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
            >
              ›
            </button>
          </div>
          
          {/* Slider Dots with Counter */}
          <div className="slider-dots">
            {/* Image Counter */}
            <div className="image-counter">
              {currentSlide + 1} / {chapitre2Images.length}
            </div>
            
            {/* Dots */}
            {chapitre2Images.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for zoomed images */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            
            {/* Modal Navigation Buttons */}
            <button
              className="modal-nav-button prev"
              onClick={prevModalImage}
            >
              ‹
            </button>
            <button
              className="modal-nav-button next"
              onClick={nextModalImage}
            >
              ›
            </button>
            
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
            
            const initAnimation = () => {
              const sliderContainer = document.querySelector('.slider-container');
              if (sliderContainer) {
                sliderContainer.classList.add('scroll-reveal-slider');
                observer.observe(sliderContainer);
              }
            };
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initAnimation);
            } else {
              initAnimation();
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
              if (document.querySelector('.modal-overlay')) {
                if (e.key === 'ArrowRight') {
                  document.querySelector('.modal-nav-button.next')?.click();
                } else if (e.key === 'ArrowLeft') {
                  document.querySelector('.modal-nav-button.prev')?.click();
                } else if (e.key === 'Escape') {
                  document.querySelector('.close-button')?.click();
                }
              }
            });
          }
        `
      }} />
    </section>
  );
};

export default Chapitre2Section;
