"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles, Terminal, Cloud, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Certificate {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeType: "foundations" | "lab" | "ai";
  accentClass: string;
  accentText: string;
  accentBorder: string;
}

export default function Certifications() {
  const { t } = useLanguage();

  const certificates: Certificate[] = [
    {
      key: "cf",
      icon: Cloud,
      badgeType: "foundations",
      accentClass:  "bg-accent-primary/8",
      accentText:   "text-accent-primary",
      accentBorder: "border-accent-primary/25",
    },
    {
      key: "ll",
      icon: Terminal,
      badgeType: "lab",
      accentClass:  "bg-accent-secondary/8",
      accentText:   "text-accent-secondary",
      accentBorder: "border-accent-secondary/25",
    },
    {
      key: "aip",
      icon: Sparkles,
      badgeType: "ai",
      accentClass:  "bg-accent-tertiary/8",
      accentText:   "text-accent-tertiary",
      accentBorder: "border-accent-tertiary/25",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-background/50 border-t border-card-border"
    >
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent-primary/5 blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="eyebrow">{"// credentials"}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-fg-app">
            {t("certs.title")}
          </h2>
          <p className="text-muted-text text-sm md:text-base max-w-xl leading-relaxed">
            {t("certs.subtitle")}
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Mascot branding card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass rounded-3xl p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden border border-card-border group"
          >
            {/* Gradient top bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary" />

            <div className="flex flex-col items-center text-center gap-5">
              {/* Multi-layer halo portrait */}
              <div className="relative w-36 h-36 flex items-center justify-center select-none">
                {/* Outer ambient glow */}
                <div className="absolute -inset-4 rounded-full bg-accent-primary/8 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Outer slow dashed ring */}
                <div
                  className="absolute inset-0 rounded-full border border-dashed border-accent-primary/30"
                  style={{ animation: "halo-spin 16s linear infinite" }}
                />
                {/* Middle faster ring */}
                <div
                  className="absolute inset-2 rounded-full border border-accent-secondary/20"
                  style={{ animation: "halo-spin-rev 10s linear infinite" }}
                />
                {/* Logo image */}
                <Image
                  src="/logo.jpg"
                  alt="Mascot Avatar"
                  width={108}
                  height={108}
                  className="absolute inset-3.5 rounded-full border border-accent-primary/40 object-cover bg-surface-raised shadow-inner group-hover:scale-105 transition-transform duration-500"
                />
                {/* Verified stamp — bottom right */}
                <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-accent-primary border-2 border-background flex items-center justify-center shadow-md z-10">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Identity */}
              <div className="flex flex-col gap-1">
                <span className="eyebrow">{t("certs.mascot_title")}</span>
                <h3 className="text-xl font-extrabold font-display text-fg-app">
                  {t("certs.mascot_name")}
                </h3>
                <span className="text-xs font-mono font-medium text-muted-text">
                  {t("certs.mascot_role")}
                </span>
              </div>
            </div>

            <div className="h-px bg-card-border" />

            {/* Description */}
            <p className="text-xs text-muted-text leading-relaxed text-left">
              {t("certs.mascot_desc")}
            </p>

            <div className="h-px bg-card-border" />

            {/* Identity tags */}
            <div className="flex justify-center flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-accent-primary/8 border border-accent-primary/20 text-[9px] font-mono font-bold text-accent-primary">#TKJCore</span>
              <span className="px-2.5 py-1 rounded bg-accent-secondary/8 border border-accent-secondary/20 text-[9px] font-mono font-bold text-accent-secondary">#CloudSystems</span>
              <span className="px-2.5 py-1 rounded bg-accent-tertiary/8 border border-accent-tertiary/20 text-[9px] font-mono font-bold text-accent-tertiary">#GenAISandbox</span>
            </div>
          </motion.div>

          {/* Right: Cert stack */}
          <div className="lg:col-span-7 flex flex-col gap-5 w-full">
            {certificates.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`glass rounded-2xl overflow-hidden border ${cert.accentBorder} shadow-lg relative group hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300`}
                >
                  {/* Subtle top accent */}
                  <div className={`h-0.5 w-full ${cert.accentClass} ${cert.accentText}`}
                    style={{ background: `linear-gradient(to right, currentColor, transparent)` }}
                  />

                  <div className={`p-6 flex flex-col md:flex-row items-start gap-5 ${cert.accentClass}`}>
                    {/* Icon block */}
                    <div className={`relative p-[1px] rounded-xl bg-gradient-to-br ${
                      cert.badgeType === "foundations" ? "from-accent-primary/60 to-accent-primary/20" :
                      cert.badgeType === "lab"         ? "from-accent-secondary/60 to-accent-secondary/20" :
                                                         "from-accent-tertiary/60 to-accent-tertiary/20"
                    } shrink-0`}>
                      <div className="w-12 h-12 rounded-[11px] bg-background flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${cert.accentText}`} />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-3 text-left w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-extrabold text-base md:text-lg text-fg-app font-display">
                          {t(`certs.${cert.key}_title`)}
                        </h4>
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-[9px] font-mono font-bold text-accent-primary shadow-sm shrink-0">
                          <ShieldCheck className="w-3 h-3" />
                          {t("certs.verified")}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono font-bold text-muted-text">
                        {t("certs.issued_by")}
                      </span>

                      <p className="text-xs text-muted-text leading-relaxed">
                        {t(`certs.${cert.key}_desc`)}
                      </p>

                      <div className="h-px bg-card-border" />

                      <div className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-1 text-[9px] font-mono font-bold text-muted-text">
                          <Award className={`w-3.5 h-3.5 ${cert.accentText}`} />
                          {t("certs.credential_id")}
                        </span>
                        {/* Hover-reveal link */}
                        <span className={`flex items-center gap-1 text-[9px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer ${cert.accentText}`}>
                          View Certificate
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
