import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://josemolina.dev"),
  title: "Jose Miguel Molina | Full-Stack Developer",
  description:
    "Portfolio de Jose Miguel Molina, desarrollador full-stack en Mallorca especializado en Node.js, TypeScript, Next.js, PostgreSQL y React Native.",
  keywords: [
    "Jose Miguel Molina",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React Native",
    "Mallorca",
    "España",
  ],
  openGraph: {
    title: "Jose Miguel Molina | Full-Stack Developer",
    description:
      "Desarrollador full-stack autodidacta con experiencia construyendo productos completos desde backend hasta interfaz y móvil.",
    url: "https://josemolina.dev",
    siteName: "Jose Miguel Molina",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0b0d0f] text-[#f5f1ea]">{children}</body>
    </html>
  );
}
