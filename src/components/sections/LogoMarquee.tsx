/* TODO(mb): Original-Logos aus Brunner-Asset-Library ablegen:
   /images/logo-cafe-muehle.svg
   /images/logo-voltomic.svg
   /images/logo-autohaus-bernegger.svg
   /images/logo-boerse-de.svg
   /images/logo-team-pro.svg
   /images/logo-bbw.svg
   Dann `USE_REAL_LOGOS = true` setzen und die Namen hier einfügen. */

const LOGOS = [
  'Café Mühle',
  'Voltomic',
  'Autohaus Bernegger',
  'boerse.de Group AG',
  'TeamPro',
  'BBW Laser Technik',
];

const USE_REAL_LOGOS = false;

export default function LogoMarquee() {
  // Doppelter Inhalt für nahtloses Loop
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section
      className="cf-marquee cf-section--reduced"
      aria-label="Referenzen — eine Auswahl unserer Kunden"
    >
      <div className="cf-marquee__viewport">
        <div className="cf-marquee__track">
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="cf-marquee__item">
              {USE_REAL_LOGOS ? (
                <img
                  src={`/images/logo-${slugify(name)}.svg`}
                  alt={`${name} Logo`}
                  className="cf-marquee__logo"
                />
              ) : (
                <span className="cf-marquee__placeholder">{name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/é/g, 'e')
    .replace(/\./g, '')
    .replace(/\s+/g, '-');
}
