# Walkthrough — Phases 1 to 10 Completed

We have successfully finished:
- **Phase 1: Project Scaffolding & Theme/Language Foundations**
- **Phase 2: Premium Layout & Hero Section**
- **Phase 3: Interactive Skills & Tech Stack Showcase**
- **Phase 4: Academic Journey & Interactive Timeline**
- **Phase 5: Certifications, AWS Badges & Fox Logo Branding**
- **Phase 6: Projects Grid & Interactive Showcase**
- **Phase 7: AI Chatbot Integration using DeepSeek**
- **Phase 8: Mobile Audit & Z-Index Stacking Fixes**
- **Phase 9: Desktop Chatbot Position Optimization & Next.js Issue Resolution**
- **Phase 10: Velvet & Dough Case Study Integration, Screenshot Gallery, Lightbox Modal, & Production Deployment**

---

## Phase 6 Design & Code Implementations

### 1. Filterable Projects Directory
- Created `Projects.tsx` inside [Projects.tsx](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/components/sections/Projects.tsx).
- Features category buttons (All, Cloud & Network, Web Applications, AI) styled in glassmorphic tabs with dynamic emerald glow indicators.
- Smooth transition animations on category switching.

### 2. High-Aesthetic Hand-drawn SVG Architectures
- Created four custom inline SVG diagrams drawn with glowing green and cyan lines, showing the architectural layout of each project:
  - **AWS Cloud VPC:** Shows Public/Private subnets, ALB controller, and EC2/RDS nodes.
  - **Cisco Switch VLAN:** Shows VLAN circles (10 and 20), Catalyst router, and SSH Python controller.
  - **Academic DB ERD:** Shows Entity tables (Course, Student, Lecturer) with PK/FK relations.
  - **Generative AI RAG:** Shows Document upload node, Embedding vector flow, FAISS database, and Bedrock (Claude) model.

### 3. Glassmorphic Details Drawer / Spec Sheet
- Clicking any card slides out an interactive details panel from the right (desktop/tablet) or bottom (mobile).
- Renders key feature lists, full technology stack tokens, and a custom mock terminal displaying syntax-highlighted setup scripts (HCL / Python / TS).
- Fully accessible: closes instantly when clicking the background overlay, close button, or pressing the `Escape` keyboard key.

### 4. Zero Lint / Code Tells Audit
- Verified ESLint configuration with `pnpm lint` and resolved 40+ lint errors (type safety, escaping quotes, unused imports).
- Compilation builds 100% clean (`pnpm build`).

---

## Visual Verification Outputs

Below is the screenshot carousel showing the Projects grid and drawer layouts verified across all viewports:

```carousel
![Desktop: Dark Mode EN - Projects Grid](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/desktop_dark_en_projects.png)
<!-- slide -->
![Desktop: Dark Mode EN - Project Details Drawer](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/desktop_dark_en_project_drawer.png)
<!-- slide -->
![Tablet: Dark Mode EN - Projects Grid](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/tablet_dark_en_projects.png)
<!-- slide -->
![Mobile: Dark Mode EN - Projects Grid](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/mobile_dark_en_projects.png)
<!-- slide -->
![Mobile: Dark Mode EN - Project Details Drawer](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/mobile_dark_en_project_drawer.png)
<!-- slide -->
![Desktop: Dark Mode EN - Certifications & Mascot](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/desktop_dark_en_certifications.png)
<!-- slide -->
![Desktop: Dark Mode EN - Hero Header](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/desktop_dark_en_hero.png)
<!-- slide -->
![Desktop: Dark Mode EN - Skills Grid](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/desktop_dark_en_skills.png)
<!-- slide -->
![Desktop: Dark Mode EN - Education Timeline](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/desktop_dark_en_education.png)
<!-- slide -->
![Mobile: Navigation Drawer Menu](file:///C:/Users/ridho/.gemini/antigravity/brain/e8c88d75-1209-47f6-a8ab-c88e7b396432/mobile_menu_open.png)
```

---

## Localhost Utility & Skills Expansion

### 1. Self-Healing run-dev.bat
- Created a robust batch script in the project root folder.
- Automatically handles missing local node environments by calling `pnpm install` before launching.
- Opens the browser window immediately to `http://localhost:3000` to preview changes.

### 2. Expanded Skills Grid
- Integrated new realistic competencies in `Skills.tsx` and translation dictionaries (`en.ts`, `id.ts`):
  - **MikroTik RouterOS Config** (Networking): Hotspots, queue limits, firewall NAT.
  - **Structured Cabling** (Networking): RJ-45 crimping, testing links, fiber optic distribution frames.
  - **Frontend Essentials** (Software): Semantics HTML, layouts styling, client scripting.
  - **Business Process BPMN** (Information Systems): Workflow activities, collaboration pools.

