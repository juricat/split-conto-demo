# Prompt conversione fedele senza Tailwind

Converti i template HTML dentro `01_INPUT_TEMPLATE_HTML/` in un mini sito statico dentro `05_MINI_SITO/`.

Vincoli:

- riusa esattamente i testi dei template;
- conserva font, colori, spacing, card, effetti e struttura;
- non inventare nuove sezioni;
- non creare `src/pages`;
- sorgenti in root: `index.html`, `servizi.html`, `contatti.html`;
- CSS in `assets/css/styles.css`;
- JS in `assets/js/main.js`;
- build finale con `npm.cmd run build`;
- output deployabile in `dist/`.
