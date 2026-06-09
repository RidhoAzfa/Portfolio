"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud, Cpu, Database, Sparkles, Network, GitFork, Terminal,
  LayoutGrid, Code2, FileCode2, Workflow, Router, Cable, Code
} from "lucide-react";

type SkillDomain = "cloud" | "network" | "software" | "is";

interface SkillItem {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  level: "advanced" | "intermediate" | "familiar";
  percentage: number;
}

const LEVEL_COLORS = {
  advanced:     "text-accent-primary border-accent-primary/30 bg-accent-primary/8",
  intermediate: "text-accent-secondary border-accent-secondary/30 bg-accent-secondary/8",
  familiar:     "text-accent-tertiary border-accent-tertiary/30 bg-accent-tertiary/8",
};

export default function Skills() {
  const { t } = useLanguage();
  const [activeDomain, setActiveDomain] = useState<SkillDomain>("cloud");

  const domains: { key: SkillDomain; labelKey: string }[] = [
    { key: "cloud",    labelKey: "skills.cat_cloud" },
    { key: "network",  labelKey: "skills.cat_network" },
    { key: "software", labelKey: "skills.cat_software" },
    { key: "is",       labelKey: "skills.cat_is" },
  ];

  const skillsData: Record<SkillDomain, SkillItem[]> = {
    cloud: [
      { key: "vpc",  icon: Cloud,   level: "intermediate", percentage: 80 },
      { key: "ec2",  icon: Cpu,     level: "intermediate", percentage: 85 },
      { key: "rds",  icon: Database,level: "intermediate", percentage: 75 },
      { key: "ai",   icon: Sparkles,level: "familiar",     percentage: 70 },
    ],
    network: [
      { key: "cisco",    icon: Network, level: "intermediate", percentage: 85 },
      { key: "routing",  icon: GitFork, level: "intermediate", percentage: 80 },
      { key: "linux",    icon: Terminal,level: "familiar",     percentage: 75 },
      { key: "mikrotik", icon: Router,  level: "intermediate", percentage: 80 },
      { key: "cabling",  icon: Cable,   level: "intermediate", percentage: 85 },
    ],
    software: [
      { key: "nextjs",      icon: LayoutGrid, level: "intermediate", percentage: 80 },
      { key: "typescript",  icon: Code2,      level: "intermediate", percentage: 80 },
      { key: "python",      icon: FileCode2,  level: "intermediate", percentage: 75 },
      { key: "html_css_js", icon: Code,       level: "advanced",     percentage: 90 },
    ],
    is: [
      { key: "db",       icon: Database,level: "intermediate", percentage: 85 },
      { key: "analysis", icon: Workflow, level: "intermediate", percentage: 80 },
      { key: "bpmn",     icon: Workflow, level: "intermediate", percentage: 75 },
    ],
  };

  const getLevelLabel = (level: "advanced" | "intermediate" | "familiar") => {
    if (level === "advanced")     return t("skills.level_advanced");
    if (level === "intermediate") return t("skills.level_intermediate");
    return t("skills.level_familiar");
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-background/50 border-t border-card-border"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="eyebrow">{"// capabilities"}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-fg-app">
            {t("skills.title")}
          </h2>
          <p className="text-muted-text text-sm md:text-base max-w-xl leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Pill segment control tabs */}
        <div className="flex justify-center">
          <div className="relative flex p-1 rounded-xl bg-surface-raised border border-card-border gap-1">
            {domains.map(domain => (
              <motion.button
                key={domain.key}
                onClick={() => setActiveDomain(domain.key)}
                whileTap={{ scale: 0.97 }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium font-display transition-colors duration-200 cursor-pointer z-10 ${
                  activeDomain === domain.key
                    ? "text-accent-primary"
                    : "text-muted-text hover:text-fg-app"
                }`}
              >
                <span className="relative z-10">{t(domain.labelKey)}</span>
                {activeDomain === domain.key && (
                  <motion.div
                    layoutId="skills-active-tab"
                    className="absolute inset-0 bg-accent-primary/10 border border-accent-primary/25 rounded-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skill grid */}
        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {skillsData[activeDomain].map((skill, idx) => {
                const Icon = skill.icon;
                const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  card.style.setProperty("--mouse-x", `${x}px`);
                  card.style.setProperty("--mouse-y", `${y}px`);
                };

                return (
                  <motion.div
                    key={skill.key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    whileHover={{ y: -3 }}
                    onMouseMove={handleMouseMove}
                    className="glass rounded-2xl p-6 flex flex-col gap-5 relative overflow-hidden group shadow-md border border-card-border hover:border-accent-primary/25 transition-all duration-300"
                  >
                    {/* Spotlight cursor-follow glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: "radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--accent-glow), transparent 80%)"
                      }}
                    />

                    <div className="flex flex-col gap-4">
                      {/* Icon + level badge */}
                      <div className="flex items-start justify-between">
                        {/* Gradient-border icon badge */}
                        <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-accent-primary/60 to-accent-secondary/40">
                          <div className="w-10 h-10 rounded-[11px] bg-background flex items-center justify-center">
                            <Icon className="w-5 h-5 text-accent-primary" />
                          </div>
                        </div>

                        <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded border ${LEVEL_COLORS[skill.level]}`}>
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>

                      {/* Text */}
                      <div className="flex flex-col gap-1.5 text-left">
                        <h3 className="font-bold text-base text-fg-app font-display">
                          {t(`skills.${skill.key}_title`)}
                        </h3>
                        <p className="text-xs text-muted-text leading-relaxed">
                          {t(`skills.${skill.key}_desc`)}
                        </p>
                      </div>
                    </div>


                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
