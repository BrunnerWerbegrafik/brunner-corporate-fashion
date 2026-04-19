import { Link } from 'react-router-dom';
import ArrowIcon from '../ui/ArrowIcon';
import ImagePlaceholder from '../ui/ImagePlaceholder';

type Kategorie = {
  id: 'essential' | 'premium' | 'performance' | 'active';
  name: string;
  tagline: string;
  body: string;
  einsatzbereich: string;
  accent: string; // hex
  image?: string;
};

/* TODO(mb): Akzentfarben und Hersteller-Angaben sind laut Briefing
   Abschnitt 9 noch unbestätigt. Aktueller Stand basiert auf
   01-design-tokens.md Abschnitt 1. */
const KATEGORIEN: Kategorie[] = [
  {
    id: 'essential',
    name: 'Essential',
    tagline: 'Die Grundausstattung. Für jeden.',
    body: 'Solide Basis-Textilien für Büro, Verkauf, Events und Alltag. Bewährte Qualität, unkompliziert kombinierbar.',
    einsatzbereich: 'Büro · Verkauf · Events · Alltag',
    accent: '#009fe3',
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Edlere Optik, feinere Haptik.',
    body: 'Hochwertige Stoffe, saubere Schnitte. Für Auftritte, bei denen der erste Eindruck zählt — Empfang, Beratung, Repräsentation.',
    einsatzbereich: 'Empfang · Beratung · Repräsentation',
    accent: '#003e58',
  },
  {
    id: 'performance',
    name: 'Performance',
    tagline: 'Robust. Funktional. Langlebig.',
    body: 'Textilien, die mit dem Arbeitstag mitziehen. Werkstatt, Außendienst, Handwerk — da, wo Kleidung was aushalten muss.',
    einsatzbereich: 'Werkstatt · Außendienst · Handwerk',
    accent: '#30585f',
  },
  {
    id: 'active',
    name: 'Active',
    tagline: 'Sportlich. Atmungsaktiv. In Bewegung.',
    body: 'Funktionsstoffe für Events, Team-Sport, Firmenläufe. Atmungsaktiv, leicht, bewegungsfreundlich.',
    einsatzbereich: 'Team-Sport · Firmenlauf · Outdoor-Event',
    accent: '#e1a9a1',
  },
];

export default function KategorienGrid() {
  return (
    <section className="cf-section cf-container cf-kategorien">
      <h2 className="cf-kategorien__headline">
        Vier Kategorien — <span className="italic">ein Einstieg</span>.
      </h2>
      <p className="cf-kategorien__lead">
        Statt dutzender Artikelnummern drei Fragen: Wo trägst du es? Wie oft?
        Wie soll es aussehen? Unsere vier Kategorien geben die Antworten.
      </p>

      <div className="cf-kategorien__grid">
        {KATEGORIEN.map((k) => (
          <Link
            key={k.id}
            to={`/corporate-fashion/anwendung/${k.id}`}
            className="cf-kategorie-tile"
            style={{ ['--cf-tile-accent' as string]: k.accent }}
          >
            <div className="cf-kategorie-tile__image">
              <ImagePlaceholder caption={`cf-kategorie-${k.id}.webp`} ratio="4/5" />
            </div>
            <div className="cf-kategorie-tile__body">
              <span className="cf-kategorie-tile__accent" aria-hidden="true" />
              <h3 className="cf-kategorie-tile__name">{k.name}</h3>
              <p className="cf-kategorie-tile__tagline">{k.tagline}</p>
              <p className="cf-kategorie-tile__copy">{k.body}</p>
              <p className="cf-kategorie-tile__einsatz">{k.einsatzbereich}</p>
              <span className="cf-kategorie-tile__cta">
                Kategorie ansehen
                <ArrowIcon color="black" size={20} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
