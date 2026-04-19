/**
 * Sektion 2 — Positionierung / Leitidee.
 * Kurzversion des USP-Icon-Blocks (1 Icon + Text), setzt den Kontext
 * für alle weiteren Sektionen.
 *
 * TODO(mb): finaler Text für die Leitidee fehlt noch im Briefing.
 * Aktueller Platzhalter ist eine verdichtete Form der Block-1-Positionierung.
 */
export default function Positionierung() {
  return (
    <section className="cf-section cf-container cf-positionierung">
      <div className="cf-positionierung__inner">
        <div>
          <h2>
            Ein <span className="italic">einheitlicher Auftritt</span>
            <br />
            macht den Unterschied.
          </h2>
          <p className="cf-paragraph-large cf-positionierung__copy">
            Corporate Fashion ist mehr als ein T-Shirt mit Logo. Sie ist der
            sichtbare Ausdruck deiner Marke — auf Messen, am Empfang,
            in der Werkstatt, beim Kunden. Wir wählen die richtigen Textilien,
            veredeln sie passend zu deinem Design und sorgen dafür, dass dein
            Team auf den ersten Blick erkennbar ist.
          </p>
        </div>
      </div>
    </section>
  );
}
