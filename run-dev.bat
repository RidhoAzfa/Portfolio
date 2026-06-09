@echo off
setlocal enabledelayedexpansion

echo =======================================================
echo  HAIL MYSELF - Starting Ridho's Portfolio Local Server
echo =======================================================
echo.

cd /d "%~dp0"

:: Check for node_modules, install dependencies if missing
if not exist "node_modules\" (
    echo [!] node_modules folder not found.
    echo [*] Installing dependencies using pnpm...
    call pnpm install
    if !ERRORLEVEL! neq 0 (
        echo [ERROR] pnpm install failed. Please install pnpm or run manually.
        pause
        exit /b !ERRORLEVEL!
    )
)

:: Launch browser in background
echo [*] Opening local portfolio in your default browser...
start http://localhost:3000

:: Run Next.js server
echo [*] Starting Next.js development server...
call pnpm dev
