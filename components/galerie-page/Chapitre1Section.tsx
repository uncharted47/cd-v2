"use client";
import React, { useState } from 'react';
// import Image from 'next/image';
import fontTitle from "@/lib/font";

const Chapitre1Section = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if it's a mobile device
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          .video-container * {
            line-height: 1.2 !important;
          }
          
          .scroll-reveal-video {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .scroll-reveal-video.visible {
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
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }
          
          .video-container:hover .video-overlay {
            opacity: 1;
            pointer-events: auto;
          }
          
          .play-button {
            width: 80px;
            height: 80px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .play-button:hover {
            background: white;
            transform: scale(1.1);
          }
          
          .play-button svg {
            width: 32px;
            height: 32px;
            margin-left: 3px;
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
            max-width: 80vw;
            max-height: 80vh;
            width: auto;
            height: auto;
            transform: scale(0.9);
            animation: scaleIn 0.3s ease-out forwards;
          }

          .modal-content video {
            max-width: 100%;
            max-height: 80vh;
            width: auto;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          .close-button {
            position: absolute;
            top: -45px;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            border: none;
            border-radius: 50%;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            transition: all 0.3s ease;
            color: #333;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .close-button:hover {
            background: white;
            transform: scale(1.1);
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleIn {
            from { transform: scale(0.9); }
            to { transform: scale(1); }
          }

          /* Hide play button and cursor on mobile */
          @media (max-width: 768px) {
            .modal-overlay {
              padding: 10px;
            }
            
            .modal-content {
              max-width: 90vw;
              max-height: 75vh;
            }
            
            .modal-content video {
              max-height: 75vh;
            }
            
            .close-button {
              top: -40px;
              right: 0;
              width: 30px;
              height: 30px;
              font-size: 18px;
            }

            .video-container .video-overlay {
              display: none !important;
            }

            .video-container video {
              cursor: default !important;
            }
          }
        `
      }} />
      
      {/* Text section with container */}
      <div className="container mx-auto px-5 mb-12">
        <div className="flex flex-col items-center justify-center min-h-[30vh]">
          <p className={`text-xl md:text-3xl lg:text-4xl text-gray-700 max-w-4xl text-center ${fontTitle.className}`}>
            Clé Blanche a ouvert son histoire avec une première phase livrée, symbole de rigueur, d&apos;excellence et de raffinement
          </p>
        </div>
      </div>
      
      {/* Full width video section */}
      <div className="video-container w-full relative" onClick={handleVideoClick}>
        <div className="w-full">
          <div className="w-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <video
              className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] object-cover cursor-pointer"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/nouvelle-video-cle-blanche-realisee-avec-clipchamp.webm" type="video/webm" />
              <p>Your browser doesn&apos;t support HTML5 video.</p>
            </video>
            
            {/* Play button overlay */}
            <div className="video-overlay">
              <div className="play-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for video */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
            <video
              controls
              autoPlay
              playsInline
              style={{ display: 'block' }}
            >
              <source src="/nouvelle-video-cle-blanche-realisee-avec-clipchamp.webm" type="video/webm" />
              <p>Your browser doesn&apos;t support HTML5 video.</p>
            </video>
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
              const videoContainer = document.querySelector('.video-container > div');
              if (videoContainer) {
                videoContainer.classList.add('scroll-reveal-video');
                observer.observe(videoContainer);
              }
            };
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initAnimation);
            } else {
              initAnimation();
            }
          }
        `
      }} />
    </section>
  );
};

export default Chapitre1Section;
