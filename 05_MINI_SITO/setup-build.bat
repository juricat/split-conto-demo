@echo off
echo Build mini sito HTML/CSS/JS senza Tailwind...
npm.cmd run build
if errorlevel 1 (
  echo Build fallita. Controllare gli errori sopra.
  exit /b 1
)
echo Build completata. Caricare sul server il contenuto della cartella dist.
