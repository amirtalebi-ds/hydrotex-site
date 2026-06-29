import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.hydrotex.eu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HydroTex | Validierung für Textilabwasser und Schlammreduktion",
    template: "%s | HydroTex"
  },
  description:
    "HydroTex ist eine gründergeführte Umwelttechnik- und Projektentwicklungsinitiative für Machbarkeitsstudien, Textilabwasserbewertung, Pilotvorbereitung und schlammärmere Behandlungsansätze.",
  keywords: [
    "Textilabwasserbehandlung",
    "Schlammreduktion",
    "Machbarkeitsstudie",
    "Pilotvorbereitung",
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
    title: "HydroTex | Validierung für Textilabwasser und Schlammreduktion",
    description:
      "Feasibility-first Umwelttechnik für Textilabwasser: Schlammreduktion, Compliance-Risiko, techno-ökonomische Bewertung und Pilotvorbereitung.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HydroTex Textilabwasser Validierung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HydroTex | Validierung für Textilabwasser und Schlammreduktion",
    description:
      "Gründergeführte Umwelttechnikinitiative für Machbarkeit, industrielle Validierung und Pilotvorbereitung im Textilabwasser.",
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
