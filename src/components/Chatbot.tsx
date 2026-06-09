"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, Send, Loader2, Trash2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages or open state changes
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSend = async (textToSend?: string) => {
    const queryText = textToSend || inputValue.trim();
    if (!queryText) return;

    if (!textToSend) {
      setInputValue("");
    }

    setError(null);
    const newMessages: Message[] = [...messages, { role: "user", content: queryText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to communicate with DeepSeek AI proxy");
      }

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "No response received.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setError(t("chatbot.error"));
    } finally {
      setIsLoading(false);
      // Keep focus on input for desktop
      if (window.innerWidth > 768) {
        inputRef.current?.focus();
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
    setIsLoading(false);
  };

  // Predefined prompt suggestions
  const suggestions = [
    { key: "suggest_aws", text: t("chatbot.suggest_aws") },
    { key: "suggest_projects", text: t("chatbot.suggest_projects") },
    { key: "suggest_bg", text: t("chatbot.suggest_bg") },
    { key: "suggest_education", text: t("chatbot.suggest_education") },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {/* Backdrop for mobile view to dismiss chat when tapping outside */}
        {isOpen && (
          <motion.div
            key="chatbot-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden"
          />
        )}

        {/* Chat window container: fixed bottom-sheet on mobile, absolute drawer on desktop */}
        {isOpen && (
          <motion.div
            key="chatbot-panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 left-0 right-0 w-full h-[80vh] flex flex-col rounded-t-2xl border-t border-card-border bg-card-bg/95 backdrop-blur-xl shadow-2xl shadow-accent-primary/5 overflow-hidden z-50 pointer-events-auto sm:fixed sm:bottom-24 sm:right-6 sm:left-auto sm:w-[400px] sm:h-[550px] sm:max-h-[80vh] sm:rounded-2xl sm:border"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-card-border bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-accent-primary flex-shrink-0">
                  <Image
                    src="/logo.jpg"
                    alt="Fox Avatar"
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-card-bg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-fg-app tracking-wide flex items-center gap-1.5">
                    {t("chatbot.title")}
                    <Sparkles className="w-3.5 h-3.5 text-accent-primary animate-pulse" />
                  </h3>
                  <span className="text-[10px] font-mono text-accent-primary/80 uppercase tracking-widest font-semibold">
                    DeepSeek-V3 Engine
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    title={t("chatbot.clear")}
                    className="p-1.5 rounded-lg text-muted-text hover:text-red-400 hover:bg-fg-app/5 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  title={t("chatbot.close")}
                  className="p-1.5 rounded-lg text-muted-text hover:text-fg-app hover:bg-fg-app/5 transition-colors cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-card-border">
              {/* Initial Welcome Message */}
              <div className="flex gap-2.5 max-w-[85%]">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-accent-primary/30 flex-shrink-0">
                  <Image src="/logo.jpg" alt="Mascot" width={28} height={28} className="object-cover w-full h-full" />
                </div>
                <div className="p-3 rounded-2xl rounded-tl-none bg-accent-primary/5 border border-accent-primary/10 text-xs leading-relaxed text-fg-app font-sans">
                  {t("chatbot.welcome")}
                </div>
              </div>

              {/* Message history */}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 max-w-[85%] ${
                    msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-accent-primary/30 flex-shrink-0">
                      <Image src="/logo.jpg" alt="Mascot" width={28} height={28} className="object-cover w-full h-full" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-line font-sans ${
                      msg.role === "user"
                        ? "bg-accent-primary text-black font-medium rounded-tr-none"
                        : "bg-accent-primary/5 border border-accent-primary/10 text-fg-app rounded-tl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Thinking loader */}
              {isLoading && (
                <div className="flex gap-2.5 max-w-[85%] items-center">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-accent-primary/30 flex-shrink-0">
                    <Image src="/logo.jpg" alt="Mascot" width={28} height={28} className="object-cover w-full h-full" />
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-accent-primary/5 border border-accent-primary/10 text-xs text-muted-text flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-accent-primary" />
                    <span>{t("chatbot.typing")}</span>
                  </div>
                </div>
              )}

              {/* Error boundary state */}
              {error && (
                <div className="p-3 rounded-xl border border-red-500/25 bg-red-500/5 text-red-400 text-xs font-mono">
                  {error}
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestion Pills */}
            {messages.length === 0 && !isLoading && (
              <div className="px-4 py-2 border-t border-card-border bg-fg-app/2 flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-muted-text uppercase tracking-wider">
                  Suggestions:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((sug, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(sug.text)}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-accent-primary/10 hover:bg-accent-primary text-accent-primary hover:text-black border border-accent-primary/25 hover:border-accent-primary transition-all cursor-pointer text-left"
                    >
                      {sug.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 border-t border-card-border bg-card-bg flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t("chatbot.placeholder")}
                disabled={isLoading}
                className="flex-1 bg-fg-app/5 border border-card-border rounded-xl px-3.5 py-2 text-base sm:text-xs text-fg-app focus:outline-none focus:border-accent-primary/50 disabled:opacity-50 font-sans"
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !inputValue.trim()}
                title={t("chatbot.send")}
                className="p-2.5 rounded-xl bg-accent-primary hover:bg-accent-secondary disabled:bg-card-border text-black disabled:text-muted-text transition-all cursor-pointer flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center border-2 border-accent-primary bg-card-bg cursor-pointer shadow-lg group focus:outline-none overflow-hidden ${
          isOpen ? "hidden sm:flex" : "flex"
        }`}
        title="AI Chatbot Assistant"
      >
        {/* Glow pulsing ring around the bubble */}
        <div className="absolute -inset-1 rounded-full bg-accent-primary/15 blur opacity-70 group-hover:opacity-100 animate-pulse pointer-events-none" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              <X className="w-6 h-6 text-accent-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center w-full h-full"
            >
              <Image
                src="/logo.jpg"
                alt="Fox AI mascot"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small badge count/notification for first visit */}
        {!isOpen && messages.length === 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent-primary"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
