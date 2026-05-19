import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.hydrotex.eu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HydroTex | Solvent-Based Textile Wastewater Treatment",
    template: "%s | HydroTex"
  },
  description:
    "HydroTex develops solvent-based textile wastewater treatment for sludge reduction, water recovery, reusable bio-based solvent regeneration, and lower target operating cost.",
  keywords: [
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
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "HydroTex",
    title: "HydroTex | Solvent-Based Textile Wastewater Treatment",
    description:
      "Investor-ready textile wastewater technology concept for sludge reduction, circular solvent regeneration, water recovery, and pilot validation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HydroTex solvent-based textile wastewater treatment"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HydroTex | Solvent-Based Textile Wastewater Treatment",
    description:
      "Sludge reduction, target lower OPEX, circular solvent regeneration, and pilot-ready validation for textile wastewater.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
