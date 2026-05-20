import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hydrotex.eu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HydroTex | Lösungsmittelbasierte Behandlung von Textilabwässern",
    template: "%s | HydroTex"
  },
  description:
    "HydroTex entwickelt ein lösungsmittelbasiertes Verfahren zur Behandlung von Textilabwässern mit Fokus auf Schlammreduktion, Wasserwiedergewinnung, Lösungsmittelregeneration und Pilotvalidierung.",
  keywords: [
    "Textilabwasserbehandlung",
    "Schlammreduktion",
    "Wasserwiedergewinnung",
    "Lösungsmittelextraktion",
    "textile wastewater treatment",
    "sludge reduction",
    "water recovery",
    "solvent extraction",
    "industrial wastewater",
    "textile dyeing wastewater",
    "HydroTex"
  ],
  authors: [{ name: "Dr. Amir Talebi" }],
  creator: "HydroTex",
  publisher: "HydroTex",
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      en: "/en"
    }
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "HydroTex",
    title: "HydroTex | Lösungsmittelbasierte Behandlung von Textilabwässern",
    description:
      "Investorenorientiertes Umwelttechnologie-Konzept für Schlammreduktion, zirkuläre Lösungsmittelregeneration, Wasserwiedergewinnung und Pilotvalidierung.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HydroTex lösungsmittelbasierte Textilabwasserbehandlung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HydroTex | Lösungsmittelbasierte Behandlung von Textilabwässern",
    description:
      "Schlammreduktion, Ziel-OPEX, zirkuläre Lösungsmittelregeneration und pilotfähige Validierung für Textilabwässer.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
