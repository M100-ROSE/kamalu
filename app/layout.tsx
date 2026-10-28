import type { Metadata, Viewport } from "next";
import { Fraunces, Karla } from "next/font/google";
import { seo } from "./content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Kamalu — Padaria e Confeitaria",
    title: seo.ogTitle,
    description: seo.ogDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#2B1A14",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${karla.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
