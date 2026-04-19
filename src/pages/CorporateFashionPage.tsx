import Abschlusskante from '../components/layout/Abschlusskante';
import Footer from '../components/layout/Footer';
import TopNav from '../components/layout/TopNav';

export default function CorporateFashionPage() {
  return (
    <div className="cf-app">
      {/* Hero mit eingebetteter TopNav in Negativ-Variante.
          TODO(mb): Hero-Hintergrundbild HG-corporate-fashion.webp
          einsetzen, sobald geliefert. Aktuell Platzhalter-Verlauf. */}
      <section className="cf-hero-placeholder">
        <TopNav variant="negativ" />
        <div className="cf-hero-placeholder__content">
          <h1>
            Corporate Fashion <span className="italic">made easy.</span>
          </h1>
          <p className="cf-hero-placeholder__subline">
            Wir wählen die richtigen Textilien. Du entscheidest.
          </p>
        </div>
      </section>

      <Abschlusskante variant="weiss" />

      <main className="cf-container cf-section">
        <h2>
          Grundgerüst <span className="italic">steht.</span>
        </h2>
        <p className="cf-paragraph-large">
          Schritt 2 fertig: TopNav, Footer und Abschlusskante als
          wiederverwendbare Komponenten. Die 12 Sektionen folgen in Schritt 3.
        </p>
      </main>

      <Abschlusskante variant="grau" />

      <Footer />
    </div>
  );
}
