"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderGit2, Mail, Terminal, Cloud, Network, Shield } from "lucide-react";

// Fake terminal output lines for the "neural API" tab
const NEURAL_LINES = [
  { delay: 0,    color: "text-muted-text",     text: "$ curl https://api.neural-v2.dev/ping" },
  { delay: 600,  color: "text-accent-primary",  text: "→ 200 OK  |  latency: 14ms" },
  { delay: 1200, color: "text-muted-text",      text: "" },
  { delay: 1500, color: "text-faint-text",      text: "// Fetching profile data..." },
  { delay: 2200, color: "text-accent-secondary",text: "GET /v2/profile/ridho-azfa" },
  { delay: 2800, color: "text-muted-text",      text: "{" },
  { delay: 3100, color: "text-accent-primary",  text: '  "role": "Cloud & Software Eng.",' },
  { delay: 3400, color: "text-accent-primary",  text: '  "focus": ["AWS", "DevOps", "AI"],' },
  { delay: 3700, color: "text-accent-primary",  text: '  "status": "available",' },
  { delay: 4000, color: "text-accent-tertiary", text: '  "certs": ["AWS-CF", "AIF-C01"]' },
  { delay: 4300, color: "text-muted-text",      text: "}" },
  { delay: 4600, color: "text-faint-text",      text: "" },
  { delay: 4900, color: "text-accent-primary",  text: "✓ Profile synced. Connection alive." },
];

function NeuralTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    NEURAL_LINES.forEach((_, idx) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(prev => prev + 1);
        }, NEURAL_LINES[idx].delay + 400)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="p-5 font-mono text-[11px] leading-relaxed overflow-hidden h-[260px] bg-background/60 scan-line-container">
      {NEURAL_LINES.slice(0, visibleLines).map((line, idx) => (
        <div key={idx} className={`${line.color} whitespace-pre`}>
          {line.text}
        </div>
      ))}
      {visibleLines < NEURAL_LINES.length && (
        <span className="inline-block w-1.5 h-3.5 bg-accent-primary animate-pulse align-middle" />
      )}
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"terraform" | "network" | "neural">("terraform");

  const roles = [t("hero.role1"), t("hero.role2"), t("hero.role3")];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen relative pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-6 flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Layered background blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent-primary/8 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-accent-secondary/6 blur-[130px] pointer-events-none animate-pulse-slow [animation-delay:2s]" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-accent-tertiary/5 blur-[90px] pointer-events-none animate-pulse-slow [animation-delay:4s]" />

      {/* Diagonal gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/[0.03] via-transparent to-accent-secondary/[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">

          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/[0.06] backdrop-blur-md"
          >
            <span className="relative flex">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary" />
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest text-accent-primary uppercase">
              {t("hero.greeting")}
            </span>
          </motion.div>

          {/* Name — H1 with serif display for editorial impact */}
          <div className="flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight font-serif font-normal text-fg-app"
            >
              Muhammad Ridho
              <br />
              Azfa Karani
            </motion.h1>

            {/* Role typer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 h-8 mt-1"
            >
              <Terminal className="w-4 h-4 text-accent-secondary shrink-0" />
              <span className="font-mono text-sm font-bold text-accent-secondary">~/</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-mono text-sm font-bold text-accent-secondary"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="w-1 h-4 bg-accent-secondary animate-pulse ml-0.5 rounded-sm" />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-text text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-1 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="relative px-6 py-3 rounded-full bg-accent-primary text-white text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-lg glow-primary w-full sm:w-auto justify-center group cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>{t("hero.cta_projects")}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-card-border bg-card-bg backdrop-blur-md text-fg-app text-sm font-semibold flex items-center gap-2 hover:bg-surface-raised hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
            >
              <Mail className="w-4 h-4 text-muted-text" />
              <span>{t("hero.cta_contact")}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column — IDE Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end animate-float"
        >
          <div
            onMouseMove={handleMouseMove}
            className="w-full max-w-md glass rounded-2xl shadow-2xl relative overflow-hidden flex flex-col text-left group"
          >
            {/* Spotlight cursor-follow glow effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: "radial-gradient(220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--accent-glow), transparent 80%)"
              }}
            />

            {/* Window Topbar */}
            <div className="bg-surface-raised border-b border-card-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
              </div>
              <div className="text-[10px] font-mono text-muted-text select-none flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-accent-secondary" />
                <span>sandbox_console.sh</span>
              </div>
              <div className="w-10" />
            </div>

            {/* Tabs */}
            <div className="bg-surface-raised/50 border-b border-card-border px-4 flex items-center gap-1 select-none">
              {([
                { key: "terraform", icon: Cloud, label: "main.tf" },
                { key: "network",   icon: Network, label: "switch_config.py" },
                { key: "neural",    icon: Terminal, label: "neural_api.sh" },
              ] as const).map(({ key, icon: Icon, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-2 px-3 border-b-2 text-[10px] font-mono flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                    activeTab === key
                      ? "border-accent-primary text-fg-app font-bold"
                      : "border-transparent text-muted-text hover:text-fg-app"
                  }`}
                >
                  <Icon className={`w-3 h-3 ${activeTab === key ? "text-accent-primary" : ""}`} />
                  {label}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "neural" ? (
                  <NeuralTerminal />
                ) : activeTab === "terraform" ? (
                  <div className="p-5 font-mono text-[11px] leading-relaxed overflow-x-auto h-[260px] bg-background/60">
                    <pre className="text-muted-text">
                      <code>
                        <span className="text-rose-400">resource</span> <span className="text-accent-primary">&quot;aws_vpc&quot;</span> <span className="text-accent-primary">&quot;bakrie_network&quot;</span> &#123;{"\n"}
                        {"  "}cidr_block           = <span className="text-accent-tertiary">&quot;10.0.0.0/16&quot;</span>{"\n"}
                        {"  "}enable_dns_hostnames = <span className="text-accent-tertiary">&quot;true&quot;</span>{"\n"}
                        {"  "}{"\n"}
                        {"  "}tags = &#123;{"\n"}
                        {"    "}Name = <span className="text-accent-primary">&quot;hail-myself-vpc&quot;</span>{"\n"}
                        {"    "}Role = <span className="text-accent-primary">&quot;DevOps Sandbox&quot;</span>{"\n"}
                        {"  "}&#125;{"\n"}
                        &#125;{"\n"}{"\n"}
                        <span className="text-rose-400">resource</span> <span className="text-accent-primary">&quot;aws_instance&quot;</span> <span className="text-accent-primary">&quot;ai_practitioner&quot;</span> &#123;{"\n"}
                        {"  "}ami           = <span className="text-accent-tertiary">&quot;ami-aws-deep-learning&quot;</span>{"\n"}
                        {"  "}instance_type = <span className="text-accent-tertiary">&quot;g4dn.xlarge&quot;</span>{"\n"}
                        {"  "}subnet_id     = aws_subnet.public.id{"\n"}
                        {"  "}{"\n"}
                        {"  "}<span className="text-faint-text"># AWS Certified Prep Sandbox</span>{"\n"}
                        {"  "}tags = &#123;{"\n"}
                        {"    "}Prep = <span className="text-accent-primary">&quot;AIF-C01&quot;</span>{"\n"}
                        {"  "}&#125;{"\n"}
                        &#125;
                      </code>
                    </pre>
                  </div>
                ) : (
                  <div className="p-5 font-mono text-[11px] leading-relaxed overflow-x-auto h-[260px] bg-background/60">
                    <pre className="text-muted-text">
                      <code>
                        <span className="text-rose-400">def</span> <span className="text-accent-primary">configure_cisco_switch</span>(ip, vlan_id):{"\n"}
                        {"    "}<span className="text-faint-text"># SMK Pembina Bangsa - TKJ Legacy Lab</span>{"\n"}
                        {"    "}<span className="text-accent-secondary">print</span>(f<span className="text-accent-primary">&quot;[*] Accessing switch console: &#123;ip&#125;&quot;</span>){"\n"}
                        {"    "}session = connect_ssh(ip, <span className="text-accent-primary">&quot;admin&quot;</span>, <span className="text-accent-primary">&quot;secure&quot;</span>){"\n"}
                        {"    "}{"\n"}
                        {"    "}session.send_command(<span className="text-accent-primary">&quot;configure terminal&quot;</span>){"\n"}
                        {"    "}session.send_command(f<span className="text-accent-primary">&quot;interface GigabitEthernet0/1&quot;</span>){"\n"}
                        {"    "}session.send_command(f<span className="text-accent-primary">&quot;switchport access vlan &#123;vlan_id&#125;&quot;</span>){"\n"}
                        {"    "}{"\n"}
                        {"    "}<span className="text-accent-secondary">print</span>(<span className="text-accent-primary">&quot;[+] Interface VLAN assigned.&quot;</span>){"\n"}
                        {"    "}<span className="text-rose-400">return</span> <span className="text-accent-tertiary">True</span>
                      </code>
                    </pre>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Status bar */}
            <div className="bg-surface-raised border-t border-card-border px-4 py-2 flex items-center justify-between text-[9px] font-mono text-muted-text select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
                <span>Console active</span>
              </div>
              <span>UTF-8</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
