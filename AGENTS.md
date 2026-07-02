# Istruzioni per agenti AI

Questo progetto converte template HTML esportati da UX Pilot/Figma in mini siti statici deployabili.

## Regola principale

I testi visibili devono provenire dai template in `01_INPUT_TEMPLATE_HTML/`. Non inventare, non migliorare e non tradurre il copy.

## Struttura mini sito

Lavora dentro `05_MINI_SITO/`.

I sorgenti stanno nella root del mini sito:

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

## Produzione

Dopo ogni task concluso, eseguire:

```bat
npm.cmd run build
```

La cartella deployabile è:

`05_MINI_SITO/dist/`

L'utente deve poter copiare il contenuto di `dist/` nella root del server.

## Qualità obbligatoria

- HTML semantico.
- Un solo `h1` per pagina.
- Heading coerenti.
- CSS custom organizzato e minificato in build.
- JS minimo e minificato in build.
- HTML minificato in build.
- Accessibilità base: tastiera, focus, aria, label form.
- SEO tecnica base: title, description, charset, viewport, schema.org dove utile.
