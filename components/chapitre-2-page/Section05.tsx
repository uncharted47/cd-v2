import fontTitle from "@/lib/font"

const Section05 = () => (
  <section className="min-h-screen flex flex-col lg:flex-row">
 
    <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-xl">
    
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-second"></div>
          <span className="text-xs uppercase text-second font-semibold tracking-widest">
            Nos terrasses
          </span>
        </div>

    
        <h2 className={`text-3xl md:text-5xl font-bold text-main-black ${fontTitle.className}`}>
          Des espaces de vie, été comme hiver
        </h2>


        <div className="space-y-6">
          <br />
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center lg:text-left mb-4">
            Sur les terrasses de Clé Blanche, la lumière s&apos;installe en toute saison. Quelques plantes, posées avec soin, se balancent au rythme discret de la brise. Rien ne trouble la ligne claire de l&apos;architecture : le vitrage coulissant permet d&apos;ouvrir ou de fermer l&apos;espace en fonction des saisons ou selon vos désirs.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl text-center lg:text-left">
            Ouvert, il efface les frontières. Fermé, il protège sans jamais cloisonner, dans un respect absolu de l&apos;esthétique de la façade. On ne sait plus très bien où finit l&apos;intérieur, où commence l&apos;extérieur. C&apos;est un entre-deux, paisible, propice aux silences, aux lectures, aux matins lents. Un espace à inventer, chaque jour.
          </p>
        </div>

     
       
      </div>
    </div>

  
    <div
      className="lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/chapitre2/SECTION 05.png')",
      }}
    >
 
      <div className="absolute inset-0 bg-black/10"></div>

   
     
    </div>
  </section>
)


export default Section05
