# Brunner Corporate Fashion

Themenseite „Corporate Fashion" für **Brunner Werbegrafik OHG** —
eigenständige React-App, die als Sub-Pfad unter
`brunner-werbegrafik.de/branchen-und-themen/corporate-fashion`
eingebunden wird.

## Stack

- Vite + React 18 + TypeScript
- React Router v6
- Tailwind CSS (mit Brunner-Design-Tokens)
- Eigene CSS für Brunner-typische Effekte (background-clip-Headlines,
  Italic-Teilwörter, Abschlusskanten)

## Entwicklung

```bash
npm install
npm run dev        # Dev-Server
npm run build      # Type-Check + Production-Build
npm run preview    # Vorschau des Builds
```

## Projekt-Struktur

```
public/
  fonts/         Avenir LT, Avenir Next LT Italic, Material Icons
  images/        Brunner-Assets (Logo, Headline-Textur, Abschlusskanten, Pfeil)
  downloads/     Lookbook-PDF (wird später ergänzt)
src/
  components/    layout · sections · ui
  contexts/      CartContext (Stufe 2)
  pages/         Landing + Platzhalter-Routen
  services/      Mock-Daten (Stufe 2)
  styles/        globals.css — Brunner-Styles, eigene Implementierung
  types/         Models
```

## Status

- Schritt 1 — Projekt-Grundgerüst: fertig
- **Schritt 2 — Layout-Komponenten (TopNav, Footer, Abschlusskante):** fertig
- Schritt 3 — 12 Sektionen der Themenseite: offen
- Schritt 4 — Routen-Gerüst Stufe 2: offen
- Schritt 5 — Datenmodell & Service-Layer: offen
