import HeroSection from "@/components/notre-marque-page/HeroSection";
import Section01Marque from "@/components/notre-marque-page/Section01Marque";
import Section02Marque from "@/components/notre-marque-page/Section02Marque";
// import Section03Marque from "@/components/notre-marque-page/Section03Marque";
import Section04Marque from "@/components/notre-marque-page/Section04Marque";
import Section05Marque from "@/components/notre-marque-page/Section05Marque";
import SectionArtiste from "@/components/notre-marque-page/SectionArtiste";
import SectionMarqueAnimated from "@/components/notre-marque-page/SectionMarqueAnimated";

export default function NotreMarquePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <Section01Marque />
      
      <Section02Marque />

     <SectionMarqueAnimated />
      <Section04Marque />
      <div className="flex flex-col md:flex-row gap-4">
        <Section05Marque />
        <SectionArtiste />
      </div>

      {/* hfj */}
    </main>
  );
}
