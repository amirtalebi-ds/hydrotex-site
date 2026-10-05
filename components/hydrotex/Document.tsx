import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
export const baseMetadata = {
 metadataBase: new URL("https://www.hydrotex.eu"),
 title: { default: "HydroTex | Intelligent Water Solutions", template: "%s | HydroTex" },
 description: "Umwelttechnik und intelligente Abwasserlösungen für eine ressourceneffiziente industrielle Wasserbehandlung.",
 icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/images/brand/hydrotex-emblem.png", type: "image/png" }], apple: "/images/brand/hydrotex-emblem.png" },
 robots: { index: true, follow: true },
 authors: [{ name: "Dr.-Ing. Amir Talebi" }], creator: "HydroTex", publisher: "HydroTex"
};
export function Document({locale,children}:{locale:"de"|"en";children:ReactNode}) {
 return <html lang={locale}><body className={`${inter.variable} ${manrope.variable}`}>{children}<Analytics /></body></html>;
}
