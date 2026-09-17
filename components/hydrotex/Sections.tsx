import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { content, homePath, partnerPath, type Locale } from "./content";
export function SectionHeading({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{children}</div>;
}
export function CapabilityCard({ index, title, text }: { index: number; title: string; text: string }) {
  return <article className="capability"><span className="stage-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>;
}
export function ProcessFlow({ locale }: { locale: Locale }) {
  const t = content[locale];
  return <figure className="process-flow"><ol>{t.flow.map((step, index) => <li key={step}><span className="process-node" aria-hidden="true">{index === 3 ? "↻" : `0${index + 1}`}</span><span>{step}</span></li>)}</ol><figcaption>{t.flowNote}</figcaption></figure>;
}
export function CTA({ locale }: { locale: Locale }) {
  const t = content[locale];
  return <section className="contact-section dark-section" id="contact"><span id="partnership" className="anchor-alias" /><div className="section-shell contact-grid"><div><p className="eyebrow">HydroTex · Intelligent Water Solutions</p><h2>{t.cta}</h2><p>{t.ctaCopy}</p></div><div className="contact-actions"><a className="button button-light" href={`mailto:contact@hydrotex.eu?subject=${encodeURIComponent("HydroTex — " + t.discuss)}`}>{t.discuss}<span aria-hidden="true">↗</span></a><a className="email-link" href="mailto:contact@hydrotex.eu">contact@hydrotex.eu</a></div></div></section>;
}
export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale];
  return <footer className="site-footer"><div className="section-shell"><div className="footer-top"><div><Link href={homePath(locale)} className="footer-brand" aria-label={locale === "de" ? "HydroTex Startseite" : "HydroTex home"}><Image src="/images/brand/hydrotex-logo-stacked.png" alt="HydroTex — Intelligent Water Solutions" width={1254} height={1254} sizes="180px"/></Link><p>{t.footer}</p></div><div className="footer-links"><Link href={homePath(locale)+"#services"}>{t.nav[0]}</Link><Link href={homePath(locale)+"#technology"}>{t.nav[1]}</Link><a href="mailto:contact@hydrotex.eu">contact@hydrotex.eu</a><Link href={partnerPath(locale)}>{t.partnersLink}</Link><Link href={locale === "de" ? "/impressum" : "/imprint"}>{t.legal[0]}</Link><Link href={locale === "de" ? "/datenschutz" : "/privacy"}>{t.legal[1]}</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HydroTex</span><span>{t.location}</span><div className="language-switch" aria-label={locale === "de" ? "Sprache" : "Language"}><Link href="/" hrefLang="de">DE</Link><span aria-hidden="true">|</span><Link href="/en" hrefLang="en">EN</Link></div></div></div></footer>;
}
