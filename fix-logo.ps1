# CR Industries - Auto Logo Fix Script
# Run this in PowerShell inside your CR-ONGOING-PROJECT-WEB folder

$filePath = "index.html"

if (-not (Test-Path $filePath)) {
    Write-Host "ERROR: index.html not found in current folder!" -ForegroundColor Red
    Write-Host "Please run this script from inside CR-ONGOING-PROJECT-WEB folder" -ForegroundColor Yellow
    pause
    exit
}

Write-Host "Reading index.html..." -ForegroundColor Cyan
$content = Get-Content $filePath -Raw -Encoding UTF8

# FIX 1 - Header logo size (72px -> 46px with glow animation)
$old1 = '.nav-logo-img{width:72px;height:72px;object-fit:contain;filter:drop-shadow(0 0 18px rgba(0,229,255,.8));border-radius:50%;border:1px solid rgba(0,229,255,.2);}'
$new1 = '.nav-logo-img{width:46px;height:46px;object-fit:contain;filter:drop-shadow(0 0 10px rgba(30,144,255,.6));border-radius:50%;border:1px solid rgba(30,144,255,.3);animation:cr-glow-breathe 3s ease-in-out infinite;}'

# FIX 2 - Nav padding
$old2 = 'nav{position:fixed;top:0;left:0;right:0;z-index:500;display:flex;align-items:center;justify-content:space-between;padding:10px 50px;'
$new2 = 'nav{position:fixed;top:0;left:0;right:0;z-index:500;display:flex;align-items:center;justify-content:space-between;padding:8px 30px;'

# FIX 3 - Nav brand gap
$old3 = '.nav-brand{display:flex;align-items:center;gap:14px;text-decoration:none;}'
$new3 = '.nav-brand{display:flex;align-items:center;gap:10px;text-decoration:none;}'

# FIX 4 - Add logo animations after existing spin-cw keyframe
$old4 = '@keyframes spin-cw{from{transform:rotate(0)}to{transform:rotate(360deg)}}'
$new4 = '@keyframes spin-cw{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes cr-glow-breathe{0%,100%{filter:drop-shadow(0 0 10px rgba(30,144,255,.6));transform:scale(1);}50%{filter:drop-shadow(0 0 30px rgba(30,144,255,1));transform:scale(1.06);}}
@keyframes cr-glow-breathe-soft{0%,100%{filter:drop-shadow(0 0 6px rgba(30,144,255,.5));transform:scale(1);}50%{filter:drop-shadow(0 0 18px rgba(30,144,255,.85));transform:scale(1.04);}}'

# FIX 5 - Footer logo size and animation
$old5 = '.flogo{width:36px;height:36px;object-fit:contain;filter:drop-shadow(0 0 8px rgba(0,229,255,.5));border-radius:50%;}'
$new5 = '.flogo{width:46px;height:46px;object-fit:contain;border-radius:50%;animation:cr-glow-breathe-soft 3.5s ease-in-out infinite;}'

# Apply all fixes
Write-Host "Applying Fix 1: Header logo size..." -ForegroundColor Yellow
if ($content -match [regex]::Escape($old1)) {
    $content = $content.Replace($old1, $new1)
    Write-Host "  Fix 1 applied!" -ForegroundColor Green
} else {
    Write-Host "  Fix 1: Already applied or not found, skipping." -ForegroundColor Gray
}

Write-Host "Applying Fix 2: Nav padding..." -ForegroundColor Yellow
if ($content -match [regex]::Escape($old2)) {
    $content = $content.Replace($old2, $new2)
    Write-Host "  Fix 2 applied!" -ForegroundColor Green
} else {
    Write-Host "  Fix 2: Already applied or not found, skipping." -ForegroundColor Gray
}

Write-Host "Applying Fix 3: Nav brand gap..." -ForegroundColor Yellow
if ($content -match [regex]::Escape($old3)) {
    $content = $content.Replace($old3, $new3)
    Write-Host "  Fix 3 applied!" -ForegroundColor Green
} else {
    Write-Host "  Fix 3: Already applied or not found, skipping." -ForegroundColor Gray
}

Write-Host "Applying Fix 4: Logo glow animations..." -ForegroundColor Yellow
if ($content -notmatch "cr-glow-breathe") {
    $content = $content.Replace($old4, $new4)
    Write-Host "  Fix 4 applied!" -ForegroundColor Green
} else {
    Write-Host "  Fix 4: Animations already exist, skipping." -ForegroundColor Gray
}

Write-Host "Applying Fix 5: Footer logo size..." -ForegroundColor Yellow
if ($content -match [regex]::Escape($old5)) {
    $content = $content.Replace($old5, $new5)
    Write-Host "  Fix 5 applied!" -ForegroundColor Green
} else {
    Write-Host "  Fix 5: Already applied or not found, skipping." -ForegroundColor Gray
}

# Save the file
Write-Host "Saving index.html..." -ForegroundColor Cyan
[System.IO.File]::WriteAllText((Resolve-Path $filePath), $content, [System.Text.UTF8Encoding]::new($false))

Write-Host ""
Write-Host "ALL DONE! Now run these commands:" -ForegroundColor Green
Write-Host "  git add ." -ForegroundColor White
Write-Host "  git commit -m `"fixed logo sizes`"" -ForegroundColor White
Write-Host "  git push" -ForegroundColor White
Write-Host ""
pause
