"use client";

import React, { useState, useEffect } from 'react';
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

const TemoinSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState(0);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const [showArrows, setShowArrows] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % temoinImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + temoinImages.length) % temoinImages.length);
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
    setCurrentModalImage((prev) => (prev + 1) % temoinImages.length);
  };

  const prevModalImage = () => {
    setCurrentModalImage((prev) => (prev - 1 + temoinImages.length) % temoinImages.length);
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

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (e.key === 'ArrowRight') {
        nextModalImage();
      } else if (e.key === 'ArrowLeft') {
        prevModalImage();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, nextModalImage, prevModalImage, closeModal]);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlideEnabled) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % temoinImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [autoSlideEnabled]);

  return (
    <section className="py-16 bg-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          .slider-container-temoin * {
            line-height: 1.2 !important;
          }
          
          .scroll-reveal-slider-temoin {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-reveal-slider-temoin.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .slider-container-temoin {
            position: relative;
            height: 60vh; /* Fixed height for the slider */
          }

          .slider-nav-button-temoin {
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

          .slider-nav-button-temoin.show {
            opacity: 1;
            visibility: visible;
          }

          .slider-nav-button-temoin:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
          }

          .slider-nav-button-temoin.prev {
            left: -70px;
          }

          .slider-nav-button-temoin.next {
            right: -70px;
          }

          .modal-overlay-temoin {
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
            animation: fadeInTemoin 0.3s ease-out forwards;
          }

          .modal-content-temoin {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            width: auto;
            height: auto;
            transform: scale(0.9);
            animation: scaleInTemoin 0.3s ease-out forwards;
          }

          .modal-content-temoin img {
            max-width: 100%;
            max-height: 90vh;
            width: auto;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .modal-nav-button-temoin {
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

          .modal-nav-button-temoin:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
          }

          .modal-nav-button-temoin.prev {
            left: 50px; /* Fixed distance from left edge */
          }

          .modal-nav-button-temoin.next {
            right: 50px; /* Fixed distance from right edge */
          }

          .close-button-temoin {
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

          .close-button-temoin:hover {
            background: white;
            transform: scale(1.1);
          }

          .slider-dots-temoin {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 25px;
          }

          .dot-temoin {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .dot-temoin.active {
            background: #333;
            transform: scale(1.2);
          }

          .image-counter-temoin {
            font-size: 16px;
            color: #666;
            font-weight: 500;
          }

          .slider-image-temoin {
            width: 100% !important;
            height: 100% !important; /* Fill the fixed container */
            object-fit: cover !important;
          }

          @keyframes fadeInTemoin {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleInTemoin {
            from { transform: scale(0.9); }
            to { transform: scale(1); }
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .slider-container-temoin {
              height: 40vh;
            }
            .slider-nav-button-temoin {
              display: none !important;
            }
            .modal-nav-button-temoin {
              width: 50px;
              height: 50px;
              font-size: 20px;
            }
            .modal-nav-button-temoin.prev {
              left: 20px;
            }
            .modal-nav-button-temoin.next {
              right: 20px;
            }
            .close-button-temoin {
              width: 40px;
              height: 40px;
              font-size: 20px;
              top: 20px;
              right: 20px;
            }
            .image-counter-temoin {
              font-size: 14px;
            }
          }
        `
      }} />
      
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center min-h-[30vh]">
            <h2 className={`text-2xl md:text-4xl font-bold text-main-black mb-4 drop-shadow-lg text-center lg:text-center ${fontTitle.className}`}>
            Notre appartement témoin
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl text-center lg:text-center mb-6 drop-shadow">
            Clé Blanche vous ouvre les portes de son appartement témoin. Un espace aménagé avec soin pour vous permettre de visualiser votre futur quotidien, de ressentir l&apos;harmonie des volumes, la qualité des finitions et la chaleur des intérieurs.
            </p>
        </div>
        
        <div className="slider-container-temoin w-[80%] mx-auto scroll-reveal-slider-temoin">
          <button
            className={`slider-nav-button-temoin prev ${showArrows ? 'show' : ''}`}
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          >
            ‹
          </button>
          <button
            className={`slider-nav-button-temoin next ${showArrows ? 'show' : ''}`}
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          >
            ›
          </button>
          <div className="relative overflow-hidden h-full" onClick={handleSliderClick}>
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {temoinImages.map((src, idx) => (
                <div 
                  key={idx}
                  className="w-full flex-shrink-0 cursor-pointer h-full"
                  onClick={(e) => { e.stopPropagation(); openModal(idx); }}
                >
                  <Image
                    src={src}
                    alt={`Appartement témoin ${idx + 1}`}
                    width={1200}
                    height={600}
                    className="slider-image-temoin hover:scale-105 transition-transform duration-300"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="slider-dots-temoin">
            <div className="image-counter-temoin">
              {currentSlide + 1} / {temoinImages.length}
            </div>
            {temoinImages.map((_, idx) => (
              <button
                key={idx}
                className={`dot-temoin ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-main text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-main/90 transition-all">
            Prendre rendez-vous pour une visite privée
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay-temoin" onClick={closeModal}>
          <button className="close-button-temoin" onClick={closeModal}>
            ×
          </button>
          <button
            className="modal-nav-button-temoin prev"
            onClick={(e) => { e.stopPropagation(); prevModalImage(); }}
          >
            ‹
          </button>
          <button
            className="modal-nav-button-temoin next"
            onClick={(e) => { e.stopPropagation(); nextModalImage(); }}
          >
            ›
          </button>
          <div className="modal-content-temoin" onClick={(e) => e.stopPropagation()}>
            <Image
              src={temoinImages[currentModalImage]}
              alt={`Appartement témoin ${currentModalImage + 1}`}
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
            
            const initAnimationTemoin = () => {
              const slider = document.querySelector('.slider-container-temoin');
              if (slider) {
                observer.observe(slider);
              }
            };
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initAnimationTemoin);
            } else {
              initAnimationTemoin();
            }
          }
        `
      }} />
    </section>
  );
};

export default TemoinSection;
