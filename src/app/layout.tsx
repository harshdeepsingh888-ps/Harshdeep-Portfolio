import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

import { CommandPalette } from "@/components/chrome/command-palette";
import { Cursor } from "@/components/chrome/cursor";
import { Footer } from "@/components/chrome/footer";
import { Header } from "@/components/chrome/header";
import { SmoothScroll } from "@/components/chrome/smooth-scroll";
import { site } from "@/content/site";

import "./globals.css";

const clash = localFont({
  src: [
    { path: "./fonts/clash-display-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/clash-display-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
});

const general = localFont({
  src: [
    { path: "./fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/general-sans-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-general",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software engineer, backend & AI`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Harshdeep Singh",
    "software engineer",
    "backend engineer",
    "AI engineer",
    "SWE intern",
    "Node.js",
    "Python",
    "FastAPI",
    "TypeScript",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Software engineer, backend & AI`,
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software engineer, backend & AI`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#060606",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Technical Intern (Software Engineering)",
  worksFor: { "@type": "Organization", name: "Neubitat" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Bharati Vidyapeeth College of Engineering, GGSIPU" },
  address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
  sameAs: [site.links.github, site.links.linkedin],
};

// Runs before first paint: enables JS-only styles and skips the intro for repeat visits this session.
const bootScript = `try{var d=document.documentElement;d.classList.add('js');if(sessionStorage.getItem('hs-intro'))d.dataset.seen='1'}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${clash.variable} ${general.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll />
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <CommandPalette />
        <Cursor />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
