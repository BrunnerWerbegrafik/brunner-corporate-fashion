import ImagePlaceholder from '../ui/ImagePlaceholder';

type Veredelung = {
  id: 'siebdruck' | 'stickerei' | 'dtf' | 'digitaldruck';
  name: string;
  body: string;
  bestFor: string;
};

const VEREDELUNGEN: Veredelung[] = [
  {
    id: 'siebdruck',
    name: 'Siebdruck',
    body: 'Der Klassiker für flächige Logos auf T-Shirts, Polos und Hoodies. Brillante Farben, lange haltbar, ab mittlerer Stückzahl wirtschaftlich.',
    bestFor: 'Flächige Logos · mittlere bis hohe Stückzahl',
  },
  {
    id: 'stickerei',
    name: 'Stickerei',
    body: 'Edel, haptisch, wertig. Für Polos, Jacken und Caps, wo ein hochwertiger Gesamteindruck zählt. Auch für Kleinauflagen geeignet.',
    bestFor: 'Polos · Jacken · Caps · kleine Auflagen',
  },
  {
    id: 'dtf',
    name: 'DTF (Direct-to-Film)',
    body: 'Foto-realistische Motive mit vielen Farben und feinen Verläufen. Flexibel einsetzbar, auch auf schwierigen Stoffen wie Funktionstextilien.',
    bestFor: 'Fotos · feine Verläufe · Funktionstextilien',
  },
  {
    id: 'digitaldruck',
    name: 'Digitaldruck',
    body: 'Schnell und direkt auf das Textil gedruckt. Ideal für kleine Auflagen, Einzelstücke oder Varianten mit personalisierten Namen.',
    bestFor: 'Einzelstücke · Namen · kleine Auflagen',
  },
];

export default function VeredelungenGrid() {
  return (
    <section className="cf-section cf-container cf-veredelungen">
      <h2 className="cf-veredelungen__headline">
        Das passende <span className="italic">Druckverfahren</span>.
      </h2>
      <p className="cf-veredelungen__lead">
        Vier Wege, dein Logo auf den Stoff zu bringen. Wir wählen nach
        Ergebnis — nicht nach Bequemlichkeit.
      </p>

      <div className="cf-veredelungen__grid">
        {VEREDELUNGEN.map((v) => (
          <article key={v.id} className="cf-veredelung">
            <div className="cf-veredelung__images">
              <ImagePlaceholder caption={`cf-${v.id}-ergebnis.webp`} ratio="4/3" />
              <ImagePlaceholder caption={`cf-${v.id}-technik.webp`} ratio="4/3" />
            </div>
            <div className="cf-veredelung__text">
              <h3 className="cf-veredelung__name">{v.name}</h3>
              <p className="cf-veredelung__body">{v.body}</p>
              <p className="cf-veredelung__best-for">
                <strong>Ideal für:</strong> {v.bestFor}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
