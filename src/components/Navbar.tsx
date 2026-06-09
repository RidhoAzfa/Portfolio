"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon, Languages, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const drawerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "education", href: "#education" },
    { key: "certifications", href: "#certifications" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map(item => item.key);
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close drawer on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Main navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-navbar-bg backdrop-blur-xl border-b border-card-border shadow-[0_1px_0_0_var(--card-border)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
          >
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Ridho Azfa Logo"
                width={32}
                height={32}
                className="rounded-full border border-card-border object-cover shadow-sm transition-all duration-300 group-hover:border-accent-primary/60"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-primary border border-background" />
            </div>
            <span className="font-display text-sm font-extrabold tracking-widest text-fg-app transition-colors group-hover:text-accent-primary">
              RIDHO AZFA<span className="text-accent-primary">.DEV</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                className="relative px-3 py-1.5 text-sm font-medium transition-colors group"
              >
                <span className={`relative z-10 transition-colors duration-200 ${
                  activeSection === item.key
                    ? "text-fg-app"
                    : "text-muted-text group-hover:text-fg-app"
                }`}>
                  {t(`nav.${item.key}`)}
                </span>

                {/* Active sliding dot indicator */}
                {activeSection === item.key && (
                  <motion.div
                    layoutId="nav-active-dot"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language */}
            <motion.button
              id="lang-toggle-desktop"
              onClick={() => setLanguage(language === "en" ? "id" : "en")}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-muted-text hover:text-fg-app hover:bg-fg-app/5 border border-transparent hover:border-card-border transition-all duration-200 cursor-pointer"
              title={t("lang.toggle")}
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider">{language}</span>
            </motion.button>

            {/* Theme */}
            <motion.button
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg text-muted-text hover:text-fg-app hover:bg-fg-app/5 border border-transparent hover:border-card-border transition-all duration-200 cursor-pointer"
              title={t("theme.toggle")}
            >
              {theme === "dark"
                ? <Sun className="w-4 h-4 text-amber-400" />
                : <Moon className="w-4 h-4 text-indigo-500" />
              }
            </motion.button>
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              id="theme-toggle-mobile"
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-fg-app/5 transition-colors cursor-pointer"
            >
              {theme === "dark"
                ? <Sun className="w-4 h-4 text-amber-400" />
                : <Moon className="w-4 h-4 text-indigo-500" />
              }
            </motion.button>

            {/* Hamburger — animated bars */}
            <motion.button
              id="menu-toggle-mobile"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-fg-app/5 transition-colors cursor-pointer flex flex-col gap-1.5 items-center justify-center w-9 h-9"
              aria-label={t("nav.menu")}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-4.5 h-px bg-fg-app rounded-full"
                style={{ height: 1.5, width: 18 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-px bg-fg-app rounded-full"
                style={{ height: 1.5, width: 18 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-px bg-fg-app rounded-full"
                style={{ height: 1.5, width: 18 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer — right-side slide panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[70] bg-background/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 z-[80] w-72 bg-background border-l border-card-border shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-card-border">
                <span className="eyebrow text-accent-primary">Menu</span>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 rounded-lg hover:bg-fg-app/5 text-muted-text hover:text-fg-app transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activeSection === item.key
                          ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                          : "text-muted-text hover:text-fg-app hover:bg-fg-app/[0.03]"
                      }`}
                    >
                      <span>{t(`nav.${item.key}`)}</span>
                      {activeSection === item.key && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      )}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer actions */}
              <div className="px-6 py-5 border-t border-card-border flex items-center gap-3">
                <motion.button
                  onClick={() => {
                    setLanguage(language === "en" ? "id" : "en");
                    setIsOpen(false);
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-card-border bg-card-bg text-xs font-mono font-bold text-muted-text hover:text-fg-app hover:border-accent-primary/30 transition-all cursor-pointer"
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span className="uppercase">{language === "en" ? "Bahasa ID" : "English"}</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
