import ArrowIcon from '../ui/ArrowIcon';
import ImagePlaceholder from '../ui/ImagePlaceholder';

/**
 * Sektion 10 — Lookbook-Download.
 * Passives Asset, kein Lead-Gate: direkter PDF-Download.
 * TODO(mb): PDF unter /downloads/brunner-corporate-fashion-lookbook.pdf ablegen.
 */
export default function LookbookCta() {
  return (
    <section className="cf-section cf-container cf-lookbook">
      <div className="cf-lookbook__grid">
        <div className="cf-lookbook__cover">
          <ImagePlaceholder caption="lookbook-cover.webp" ratio="1/1.414" />
        </div>
        <div className="cf-lookbook__text">
          <h2>
            Unser <span className="italic">Lookbook</span>.
          </h2>
          <p className="cf-lookbook__body">
            40 Seiten DIN A4 mit allen Textilarten, den vier Qualitätslevels,
            Veredelungsarten und Referenzprojekten. Gedacht zum ruhigen
            Durchblättern in der eigenen Planung.
          </p>
          <p className="cf-lookbook__hint">
            Kein Formular, kein Lead-Gate. Direkter PDF-Download.
          </p>
          <a
            href="/downloads/brunner-corporate-fashion-lookbook.pdf"
            className="cf-btn cf-btn--primary cf-btn--standard cf-lookbook__cta"
            download
          >
            <span className="cf-btn__label">Lookbook herunterladen (PDF)</span>
            <ArrowIcon color="white" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
