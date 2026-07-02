# Prompt avvio Codex/Claude Code

Leggi tutto il contenuto del progetto prima di modificare file:

- `README.md`
- `AGENTS.md`
- `CLAUDE.md`
- `01_INPUT_TEMPLATE_HTML/`
- `02_ASSET_TEMPLATE/`
- `03_REGOLE_CONVERSIONE/`
- `04_PROMPT_OPERATIVI/`
- `05_MINI_SITO/README.md`

## Obiettivo

Convertire i template HTML esportati da UX Pilot/Figma in un mini sito statico senza Tailwind, funzionante e pronto per produzione.

## Vincolo assoluto sui testi

I template dentro `01_INPUT_TEMPLATE_HTML/` sono la fonte unica dei testi visibili.

Non devi:

- inventare testi;
- migliorare il copy;
- tradurre;
- cambiare CTA;
- aggiungere sezioni non presenti;
- modificare label, card, footer o microcopy se già presenti nei template.

Devi riusare esattamente i testi che trovi nei template HTML.

## Vincolo visuale

Devi preservare il più possibile:

- font system o font locali indicati;
- palette colori;
- spacing;
- card;
- effetti glass/neon;
- struttura delle tre pagine;
- header;
- footer;
- CTA;
- dettagli visuali.

Non pubblicare l'HTML esportato così com'è: ripuliscilo e trasformalo in HTML semantico mantenendo fedeltà visuale.

## Dove lavorare

Lavora dentro:

`05_MINI_SITO/`

I sorgenti stanno direttamente nella root del mini sito:

- `index.html`
- `servizi.html`
- `contatti.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/`
- `assets/fonts/`
- `robots.txt`
- `sitemap.xml`

Non creare `src/pages`.
Non spostare le pagine in sottocartelle.

## Regole tecniche

1. HTML semantico.
2. Un solo `h1` per pagina.
3. `h2` per sezioni principali.
4. `h3` per card o blocchi secondari.
5. `title` e `meta description` specifici.
6. Charset UTF-8 e viewport presenti.
7. Schema.org JSON-LD coerente, senza inventare dati aziendali non presenti.
8. CSS custom in `assets/css/styles.css`.
9. JS minimo in `assets/js/main.js`.
10. Nessun Tailwind.
11. Nessun CDN inutile.
12. Menu accessibile con tastiera, `aria-expanded`, `aria-controls`, Escape e focus visibile.
13. Form con label reali.
14. Immagini con `alt`, `width` e `height` quando possibile.
15. A fine lavoro eseguire build produzione.

## Build produzione obbligatoria

Da `05_MINI_SITO/` esegui:

```bat
npm.cmd run build
```

La build deve generare:

- `dist/index.html`
- `dist/servizi.html`
- `dist/contatti.html`
- `dist/assets/css/styles.min.css`
- `dist/assets/js/main.min.js`

La cartella da caricare sul server è `dist/`.

## Output richiesto

Alla fine restituisci:

- file modificati;
- conferma che i testi derivano dai template senza invenzioni;
- conferma numero `h1` per pagina;
- conferma CSS/JS minificati;
- conferma HTML minificati;
- conferma che `dist/` è la cartella da caricare sul server;
- eventuali limiti o placeholder da sostituire manualmente.
