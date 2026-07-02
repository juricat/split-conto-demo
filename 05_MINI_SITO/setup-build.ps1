Write-Host "Build mini sito HTML/CSS/JS senza Tailwind..." -ForegroundColor Cyan
npm.cmd run build
if ($LASTEXITCODE -ne 0) {
  Write-Host "Build fallita. Controllare gli errori sopra." -ForegroundColor Red
  exit $LASTEXITCODE
}
Write-Host "Build completata. Caricare sul server il contenuto della cartella dist." -ForegroundColor Green
