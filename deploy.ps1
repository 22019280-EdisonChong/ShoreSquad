# Deploy script for GitHub Pages
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if Git is initialized
if (-not (Test-Path .git)) {
    Write-Host "❌ Git repository not initialized. Please run 'git init' first." -ForegroundColor Red
    exit 1
}

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Blue
npm run build

if (-not $?) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

# Create .nojekyll file
Write-Host "📄 Creating .nojekyll file..." -ForegroundColor Blue
New-Item -Path "out/.nojekyll" -ItemType File -Force

# Stage changes
Write-Host "📝 Staging changes..." -ForegroundColor Blue
git add out/ -f

# Commit changes
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy: $timestamp"

# Push to gh-pages branch
Write-Host "☁️ Pushing to gh-pages branch..." -ForegroundColor Blue
git subtree push --prefix out origin gh-pages

Write-Host "✅ Deployment complete!" -ForegroundColor Green