## Ridho Azfa Branding & Maryam Familia Integration

### 1. Logo Branding & Footer Copyright Updates
- Changed the short branding logo inside [Navbar.tsx](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/components/Navbar.tsx) to read **RIDHO AZFA.DEV**.
- Updated the copyright text inside the [page.tsx](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/app/page.tsx) footer to read **RidhoAzfa.dev**.

### 2. Case Study: Maryam Familia Integration
- Replaced the first project card with *Maryam Familia — Next-Gen Real-Time Family Legacy & Genealogy Portal* under the Web Applications category.
- Updated English and Indonesian locales dictionaries in [en.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/en.ts) and [id.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/id.ts).
- Engineered a premium custom inline SVG rendering a genealogy tree mapping Ali Sabri (Gen 1) connecting to Ridho Azfa (Gen 2), complete with a floating Maryam AI Oracle node.
- Added a syntax-highlighted typescript kinship calculations snippet for display inside the drawer spec sheet details panel.

### 3. Case Study: Discover York WebGIS Integration
- Replaced the second project card with *Discover York — WebGIS Platform & Offline Proximity Analyzer* under the Cloud & Network category.
- Updated English and Indonesian translation dictionaries in [en.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/en.ts) and [id.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/id.ts).
- Built a custom inline SVG diagram mapping out a Leaflet view of the York study boundary, interactive buffer circles with glowing markers, and a real-time HUD indicator.
- Associated a syntax-highlighted JavaScript spatial buffer calculation function for render inside the detail spec drawer.

### 4. Case Study: Characters 3D Viewer Integration
- Replaced the third project card with *Characters 3D Viewer — Interactive Web 3D Space* under the Web Applications category.
- Updated English and Indonesian translation dictionaries in [en.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/en.ts) and [id.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/id.ts).
- Built a custom inline SVG diagram rendering a Three.js starry sky, OrbitControls ellipses, a wireframe character mesh, spotlights, and the bottom control card overlay.
- Loaded a syntax-highlighted React traversal snippet for mesh-level wireframe changes.

### 5. Case Study: Celeste AI Integration
- Replaced the fourth project card with *Celeste AI — Hybrid Local/Cloud Generative AI Workstation* under the Artificial Intelligence category.
- Updated English and Indonesian translation dictionaries in [en.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/en.ts) and [id.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/id.ts).
- Built a custom inline SVG diagram rendering Celeste AI's decoupled multi-service flow (React WebUI, Express API Proxy Port 3001, FastAPI GPU Engine Port 5000, and isolated `local_worker.py` subprocess).
- Loaded a syntax-highlighted PyTorch inference script displaying sequential CPU layers offloading, VAE slicing, and VRAM limits below 4.5 GB.

---

## Phase 7: AI Chatbot Integration using DeepSeek

We have successfully built and verified the integrated AI portfolio companion.

### 1. Server-Side Secure API Proxy
- Implemented `/api/chat/route.ts` using Next.js App Router.
- Injects a system instructions prompt containing Ridho Azfa's full academic qualifications (University of Bakrie, SMK TKJ network engineering) and projects details (Maryam Familia, Discover York WebGIS, Characters 3D Viewer).
- Fetches responses securely from the DeepSeek completions model `deepseek-chat` via authorization headers.

### 2. Sandbox Keyword-based Fallback
- Added a keyword matching query handler that intercepts calls when `DEEPSEEK_API_KEY` is not provided (reverting to placeholder mode).
- Formulates realistic responses with markdown structures, emojis, and bullet points. Enables full offline and unconfigured sandboxing testing.

### 3. Glassmorphic Chatbot Widget
- Built the `Chatbot.tsx` widget containing an emerald green/cyan pulsing floating head toggle (mascot themed `/logo.jpg`).
- Slides up an overlay containing quick suggestion pills, scrollable chat bubble streams, user right-aligned mint-green bubbles, typing loaders, and close actions.
- Automatically handles keyboard escapes and resets messages cleanly.

---

## Visual Verification Outputs (Phase 7)

Below is the chatbot screenshot carousel showing the open dialog and interactive query replies:

```carousel
![Chatbot: Dialog Pane Open](file:///C:/Users/ridho/.gemini/antigravity/brain/desktop_dark_en_chatbot_open.png)
<!-- slide -->
![Chatbot: Suggestion Query Reply](file:///C:/Users/ridho/.gemini/antigravity/brain/desktop_dark_en_chatbot_reply.png)
```

