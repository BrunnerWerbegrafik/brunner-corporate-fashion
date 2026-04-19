import type { ReactNode } from 'react';

const BRUNNER_BASE = 'https://www.brunner-werbegrafik.de';

const SOCIAL_LINKS: Array<{ href: string; label: string; icon: ReactNode }> = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/brunner-werbegrafik/',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M26,13.08 C26,5.86 20.18,0 13,0 C5.82,0 0,5.86 0,13.08 C0,19.61 4.75,25.02 10.97,26 L10.97,16.86 L7.67,16.86 L7.67,13.08 L10.97,13.08 L10.97,10.20 C10.97,6.92 12.91,5.11 15.88,5.11 C17.30,5.11 18.79,5.36 18.79,5.36 L18.79,8.58 L17.15,8.58 C15.54,8.58 15.03,9.59 15.03,10.63 L15.03,13.08 L18.64,13.08 L18.06,16.86 L15.03,16.86 L15.03,26 C21.25,25.02 26,19.61 26,13.08"
        />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/brunnerwerbegrafik/?hl=de',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13,2.34 C16.47,2.34 16.88,2.36 18.25,2.42 C19.52,2.48 20.21,2.69 20.67,2.87 C21.27,3.10 21.71,3.38 22.16,3.84 C22.62,4.29 22.90,4.73 23.13,5.33 C23.31,5.79 23.52,6.48 23.58,7.75 C23.65,9.12 23.66,9.53 23.66,13 C23.66,16.47 23.65,16.88 23.58,18.25 C23.52,19.52 23.31,20.21 23.13,20.67 C22.90,21.27 22.62,21.71 22.16,22.16 C21.71,22.62 21.27,22.90 20.67,23.13 C20.21,23.31 19.52,23.52 18.25,23.58 C16.88,23.64 16.47,23.66 13,23.66 C9.53,23.66 9.12,23.64 7.75,23.58 C6.48,23.52 5.79,23.31 5.33,23.13 C4.73,22.90 4.29,22.62 3.84,22.16 C3.38,21.71 3.10,21.27 2.87,20.67 C2.69,20.21 2.48,19.52 2.42,18.25 C2.36,16.88 2.34,16.47 2.34,13 C2.34,9.53 2.36,9.12 2.42,7.75 C2.48,6.48 2.69,5.79 2.87,5.33 C3.10,4.73 3.38,4.29 3.84,3.84 C4.29,3.38 4.73,3.10 5.33,2.87 C5.79,2.69 6.48,2.48 7.75,2.42 C9.12,2.36 9.53,2.34 13,2.34 M13,0 C9.47,0 9.03,0.02 7.64,0.08 C6.26,0.14 5.31,0.36 4.48,0.68 C3.63,1.01 2.91,1.46 2.18,2.18 C1.46,2.90 1.02,3.63 0.68,4.48 C0.36,5.31 0.14,6.26 0.08,7.64 C0.02,9.03 0,9.47 0,13 C0,16.53 0.02,16.97 0.08,18.36 C0.14,19.74 0.36,20.69 0.68,21.52 C1.02,22.37 1.46,23.10 2.18,23.82 C2.91,24.54 3.63,24.99 4.48,25.32 C5.31,25.64 6.26,25.86 7.64,25.92 C9.03,25.99 9.47,26 13,26 C16.53,26 16.97,25.99 18.36,25.92 C19.74,25.86 20.69,25.64 21.52,25.32 C22.37,24.99 23.10,24.54 23.82,23.82 C24.54,23.10 24.98,22.37 25.32,21.52 C25.64,20.69 25.86,19.74 25.92,18.36 C25.98,16.97 26,16.53 26,13 C26,9.47 25.98,9.03 25.92,7.64 C25.86,6.26 25.64,5.31 25.32,4.48 C24.98,3.63 24.54,2.90 23.82,2.18 C23.10,1.46 22.37,1.01 21.52,0.68 C20.69,0.36 19.74,0.14 18.36,0.08 C16.97,0.02 16.53,0 13,0"
        />
        <path
          fill="currentColor"
          d="M13,6.32 C9.31,6.32 6.32,9.31 6.32,13 C6.32,16.69 9.31,19.68 13,19.68 C16.69,19.68 19.68,16.69 19.68,13 C19.68,9.31 16.69,6.32 13,6.32 M13,17.33 C10.61,17.33 8.67,15.39 8.67,13 C8.67,10.61 10.61,8.67 13,8.67 C15.39,8.67 17.33,10.61 17.33,13 C17.33,15.39 15.39,17.33 13,17.33"
        />
        <circle fill="currentColor" cx="19.94" cy="6.06" r="1.56" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://de.linkedin.com/company/brunner-druck',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22.15,22.15 L18.30,22.15 L18.30,16.12 C18.30,14.68 18.28,12.83 16.30,12.83 C14.29,12.83 13.98,14.40 13.98,16.02 L13.98,22.15 L10.13,22.15 L10.13,9.75 L13.83,9.75 L13.83,11.44 L13.88,11.44 C14.64,10.15 16.04,9.38 17.53,9.44 C21.43,9.44 22.16,12.01 22.16,15.35 L22.15,22.15 Z M5.78,8.05 C4.55,8.05 3.55,7.05 3.55,5.82 C3.55,4.58 4.55,3.58 5.78,3.58 C7.02,3.58 8.02,4.58 8.02,5.81 C8.02,7.05 7.02,8.05 5.78,8.05 L5.78,8.05 Z M3.86,22.15 L7.71,22.15 L7.71,9.75 L3.86,9.75 L3.86,22.15 Z M24.07,0 L1.92,0 C0.87,-0.01 0.01,0.83 0,1.88 L0,24.12 C0.01,25.17 0.87,26.01 1.92,26 L24.07,26 C25.12,26.01 25.99,25.17 26.00,24.12 L26.00,1.87 C25.99,0.82 25.12,-0.01 24.07,0 Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="cf-footer">
      <div className="cf-footer__inner">
        <img
          src="/images/Logo-Brunner_Werbegrafik-nebeneinander-RGB-positiv.svg"
          alt="Brunner Werbegrafik Logo"
          className="cf-footer__logo"
        />

        <div className="cf-footer__divider" />

        <div className="cf-footer__grid">
          <div className="cf-footer__left">
            <address className="cf-footer__address">
              <strong>Brunner Werbegrafik OHG</strong>
              <br />
              Lagerhausstraße 8<br />
              83109 Großkarolinenfeld
              <br />
              Deutschland
              <br />
              <br />
              Tel.{' '}
              <a href="tel:+49803181118" className="cf-footer__link">
                +49 (0) 80 31 - 8 111 8
              </a>
              <br />
              <a href="mailto:info@brunner-werbegrafik.de" className="cf-footer__link">
                info@brunner-werbegrafik.de
              </a>
            </address>

            <p className="cf-footer__hours">
              <strong>Öffnungszeiten</strong>
              <br />
              Montag bis Freitag
              <br />
              08.30 – 12.00 Uhr | 12.30 – 17.00 Uhr
            </p>

            <div className="cf-footer__social" aria-label="Social Media">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="cf-footer__social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="cf-footer__sitemap" aria-label="Sitemap">
            <div className="cf-footer__col">
              <a href={`${BRUNNER_BASE}/#Leistungen`} className="cf-footer__link cf-footer__link--bold">
                Leistungen
              </a>
              <a href={`${BRUNNER_BASE}/#Print-Konzept`} className="cf-footer__link">
                Konzept
              </a>
              <a href={`${BRUNNER_BASE}/#Print-Design`} className="cf-footer__link">
                Design
              </a>
              <a href={`${BRUNNER_BASE}/#Print-Produktion`} className="cf-footer__link">
                Produktion
              </a>
            </div>

            <div className="cf-footer__col">
              <a href={`${BRUNNER_BASE}/#branchen`} className="cf-footer__link cf-footer__link--bold">
                Branchen &amp; Themen
              </a>
            </div>

            <div className="cf-footer__col">
              <a href={`${BRUNNER_BASE}/#Printmedien`} className="cf-footer__link cf-footer__link--bold">
                Printmedien
              </a>
              <a href={`${BRUNNER_BASE}/druckprodukte`} className="cf-footer__link">
                Druckprodukte
              </a>
              <a href={`${BRUNNER_BASE}/werbetechnik`} className="cf-footer__link">
                Werbetechnik
              </a>
              <a href={`${BRUNNER_BASE}/textildruck`} className="cf-footer__link">
                Textildruck
              </a>
              <a href={`${BRUNNER_BASE}/werbeartikel`} className="cf-footer__link">
                Werbeartikel
              </a>
            </div>

            <div className="cf-footer__col">
              <a href={`${BRUNNER_BASE}/unternehmen`} className="cf-footer__link cf-footer__link--bold">
                Unternehmen
              </a>
              <a href={`${BRUNNER_BASE}/unternehmen#Ueber-uns`} className="cf-footer__link">
                Über uns
              </a>
              <a href={`${BRUNNER_BASE}/unternehmen#Team`} className="cf-footer__link">
                Team
              </a>
              <a href={`${BRUNNER_BASE}/unternehmen#Karriere`} className="cf-footer__link">
                Karriere
              </a>
              <a href={`${BRUNNER_BASE}/unternehmen#Kontaktformular`} className="cf-footer__link">
                Kontakt
              </a>
            </div>

            <div className="cf-footer__col cf-footer__col--downloads">
              {/* TODO(mb): Lookbook-PDF einfügen, sobald Asset geliefert. */}
              <a
                href="/downloads/brunner-corporate-fashion-lookbook.pdf"
                className="cf-footer__link"
              >
                Download Corporate Fashion Lookbook
              </a>
              <a
                href={`${BRUNNER_BASE}/downloads/firmenbroschuere-print-desktop-2024-03.pdf`}
                className="cf-footer__link"
              >
                Download der Firmenbroschüre
              </a>
            </div>

            <div className="cf-footer__col">
              <a href={`${BRUNNER_BASE}/impressum`} className="cf-footer__link cf-footer__link--bold">
                Impressum
              </a>
              <a href={`${BRUNNER_BASE}/datenschutz`} className="cf-footer__link">
                Datenschutz
              </a>
            </div>
          </nav>
        </div>

        <p className="cf-footer__copyright">
          Design und Code von
          <br />
          Brunner Werbegrafik
          <br />
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
