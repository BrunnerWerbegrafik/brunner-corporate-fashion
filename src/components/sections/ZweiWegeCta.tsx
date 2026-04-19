import { Link } from 'react-router-dom';
import ArrowIcon from '../ui/ArrowIcon';

/**
 * Sektion 5 — Zwei-Wege-CTA: der Besucher entscheidet, wie er zum
 * Katalog einsteigt.
 *  - links: Über Textilart (T-Shirts, Polos, …)
 *  - rechts: Über Qualitätslevel (Essential, Premium, Performance, Active)
 */
export default function ZweiWegeCta() {
  return (
    <section className="cf-section cf-container cf-two-way">
      <h2 className="cf-two-way__headline">
        Zwei Wege <span className="italic">zu deinem Team-Look.</span>
      </h2>
      <p className="cf-two-way__lead">Du entscheidest, wo du startest.</p>

      <div className="cf-two-way__grid">
        <Link to="/corporate-fashion/katalog" className="cf-two-way__tile">
          <h3 className="cf-two-way__tile-headline">
            Ich weiß, <span className="italic">was</span> ich brauche.
          </h3>
          <p className="cf-two-way__tile-body">
            Einstieg über die Textilart: T-Shirts, Poloshirts, Sweats &amp;
            Hoodies, Jacken &amp; Westen oder Weiteres. Für alle, die schon
            wissen, welches Teil ihr Team tragen soll.
          </p>
          <span className="cf-two-way__cta">
            Zum Textilkatalog
            <ArrowIcon color="cyan" size={22} />
          </span>
        </Link>

        <Link to="/corporate-fashion/anwendung" className="cf-two-way__tile">
          <h3 className="cf-two-way__tile-headline">
            Ich weiß, <span className="italic">wofür</span> ich es brauche.
          </h3>
          <p className="cf-two-way__tile-body">
            Einstieg über das Qualitätslevel: Essential, Premium, Performance
            oder Active. Für alle, die zuerst den Einsatzbereich im Blick
            haben — Büro, Werkstatt, Event, Sport.
          </p>
          <span className="cf-two-way__cta">
            Zur Anwendung
            <ArrowIcon color="cyan" size={22} />
          </span>
        </Link>
      </div>
    </section>
  );
}