---

## Celeste AI — Workstation Visual Proof

Below is the visual gallery carousel showcasing the interface design, parameter selectors, and outputs of the **Celeste AI** Hybrid workstation:

```carousel
![Celeste AI: Chat Interface Workspace](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780992225595.png)
<!-- slide -->
![Celeste AI: Model Selection Dropdown (Cloud & Ollama)](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780992225588.png)
<!-- slide -->
![Celeste AI: Model Selection Dropdown (Custom Studio Checkpoints)](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780994729319.png)
<!-- slide -->
![Celeste AI: Model Selection Dropdown (Local GPU Image Models)](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780994729323.png)
<!-- slide -->
![Celeste AI: Chat Inspector (Per-Chat Overrides & Parameters)](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780994729317.png)
<!-- slide -->
![Celeste AI: Llama 3 Offline Conversation](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780992225603.png)
<!-- slide -->
![Celeste AI: Generated Greatsword Fantasy Artwork](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780992225626.png)
```

---

## Project 5 & Project 6 Integrations

We have successfully integrated two new projects into the portfolio:
1. **Acontext Audit — Multi-Framework Continuous Compliance & Automated Security Mapping Engine** (Cloud Category)
2. **Minerva AI — Conversational AI Agent Platform** (AI Category - Under Active Development)

### 1. Acontext Audit (Project 5)
- Appended under the **Cloud & Network** filter mapping.
- Designed an interactive multi-tenant SVG schematic visual showing the Auditor Command Console, the bidirectional Acontext Sync Engine filesystem watcher, and the isolated tenant client portal (complete with a progress gauge and a mock SSE streaming terminal console).
- Added a code snippet demonstrating the file watcher sync engine and markdown parser.

### 2. Minerva AI (Project 6)
- Appended under the **Artificial Intelligence** filter mapping.
- Designed a blueprint SVG layout displaying the Minerva agent's cognitive core node connected to memory vectors, planning checklists, tools execution pipelines, with a steel "IN PROGRESS / UNDER ACTIVE DEVELOPMENT" seal to indicate sandbox prototype mode.
- Loaded a typescript planner/executor loop mockup.

---

## Acontext Audit — Workstation Visual Proof

Below is the visual gallery carousel showcasing the user interface design, compliance scopes, file drop-zone intake, multi-framework options, and execution terminal log outputs of **Acontext Audit**:

```carousel
![Acontext Audit: Auditor Master Console Dashboard](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780994851429.png)
<!-- slide -->
![Acontext Audit: Onboard New Client Engagement Modal with file drop-zone](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780994851468.png)
<!-- slide -->
![Acontext Audit: Multi-Framework Dropdown Target Selection](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780994851465.png)
<!-- slide -->
![Acontext Audit: Isolated Client Portal Dashboard (LexCorp Industries)](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780994851471.png)
<!-- slide -->
![Acontext Audit: Client Portal Workflows Mappings & agent terminal output](file:///C:/Users/ridho/.gemini/antigravity/brain/media__1780994851427.png)
```

---

## 3D Spline Viewer Redesign & Optimization

We redesigned the 3D viewer implementation in the Hero section:
- **Bulletproof custom element (`<spline-viewer>`)**: Replaced the `@splinetool/react-spline` React wrapper (which caused errors in React 19 / Next.js 16) with a dynamically loaded script and registered JSX typings globally via [spline.d.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/types/spline.d.ts).
- **Responsive expanded canvas**: When switching to the `companion.3d` tab, the container height expands from `h-[240px]` to `h-[380px]` with smooth transitions.
- **Premium HUD overlays**: Positioned high-tech, glassmorphic HUD indicator cards overlaying the robot canvas displaying active statuses (e.g. `NEURAL CONNECTED`, `MOUSE TRACK: ACTIVE`).
- **Clean builds**: Audited lint rules (`pnpm lint`) and production compilations (`pnpm build`) to verify zero warnings or errors.

---

## Phase 8: Mobile Audit & Z-Index Stacking Fixes

We performed a comprehensive audit of mobile interactions, touch targets, and layout stacking on emulated iOS viewports, identifying and resolving several critical design and stacking issues:

### 1. Z-Index Overlay Hierarchy Restructuring
- **Issue**: The floating chatbot toggle button (`z-50`) was overlapping both the mobile menu drawer and the project specifications drawer, rendering on top of the text and action buttons like "BAHASA ID".
- **Fix**: Adjusted z-index stacking layers:
  - Chatbot container: Remains at `z-50`.
  - Project Details Drawer (in `Projects.tsx`): Set to `z-[60]` to stack cleanly on top of the chatbot.
  - Mobile Drawer Backdrop (in `Navbar.tsx`): Set to `z-[70]` to dim the entire screen including the chatbot.
  - Mobile Drawer Panel (in `Navbar.tsx`): Set to `z-[80]` to render at the top tier.

