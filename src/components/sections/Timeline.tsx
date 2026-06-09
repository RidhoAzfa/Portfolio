"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap, Cpu, Calendar, CheckCircle2 } from "lucide-react";

interface TimelineEvent {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  accent: string;         // top-border color class
  accentText: string;     // date + degree color
  accentBorder: string;   // node border color
}

export default function Timeline() {
  const { t } = useLanguage();

  const events: TimelineEvent[] = [
    {
      key: "uni",
      icon: GraduationCap,
      tags: ["Cloud Architecture", "Systems Analysis", "SQL Database", "Agile SDLC", "AWS Sandbox"],
      accent:       "from-accent-primary to-accent-primary/0",
      accentText:   "text-accent-primary",
      accentBorder: "border-accent-primary",
    },
    {
      key: "smk",
      icon: Cpu,
      tags: ["Cisco Switch Console", "IP Subnetting", "TCP/IP Network", "Linux Server Admin", "LAN Hardware"],
      accent:       "from-accent-secondary to-accent-secondary/0",
      accentText:   "text-accent-secondary",
      accentBorder: "border-accent-secondary",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-background border-t border-card-border"
    >
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-secondary/5 blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left column: Sticky header on desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-4 text-center lg:text-left">
            <p className="eyebrow">{"// education"}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-fg-app">
              {t("timeline.title")}
            </h2>
            <p className="text-muted-text text-sm md:text-base leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
              {t("timeline.subtitle")}
            </p>

            <div className="hidden lg:block h-px bg-card-border my-4" />
            <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-faint-text">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse" />
              <span>Verifiable Academic Milestones</span>
            </div>
          </div>

          {/* Right column: Vertical Timeline */}
          <div className="lg:col-span-7 relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent-primary via-accent-secondary to-card-border shadow-[0_0_6px_var(--accent-glow)]" />

            {/* Traveling dot on line */}
            <motion.div
              initial={{ top: "0%" }}
              whileInView={{ top: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
              className="absolute left-4 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_10px_var(--accent-glow)] z-10"
              style={{ position: "absolute" }}
            />

            <div className="flex flex-col gap-12">
              {events.map((event) => {
                const Icon = event.icon;

                return (
                  <div key={event.key} className="flex relative pl-12">
                    {/* Glowing node */}
                    <div className={`absolute left-4 -translate-x-1/2 w-9 h-9 rounded-full bg-background border-2 ${event.accentBorder} flex items-center justify-center z-20 shadow-[0_0_14px_var(--accent-glow)] animate-timeline-dot`}>
                      <Icon className={`w-4 h-4 ${event.accentText}`} />
                    </div>

                    {/* Content card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6 }}
                      className="w-full glass rounded-2xl overflow-hidden shadow-lg text-left border border-card-border hover:border-accent-primary/20 transition-colors duration-300"
                    >
                      {/* Colored top bar */}
                      <div className={`h-0.5 w-full bg-gradient-to-r ${event.accent}`} />

                      <div className="p-6 md:p-8 flex flex-col gap-5">
                        {/* Date & title */}
                        <div className="flex flex-col gap-1.5">
                          <div className={`flex items-center gap-2 text-xs font-mono font-bold ${event.accentText}`}>
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{t(`timeline.${event.key}_date`)}</span>
                          </div>
                          <h3 className="font-extrabold text-lg md:text-xl text-fg-app font-display">
                            {t(`timeline.${event.key}_title`)}
                          </h3>
                          <p className={`text-sm font-semibold font-mono ${event.accentText}`}>
                            {t(`timeline.${event.key}_degree`)}
                          </p>
                        </div>

                        <div className="h-px bg-card-border" />

                        {/* Bullets */}
                        <ul className="flex flex-col gap-2.5 text-xs leading-relaxed text-muted-text">
                          {[1, 2, 3].map(n => (
                            <li key={n} className="flex items-start gap-2.5">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${event.accentText}`} />
                              <span>{t(`timeline.${event.key}_bullet${n}`)}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="h-px bg-card-border" />

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wide bg-fg-app/[0.03] border border-card-border text-muted-text hover:border-accent-primary/40 hover:text-accent-primary transition-colors cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
