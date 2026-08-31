import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteFooter } from "../shared/components/layout";
import { SmoothScrollProvider } from "../shared/components/smooth-scroll/smooth-scroll-provider";
import { PageTransitionContent } from "../shared/components/ui/page-transition";

/**
 * Montserrat loaded via next/font/google.
 * Exposed as --font-montserrat-raw on <body>.
 * The --font-sans alias is declared on `body` in typography.css (not :root)
 * because Next.js injects the CSS variable onto body, not :root.
 * See .agent/skills/TYPOGRAPHY-FONT-RESOLUTION-FIX.md
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-montserrat-raw",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PCE Nigeria | Engineering & Construction Excellence",
  description:
    "PCE Nigeria delivers world-class engineering, procurement, and construction services across oil & gas, infrastructure, and industrial sectors.",
  icons: {
    icon: "/logo/PCE Logo Icon.svg",
    shortcut: "/logo/PCE Logo Icon.svg",
    apple: "/logo/PCE Logo Icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} flex flex-col min-h-screen`}>
        <SmoothScrollProvider>
          <Suspense fallback={null}>
            <PageTransitionContent />
          </Suspense>
          <SiteHeader />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
