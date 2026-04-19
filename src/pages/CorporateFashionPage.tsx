import Abschlusskante from '../components/layout/Abschlusskante';
import Footer from '../components/layout/Footer';
import AbschlussCta from '../components/sections/AbschlussCta';
import Breadcrumb from '../components/sections/Breadcrumb';
import Hero from '../components/sections/Hero';
import KategorienGrid from '../components/sections/KategorienGrid';
import LogoMarquee from '../components/sections/LogoMarquee';
import LookbookCta from '../components/sections/LookbookCta';
import Positionierung from '../components/sections/Positionierung';
import ProzessSchritte from '../components/sections/ProzessSchritte';
import SuccessStory from '../components/sections/SuccessStory';
import UspGrid from '../components/sections/UspGrid';
import VeredelungenGrid from '../components/sections/VeredelungenGrid';
import ZweiWegeCta from '../components/sections/ZweiWegeCta';

export default function CorporateFashionPage() {
  return (
    <div className="cf-app">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Breadcrumb + Positionierung */}
      <Breadcrumb />
      <Positionierung />

      {/* 3. USPs */}
      <UspGrid />

      {/* 4. Logo-Marquee */}
      <LogoMarquee />

      {/* 5. Zwei-Wege-CTA */}
      <ZweiWegeCta />

      {/* 6. 4 Kategorien */}
      <KategorienGrid />

      {/* 7. Veredelungen (graue Sektion) */}
      <Abschlusskante variant="grau" />
      <VeredelungenGrid />
      <Abschlusskante variant="weiss" />

      {/* 8. Prozess */}
      <ProzessSchritte />

      {/* 9. Success Story (graue Sektion) */}
      <Abschlusskante variant="grau" />
      <SuccessStory />
      <Abschlusskante variant="weiss" />

      {/* 10. Lookbook-Download */}
      <LookbookCta />

      {/* 11. Abschluss-CTA + Ansprechpartner (graue Sektion) */}
      <Abschlusskante variant="grau" />
      <AbschlussCta />

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
