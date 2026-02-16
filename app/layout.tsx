import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HydroTex — Textile Wastewater Treatment Concept",
    template: "%s | HydroTex",
  },
  description:
    "HydroTex is an early-stage GreenTech concept for sludge-minimizing textile wastewater treatment, structured as a feasibility-to-pilot pathway for regulation-driven textile markets.",
  applicationName: "HydroTex",
  metadataBase: new URL("https://hydrotex-tile.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HydroTex — Textile Wastewater Treatment Concept",
    description:
      "A feasibility-to-pilot pathway focused on reducing sludge burden and compliance risk in textile dyeing and finishing wastewater.",
    url: "https://hydrotex-tile.vercel.app",
    siteName: "HydroTex",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t mt-16 py-8 text-sm text-center text-zinc-500">
          <div className="space-x-6">
            <a href="/impressum" className="hover:underline">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:underline">
              Datenschutz
            </a>
          </div>
          <div className="mt-4">
            © 2026 HydroTex · Founder-led environmental technology concept
          </div>
        </footer>
      </body>
    </html>
  );
}
