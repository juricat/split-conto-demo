# Mini sito deploy-root senza Tailwind

Questa cartella è organizzata in modo semplice: i file sorgenti del sito stanno già nella root di `05_MINI_SITO`.

## Sorgenti modificabili

- `index.html`
- `servizi.html`
- `contatti.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `assets/img/`
- `assets/fonts/`
- `robots.txt`
- `sitemap.xml`

Questa struttura assomiglia già a quella che finirà online, quindi è più facile da capire durante una demo o un corso.

## Build produzione

Da questa cartella lancia:

```bat
npm.cmd run build
```

oppure:

```bat
setup-build.bat
```

La build crea `dist/` con:

- HTML minificati in root;
- `assets/css/styles.min.css`;
- `assets/js/main.min.js`;
- immagini e font copiati;
- `robots.txt` e `sitemap.xml` copiati.

## Cosa caricare sul server

Caricare **il contenuto della cartella `dist/`**, non l'intera cartella progetto.

Esempio server:

```text
public_html/
├── index.html
├── servizi.html
├── contatti.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/styles.min.css
    ├── js/main.min.js
    ├── img/
    └── fonts/
```

Non caricare sul server:

- `tools/`
- `package.json`
- `setup-build.bat`
- `setup-build.ps1`
- file README o prompt.
