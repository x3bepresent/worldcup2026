# 手动同步到 GitHub Pages（需已配置 git 凭据）
# 用法: .\scripts\sync-github.ps1 "提交说明"
param(
  [Parameter(Mandatory = $true)]
  [string]$Message
)

$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot\..

Write-Host "=== git status ===" -ForegroundColor Cyan
git status --short

$changes = git status --porcelain
if (-not $changes) {
  Write-Host "没有可提交的改动。" -ForegroundColor Yellow
  exit 0
}

git add -A
git commit -m $Message
git push origin main

Write-Host "`n已推送。约 1–3 分钟后查看:" -ForegroundColor Green
Write-Host "https://x3bepresent.github.io/worldcup2026/matches.html"
