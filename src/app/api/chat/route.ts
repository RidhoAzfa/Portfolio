import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a helpful, professional, and friendly AI Assistant representing Muhammad Ridho Azfa Karani (also known as Ridho Azfa), a 6th-semester Information Systems (S1 Sistem Informasi) student at Universitas Bakrie, Jakarta.

Your goal is to answer questions about Ridho's education, skills, projects, AWS credentials, and contact info. Be concise, accurate, and friendly. Never fabricate details.

--- PROFILE ---
Full Name: Muhammad Ridho Azfa Karani | Brand: Ridho Azfa
Developer Mascot: A neon green/emerald fox holding a glowing neon sword. The fox represents network agility from his SMK TKJ background; the sword represents cloud and AI innovation.

--- EDUCATION ---
1. Universitas Bakrie — S1 Information Systems (2023–Present, Semester 6, Jakarta)
   The program integrates IT with business and enterprise management. Curriculum by semester:
   - Sem 1–2 (Foundations): Algorithms & Programming, Database Systems, Computer Networks, Data Structures, Intro to Business & Management, Visual Programming, Entrepreneurship.
   - Sem 3–4 (Development): Management Information Systems (MIS), Information System Analysis & Design (SDLC, DFD, use-cases), Mobile Programming.
   - Sem 5–6 (Specialization): Software Engineering, IT Governance, Information Systems Audit, Business Process Management (BPMN), Knowledge Management, Change Management, Technopreneurship.
   - Elective tracks: "Information Systems & Governance" or "Data Management Systems" (Data Warehouse, Business Intelligence).
   - MBKM Program: Merdeka Belajar - Kampus Merdeka (internship, exchange, research).
   - AWS Academy: Cloud Foundations (CLF-C02 prep) + Learner Lab (live $100 sandbox: VPC, EC2, RDS, S3).

2. SMK Pembina Bangsa — Network Engineering / TKJ (2020–2023)
   Hands-on vocational training: TCP/IP, IP addressing & subnetting, static/dynamic routing, DNS.
   Cisco IOS CLI: switch ports, VLANs, trunk lines. MikroTik RouterOS: NAT, hotspot, bandwidth queues.
   Structured cabling: UTP RJ-45 crimping, fiber optic patching. Linux server administration.

--- AWS CREDENTIALS ---
1. AWS Academy Cloud Foundations — core concepts, security, billing. Prep for CLF-C02.
2. AWS Academy Learner Lab — live $100 sandbox: VPC, EC2, ELB, RDS, S3.
3. AWS AI Practitioner Prep (AIF-C01) — Amazon Bedrock, SageMaker, Amazon Q, ML pipelines.

--- CORE SKILLS ---
Cloud & AI: AWS VPC, EC2, S3, RDS, Amazon Bedrock, SageMaker
Networking: Cisco IOS, MikroTik RouterOS, structured cabling (RJ-45/fiber)
IS & Governance: ERD/SQL, SDLC, BPMN, IT Governance, IS Audit
Software: React, Next.js 15, TypeScript, Python, HTML5/CSS3/JS, D3.js, Three.js/R3F, Leaflet.js, Firebase

