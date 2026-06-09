"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Network, Layout, FileText, Presentation, FolderGit2, Award } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();

  const devTech = [
    { name: "HTML",       exp: "Advanced",     color: "text-orange-400 border-orange-500/30 bg-orange-500/8" },
    { name: "CSS",        exp: "Advanced",     color: "text-blue-400 border-blue-500/30 bg-blue-500/8" },
    { name: "JavaScript", exp: "Intermediate", color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/8" },
    { name: "Python",     exp: "Intermediate", color: "text-sky-400 border-sky-500/30 bg-sky-500/8" },
    { name: "MySQL",      exp: "Intermediate", color: "text-amber-400 border-amber-500/30 bg-amber-500/8" },
    { name: "AWS Cloud",  exp: "Intermediate", color: "text-accent-tertiary border-accent-tertiary/30 bg-accent-tertiary/8" },
  ];

  const adminTools = [
    { name: "Canva",               icon: Layout,       exp: "Design & Assets",   color: "text-violet-400 border-violet-500/30 bg-violet-500/8" },
    { name: "Microsoft Word",      icon: FileText,     exp: "Docs & Reports",    color: "text-blue-400 border-blue-500/30 bg-blue-500/8" },
    { name: "Microsoft PowerPoint",icon: Presentation, exp: "Decks & Pitching",  color: "text-rose-400 border-rose-500/30 bg-rose-500/8" },
  ];

  const quickStats = [
    { icon: FolderGit2, label: "Projects",     value: "6+", href: "#projects" },
    { icon: Award,      label: "AWS Certs",    value: "3",  href: "#certifications" },
    { icon: Network,    label: "TKJ Alumni",   value: "✓",  href: "#education" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-background border-t border-card-border"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="eyebrow">{"// who i am"}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-fg-app">
            {t("about.title")}
          </h2>
          <p className="text-muted-text text-sm md:text-base max-w-xl leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center text-center gap-6"
          >
            {/* Portrait with multi-layer halo */}
            <div className="relative w-64 h-64 select-none group flex items-center justify-center">
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-full bg-accent-primary/8 blur-xl pointer-events-none group-hover:bg-accent-primary/12 transition-all duration-500" />
              {/* Slow outer dashed ring */}
              <div
                className="absolute inset-0 rounded-full border border-dashed border-accent-primary/25"
                style={{ animation: "halo-spin 20s linear infinite" }}
              />
              {/* Faster inner solid ring */}
              <div
                className="absolute inset-3 rounded-full border border-accent-secondary/20"
                style={{ animation: "halo-spin-rev 14s linear infinite" }}
              />
              {/* Portrait image */}
              <div className="absolute inset-5 rounded-full overflow-hidden border-2 border-accent-primary/40 bg-surface-raised shadow-2xl">
                <Image
                  src="/ridho.jpg"
                  alt={t("about.portrait_alt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Verified stamp */}
              <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-accent-primary border-2 border-background flex items-center justify-center shadow-lg z-10">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Name & Badges */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <h3 className="text-xl font-extrabold text-fg-app font-display">
                Muhammad Ridho Azfa Karani
              </h3>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-accent-primary/8 border border-accent-primary/20 text-left">
                  <GraduationCap className="w-4 h-4 text-accent-primary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-accent-primary uppercase tracking-wider">
                      {t("about.student_status")}
                    </span>
                    <span className="text-xs font-semibold text-muted-text">University of Bakrie</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-accent-secondary/8 border border-accent-secondary/20 text-left">
                  <Network className="w-4 h-4 text-accent-secondary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-accent-secondary uppercase tracking-wider">
                      {t("about.tkj_status")}
                    </span>
                    <span className="text-xs font-semibold text-muted-text">SMK Pembina Bangsa (TKJ)</span>
                  </div>
                </div>
              </div>

              {/* Quick stats row */}
              <div className="grid grid-cols-3 gap-2 mt-1">
                {quickStats.map(stat => {
                  const Icon = stat.icon;
                  return (
                    <a
                      key={stat.label}
                      href={stat.href}
                      className="flex flex-col items-center gap-1 px-2 py-3 rounded-xl glass border border-card-border hover:border-accent-primary/45 hover:bg-accent-primary/[0.02] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center select-none group"
                    >
                      <Icon className="w-4 h-4 text-accent-primary group-hover:scale-110 transition-transform" />
                      <span className="text-base font-extrabold font-display text-fg-app leading-none">{stat.value}</span>
                      <span className="text-[9px] font-mono text-muted-text uppercase tracking-wide">{stat.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-8 text-left"
          >
            {/* Bio card with left accent */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-extrabold font-display text-fg-app flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-primary" />
                {t("about.bio_title")}
              </h3>
              <div className="accent-card flex flex-col gap-3 py-1">
                <p className="text-sm text-muted-text leading-relaxed">{t("about.bio_p1")}</p>
                <p className="text-sm text-muted-text leading-relaxed">{t("about.bio_p2")}</p>
              </div>
            </div>

            <div className="h-px bg-card-border" />

            {/* Tech stack */}
            <div className="flex flex-col gap-3">
              <h4 className="eyebrow text-accent-secondary">{t("about.tech_skills")}</h4>
              <div className="flex flex-wrap gap-2">
                {devTech.map(tech => (
                  <div
                    key={tech.name}
                    className={`relative px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 cursor-help group ${tech.color}`}
                  >
                    <span>{tech.name}</span>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-surface-raised border border-card-border text-[9px] font-mono font-bold text-accent-primary opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                      {tech.exp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admin tools */}
            <div className="flex flex-col gap-3">
              <h4 className="eyebrow text-accent-secondary">{t("about.tool_skills")}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {adminTools.map(tool => {
                  const ToolIcon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className={`relative p-3 rounded-xl border flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-primary/30 cursor-help group ${tool.color}`}
                    >
                      <div className="w-7 h-7 rounded-lg bg-background/50 flex items-center justify-center shrink-0">
                        <ToolIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold font-mono tracking-tight leading-tight text-fg-app">
                        {tool.name}
                      </span>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-surface-raised border border-card-border text-[9px] font-mono font-bold text-accent-primary opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                        {tool.exp}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
