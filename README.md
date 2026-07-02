# Kit conversione HTML UX Pilot → sito statico deploy-root senza Tailwind

Questo kit serve a trasformare template HTML esportati da UX Pilot/Figma in un mini sito statico pulito, senza Tailwind e senza dipendenze esterne.

L'obiettivo è:

- usare i template HTML come fonte fedele di testi, layout, colori, font e dettagli visuali;
- convertire il risultato in HTML semantico, CSS custom e JS minimo;
- minificare HTML, CSS e JS a fine lavoro;
- generare una cartella `dist/` pronta da caricare nella root del server.

## Flusso consigliato

1. Inserire i template HTML esportati da UX Pilot in `01_INPUT_TEMPLATE_HTML/`.
2. Inserire eventuali asset in `02_ASSET_TEMPLATE/`.
3. Aprire la root del kit con Codex o Claude Code.
4. Incollare il prompt `PROMPT_AVVIO_CODEX_CLAUDE.md`.
5. Far lavorare l'agente dentro `05_MINI_SITO/`.
6. Eseguire la build da `05_MINI_SITO/` con `npm.cmd run build`.
7. Caricare sul server **solo il contenuto di `05_MINI_SITO/dist/`**.

## Perché non ci sono pagine in `src/pages`

Per rendere il corso più semplice, i file sorgenti del sito stanno direttamente nella root di `05_MINI_SITO/`:

```text
05_MINI_SITO/
├── index.html
├── servizi.html
├── contatti.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.css
    ├── js/main.js
    ├── img/
    └── fonts/
```

La build genera poi la versione finale in:

```text
05_MINI_SITO/dist/
```

Questa è la cartella deployabile.
