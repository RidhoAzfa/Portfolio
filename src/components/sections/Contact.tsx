"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ExternalLink, Copy, Check } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const CONTACT_ITEMS = [
  {
    key: "email",
    icon: Mail,
    label: "Email",
    value: "ridhoazfa1@gmail.com",
    href: "mailto:ridhoazfa1@gmail.com",
    gradient: "from-accent-secondary to-accent-secondary/60",
    glowColor: "oklch(68% 0.16 260 / 0.25)",
    bottomBar: "bg-gradient-to-r from-accent-secondary/80 to-accent-secondary/20",
    copyable: true,
    external: false,
  },
  {
    key: "instagram",
    icon: InstagramIcon,
    label: "Instagram",
    value: "@raaaaphaell",
    href: "https://www.instagram.com/raaaaphaell",
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    glowColor: "rgba(236,72,153,0.25)",
    bottomBar: "bg-gradient-to-r from-pink-500/80 to-orange-400/30",
    copyable: false,
    external: true,
  },
  {
    key: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 812 7422 8736",
    href: "https://wa.me/6281274228736",
    gradient: "from-accent-primary to-accent-primary/60",
    glowColor: "oklch(72% 0.18 160 / 0.25)",
    bottomBar: "bg-gradient-to-r from-accent-primary/80 to-accent-primary/20",
    copyable: true,
    external: true,
  },
];

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  gradient,
  glowColor,
  bottomBar,
  copyable,
  external,
}: Omit<(typeof CONTACT_ITEMS)[0], "key">) {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block"
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative rounded-2xl border border-card-border glass p-6 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 flex flex-col gap-4"
        style={{ boxShadow: hovered ? `0 12px 48px ${glowColor}` : "none" }}
      >
        {/* Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background:
              "radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.05), transparent 70%)",
          }}
        />

        {/* Icon row */}
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          <div className="flex gap-2">
            {copyable && (
              <button
                onClick={handleCopy}
                className="w-8 h-8 rounded-lg bg-fg-app/5 hover:bg-fg-app/10 border border-card-border flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer"
                title="Copy to clipboard"
              >
                {copied
                  ? <Check className="w-4 h-4 text-accent-primary" />
                  : <Copy className="w-4 h-4 text-muted-text" />
                }
              </button>
            )}
            {external && (
              <div className="w-8 h-8 rounded-lg bg-fg-app/5 border border-card-border flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                <ExternalLink className="w-4 h-4 text-muted-text" />
              </div>
            )}
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1 text-left">
          <p className="eyebrow text-muted-text tracking-widest">{label}</p>
          <p className="text-base font-semibold text-fg-app group-hover:text-accent-primary transition-colors duration-200 break-all font-display">
            {value}
          </p>
        </div>

        {/* Bottom gradient bar — 3px, thicker for emphasis */}
        <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${bottomBar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </a>
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden bg-background border-t border-card-border"
    >
      {/* Ambient blobs using new palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 80%, oklch(68% 0.16 260 / 0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 35% at 80% 20%, oklch(72% 0.18 160 / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="eyebrow">{"// get in touch"}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-fg-app">
            {t("contact.title")}
          </h2>
          <p className="text-muted-text max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CONTACT_ITEMS.map(({ key, ...item }, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <ContactCard {...item} />
            </motion.div>
          ))}
        </div>

        {/* Availability badge + GitHub strip */}
        <div className="flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-accent-primary/30 bg-accent-primary/[0.06] backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary" />
            </span>
            <p className="text-sm text-accent-primary font-medium font-sans">
              {t("contact.available")}
            </p>
          </div>

          {/* GitHub profile strip */}
          <a
            href="https://github.com/RidhoAzfa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full glass border border-card-border text-sm font-medium text-muted-text hover:text-fg-app hover:border-accent-primary/30 transition-all duration-300 group"
          >
            <GithubIcon className="w-4 h-4 text-muted-text group-hover:text-accent-primary transition-colors" />
            <span>github.com/RidhoAzfa</span>
            <ExternalLink className="w-3.5 h-3.5 text-faint-text group-hover:text-accent-primary transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
}
