# edelhaus — Immobilien-Investment auf Bali (Portfolio-Demo)

Landing einer Immobilien-Agentur: Premium-Villen & Apartments auf Bali mit garantiertem Management und deutschsprachiger Betreuung. Persönliche Portfolio-Arbeit — **kein reales Angebot**, alle Objekte, Preise und Renditen sind Demo-Daten.

**Live:** siehe GitHub Pages (Settings → Pages).

## Features
- Umsetzung aus Figma-Design.
- Mehrsprachig: **DE** (Standard) · EN · RU · UK, Umschalter im Header (localStorage).
- Objekt-Katalog mit Typ-Filter, Detail-Modals, realistische Bali-Marktdaten.
- Formulare (Online-Tour, Anfrage) mit Validierung und Toast-Feedback (Demo, kein Backend).
- Eigene Line-Icons (SVG), einheitliches Button-/Grid-System, responsive (Desktop/Tablet/Mobile).

## Stack
Statisches HTML/CSS/JS, keine Build-Tools. `index.html` öffnen oder lokal servieren:

```
python3 -m http.server 8099   # → http://localhost:8099
```

## Struktur
- `index.html` — Landing
- `assets/css/styles.css` — Design-System & Layout
- `assets/js/app.js` — i18n (DE/EN/RU/UK), Katalog, Modals, Formulare
- `assets/img/` — Bilder & Partner-Logos
- `impressum.html`, `datenschutz.html` — Rechtstexte (Demo)
- `docs/` — Spezifikation & Design-System
