import ArrowIcon from '../ui/ArrowIcon';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import Button from '../ui/Button';

/**
 * Sektion 11 — Abschluss-CTA mit Ansprechpartner Martin Brunner.
 * TODO(mb): Portrait martin-brunner.webp aus bestehender
 * Brunner-Asset-Library übernehmen (laut Briefing im `images/`-Ordner
 * des Originals vorhanden).
 */
export default function AbschlussCta() {
  return (
    <section className="cf-section cf-container cf-abschluss">
      <div className="cf-abschluss__grid">
        <div className="cf-abschluss__text">
          <h2>
            Bereit für den <span className="italic">einheitlichen Auftritt</span>
            <br />
            deines Teams?
          </h2>
          <p className="cf-abschluss__lead">
            Zwei Minuten für ein erstes Gespräch. Ich melde mich persönlich —
            kein Callcenter, keine Weiterleitung.
          </p>

          <div className="cf-abschluss__actions">
            <Button to="/corporate-fashion/katalog" size="large">
              Zum Produktkatalog
            </Button>
            <a
              href="mailto:info@brunner-werbegrafik.de?subject=Corporate%20Fashion%20Anfrage"
              className="cf-btn cf-btn--text cf-btn--standard"
            >
              <span className="cf-btn__label">Direkt schreiben</span>
              <ArrowIcon color="black" size={24} className="cf-btn__arrow" />
            </a>
          </div>
        </div>

        <div className="cf-abschluss__contact">
          <div className="cf-abschluss__portrait">
            <ImagePlaceholder caption="martin-brunner.webp" ratio="1/1" />
          </div>
          <div>
            <p className="cf-abschluss__name">
              <strong>Martin Brunner</strong>
            </p>
            <p className="cf-abschluss__role">Geschäftsführer</p>
            <p className="cf-abschluss__channels">
              <a href="tel:+49803181118" className="cf-footer__link">
                +49 (0) 80 31 - 8 111 8
              </a>
              <br />
              <a href="mailto:info@brunner-werbegrafik.de" className="cf-footer__link">
                info@brunner-werbegrafik.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
