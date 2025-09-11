"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') previousImage();
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyPress);
      // Empêcher le scroll de la page
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  return (
    <>
      {/* Grille d'images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div 
            key={idx} 
            className="group overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => openModal(idx)}
          >
            <div className="relative">
              <Image
                src={src}
                alt={`Galerie image ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Bouton de fermeture */}
          <button
            className="absolute top-4 right-4 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all group"
            onClick={closeModal}
          >
            <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Navigation précédente */}
          {images.length > 1 && (
            <button
              className="absolute left-4 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all group"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          )}

          {/* Navigation suivante */}
          {images.length > 1 && (
            <button
              className="absolute right-4 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all group"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          )}

          {/* Image principale */}
          <div
            className="max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImageIndex]}
              alt={`Galerie image ${selectedImageIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              priority
            />
            
            {/* Indicateur de position */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-4 text-white/70 text-sm">
            <p>Échap pour fermer • Flèches pour naviguer • Clic pour fermer</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGrid;