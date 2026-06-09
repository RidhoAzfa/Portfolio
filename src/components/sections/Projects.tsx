"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Layers,
  ExternalLink,
  GitBranch,
  X,
  Terminal,
  ArrowRight,
  Code,
  Workflow
} from "lucide-react";

interface Project {
  id: string;
  category: "cloud" | "web" | "ai";
  key: string;
  tags: string[];
  tech: string[];
  github?: string;
  codeSnippet: string;
  codeLang: string;
  renderSVG: () => React.ReactNode;
}

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "cloud" | "web" | "ai">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const projects: Project[] = [
    {
      id: "p1",
      category: "web",
      key: "p1",
      tags: ["Genealogy Tree", "D3.js Canvas", "Gemini AI", "Real-Time Sync"],
      tech: ["Strict TypeScript", "Vite Bundler", "Pure Vanilla CSS3 (Custom Properties)", "Cloud Firestore (onSnapshot sync)", "Firebase Auth", "D3.js Visualization Engine", "Gemini 3.1 Flash Lite API", "Web Speech API (Synthesis/Recognition)", "Leaflet.js Mapping"],
      github: "https://github.com/RidhoAzfa/maryam-familia-genealogy",
      codeLang: "typescript",
      codeSnippet: `// Dynamic Kinship Path Traversal Algorithm
export function calculateKinship(memberA: string, memberB: string, graph: FamilyGraph): string {
  const queue: [string, string[]][] = [[memberA, []]];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const [currentId, path] = queue.shift()!;
    if (currentId === memberB) return mapPathToRelationship(path);

    visited.add(currentId);
    const relations = graph.getAdjacentNodes(currentId);
    for (const { id, type } of relations) {
      if (!visited.has(id)) {
        queue.push([id, [...path, type]]);
      }
    }
  }
  return "Relative";
}`,
      renderSVG: () => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-accent-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Background grid representation */}
          <path d="M 10,10 L 10,190 M 50,10 L 50,190 M 90,10 L 90,190 M 130,10 L 130,190 M 170,10 L 170,190 M 210,10 L 210,190 M 250,10 L 250,190 M 290,10 L 290,190 M 330,10 L 330,190 M 370,10 L 370,190" className="stroke-accent-primary/[0.03] stroke-[0.5]" />
          <path d="M 10,10 L 390,10 M 10,50 L 390,50 M 10,90 L 390,90 M 10,130 L 390,130 M 10,170 L 390,170" className="stroke-accent-primary/[0.03] stroke-[0.5]" />

          {/* Family Tree Nodes */}
          {/* Gen 1: Ali Sabri */}
          <g transform="translate(160, 45)">
            <rect x="-45" y="-15" width="90" height="30" rx="6" className="stroke-accent-secondary fill-accent-secondary/5" />
            <text x="0" y="-2" textAnchor="middle" className="fill-accent-secondary font-display text-[8px] font-extrabold">Ali Sabri</text>
            <text x="0" y="8" textAnchor="middle" className="fill-muted-text font-mono text-[6px]">Gen 1 | 50 th</text>
          </g>

          {/* Relationship Line */}
          <path d="M160,60 L160,130" className="stroke-accent-primary/60 stroke-[1.5] animate-svg-dash" strokeDasharray="3 3" />
          <circle cx="160" cy="95" r="12" className="stroke-accent-primary fill-background" />
          <text x="160" y="98" textAnchor="middle" className="fill-accent-primary font-mono text-[5px] font-bold">SON</text>

          {/* Gen 2: Ridho Azfa */}
          <g transform="translate(160, 145)">
            <rect x="-45" y="-15" width="90" height="30" rx="6" className="stroke-accent-primary fill-accent-primary/5" />
            <text x="0" y="-2" textAnchor="middle" className="fill-accent-primary font-display text-[8px] font-extrabold">Ridho Azfa</text>
            <text x="0" y="8" textAnchor="middle" className="fill-muted-text font-mono text-[6px]">Gen 2 | 21 th</text>
          </g>

          {/* AI Helper Node (Gemini) */}
          <g transform="translate(300, 95)">
            <circle cx="0" cy="0" r="18" className="stroke-accent-secondary fill-accent-secondary/5 animate-pulse" />
            <path d="M-6,-4 L6,-4 L6,4 L-6,4 Z M-6,0 L-3,0 M6,0 L3,0" className="stroke-accent-primary" />
            <text x="0" y="14" textAnchor="middle" className="fill-accent-secondary font-mono text-[5px] font-bold uppercase tracking-wider">Maryam AI</text>
          </g>

          {/* Connection from AI to Tree */}
          <path d="M172,95 L282,95" className="stroke-accent-secondary/40 stroke-[1] animate-svg-flow-left" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: "p2",
      category: "cloud",
      key: "p2",
      tags: ["WebGIS Map", "Leaflet.js", "Spatial Buffer", "QGIS Classification"],
      tech: ["HTML5", "Vanilla CSS3", "JavaScript ES6+", "Leaflet.js Mapping Engine", "Leaflet Routing Machine", "Google Gemini 3.1 Flash Lite API", "IndexedDB", "Service Workers", "QGIS Spatial Desktop"],
      github: "https://github.com/RidhoAzfa/discover-york-webgis",
      codeLang: "javascript",
      codeSnippet: `// Draggable Spatial Buffer & Proximity Calculation
function updateBuffer(latlng, radiusMeters) {
  if (bufferCircle) {
    bufferCircle.setLatLng(latlng);
    bufferCircle.setRadius(radiusMeters);
  } else {
    bufferCircle = L.circle(latlng, {
      radius: radiusMeters,
      color: '#10B981',
      fillColor: '#06B6D4',
      fillOpacity: 0.15
    }).addTo(map);
  }

  // Scan local spatial features inside IndexDB
  let insideCount = 0;
  localGeoJsonFeatures.forEach(feature => {
    const distance = map.distance(latlng, feature.geometry.coordinates);
    if (distance <= radiusMeters) {
      insideCount++;
    }
  });
  document.getElementById('buffer-count').innerText = insideCount;
}`,
      renderSVG: () => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-accent-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Map Roads representation (background) */}
          <path d="M 10,60 L 390,60 M 10,140 L 390,140 M 120,10 L 120,190 M 280,10 L 280,190 M 50,10 L 350,190" className="stroke-accent-primary/[0.08] stroke-[1]" />

          {/* Study Area Boundary dotted line */}
          <rect x="25" y="15" width="350" height="170" rx="10" strokeDasharray="3 3" className="stroke-accent-secondary/30" />
          <text x="35" y="28" className="fill-accent-secondary font-mono text-[6px] font-bold uppercase tracking-wider">York Study Boundary</text>

          {/* Buffer Circle Area (glowing mint/cyan) */}
          <circle cx="200" cy="100" r="55" className="stroke-accent-primary fill-accent-primary/[0.05] stroke-[2] animate-svg-spin" />
          <circle cx="200" cy="100" r="4" className="stroke-accent-secondary fill-accent-secondary" />

          {/* Spatial Pins/Markers */}
          {/* Markers inside the buffer circle (glowing green/cyan) */}
          <g transform="translate(180, 80)">
            <path d="M 0,0 C -3,-6 -3,-10 0,-12 C 3,-10 3,-6 0,0 Z" className="stroke-accent-primary fill-accent-primary" />
            <circle cx="0" cy="-9" r="1.5" className="fill-background" />
          </g>
          <g transform="translate(230, 110)">
            <path d="M 0,0 C -3,-6 -3,-10 0,-12 C 3,-10 3,-6 0,0 Z" className="stroke-accent-primary fill-accent-primary" />
            <circle cx="0" cy="-9" r="1.5" className="fill-background" />
          </g>
          <g transform="translate(170, 120)">
            <path d="M 0,0 C -3,-6 -3,-10 0,-12 C 3,-10 3,-6 0,0 Z" className="stroke-accent-primary fill-accent-primary" />
            <circle cx="0" cy="-9" r="1.5" className="fill-background" />
          </g>

          {/* Markers outside the buffer circle (dimmed gray/white) */}
          <g transform="translate(80, 50)" className="opacity-40">
            <path d="M 0,0 C -3,-6 -3,-10 0,-12 C 3,-10 3,-6 0,0 Z" className="stroke-muted-text fill-muted-text" />
          </g>
          <g transform="translate(320, 150)" className="opacity-40">
            <path d="M 0,0 C -3,-6 -3,-10 0,-12 C 3,-10 3,-6 0,0 Z" className="stroke-muted-text fill-muted-text" />
          </g>

          {/* Floating HUD Card indicating features inside buffer */}
          <g transform="translate(265, 30)">
            <rect x="0" y="0" width="85" height="34" rx="4" className="stroke-accent-secondary fill-background/95" />
            <text x="6" y="10" className="fill-muted-text font-mono text-[5px] font-bold uppercase">Buffer Radius: 150m</text>
            <text x="6" y="18" className="fill-accent-primary font-mono text-[6px] font-bold">POI Detected: 3</text>
            <text x="6" y="26" className="fill-accent-secondary font-mono text-[5px] font-bold uppercase animate-pulse">Syncing IndexedDB...</text>
          </g>
        </svg>
      )
    },
    {
      id: "p3",
      category: "web",
      key: "p3",
      tags: ["React 19", "Three.js", "R3F / Drei", "Vite Plugin"],
      tech: ["React 19", "Three.js", "React Three Fiber (R3F)", "@react-three/drei", "Vite 8", "Strict TypeScript", "OrbitControls", "Mesh Traversal", "PBR Lighting"],
      github: "https://github.com/RidhoAzfa/characters-3d-viewer",
      codeLang: "javascript",
      codeSnippet: `// Declarative Mesh-Level Wireframe Traverser
export function Model({ url, wireframe }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene, wireframe]);

  return <primitive object={scene} />;
}`,
      renderSVG: () => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-accent-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Starry Sky background representation */}
          <circle cx="30" cy="30" r="0.5" className="fill-accent-secondary" />
          <circle cx="80" cy="50" r="0.5" className="fill-accent-primary" />
          <circle cx="330" cy="40" r="0.5" className="fill-accent-secondary" />
          <circle cx="280" cy="70" r="0.5" className="fill-accent-primary" />
          <circle cx="150" cy="20" r="0.5" className="fill-muted-text" />
          <circle cx="360" cy="120" r="0.5" className="fill-muted-text" />

          {/* Orbit Controls track rings (ellipses) */}
          <ellipse cx="200" cy="130" rx="90" ry="25" strokeDasharray="3 3" className="stroke-accent-primary/20 animate-svg-spin-ellipse" />
          <ellipse cx="200" cy="130" rx="120" ry="32" className="stroke-accent-secondary/15" />

          {/* 3D Character Mesh Representation (wireframe head/body) */}
          <g transform="translate(200, 110)">
            {/* Head wireframe grid */}
            <circle cx="0" cy="-45" r="22" className="stroke-accent-primary fill-accent-primary/5 stroke-[1.2]" />
            <path d="M-22,-45 C-10,-55 10,-55 22,-45 M-22,-45 C-10,-35 10,-35 22,-45 M0,-67 L0,-23 M-15,-61 L-15,-29 M15,-61 L15,-29" className="stroke-accent-primary/40 stroke-[0.8]" />

            {/* Body/Jacket contour */}
            <path d="M-12,-22 L-26,5 L26,5 L12,-22 Z" className="stroke-accent-secondary fill-accent-secondary/5 stroke-[1.2]" />
            <path d="M-26,5 L-20,30 L20,30 L26,5 Z" className="stroke-accent-secondary/40 stroke-[0.8]" />
            <path d="M-10,-22 L-10,30 M10,-22 L10,30 M-20,5 L20,5" className="stroke-accent-secondary/30 stroke-[0.5]" />
          </g>

          {/* Contact Shadow floor ellipse */}
          <ellipse cx="200" cy="148" rx="40" ry="6" className="fill-accent-primary/10 stroke-none" />

          {/* Dynamic Spotlight representation */}
          <path d="M100,20 L180,60 M300,20 L220,60" className="stroke-accent-secondary/35 stroke-[1]" />
          <circle cx="100" cy="20" r="6" className="stroke-accent-secondary fill-background" />
          <circle cx="300" cy="20" r="6" className="stroke-accent-secondary fill-background" />

          {/* Control HUD Card overlay */}
          <g transform="translate(135, 158)">
            <rect x="0" y="0" width="130" height="26" rx="5" className="stroke-accent-primary fill-background/95 stroke-[1]" />
            <text x="65" y="10" textAnchor="middle" className="fill-accent-primary font-mono text-[5px] font-bold uppercase tracking-wider">3D viewer control deck</text>
            <text x="12" y="19" className="fill-muted-text font-mono text-[4px] font-bold">WIREFRAME: OFF</text>
            <text x="72" y="19" className="fill-accent-secondary font-mono text-[4px] font-bold">THEME: CELESTIAL</text>
          </g>
        </svg>
      )
    },
    {
      id: "p4",
      category: "ai",
      key: "p4",
      tags: ["Hybrid AI Workstation", "Local GPU / Cloud", "Subprocess Queue", "IndexedDB Vault"],
      tech: ["React 19", "TypeScript", "Vite", "Express API Proxy (Port 3001)", "FastAPI GPU Engine (Python, Port 5000)", "PyTorch & Stable Diffusion", "Ollama LLM (Llama 3/Gemma 2)", "IndexedDB (CelesteDB Binary Store)", "Sequential CPU Offloading", "VAE Slicing/Tiling"],
      github: "https://github.com/RidhoAzfa/celeste-ai-workstation",
      codeLang: "python",
      codeSnippet: `# local_worker.py - Subprocess Inference Worker with GPU Memory Offloading
import torch
from diffusers import StableDiffusionXLPipeline

def run_inference(prompt, aspect_ratio, steps, output_path):
    # Enable meta-device memory savings
    pipe = StableDiffusionXLPipeline.from_pretrained(
        "Celeste-Rapid-XL",
        torch_dtype=torch.float16,
        low_cpu_mem_usage=True
    )

    # Low-VRAM CPU Offloading & latent slicing to fit in 6GB GPU VRAM
    pipe.enable_sequential_cpu_offload()
    pipe.enable_vae_slicing()
    pipe.enable_vae_tiling()

    # Generate image
    image = pipe(
        prompt=prompt,
        num_inference_steps=steps,
        guidance_scale=7.5
    ).images[0]

    image.save(output_path)`,
      renderSVG: () => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-accent-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Decoupled Multi-Service Flow */}

          {/* Frontend block (React 19) */}
          <g transform="translate(15, 60)">
            <rect x="0" y="0" width="80" height="60" rx="6" className="stroke-accent-primary fill-accent-primary/5" />
            <text x="40" y="18" textAnchor="middle" className="fill-accent-primary font-display text-[7px] font-extrabold">Celeste WebUI</text>
            <text x="40" y="32" textAnchor="middle" className="fill-muted-text font-mono text-[5px]">React 19 / Vite</text>
            <text x="40" y="44" textAnchor="middle" className="fill-accent-secondary font-mono text-[5px]">IndexedDB Cache</text>

            {/* Small UI layout representation inside */}
            <rect x="8" y="48" width="64" height="6" rx="1" className="stroke-accent-primary/30 fill-none" />
          </g>

          {/* Node.js Proxy Express Server (Port 3001) */}
          <g transform="translate(140, 60)">
            <rect x="0" y="0" width="90" height="60" rx="6" className="stroke-accent-secondary fill-accent-secondary/5" />
            <text x="45" y="18" textAnchor="middle" className="fill-accent-secondary font-display text-[7px] font-extrabold">Express API</text>
            <text x="45" y="32" textAnchor="middle" className="fill-muted-text font-mono text-[5px]">Port 3001 Proxy</text>
            <text x="45" y="44" textAnchor="middle" className="fill-accent-primary/80 font-mono text-[5px]">Auth & Formatting</text>
          </g>

          {/* Python GPU Engine (Port 5000) & isolated worker subprocess */}
          <g transform="translate(270, 45)">
            <rect x="0" y="0" width="115" height="90" rx="6" className="stroke-emerald-500 fill-emerald-500/5" />
            <text x="57" y="18" textAnchor="middle" className="fill-emerald-500 font-display text-[7px] font-extrabold">FastAPI GPU Engine</text>
            <text x="57" y="30" textAnchor="middle" className="fill-muted-text font-mono text-[5px]">Port 5000 / PyTorch</text>

            {/* Subprocess wrapper box */}
            <rect x="10" y="38" width="95" height="42" rx="4" className="stroke-accent-primary fill-background/90 stroke-[1] animate-svg-pulse-border" />
            <text x="57" y="48" textAnchor="middle" className="fill-accent-primary font-mono text-[5px] font-bold">local_worker.py (Fork)</text>
            <text x="57" y="58" textAnchor="middle" className="fill-muted-text font-mono text-[4px]">GPU memory offloading loops</text>
            <text x="57" y="68" textAnchor="middle" className="fill-accent-secondary font-mono text-[4px] font-bold">VRAM Peak &lt; 4.5 GB</text>
          </g>

          {/* Interconnecting arrows */}
          {/* UI to API Proxy */}
          <path d="M 95,90 L 140,90" className="stroke-accent-primary/60 stroke-[1.5] animate-svg-flow-right" />
          <polygon points="140,90 135,87 135,93" className="fill-accent-primary" />

          {/* API Proxy to FastAPI */}
          <path d="M 230,90 L 270,90" className="stroke-accent-secondary/60 stroke-[1.5] animate-svg-flow-right" />
          <polygon points="270,90 265,87 265,93" className="fill-accent-secondary" />

          {/* Return loops representing data responses */}
          <path d="M 270,110 L 230,110" className="stroke-accent-secondary/30 stroke-[1] animate-svg-flow-left" strokeDasharray="3 3" />
          <polygon points="230,110 235,107 235,113" className="fill-accent-secondary/30" />

          <path d="M 140,110 L 95,110" className="stroke-accent-primary/30 stroke-[1] animate-svg-flow-left" strokeDasharray="3 3" />
          <polygon points="95,110 100,107 100,113" className="fill-accent-primary/30" />
        </svg>
      )
    },
    {
      id: "p5",
      category: "cloud",
      key: "p5",
      tags: ["Multi-Tenant", "Acontext Sync Engine", "SSE Logger", "Compliance Maps"],
      tech: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Server-Sent Events (SSE)", "Node.js Filesystem", "OpenAI/Anthropic SDKs", "Radial SVG Gauges", "Flat-File Database Sync"],
      github: "https://github.com/RidhoAzfa/acontext-audit-engine",
      codeLang: "typescript",
      codeSnippet: `// Acontext Sync Engine - Bidirectional Watcher and Markdown Sync
import fs from "fs";
import path from "path";

export function watchAuditTemplates(templatesDir: string, dbCallback: (data: any) => void) {
  fs.watch(templatesDir, (eventType, filename) => {
    if (filename && filename.endsWith(".md")) {
      const filePath = path.join(templatesDir, filename);
      fs.readFile(filePath, "utf-8", (err, content) => {
        if (err) return console.error(\`Failed to sync \${filename}\`, err);
        const parsedData = parseAuditMarkdown(content);
        dbCallback(parsedData);
      });
    }
  });
}`,
      renderSVG: () => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-accent-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Grid lines */}
          <path d="M 20,20 L 20,180 M 60,20 L 60,180 M 100,20 L 100,180 M 140,20 L 140,180 M 180,20 L 180,180 M 220,20 L 220,180 M 260,20 L 260,180 M 300,20 L 300,180 M 340,20 L 340,180 M 380,20 L 380,180" className="stroke-accent-primary/[0.02] stroke-[0.5]" />

          {/* Main Dashboard Portal (Left) */}
          <g transform="translate(20, 30)">
            <rect x="0" y="0" width="130" height="140" rx="8" className="stroke-accent-primary fill-background/90" />
            <rect x="10" y="10" width="110" height="15" rx="3" className="stroke-accent-primary/20 fill-accent-primary/5" />
            <text x="15" y="20" className="fill-accent-primary font-display text-[6px] font-extrabold uppercase">Auditor master console</text>

            {/* Portfolio stats metrics */}
            <rect x="10" y="32" width="50" height="25" rx="4" className="stroke-card-border fill-card-bg/50" />
            <text x="14" y="40" className="fill-muted-text font-mono text-[4px] font-bold uppercase">Audits</text>
            <text x="14" y="52" className="fill-accent-secondary font-mono text-[9px] font-extrabold">8 Active</text>

            <rect x="70" y="32" width="50" height="25" rx="4" className="stroke-card-border fill-card-bg/50" />
            <text x="74" y="40" className="fill-muted-text font-mono text-[4px] font-bold uppercase">Compliance</text>
            <text x="74" y="52" className="fill-accent-primary font-mono text-[9px] font-extrabold">95% avg</text>

            {/* Tenant Client Card lists */}
            <rect x="10" y="65" width="110" height="18" rx="4" className="stroke-accent-secondary/40 fill-accent-secondary/[0.02]" />
            <text x="15" y="76" className="fill-accent-secondary font-mono text-[5px] font-bold">Stark Industries</text>
            <circle cx="112" cy="74" r="3" className="fill-accent-primary" />

            <rect x="10" y="88" width="110" height="18" rx="4" className="stroke-card-border fill-none" />
            <text x="15" y="99" className="fill-muted-text font-mono text-[5px] font-bold">LexCorp Industries</text>
            <circle cx="112" cy="97" r="3" className="fill-accent-primary" />

            <rect x="10" y="111" width="110" height="18" rx="4" className="stroke-card-border fill-none" />
            <text x="15" y="122" className="fill-muted-text font-mono text-[5px] font-bold">Oscorp Corporation</text>
            <circle cx="112" cy="120" r="3" className="fill-accent-secondary" />
          </g>

          {/* Sync Engine / Scanner (Center) */}
          <g transform="translate(165, 50)">
            {/* Bidirectional sync icon */}
            <circle cx="20" cy="30" r="18" className="stroke-accent-secondary fill-accent-secondary/5" />
            <path d="M 12,24 L 28,24 M 28,24 L 24,20 M 28,24 L 24,28 M 28,36 L 12,36 M 12,36 L 16,32 M 12,36 L 16,40" className="stroke-accent-primary stroke-[1.5] animate-svg-dash" />
            <text x="20" y="56" textAnchor="middle" className="fill-accent-secondary font-mono text-[5px] font-bold uppercase tracking-wider">Acontext Sync</text>

            {/* Dynamic arrow connectors */}
            <path d="M -10,30 L -5,30" className="stroke-accent-primary/60 stroke-[1] animate-svg-flow-right" />
            <path d="M 45,30 L 60,30" className="stroke-accent-secondary/60 stroke-[1] animate-svg-flow-right" />
          </g>

          {/* Isolated Client Portal Dashboard (Right) */}
          <g transform="translate(235, 30)">
            <rect x="0" y="0" width="145" height="140" rx="8" className="stroke-accent-secondary fill-background/90" />

            {/* Header with isolated Client badge */}
            <rect x="8" y="10" width="129" height="15" rx="3" className="stroke-accent-secondary/20 fill-accent-secondary/5" />
            <text x="12" y="20" className="fill-accent-secondary font-display text-[6px] font-extrabold uppercase">Client Portal // Stark Industries</text>

            {/* Radial progress circle */}
            <circle cx="40" cy="55" r="20" className="stroke-card-border fill-none" strokeWidth="3" />
            <circle cx="40" cy="55" r="20" className="stroke-accent-primary fill-none" strokeWidth="3" strokeDasharray="125" strokeDashoffset="25" />
            <text x="40" y="58" textAnchor="middle" className="fill-accent-primary font-mono text-[8px] font-extrabold">95%</text>
            <text x="40" y="84" textAnchor="middle" className="fill-muted-text font-mono text-[4.5px] uppercase">Compliance Score</text>

            {/* Live SSE Terminal Console */}
            <rect x="8" y="93" width="129" height="40" rx="4" className="stroke-card-border fill-[#030712]" />
            <text x="12" y="102" className="fill-emerald-400 font-mono text-[4.5px]">stark@compliance:~$ scan workspace</text>
            <text x="12" y="110" className="fill-emerald-400/80 font-mono text-[4px]">[DISCOVERY] Scanned 41 workspace files...</text>
            <text x="12" y="118" className="fill-emerald-400/80 font-mono text-[4px]">[ANALYSIS] Check SOC 2 CC7.1: Passed</text>
            <text x="12" y="126" className="fill-accent-primary font-mono text-[4.5px] animate-pulse">&gt; Syncing ledger artifacts...</text>
          </g>
        </svg>
      )
    },
    {
      id: "p6",
      category: "ai",
      key: "p6",
      tags: ["Conversational Agent", "Cognitive Planner", "Semantic RAG", "In Progress"],
      tech: ["Next.js App Router", "TypeScript", "FastAPI Service", "Vector Database (Chroma)", "LlamaIndex / LangChain", "Retrieval-Augmented Generation (RAG)", "Autonomous Agent Planner"],
      github: "https://github.com/RidhoAzfa/minerva-ai-agent",
      codeLang: "typescript",
      codeSnippet: `// Minerva Agent Cognitive Loop Prototype (In Progress)
export async function executeAgentStep(goal: string, context: AgentContext) {
  const memory = await context.vectorStore.similaritySearch(goal, 3);
  const plan = await context.llm.generatePlan({
    goal,
    memory: memory.map(m => m.pageContent),
    availableTools: context.tools.list()
  });

  for (const step of plan.steps) {
    console.log(\`[Minerva Planner] Executing: \${step.description}\`);
    const toolResult = await context.tools.execute(step.tool, step.args);
    await context.vectorStore.addDocument({
      content: \`Tool \${step.tool} returned: \${toolResult}\`,
      metadata: { goal, step: step.id }
    });
  }
}`,
      renderSVG: () => (
        <svg viewBox="0 0 400 200" className="w-full h-full text-accent-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
          {/* Blueprint background grid */}
          <path d="M 20,20 L 20,180 M 60,20 L 60,180 M 100,20 L 100,180 M 140,20 L 140,180 M 180,20 L 180,180 M 220,20 L 220,180 M 260,20 L 260,180 M 300,20 L 300,180 M 340,20 L 340,180 M 380,20 L 380,180" className="stroke-accent-secondary/[0.03] stroke-[0.5]" />
          <path d="M 10,20 L 390,20 M 10,60 L 390,60 M 10,100 L 390,100 M 10,140 L 390,140 M 10,180 L 390,180" className="stroke-accent-secondary/[0.03] stroke-[0.5]" />

          {/* Under construction blueprint box */}
          <rect x="25" y="25" width="350" height="150" rx="8" className="stroke-accent-secondary/30 fill-accent-secondary/[0.01]" strokeDasharray="5 5" />

          {/* Cognitive Agent Neural Path (Center) */}
          <g transform="translate(200, 95)">
            {/* Central Agent Node */}
            <circle cx="0" cy="0" r="22" className="stroke-accent-primary fill-background/90 stroke-[2] animate-svg-pulse-core" />
            <text x="0" y="3" textAnchor="middle" className="fill-accent-primary font-display text-[7px] font-extrabold">MINERVA</text>
            <text x="0" y="11" textAnchor="middle" className="fill-accent-secondary font-mono text-[4.5px] font-bold tracking-wider">CORE</text>

            {/* Outer Neural Path Nodes */}
            <g className="stroke-[1] stroke-accent-secondary/50 animate-svg-dash">
              {/* Memory Node */}
              <line x1="0" y1="0" x2="-60" y2="-35" />
              {/* Planner Node */}
              <line x1="0" y1="0" x2="60" y2="-35" />
              {/* Tools Node */}
              <line x1="0" y1="0" x2="60" y2="35" />
              {/* Execution Node */}
              <line x1="0" y1="0" x2="-60" y2="35" />
            </g>

            {/* Neural endpoints */}
            <circle cx="-60" cy="-35" r="14" className="stroke-accent-secondary fill-background" />
            <text x="-60" y="-32" textAnchor="middle" className="fill-accent-secondary font-mono text-[4.5px] font-bold">MEMORY</text>

            <circle cx="60" cy="-35" r="14" className="stroke-accent-secondary fill-background" />
            <text x="60" y="-32" textAnchor="middle" className="fill-accent-secondary font-mono text-[4.5px] font-bold">PLANNER</text>

            <circle cx="60" cy="35" r="14" className="stroke-accent-secondary fill-background" />
            <text x="60" y="38" textAnchor="middle" className="fill-accent-secondary font-mono text-[4.5px] font-bold">TOOLS</text>

            <circle cx="-60" cy="35" r="14" className="stroke-accent-secondary fill-background" />
            <text x="-60" y="38" textAnchor="middle" className="fill-accent-secondary font-mono text-[4.5px] font-bold">EXEC</text>
          </g>

          {/* Glowing neural signals */}
          <circle cx="-30" cy="-17.5" r="2" className="fill-accent-primary animate-ping" />
          <circle cx="30" cy="17.5" r="2" className="fill-accent-primary animate-ping" />

          {/* Blueprint Watermark Stamp overlay */}
          <g transform="translate(135, 142)">
            <rect x="0" y="0" width="130" height="24" rx="4" className="stroke-accent-secondary/50 fill-background/95 stroke-[1]" strokeDasharray="2 2" />
            <text x="65" y="10" textAnchor="middle" className="fill-accent-secondary font-mono text-[5px] font-bold uppercase tracking-wider">PROJECT STATUS // BLUEPRINT</text>
            <text x="65" y="18" textAnchor="middle" className="fill-accent-primary font-mono text-[5.5px] font-extrabold uppercase animate-pulse">UNDER ACTIVE DEVELOPMENT</text>
          </g>
        </svg>
      )
    }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-background border-t border-card-border"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="eyebrow">{"// selected work"}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-fg-app">
            {t("projects.title")}
          </h2>
          <p className="text-muted-text text-sm md:text-base max-w-2xl leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Pill segment filter */}
        <div className="flex justify-center">
          <div className="relative flex p-1 rounded-xl bg-surface-raised border border-card-border gap-1">
            {(["all", "cloud", "web", "ai"] as const).map(filter => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 py-2 rounded-lg text-xs font-mono font-bold transition-colors duration-200 cursor-pointer z-10 ${
                  activeFilter === filter
                    ? "text-accent-primary"
                    : "text-muted-text hover:text-fg-app"
                }`}
              >
                <span className="relative z-10">{t(`projects.cat_${filter}`)}</span>
                {activeFilter === filter && (
                  <motion.div
                    layoutId="projects-active-filter"
                    className="absolute inset-0 bg-accent-primary/10 border border-accent-primary/25 rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => {
              const catText =
                project.category === "cloud" ? "text-accent-secondary" :
                project.category === "ai"    ? "text-accent-tertiary"  :
                                               "text-accent-primary";
              const catBadge =
                project.category === "cloud" ? "text-accent-secondary border-accent-secondary/25 bg-accent-secondary/8" :
                project.category === "ai"    ? "text-accent-tertiary border-accent-tertiary/25 bg-accent-tertiary/8"   :
                                               "text-accent-primary border-accent-primary/25 bg-accent-primary/8";
              const catTopBar =
                project.category === "cloud" ? "from-accent-secondary to-accent-secondary/0" :
                project.category === "ai"    ? "from-accent-tertiary to-accent-tertiary/0"   :
                                               "from-accent-primary to-accent-primary/0";
              const catHoverBorder =
                project.category === "cloud" ? "hover:border-accent-secondary/30" :
                project.category === "ai"    ? "hover:border-accent-tertiary/30"  :
                                               "hover:border-accent-primary/30";
              const catSvgGlow =
                project.category === "cloud" ? "from-accent-secondary/8" :
                project.category === "ai"    ? "from-accent-tertiary/8"  :
                                               "from-accent-primary/8";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -4 }}
                  className={`glass rounded-3xl overflow-hidden border border-card-border shadow-lg flex flex-col group transition-all duration-300 ${catHoverBorder}`}
                >
                  {/* Category top-bar */}
                  <div className={`h-0.5 w-full bg-gradient-to-r ${catTopBar}`} />

                  {/* SVG preview */}
                  <div className="h-48 border-b border-card-border bg-background/60 relative flex items-center justify-center p-6 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-b ${catSvgGlow} via-transparent to-transparent opacity-40 pointer-events-none`} />
                    {project.renderSVG()}
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1 gap-4 text-left">
                    <div className="flex flex-col gap-1.5">
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${catText}`}>
                        {t(`projects.${project.key}_tagline`)}
                      </span>
                      <h3 className="text-lg font-extrabold text-fg-app font-display group-hover:text-accent-primary transition-colors duration-200">
                        {t(`projects.${project.key}_title`)}
                      </h3>
                    </div>

                    <p className="text-xs text-muted-text leading-relaxed flex-1">
                      {t(`projects.${project.key}_desc`)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold border ${catBadge}`}>
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-card-border text-[9px] font-mono font-bold text-muted-text border border-card-border">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <motion.button
                      id={`project-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-2.5 rounded-xl border text-xs font-mono font-bold transition-all duration-200 flex items-center justify-center gap-1.5 group/btn hover:opacity-90 ${catBadge}`}
                    >
                      <span>{t("projects.view_details")}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Slide-over Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="w-full max-w-xl h-full bg-background border-l border-card-border shadow-2xl relative z-10 flex flex-col overflow-y-auto"
            >
              {/* Category gradient top bar */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${
                selectedProject.category === "cloud" ? "from-accent-secondary via-accent-secondary/50 to-transparent" :
                selectedProject.category === "ai"    ? "from-accent-tertiary via-accent-tertiary/50 to-transparent"   :
                                                       "from-accent-primary via-accent-primary/50 to-transparent"
              }`} />

              <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-card-border">
                  <div className="flex items-center gap-2 text-accent-primary">
                    <Workflow className="w-4 h-4 animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">
                      {t(`projects.${selectedProject.key}_tagline`)}
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 rounded-full border border-card-border flex items-center justify-center text-muted-text hover:text-fg-app hover:bg-surface-raised transition-all cursor-pointer"
                    aria-label={t("projects.close")}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Title + desc */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-extrabold font-display text-fg-app">
                    {t(`projects.${selectedProject.key}_title`)}
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {t(`projects.${selectedProject.key}_desc`)}
                  </p>
                </div>

                {/* Body sections */}
                <div className="flex flex-col gap-6 flex-1">

                  {/* Architecture */}
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-secondary flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      {t("projects.architecture")}
                    </h4>
                    <div className="p-4 rounded-xl surface-raised border border-card-border text-xs text-muted-text leading-relaxed">
                      {t(`projects.${selectedProject.key}_spec_overview`)}
                    </div>
                  </div>

                  {/* Key features */}
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-secondary flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" />
                      {t("projects.key_features")}
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {[1, 2, 3, 4].map(idx => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-text">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                          <span>{t(`projects.${selectedProject.key}_feat${idx}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-col gap-2.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-secondary flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      {t("projects.tech_stack")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(techItem => (
                        <span key={techItem} className="px-2.5 py-1 rounded-lg surface-raised border border-card-border text-[10px] font-mono text-muted-text font-medium">
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code snippet */}
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-secondary flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        Configuration Snippet
                      </h4>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded surface-raised text-muted-text border border-card-border uppercase">
                        {selectedProject.codeLang}
                      </span>
                    </div>
                    <pre className="p-4 rounded-xl bg-background border border-card-border text-[10px] font-mono text-accent-primary overflow-x-auto select-all leading-relaxed max-h-48 scan-line-container">
                      <code>{selectedProject.codeSnippet}</code>
                    </pre>
                  </div>

                </div>

                {/* GitHub footer */}
                {selectedProject.github && (
                  <div className="border-t border-card-border pt-5">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-mono font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:opacity-90 hover:-translate-y-0.5 shadow-lg glow-primary"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span>{t("projects.github_link")}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