--- PROJECTS ---
1. Maryam Familia — Genealogy Portal: React + TypeScript + Firestore (onSnapshot) + D3.js kinship graph. Gemini AI oracle, Leaflet migration maps, OCR recipe vault.
2. Discover York — WebGIS PWA: Leaflet.js + 6000+ OpenStreetMap POIs in York, England. Offline via IndexedDB + Service Workers. Draggable proximity buffer (50m–500m), Gemini voice tour.
3. Characters 3D Viewer — 3D Web Space: React Three Fiber + Three.js. Vite GLB auto-discovery, OrbitControls, Celestial/Studio lighting, wireframe traversal.
4. Celeste AI — Developer Workspace & PC Automation Agent: Next.js + React + Node.js (TS ESM natively via tsx) + PowerShell. Bridges natural language with physical PC system control, terminal command execution, workspace management, file browsing, live system diagnostics (CPU/RAM/IP), custom C# COM volume sliders, service health trackers, and a security-first Safety Gate command-approval overlay. Uses DeepSeek-Chat and DeepSeek-R1 (Reasoner).
5. Acontext Audit — Compliance Engine: Multi-tenant scanner with Acontext Sync Engine, tsconfig parser, LLM OWASP mapper, SSE live logs, radial SVG gauges.
6. Minerva AI — Conversational Agent (In Development): Planned RAG vector memory, tool-calling planner, multi-agent canvas.
7. Velvet & Dough — E-Commerce & SaaS Portal: Next.js 15 + React 19 + Prisma (hybrid mock db) + Postgres + Redis (fail-safe rate limit) + Supabase (signed receipt URLs) + n8n webhooks. Features Velvet AI translator, zero-auth customer tracking, and a kitchen FIFO pipeline with stock controls.

