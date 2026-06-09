import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Muhammad Ridho Azfa Karani | Personal Portfolio",
  description: "Web profile of Muhammad Ridho Azfa Karani, Information Systems student at University of Bakrie, specializing in Cloud Systems & Networking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: "dark" }}>
      <body className="antialiased min-h-screen bg-bg-app text-fg-app selection:bg-selection-bg relative">
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
