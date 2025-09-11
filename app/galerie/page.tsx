import HeroSection from '@/components/galerie-page/HeroSection';
import Chapitre1Section from '@/components/galerie-page/Chapitre1Section';
import Chapitre2Section from '@/components/galerie-page/Chapitre2Section';
import TemoinSection from '@/components/galerie-page/TemoinSection';

export default function GaleriePage() {
  return (
    <main>
      <HeroSection />
      <Chapitre1Section />
      <Chapitre2Section />
      <TemoinSection />
    </main>
  );
}
