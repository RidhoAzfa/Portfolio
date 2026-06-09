"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/Chatbot";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const SECTIONS = ["home", "about", "skills", "education", "certifications", "projects", "contact"];

function DesktopScrollIndicator() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Find the current active section based on scroll offset
      for (const section of [...SECTIONS].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-5 z-40">
      {/* Vertical line tracker */}
      <div className="absolute top-2 bottom-2 left-1/2 -translate-x-1/2 w-[1px] bg-card-border pointer-events-none" />

      {SECTIONS.map(section => (
        <a
          key={section}
          href={`#${section}`}
          className="relative flex items-center justify-center w-6 h-6 group focus:outline-none"
          title={section}
        >
          {/* Glowing outer ring when active */}
          <div
            className={`absolute w-3.5 h-3.5 rounded-full border border-accent-primary transition-all duration-300 ${
              activeSection === section
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-40"
            }`}
          />
          {/* Inner dot */}
          <div
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-accent-primary scale-125 shadow-[0_0_8px_var(--accent-glow)]"
                : "bg-muted-text group-hover:bg-fg-app"
            }`}
          />

          {/* Hover tooltip label */}
          <span className="absolute left-8 py-0.5 px-2 rounded bg-surface-raised border border-card-border text-[9px] font-mono font-bold tracking-wider text-muted-text opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none capitalize">
            {section}
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  const { isMounted: isThemeMounted } = useTheme();
  const { isMounted: isLangMounted } = useLanguage();

  const isMounted = isThemeMounted && isLangMounted;

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#0b0d14] text-[#f3f4f6] flex items-center justify-center">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
          <span className="font-mono text-sm tracking-wider text-gray-400">INITIALIZING CORE SYSTEMS...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-app text-fg-app selection:bg-selection-bg relative">
      {/* Floating Scroll Indicator (Side HUD) */}
      <DesktopScrollIndicator />

      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Timeline Section */}
      <Timeline />

      {/* Certifications Section */}
      <Certifications />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Floating AI Chatbot */}
      <Chatbot />

      {/* Footer */}
      <footer className="relative border-t border-card-border bg-card-bg/30 backdrop-blur-sm py-14 px-6 z-10 overflow-hidden">
        {/* Top gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand column */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 font-display text-base font-extrabold tracking-widest text-fg-app">
              <span>RIDHO AZFA<span className="text-accent-primary">.DEV</span></span>
            </div>
            <p className="text-xs text-muted-text font-sans leading-relaxed max-w-xs">
              Cloud &amp; Software Engineering Student. Building at the intersection of infrastructure, AI, and the web.
            </p>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-muted-text">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Quick nav */}
          <div className="flex flex-col gap-3">
            <p className="eyebrow text-accent-secondary">Navigation</p>
            <nav className="flex flex-col gap-2">
              {["home", "about", "projects", "contact"].map(key => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-xs text-muted-text hover:text-fg-app transition-colors capitalize font-medium w-fit"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </nav>
          </div>

          {/* Credits & copyright */}
          <div className="flex flex-col gap-3 md:items-end">
            <p className="eyebrow text-accent-secondary">Built with</p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"].map(tech => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[9px] font-mono font-bold text-muted-text border border-card-border bg-card-bg/50"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-faint-text font-mono mt-2">
              &copy; {new Date().getFullYear()} Muhammad Ridho Azfa Karani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