### 2. Premium Chatbot Bottom-Sheet Refactor
- **Issue**: The chatbot panel was floating at `absolute bottom-18 right-0` inside a fixed parent. On mobile, this created a large vertical gap showing the background and double close ('X') buttons, wasting screen space.
- **Fix**:
  - Rewrote the mobile layout to position the open chatbot panel as a full-width bottom sheet (`fixed bottom-0 left-0 right-0 h-[80vh] w-full`) that slides up smoothly.
  - Added a responsive, mobile-only click-outside backdrop overlay (`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden`) that dims the background and closes the chatbot on click-outside.
  - Dynamically hid the floating toggle button on mobile when the chatbot panel is active (`hidden sm:flex`).

### 3. iOS Text Input Auto-Zoom Fix
- **Issue**: The chatbot input text size was set to `text-xs` (12px), causing iOS browsers to automatically zoom in when focusing the text area.
- **Fix**: Increased the font-size of the input field to `text-base sm:text-xs` to match native mobile input standards and prevent browser zooming, while scaling down cleanly for desktop.

### 4. Floating Toggle Mascot Sizing Fix
- **Issue**: The AI chatbot mascot logo (`logo.jpg`) was not showing up inside the floating toggle button on the bottom right.
- **Fix**: Set `className="w-full h-full relative"` on Framer Motion's `<motion.div key="avatar">` container to prevent the Next.js `<Image fill />` from collapsing to a size of 0x0. The neon fox mascot logo now renders perfectly inside the floating button.

---

## Visual Verification Outputs (Phase 8 Audit)

Below is the updated mobile carousel showing our layout and stacking fixes:

```carousel
![1. Mobile Hero: Neon Fox mascot logo visible in floating button, elegant DM Serif typography](file:///C:/Users/ridho/.gemini/antigravity/brain/mobile_1_initial.png)
<!-- slide -->
![2. Mobile Menu Open: Stacking fix - Chatbot bubble fully hidden behind mobile menu and language options](file:///C:/Users/ridho/.gemini/antigravity/brain/mobile_2_menu_open.png)
<!-- slide -->
![3. Project Drawer Open: Stacking fix - Chatbot bubble hidden behind project spec sheets](file:///C:/Users/ridho/.gemini/antigravity/brain/mobile_6_project_drawer_open.png)
<!-- slide -->
![4. Chatbot Open: Premium full-width bottom sheet, click-outside backdrop, hidden floating toggle bubble](file:///C:/Users/ridho/.gemini/antigravity/brain/mobile_8_chatbot_open.png)
<!-- slide -->
![5. Chatbot Suggestion: Message stream response in new mobile layout](file:///C:/Users/ridho/.gemini/antigravity/brain/mobile_9_chatbot_suggestion_clicked.png)
```

---

## Phase 9: Desktop Chatbot Position Optimization & Next.js Issue Resolution

We resolved the issues affecting the chatbot panel on desktop and cleared the Next.js dev server issue warnings:

### 1. Robust Desktop Viewport-Fixed Positioning
- **Issue**: The chatbot panel was positioned absolute (`sm:absolute`) inside a fixed wrapper container. Because the parent container's width was constrained to the size of the floating toggle button (56px), positioning the absolute panel relative to it led to layout calculation conflicts in some browser viewports, causing the panel's right side to extend off-screen (cut off by ~320px).
- **Fix**: Replaced the desktop layout classes with viewport-fixed positioning (`sm:fixed sm:bottom-24 sm:right-6 sm:left-auto`). Positioning the panel relative to the browser window bypasses any parent alignment constraints, ensuring the panel is always positioned exactly 24px from the right edge and 96px from the bottom edge of the viewport (aligning perfectly with the button).

### 2. Next.js Issue Warnings Cleared
- **Issue**: The Next.js dev server overlay reported `2 Issues`:
  1. Mismatched sibling keys inside Framer Motion's `AnimatePresence`.
  2. Next.js `<Image fill />` warning inside animated wrappers where calculated height resolved to `0`.
- **Fix**:
  - Assigned explicit, unique React keys (`chatbot-backdrop` and `chatbot-panel`) to the layout nodes inside `AnimatePresence`.
  - Replaced dynamic image fill properties with explicit width/height parameters (`36`, `28`, `48`) for the avatar logos to completely suppress client-side layout warnings.

---

