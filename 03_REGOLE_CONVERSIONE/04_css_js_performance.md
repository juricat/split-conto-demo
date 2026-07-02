# CSS, JavaScript e performance

Questo kit non usa Tailwind CSS.

## CSS

Usare CSS custom in:

```text
05_MINI_SITO/src/css/styles.css
```

Regole:

- organizzare variabili in `:root`;
- usare nomi classe leggibili;
- evitare inline style;
- evitare duplicazioni inutili;
- mantenere CSS modulare per header, hero, card, CTA, form, footer;
- mantenere media query chiare;
- minificare a fine build.

## JavaScript

Usare JS solo se necessario, in:

```text
05_MINI_SITO/src/js/main.js
```

Regole:

- niente jQuery;
- niente librerie esterne inutili;
- JS locale;
- script con `defer`;
- menu mobile accessibile;
- minificazione a fine build.

## Asset

- immagini locali;
- width/height dove possibile;
- alt coerenti;
- font locali solo se disponibili;
- niente CDN non necessari.

## Build produzione

La build finale deve generare:

- HTML minificato;
- CSS minificato;
- JS minificato;
- asset copiati in `dist/`.
