# Implementation Plan - Integrate Velvet & Dough Project Case Study

This plan details the steps to integrate **Velvet & Dough**—a premium direct-to-consumer (D2C) e-commerce and store operations SaaS application—into Muhammad Ridho Azfa Karani's personal portfolio. 

The integration involves adding a new project card, translating details into English and Indonesian, and updating the DeepSeek AI Chatbot's system prompt and mock responder to ensure full awareness.

---

## 🔒 Folder-Lock Constraint & Project Scope

> [!IMPORTANT]
> **Exclusive Directory Lock:** All source code files, configuration files, auxiliary scripts, build utilities, and project documentation (such as `task.md`, `walkthrough.md`, and `implementation_plan.md`) must reside exclusively within the folder:
> `c:/Developer/Hail Myself/Project/Web/portfolios/ridho-profile/`
>
> All terminal commands, testing scripts, and verification runs must be executed relative to this folder, avoiding modifications to global workspace configurations unless explicitly authorized.

---

## User Review Required

> [!IMPORTANT]
> **Core Changes & Features to Add:**
>
> **1. Interactive SVG Architecture Diagram (`p7`):**
> - Create an interactive, glassmorphic SVG showing the e-commerce client checkout (catalog & QRIS scanner), Next.js backend serverless APIs (Redis token rate limiting & Supabase receipts signed URLs), and kitchen operations queue (FIFO status tracker and n8n WhatsApp webhook alerts).
> - Apply custom class animations (`animate-svg-flow-right`, `animate-svg-flow-left`, `animate-svg-pulse-border`) that trigger dynamically on hover.
>
> **2. Multilingual Translations (`en.ts` / `id.ts`):**
> - Define the title, tagline, description, specifications, and 4 standout features in both English and Indonesian.
>
> **3. AI Chatbot Context Expansion (`route.ts`):**
> - Update the DeepSeek Chatbot `SYSTEM_PROMPT` with the new project specs.
> - Expand the `mockResponse` local keyword matching block to handle queries about baking, cake, velvet, dough, and order fulfillment.

---

## Open Questions

> [!NOTE]
> We propose using a mock GitHub repository URL `https://github.com/RidhoAzfa/velvet-dough-saas` to follow the naming convention of other projects. Let us know if you have a specific live GitHub repository path to link instead.

---

## Proposed Changes

### Projects Page Component

#### [MODIFY] [Projects.tsx](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/components/sections/Projects.tsx)
- Insert a new project entry `p7` into the `projects` array of type `Project`.
- Set category to `"web"`, key to `"p7"`, and tags to D2C & SaaS identifiers.
- Implement the detailed `renderSVG()` illustrating the e-commerce checkout flow, Redis rate limit protection, Supabase storage bucket, database client fallback logic, and n8n notification webhook.
- Add code snippet showing the `MockPrismaClient` hybrid database fallback initialization inside `db.ts`.

### Translation Modules

#### [MODIFY] [en.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/en.ts)
- Add translation keys under `projects` for `p7_title`, `p7_tagline`, `p7_desc`, `p7_spec_overview`, `p7_feat1`, `p7_feat2`, `p7_feat3`, and `p7_feat4`.

#### [MODIFY] [id.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/locales/id.ts)
- Add matching Indonesian translation keys for the above keys.

### AI Chatbot Backend Endpoint

#### [MODIFY] [route.ts](file:///c:/Developer/Hail%20Myself/Project/Web/portfolios/ridho-profile/src/app/api/chat/route.ts)
- Append the Velvet & Dough specs to `SYSTEM_PROMPT` projects list.
- Add a new block in `mockResponse` fallback mapping queries like `"velvet"`, `"dough"`, `"baking"`, `"cake"`, or `"qris"` to a detailed breakdown of the Velvet & Dough SaaS application.

---

## Verification Plan

### Automated Tests
- Run Next.js production build (`pnpm build`) to verify all TypeScript typings and build boundaries.
- Run ESLint checks (`pnpm lint`) to verify syntax compliance.

### Manual Verification
- Verify the projects grid displays "Velvet & Dough" under "All Fields" and "Web Applications".
- Hover over the card to ensure the custom SVG animations trigger smoothly.
- Open the Technical Specs drawer and verify details render cleanly.
- Toggle language (English/Indonesian) and verify translations update correctly.
- Test the chatbot with queries containing "velvet", "dough", and "baking" to confirm the AI responds with appropriate details about the project.