## Phase 10: Velvet & Dough Case Study Integration, Screenshot Gallery, Lightbox Modal, & Production Deployment

We have successfully integrated the **Velvet & Dough** premium D2C e-commerce and store operations SaaS case study as the 7th project in Ridho Azfa's portfolio website, synchronized all changes to GitHub, and updated the production deployment on Vercel.

### 1. Interactive SVG Architecture Diagram (`p7`)
- Designed and built a beautiful, custom glassmorphic SVG showing the end-to-end data flow:
  - **D2C Checkout UI**: Catalog grid layout, Medan location indicator, and QRIS scanner HUD with upload receipt trigger.
  - **Next.js Serverless API**: Ecosystem middleware consisting of Redis rate-limiting (with fail-safe bypass path), database routing logic, and Supabase Storage signed URLs.
  - **Kitchen FIFO Queue**: Administrative panel showing active orders with status progression tags (`PENDING`, `BAKING`) and n8n webhook notification dispatchers.
  - **WhatsApp Alert Dispatcher**: Integrated feedback loop routing kitchen state notifications to customers via WhatsApp.
- Added custom animation classes (`animate-svg-flow-right`, `animate-svg-flow-left`, `animate-svg-pulse-border`) mapping interactive SVG flows that trigger dynamically on hover.

### 2. Spec Sheet Details Drawer Configuration
- Linked a TypeScript code snippet showing how the hybrid database handles database connectivity: falling back to an in-memory client `MockPrismaClient` with transaction and aggregation support if the PostgreSQL database is unconfigured.
- Added 4 standout features in the details panel:
  - **Database Fallback Switcher**: Mock database client that enables zero-config local operations.
  - **Velvet AI Translator**: Contextual translation of Indonesian testimonials to English.
  - **Fail-Safe Rate Limiting**: Redis bypass middleware preventing checkout drop-offs.
  - **Kitchen FIFO Operations**: Order logging, real-time stock control, and automated notifications.

### 3. DeepSeek Chatbot Knowledge Context Expansion
- Appended Velvet & Dough specifications to the `SYSTEM_PROMPT` in [route.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/app/api/chat/route.ts).
- Integrated keyword checking inside `mockResponse()` for `"velvet"`, `"dough"`, `"baking"`, `"cake"`, `"qris"`, `"kitchen"`, or `"order"` to describe Velvet & Dough's technical features (mock fallback database, Velvet AI translator, fail-safe limits, zero-auth order import) with full markdown styling and emojis.

### 4. Bilingual Translation Integration
- Updated [en.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/en.ts) and [id.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/id.ts) with full English and Indonesian translation strings for project `p7`.

### 5. Interactive Screenshot Carousel Gallery & Lightbox modal (Active for Velvet & Dough Only)
- Copied five high-resolution, user-uploaded screenshots of the Velvet & Dough application (Home banner, Menu catalog, Sweet reviews, Story section, Contact details) to `/public/screenshots/velvet-dough/`.
- Extended the `Project` interface with an optional `screenshots?: string[]` array property.
- Built a scrollable, glassmorphic thumbnail carousel at the top of the body sections inside the details spec sheets (active on the Velvet & Dough details drawer).
- Built a full-screen, high-performance Lightbox Modal component activated when clicking any thumbnail. It overlays a blurred background with the active image, a counter indicator (`index / total`), and full navigation arrows.
- Integrated keyboard listeners that allow closing the lightbox with the `Escape` key and navigating between images using `ArrowLeft` and `ArrowRight` buttons.

### 6. GitHub Synchronization & Live Vercel Update
- Staged, committed, and pushed all local modifications and newly uploaded assets directly to the GitHub remote repository `origin/main` ([Portfolio.git](https://github.com/RidhoAzfa/Portfolio.git)).
- Executed direct CLI deployments (`npx vercel --prod --yes`) linking to your Vercel organization project `ridhoazfa` to instantly propagate changes to the production domain.

---

## Final Verification Summary

- **Vercel Build Output**: Production deployment aliased to [https://ridhoazfa.vercel.app](https://ridhoazfa.vercel.app) is active and running successfully.
- **Desktop Layout**: Verified chatbot panel alignment and responsiveness on 1280x720 and wider desktop screens. (Prism-like glassmorphic look, fully visible).
- **Mobile Layout**: Emulated iPhone 13 viewport (390x844) runs a full-width bottom sheet layout with click-outside dims.
- **Diagnostics**: Build compiles 100% cleanly (`pnpm build`) and ES-linter contains 0 errors/warnings (`pnpm lint`).

All design elements and usability guidelines have been met. The profile is fully responsive and optimized.
