type Schritt = {
  nummer: string;
  name: string;
  body: string;
};

const SCHRITTE: Schritt[] = [
  {
    nummer: '01',
    name: 'Beratung',
    body: 'Wir hören zu: Wer trägt das Teil? Wo? Wie oft? Welches Bild von deiner Marke soll es transportieren? Daraus leitet sich die Textilauswahl ab.',
  },
  {
    nummer: '02',
    name: 'Visualisierung',
    body: 'Du siehst dein Logo auf dem Textil, bevor wir drucken. Händisch erstellte Mockups, auf Wunsch ein Testausdruck in Originalgröße.',
  },
  {
    nummer: '03',
    name: 'Produktion',
    body: 'Erst nach deiner Freigabe geht es in den Druck. Wir begleiten Qualitätskontrolle und Auslieferung — ohne dass du dich drum kümmern musst.',
  },
];

export default function ProzessSchritte() {
  return (
    <section className="cf-section cf-container cf-prozess">
      <h2 className="cf-prozess__headline">
        In <span className="italic">drei Schritten</span>
        <br />
        zu deinem fertigen Auftritt.
      </h2>

      <ol className="cf-prozess__list">
        {SCHRITTE.map((s) => (
          <li key={s.nummer} className="cf-prozess__step">
            <span className="cf-prozess__nummer" aria-hidden="true">
              {s.nummer}
            </span>
            <div className="cf-prozess__text">
              <h3 className="cf-prozess__name">{s.name}</h3>
              <p className="cf-prozess__body">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
