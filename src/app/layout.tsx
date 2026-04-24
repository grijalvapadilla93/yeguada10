import type { Metadata } from "next";
import { Playfair_Display, Newsreader, Space_Grotesk } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YEGUADA10 | Finca, Restaurante y Caballos PRE",
  description:
    "Experiencia única donde la tradición ecuestre se encuentra con la alta gastronomía. Finca, restaurante y caballos Pura Raza Española.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${playfair.variable} ${newsreader.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Bfcache fix — runs synchronously before React mounts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check immediately on parse
                var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
                if (nav && nav.type === 'back_forward') {
                  window.location.reload();
                  return;
                }
                // Deprecated fallback
                var legacy = window.performance && window.performance.navigation;
                if (legacy && legacy.type === 2) {
                  window.location.reload();
                  return;
                }
                // pageshow listener for bfcache restoration
                window.addEventListener('pageshow', function(e) {
                  if (e.persisted) {
                    window.location.reload();
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CustomCursor />
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
