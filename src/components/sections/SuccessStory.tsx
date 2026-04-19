import { useEffect, useState } from 'react';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const SLIDES = [
  { caption: 'referenz-cafe-muehle-1.webp', alt: 'Polohemd mit aufgesticktem Café-Mühle-Logo' },
  { caption: 'referenz-cafe-muehle-2.webp', alt: 'Gestickte Polohemden im Stapel' },
  { caption: 'referenz-cafe-muehle-3.webp', alt: 'Stickerei-Detail mit Café-Mühle-Logo' },
  { caption: 'referenz-cafe-muehle-4.webp', alt: 'Team im Café in Brunner-Polohemden' },
];

/**
 * Sektion 9 — Success Story Café Mühle.
 * Einfacher Autoplay-Slider ohne externe Library (kein Splide-Import,
 * um Bundle-Größe klein zu halten). Slide-Wechsel alle 5 s, pausiert
 * bei Hover.
 *
 * TODO(mb): Echte Referenzbilder aus Café Mühle einsetzen
 * (/images/referenz-cafe-muehle-1..n.webp) + Portrait florian-lechner.webp
 * + Logo logo-cafe-muehle.svg.
 */
export default function SuccessStory() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="cf-section cf-container cf-success">
      <h2 className="cf-success__headline">
        Von der ersten Idee bis zum <span className="italic">fertigen Auftritt</span>.
      </h2>

      <div
        className="cf-success__slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Referenz Café Mühle — Bildergalerie"
      >
        <div className="cf-success__viewport">
          <div
            className="cf-success__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((s) => (
              <div key={s.caption} className="cf-success__slide">
                <ImagePlaceholder caption={s.caption} ratio="16/10" />
              </div>
            ))}
          </div>
        </div>
        <div className="cf-success__dots" role="tablist">
          {SLIDES.map((s, i) => (
            <button
              key={s.caption}
              type="button"
              className={`cf-success__dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Slide ${i + 1} von ${SLIDES.length}`}
              aria-selected={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <blockquote className="cf-success__quote">
        <div className="cf-success__portrait">
          <ImagePlaceholder caption="florian-lechner.webp" ratio="1/1" />
        </div>
        <div className="cf-success__quote-body">
          <p className="cf-success__zitat">
            „Von der ersten Idee, uns mit Firmenkleidung auszustatten, über die
            Auswahl der Textilien und Farben, bis hin zum passenden Druckverfahren,
            habe ich mich immer sehr gut beraten gefühlt. Die Qualität der fertig
            bedruckten T-Shirts und Poloshirts haben meine Mitarbeiter und mich
            begeistert! Wie immer war es mit dem Team von Brunner Werbegrafik eine
            einfache und flüssige Zusammenarbeit."
          </p>
          <footer className="cf-success__attribution">
            <strong>Florian Lechner</strong>
            <br />
            Geschäftsführung
            <br />
            Café Mühle im Tierpark Hellabrunn
          </footer>
        </div>
      </blockquote>
    </section>
  );
}
