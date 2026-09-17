import type { Metadata } from "next";
import type { Locale } from "./content";
export function pageMetadata(locale: Locale, path: string, title: string, description: string, languages?: Record<string, string>): Metadata {
  return {
    title: { absolute: title }, description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    openGraph: { title, description, url: path, type: "website", siteName: "HydroTex", locale: locale === "de" ? "de_DE" : "en_US", images: [{ url: "/images/brand/hydrotex-logo-horizontal.png", width: 1774, height: 887, alt: "HydroTex — Intelligent Water Solutions" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/brand/hydrotex-logo-horizontal.png"] }
  };
}
export function homeMetadata(locale: Locale) {
  return pageMetadata(locale, locale === "de" ? "/" : "/en", "HydroTex | Intelligent Water Solutions",
    locale === "de" ? "Umwelttechnik und intelligente Abwasserlösungen für eine ressourceneffiziente industrielle Wasserbehandlung." : "Environmental engineering and intelligent wastewater solutions for resource-efficient industrial water treatment.",
    { de: "/", en: "/en", "x-default": "/" });
}
