# Download Figma MCP assets into public/images
# Usage: update $assets map with URLs from get_design_context, then run:
#   powershell -File scripts/download-figma-assets.ps1

$base = "https://www.figma.com/api/mcp/asset"
$root = Join-Path $PSScriptRoot "..\public\images"

$assets = @{
  "hero\hero-1.jpg"              = "0227eec0-051c-4d5d-9215-de89b4dbda67"
  "hero\hero-2.jpg"              = "eea031f1-e542-4e13-9bf6-dc2ee9028453"
  "hero\hero-3.jpg"              = "6cd451a4-51f8-4421-864a-64570d13fcef"
  "how-it-works\background.jpg"  = "e1f4b64b-18cd-4568-ba0f-5c79a1ef0525"
  "how-it-works\icon-schedule.png" = "dbeffd11-2ffc-417e-9bd5-602bd6f972c4"
  "how-it-works\icon-pickup.png"   = "8d5d728b-882a-47b0-85b7-6a0a3a0a4ffc"
  "how-it-works\icon-clean.png"    = "18e358d6-d1cf-4d8c-811e-6eb55d3ec168"
  "how-it-works\icon-delivery.png" = "640a6a90-6726-484e-a22f-a95d6acafb1c"
  "footer\logo.png"              = "62a4291c-afdb-4ebd-9e39-7459da1f73f1"
  "footer\icon-location.png"     = "d75bf483-a896-4b7b-bcac-aa8cab099ed1"
  "footer\icon-phone.png"        = "b8bce2f4-0755-476d-acd3-13ff3fd1b18c"
  "footer\icon-mail.png"         = "ba5f38ce-7002-4e53-919a-49203afad7e2"
  "footer\icon-snapchat.png"     = "4c88c4b6-cdae-4f41-9490-f852db488148"
  "footer\icon-facebook.png"     = "63f9c710-19df-4be0-9556-4de2269be343"
  "footer\icon-twitter.png"      = "32111026-bf65-4de6-8965-9e519edd7938"
}

foreach ($rel in $assets.Keys) {
  $dir = Split-Path (Join-Path $root $rel) -Parent
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $out = Join-Path $root $rel
  $url = "$base/$($assets[$rel])"
  Write-Host "Downloading $rel ..."
  Invoke-WebRequest -Uri $url -OutFile $out
}

Write-Host "Done."
