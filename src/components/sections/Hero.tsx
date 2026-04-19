import Abschlusskante from '../layout/Abschlusskante';
import TopNav from '../layout/TopNav';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <>
      <section className="cf-hero" aria-label="Corporate Fashion Hero">
        <TopNav variant="negativ" />

        <div className="cf-hero__content">
          <h1 className="cf-hero__headline">
            Corporate Fashion <span className="italic">made easy.</span>
          </h1>
          <p className="cf-hero__subline">
            Wir wählen die richtigen Textilien. Du entscheidest.
          </p>
          <Button to="/corporate-fashion/katalog" size="large">
            Zum Produktkatalog
          </Button>
        </div>
      </section>
      <Abschlusskante variant="weiss" />
    </>
  );
}
