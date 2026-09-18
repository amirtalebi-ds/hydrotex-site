"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { content, homePath, partnerPath, type Locale } from "./content";
export function Header({ locale, page = "home" }: { locale: Locale; page?: "home" | "partners" | "imprint" | "privacy" }) {
  const t = content[locale];
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const home = homePath(locale);
  const links = [home + "#services", home + "#technology", partnerPath(locale), home + "#founder", home + "#contact"];
  const languagePath = (lang: Locale) => page === "partners" ? partnerPath(lang) : page === "imprint" ? (lang === "de" ? "/impressum" : "/imprint") : page === "privacy" ? (lang === "de" ? "/datenschutz" : "/privacy") : homePath(lang);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  return <header className="site-header" ref={header} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <a className="skip-link" href="#main">{t.skip}</a>
    <div className="section-shell header-inner">
      <Link href={home} className="brand" aria-label={locale === "de" ? "HydroTex Startseite" : "HydroTex home"}>
        <Image src="/images/brand/hydrotex-logo-horizontal.png" alt="HydroTex — Intelligent Water Solutions" width={1774} height={887} sizes="(max-width: 767px) 176px, 264px" unoptimized priority />
      </Link>
      <button className="menu-toggle" ref={button} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
        <span>{open ? t.close : t.menu}</span><span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav id="primary-navigation" className={`primary-navigation ${open ? "is-open" : ""}`} aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}>
        <div className="nav-links">{t.nav.map((label, index) => <Link key={label} href={links[index]} onClick={() => setOpen(false)}>{label}</Link>)}</div>
        <div className="language-switch" aria-label={locale === "de" ? "Sprache" : "Language"}>
          {(["de", "en"] as const).map(lang => <Link key={lang} href={languagePath(lang)} hrefLang={lang} lang={lang} aria-current={locale === lang ? "page" : undefined} onClick={() => setOpen(false)}>{lang.toUpperCase()}</Link>)}
        </div>
        <Link href={home + "#contact"} className="button header-cta" onClick={() => setOpen(false)}>{t.discuss}<span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
  </header>;
}
