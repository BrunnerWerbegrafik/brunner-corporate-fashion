import type { ReactNode } from 'react';

type Usp = {
  icon: ReactNode;
  headline: string;
  body: string;
};

/* TODO(mb): Wenn die finalen Icon-SVGs (icon-textilauswahl.svg,
   icon-ansprechpartner.svg, icon-druckverfahren.svg,
   icon-visualisierung.svg) geliefert sind, ersetze die Inline-SVGs
   durch <img src="/images/icon-...svg" … />. */
const IconTextilauswahl = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 18l20-10 20 10v20l-20 10L8 38V18z" />
      <path d="M8 18l20 10 20-10" />
      <path d="M28 28v20" />
      <polyline points="20,22 26,28 36,18" />
    </g>
  </svg>
);

const IconAnsprechpartner = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="18" r="8" />
      <path d="M12 46c0-8 8-14 16-14s16 6 16 14" />
      <path d="M40 26v6a8 8 0 01-8 8" />
      <path d="M16 26v6" />
    </g>
  </svg>
);

const IconDruckverfahren = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="14" width="32" height="18" rx="2" />
      <path d="M16 14V8h24v6" />
      <path d="M16 32v12h24V32" />
      <circle cx="38" cy="22" r="2" fill="currentColor" />
    </g>
  </svg>
);

const IconVisualisierung = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 28c6-10 14-16 24-16s18 6 24 16c-6 10-14 16-24 16S10 38 4 28z" />
      <circle cx="28" cy="28" r="7" />
    </g>
  </svg>
);

const USPS: Usp[] = [
  {
    icon: <IconTextilauswahl />,
    headline: 'Kuratierte Textilauswahl',
    body: 'Wir haben getestet, selektiert und in vier Kategorien eingeteilt. Du bekommst nicht irgendeine Auswahl — sondern die richtige.',
  },
  {
    icon: <IconAnsprechpartner />,
    headline: 'Ein persönlicher Ansprechpartner',
    body: 'Kein Weiterleiten, kein „Ich frag mal nach". Du hast eine feste Ansprechperson, die dein Projekt von Anfang bis Ende begleitet.',
  },
  {
    icon: <IconDruckverfahren />,
    headline: 'Das optimale Druckverfahren',
    body: 'Siebdruck, Stickerei, DTF oder Digitaldruck — wir wählen nach Ergebnis, nicht nach Bequemlichkeit. Das beste Verfahren für dein Projekt.',
  },
  {
    icon: <IconVisualisierung />,
    headline: 'Visualisierung vor Produktion',
    body: 'Du siehst dein Logo auf dem Textil, bevor wir drucken. Händisch erstellt, auf Wunsch als Testausdruck in Originalgröße. Erst nach deiner Freigabe geht\u2019s los.',
  },
];

export default function UspGrid() {
  return (
    <section className="cf-section cf-container cf-usps">
      <h2 className="cf-usps__headline">
        Willst du, dass dein Team auf den ersten Blick
        <br />
        <span className="italic">erkennbar</span> ist?
      </h2>

      <div className="cf-usps__grid">
        {USPS.map((usp) => (
          <article key={usp.headline} className="cf-usp">
            <div className="cf-usp__icon">{usp.icon}</div>
            <div className="cf-usp__text">
              <h3 className="cf-usp__headline">{usp.headline}</h3>
              <p className="cf-usp__body">{usp.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
