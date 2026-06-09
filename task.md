# Mobile interaction audit and layout fixes

## Mobile Audit & Stacking Fixes
- [x] Identify z-index overlap bugs (chatbot bubble overlapping mobile menu drawer and project details drawer)
- [x] Fix z-indices in `Projects.tsx` (slide-over drawer -> `z-[60]`)
- [x] Fix z-indices in `Navbar.tsx` (mobile backdrop -> `z-[70]`, drawer panel -> `z-[80]`)
- [x] Refactor mobile layout for chatbot in `Chatbot.tsx`:
  - [x] Implement premium bottom sheet positioning for mobile (`fixed bottom-0 left-0 right-0 h-[80vh] w-full`)
  - [x] Add mobile-only backdrop click-outside overlay to close chatbot (`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden`)
  - [x] Hide floating toggle button when chatbot is open on mobile (`hidden sm:flex`)
  - [x] Increase input font-size to prevent iOS auto-zoom (`text-base sm:text-xs`)
- [x] Run automated script to click and verify all mobile interactions, and capture updated screenshots
- [x] Verify build compiles successfully (`pnpm build`) and lint is clean (`pnpm lint`)
- [x] Document final walkthrough in `walkthrough.md` and update `mobile_audit.md`

## Desktop Chatbot Position & Issue Fixes
- [x] Diagnose chatbot positioning bugs on desktop viewports
- [x] Refactor chatbot desktop layout to use viewport-fixed styling (`sm:fixed sm:bottom-24 sm:right-6 sm:left-auto`) to guarantee alignment and prevent right-edge clipping
- [x] Fix React hydration / key warning issues and Next.js Image fill layout warnings in `Chatbot.tsx`
- [x] Run automated diagnostics on localhost port 3001 to verify page console logs and layout dimensions