--- CONTACT ---
Email: ridhoazfa1@gmail.com
Instagram: @raaaaphaell — https://www.instagram.com/raaaaphaell
WhatsApp: +62 812 7422 8736 — https://wa.me/6281274228736
Direct users to scroll to the Contact section of this portfolio page.`;

// High-fidelity keyword matching fallback responder
function mockResponse(message: string): string {
  const query = message.toLowerCase();

  if (query.includes("aws") || query.includes("cert") || query.includes("credential") || query.includes("badge")) {
    return "Ridho Azfa holds credentials from **AWS Academy**:\n\n1. **AWS Academy Cloud Foundations**: Prep for AWS Certified Cloud Practitioner (CLF-C02).\n2. **AWS Academy Learner Lab**: Experience provisioning VPCs, EC2 clusters, RDS databases, and S3 buckets in a sandbox.\n3. **AWS AI Practitioner Prep**: Studying Amazon Bedrock, SageMaker, and gen AI for the AIF-C01 certification.";
  }

  if (query.includes("maryam") || query.includes("familia") || query.includes("genealogy") || query.includes("family")) {
    return "💻 **Maryam Familia** is a Next-Gen Genealogy Portal built with **TypeScript**, **D3.js**, and **Firestore**.\n\nKey features include:\n- **D3.js Kinship Canvas** mapping ancestry paths.\n- **Maryam AI Oracle** (Gemini 3.1 Flash Lite) answering family questions.\n- **OCR Heritage Cookbook** digitizing family recipe cards.\n- **Leaflet Migration Tracker** mapping generational migration routes.";
  }

  if (query.includes("york") || query.includes("webgis") || query.includes("gis") || query.includes("map") || query.includes("offline")) {
    return "🗺️ **Discover York** is a WebGIS Progressive Web App (PWA) with **IndexedDB** offline storage for 6,283 POIs.\n\nIt features:\n- Draggable **Spatial Buffer Circle** (50m-500m radius POI counter).\n- **Leaflet Route Engine** mapping walkable tours.\n- Offline service workers.\n- **Gemini AI voice guide** grounding responses in localized map data.";
  }

  if (query.includes("3d") || query.includes("character") || query.includes("three") || query.includes("space") || query.includes("spline") || query.includes("robot")) {
    return "🚀 **Characters 3D Viewer** is built with **React Three Fiber (R3F)** and **Three.js**:\n\n- Displays 3D models in a starry space environment.\n- Toggles lighting between **Celestial Mode** (purple/neon spotlights) and **Studio Mode** (neutral testing light).\n- **Sub-Mesh Traverser** dynamically enables wireframe rendering on individual parts.\n- **Asset Auto-Discovery Plugin** automatically updates selection menus when a new `.glb` is added to the folder.";
  }

  if (query.includes("high school") || query.includes("smk") || query.includes("tkj") || query.includes("network") || query.includes("cisco") || query.includes("mikrotik") || query.includes("cabling")) {
    return "🔌 Ridho graduated from **SMK Pembina Bangsa** in **Network Engineering (TKJ)**.\n\nHis core network skills include:\n- CLI configuration of VLANs, trunking, and port security on **Cisco switches**.\n- Gateway hotspots, bridge interfaces, and NAT rules on **MikroTik RouterOS**.\n- Hands-on **UTP RJ-45 crimping** and optical fiber patch panel distributions.\n- Linux system administration and shell scripting.";
  }

  if (query.includes("uni") || query.includes("college") || query.includes("study") || query.includes("bakrie") || query.includes("semester") || query.includes("information system") || query.includes("sistem informasi") || query.includes("curriculum") || query.includes("course")) {
    return "🏫 Ridho is a 6th-semester **S1 Information Systems** student at **Universitas Bakrie**, Jakarta.\n\nThe IS program bridges IT and enterprise business management. His coursework spans:\n\n**Foundations (Sem 1–2):** Algorithms & Programming, Database Systems, Computer Networks, Data Structures, Business & Management, Entrepreneurship.\n**Development (Sem 3–4):** Management Information Systems (MIS), Information System Analysis & Design (SDLC, DFD), Mobile Programming.\n**Specialization (Sem 5–6):** Software Engineering, IT Governance, IS Audit, Business Process Management (BPMN), Knowledge Management, Technopreneurship.\n\nHe also participates in **MBKM (Merdeka Belajar – Kampus Merdeka)** and holds active **AWS Academy** credentials from Cloud Foundations and Learner Lab.";
  }

  if (query.includes("mascot") || query.includes("logo") || query.includes("fox") || query.includes("sword")) {
    return "🦊 Ridho's mascot is a **neon green/emerald fox** wielding a glowing neon sword.\n\n- The **Fox** represents the agility, firewall protection, and speed learned during his Network Engineering (SMK TKJ) days.\n- The **Neon Sword** represents cutting-edge cloud infrastructure and AI application engineering (University of Bakrie & AWS).";
  }

  if (query.includes("skills") || query.includes("tech") || query.includes("python") || query.includes("javascript") || query.includes("typescript") || query.includes("stack")) {
    return "🛠️ Ridho's tech stack spans:\n\n- **Cloud**: AWS VPC, EC2, S3, RDS, Amazon Bedrock, SageMaker\n- **Software**: React, Next.js 15, TypeScript, Python, D3.js, Three.js/R3F, Leaflet.js, Firebase\n- **Networks**: Cisco IOS, MikroTik RouterOS, structured cabling (RJ-45/fiber)\n- **IS & Governance**: ERD/SQL database modeling, SDLC systems analysis, BPMN process modeling, IT Governance, IS Audit";
  }

  if (query.includes("celeste") || query.includes("workstation") || query.includes("automation") || query.includes("volume") || query.includes("safety gate") || query.includes("cockpit")) {
    return "🌌 **Celeste AI** is a premium full-stack developer workspace and PC automation agent.\n\nKey features include:\n- **Ultra-Premium Web Cockpit**: Next.js dashboard with Server-Sent Events (SSE) streaming chat, collapsible DeepSeek-R1 reasoning thought processes, quick system suggestions, and Reasoner/Caveman modes.\n- **Celeste Safety Gate**: A security-first command-approval overlay that intercepts mutating shell commands or script run requests, prompting the operator for manual approval before execution.\n- **Sidebar Code Editor & File Browser**: Interactive IDE-like editor with path browser, workspace root selector, hotkey saving, and dynamic project switcher.\n- **Live Diagnostics & PC Control**: System status dashboards (CPU/RAM/IP), service health checking, process task manager (Stop-Process controls), and on-the-fly C# compilation interfacing with Windows CoreAudio COM APIs for physical OS volume slider manipulation.";
  }

  if (query.includes("acontext") || query.includes("audit") || query.includes("compliance") || query.includes("soc 2") || query.includes("remediation") || query.includes("framework")) {
    return "🛡️ **Acontext Audit** is a Continuous Compliance & Automated Security Mapping Engine:\n\n- **Acontext Sync Engine**: Bidirectional synchronization utility that watches policy/log markdown files under `audit-templates/` and pushes instant updates to the database.\n- **Multi-Framework Regulatory Catalog**: Models and audits criteria across 7 frameworks: SOC 2 Type II, ISO 27001, COBIT 2019, NIST SP 800-53, GDPR, PCI-DSS, and HIPAA.\n- **Semantic AI Risk Mapping**: Feeds parsed repo defects (strict tsconfig compile flags, package.json vulnerabilities) to LLMs to compute OWASP severity ratings.\n- **SSE Execution Console**: Streams live audit steps token-by-token using Server-Sent Events (SSE) into an interactive dark terminal console.";
  }

  if (query.includes("minerva") || query.includes("agent") || query.includes("cognitive") || query.includes("rag") || query.includes("planner")) {
    return "🧠 **Minerva AI** is a next-generation conversational AI agent platform (Currently in progress / under development):\n\n- **Contextual Memory**: Powered by semantic vector database embeddings for long-term personalized recall.\n- **Cognitive Planner**: Leverages reasoning models to create dynamic task execution checklists on the fly.\n- **Tool Calling Router**: Dynamically integrates with external APIs to automate complex user workflows.";
  }

  if (query.includes("velvet") || query.includes("dough") || query.includes("baking") || query.includes("cake") || query.includes("qris") || query.includes("kitchen") || query.includes("order")) {
    return "🍰 **Velvet & Dough** is a premium direct-to-consumer (D2C) e-commerce & baking operations SaaS:\n\n- **Hybrid In-Memory Mock DB**: Falls back to an in-memory client (`MockPrismaClient`) if Postgres is missing during dev, supporting full transactions, relations, and aggregations.\n- **Velvet AI Translator**: Automatically translates Indonesian testimonials to English contextually for international users.\n- **Fail-Safe Middleware**: Bypasses rate limits and logs warnings if Redis goes offline to prevent checkout abandonment.\n- **Zero-Auth Customer Tracking**: Customers can track order fulfillment locally via browser storage or import order history using Order Number and WhatsApp number.\n- **Kitchen FIFO Production Queue**: Dashboard for baking workflow status transitions (PREPARING → READY → DELIVERED) with omnichannel logging and dynamic stock controls.";
  }

  if (query.includes("hello") || query.includes("hi ") || query.includes("hey") || query.includes("greeting")) {
    return "Hello! I am Ridho's AI Portfolio Assistant. I can tell you all about his vocational network engineering roots, college studies, AWS prep, or projects (Maryam Familia, Discover York WebGIS, Characters 3D Viewer, Celeste AI, Acontext Audit, Minerva AI, and Velvet & Dough). Ask me anything!";
  }

  return "I'm glad you asked! As Ridho Azfa's AI assistant, I can tell you that he combines a solid vocational background in network cabling/switching with cloud engineering and web application skills. Feel free to ask about his **AWS badges**, **vocational networking skills**, **University of Bakrie studies**, or **case study projects like Maryam Familia, Discover York, Characters 3D, Celeste AI, Acontext Audit, Minerva AI, or Velvet & Dough**!";
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages payload" }, { status: 400 });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    const isMock = !apiKey || apiKey === "your_deepseek_api_key_here";

    if (isMock) {
      // Return high-fidelity mock response with simulated network delay
      const lastMessage = messages[messages.length - 1]?.content || "";
      const content = mockResponse(lastMessage);

      // Artificial delay (400ms) for typing feel
      await new Promise((resolve) => setTimeout(resolve, 400));

      return NextResponse.json({
        choices: [
          {
            message: {
              role: "assistant",
              content: content,
            },
          },
        ],
      });
    }

    // Call DeepSeek API Chat endpoint
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API error response:", errorText);
      return NextResponse.json({ error: `DeepSeek API returned status ${response.status}` }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    console.error("Chat proxy error:", error);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
