import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'standard' | 'negativ';

type Props = {
  /**
   * 'negativ' = weiße Schrift auf dunklem Hero-Overlay (Themenseiten).
   * 'standard' = schwarze Schrift auf weißem/hellen Hintergrund.
   */
  variant?: Variant;
};

const BRUNNER_BASE = 'https://www.brunner-werbegrafik.de';

const PRINTMEDIEN_LINKS: Array<{ href: string; label: string }> = [
  { href: `${BRUNNER_BASE}/druckprodukte`, label: 'Druckprodukte' },
  { href: `${BRUNNER_BASE}/werbetechnik`, label: 'Werbetechnik' },
  { href: `${BRUNNER_BASE}/textildruck`, label: 'Textildruck' },
  { href: `${BRUNNER_BASE}/werbeartikel`, label: 'Werbeartikel' },
];

export default function TopNav({ variant = 'negativ' }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef<number | null>(null);

  // Menü schließen, wenn auf Desktop-Größe gewechselt wird
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)');
    const onChange = () => {
      if (mq.matches) setMobileOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const openDropdown = () => {
    if (dropdownTimer.current) {
      window.clearTimeout(dropdownTimer.current);
      dropdownTimer.current = null;
    }
    setDropdownOpen(true);
  };

  const closeDropdownDelayed = () => {
    dropdownTimer.current = window.setTimeout(() => setDropdownOpen(false), 120);
  };

  const isNegativ = variant === 'negativ';

  return (
    <nav
      className={`cf-nav ${isNegativ ? 'cf-nav--negativ' : 'cf-nav--standard'} ${
        mobileOpen ? 'cf-nav--mobile-open' : ''
      }`}
      aria-label="Hauptnavigation"
    >
      <div className="cf-nav__inner">
        <a href={BRUNNER_BASE} className="cf-nav__brand" aria-label="Brunner Werbegrafik — Startseite">
          <img
            src="/images/Logo-Brunner_Werbegrafik-nebeneinander-RGB-positiv.svg"
            alt="Brunner Werbegrafik Logo"
            width={180}
            className="cf-nav__logo"
          />
        </a>

        <button
          type="button"
          className="cf-nav__hamburger"
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="20" height="12" viewBox="0 0 20 12" aria-hidden="true">
            <g fill="currentColor" fillRule="evenodd">
              <path d="M20,0 L19.4,2 L0,2 L0,0 L20,0 Z" />
              <path d="M18.5,5 L17.9,7 L0,7 L0,5 L18.5,5 Z" />
              <path d="M17,10 L16.4,12 L0,12 L0,10 L17,10 Z" />
            </g>
          </svg>
        </button>

        <div className="cf-nav__menu" role="menubar">
          <a href={`${BRUNNER_BASE}/#Leistungen`} className="cf-nav__link" role="menuitem">
            Leistungen
          </a>
          <a href={`${BRUNNER_BASE}/#branchen`} className="cf-nav__link" role="menuitem">
            Branchen &amp; Themen
          </a>

          <div
            className={`cf-nav__dropdown ${dropdownOpen ? 'is-open' : ''}`}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdownDelayed}
          >
            <button
              type="button"
              className="cf-nav__link cf-nav__dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((v) => !v)}
            >
              Printmedien
              <svg
                className="cf-nav__dropdown-arrow"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M2.14,7.89l1.78-1.78,8.23,8.23,8.23-8.23,1.78,1.78-10,10L2.14,7.89Z"
                />
              </svg>
            </button>
            <div className="cf-nav__dropdown-list" role="menu">
              {PRINTMEDIEN_LINKS.map((item) => (
                <a key={item.href} href={item.href} className="cf-nav__dropdown-link" role="menuitem">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a href={`${BRUNNER_BASE}/unternehmen`} className="cf-nav__link" role="menuitem">
            Unternehmen
          </a>

          {/* TODO(mb): Anfragekorb-Icon mit Badge einhängen, sobald CartContext in Stufe 2 steht. */}
          <Link
            to="/corporate-fashion/anfragekorb"
            className="cf-nav__link cf-nav__cart"
            aria-label="Anfragekorb"
            role="menuitem"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.17 14.75l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01.01-.01H5.21l-.94-2H1v2h2l3.6 7.59L5.25 14.04A2 2 0 007 17h12v-2H7.42c-.13 0-.25-.11-.25-.25z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
