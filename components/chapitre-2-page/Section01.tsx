import React from 'react';
// import Image from 'next/image';
import fontTitle from '@/lib/font';

const Section01 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

        <span className={`text-2xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg text-center lg:text-left ${fontTitle.className}`}>
              Des volumes épurés{' '}
              <span className="text-gray-900 font-bold">baignés de lumière</span>{' '}
              <span className="text-gray-900 font-bold">aux finitions exceptionnelles</span>

              <div className="grid grid-cols-2 gap-4 pt-6">
              <Feature text="Finitions premium" />
              <Feature text="Lumière naturelle" />
              <Feature text="Matériaux nobles" />
              <Feature text="Espaces ouverts" />
            </div>
            
            </span>

            <div className="space-y-6">
              <p>
                À Clé Blanche, la lumière est chez elle. Elle glisse sur le marbre, 
                effleure le noyer, traverse d&apos;immenses baies vitrées. Chaque espace 
                respire, ouvert sur l&apos;extérieur, baigné d&apos;une clarté changeante.
              </p>

              <p >
                Sobres et épurés, nos intérieurs marient luxe discret et matériaux 
                bruts dans une palette neutre, propice à l&apos;expression personnelle. 
                Les finitions soignées reflètent notre exigence.
              </p>

              <p >
                Sur les terrasses, la ville s&apos;efface, laissant place à un décor apaisé. 
                 Un lieu de vie, un refuge. 
              </p>
            </div>

            

       
          
        </div>
      </div>
    </section>
  );
};


const Feature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-main rounded-full"></div>
    <span className="text-lg text-gray-600">{text}</span>
  </div>
);


export default Section01;
