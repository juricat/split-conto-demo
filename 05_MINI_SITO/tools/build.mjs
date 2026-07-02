import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

const htmlFiles = ['index.html', 'servizi.html', 'contatti.html'];
const cssSource = path.join(root, 'assets/css/styles.css');
const cssOutputRel = 'assets/css/styles.min.css';
const jsSource = path.join(root, 'assets/js/main.js');
const jsOutputRel = 'assets/js/main.min.js';

async function exists(file) {
  try { await fs.access(file); return true; } catch { return false; }
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

function minifyJs(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}();,:=<>+\-*/])\s*/g, '$1')
    .trim();
}

function minifyHtml(html) {
  return html
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+(?=>)/g, '')
    .trim();
}

async function copyDir(from, to, options = {}) {
  if (!(await exists(from))) return;
  await fs.mkdir(to, { recursive: true });
  const entries = await fs.readdir(from, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(from, entry.name);
    const destPath = path.join(to, entry.name);
    if (options.exclude?.has(entry.name)) continue;
    if (entry.isDirectory()) await copyDir(srcPath, destPath, options);
    else await fs.copyFile(srcPath, destPath);
  }
}

function validateHtml(fileName, html) {
  const errors = [];
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) errors.push(`${fileName}: h1 trovati ${h1Count}, richiesto 1`);
  if (!/<meta\s+charset=/i.test(html)) errors.push(`${fileName}: meta charset mancante`);
  if (!/<meta\s+name=["']viewport["']/i.test(html)) errors.push(`${fileName}: viewport mancante`);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${fileName}: title mancante`);
  if (!/<meta\s+name=["']description["']/i.test(html)) errors.push(`${fileName}: meta description mancante`);
  return errors;
}

function rewriteRuntimeRefs(html) {
  return html
    .replaceAll('assets/css/styles.css', cssOutputRel)
    .replaceAll('assets/js/main.js', jsOutputRel);
}

await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(path.join(dist, 'assets/css'), { recursive: true });
await fs.mkdir(path.join(dist, 'assets/js'), { recursive: true });

if (await exists(cssSource)) {
  const css = await fs.readFile(cssSource, 'utf8');
  await fs.writeFile(path.join(dist, cssOutputRel), minifyCss(css), 'utf8');
  console.log(`CSS minificato: dist/${cssOutputRel}`);
}

if (await exists(jsSource)) {
  const js = await fs.readFile(jsSource, 'utf8');
  await fs.writeFile(path.join(dist, jsOutputRel), minifyJs(js), 'utf8');
  console.log(`JS minificato: dist/${jsOutputRel}`);
}

await copyDir(path.join(root, 'assets/img'), path.join(dist, 'assets/img'));
await copyDir(path.join(root, 'assets/fonts'), path.join(dist, 'assets/fonts'));

for (const staticFile of ['robots.txt', 'sitemap.xml', 'favicon.ico', 'site.webmanifest']) {
  const sourcePath = path.join(root, staticFile);
  if (await exists(sourcePath)) await fs.copyFile(sourcePath, path.join(dist, staticFile));
}

const allErrors = [];

for (const file of htmlFiles) {
  const full = path.join(root, file);
  if (!(await exists(full))) continue;
  const html = await fs.readFile(full, 'utf8');
  allErrors.push(...validateHtml(file, html));
  const productionHtml = minifyHtml(rewriteRuntimeRefs(html));
  await fs.writeFile(path.join(dist, file), productionHtml, 'utf8');
  console.log(`HTML minificato: dist/${file}`);
}

if (allErrors.length) {
  console.error('\nValidazione fallita:');
  for (const err of allErrors) console.error(`- ${err}`);
  process.exit(1);
}

console.log('\nBuild completata correttamente. Cartella da caricare sul server: dist/');
