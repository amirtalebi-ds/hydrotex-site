import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Beaker,
  CheckCircle2,
  Droplets,
  Factory,
  Leaf,
  Linkedin,
  Mail,
  Recycle,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Waves
} from "lucide-react";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "HydroTex | Lösungsmittelbasierte Behandlung von Textilabwässern",
  description:
    "HydroTex entwickelt ein lösungsmittelbasiertes Verfahren zur Behandlung von Textilabwässern mit Fokus auf Schlammreduktion, Wasserwiedergewinnung, Lösungsmittelregeneration und Pilotvalidierung.",
  alternates: {
    canonical: "/de",
    languages: {
      en: "/",
      de: "/de"
    }
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: "https://www.hydrotex.eu/de",
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
  }
};

const impactMetrics = [
  {
    value: "Bis zu 90%",
    label: "Schlammreduktion",
    note: "Zielwert, vorbehaltlich Pilotvalidierung",
    icon: TrendingDown
  },
  {
    value: "€0,3–1,0/m³",
    label: "Ziel-OPEX",
    note: "Ausgelegt für kostenorientierte Textil-ETPs",
    icon: BarChart3
  },
  {
    value: "Wiederverwendbar",
    label: "biobasiertes Lösungsmittel",
    note: "Konzept eines zirkulären Regenerationskreislaufs",
    icon: Recycle
  },
  {
    value: "KI-gestützt",
    label: "Prozessüberwachung",
    note: "SPS-kompatible Unterstützung, keine Black-Box-Steuerung",
    icon: Sparkles
  }
];

const roadmap = [
  "Machbarkeitsstudie",
  "Validierung mit realem Abwasser",
  "Pilotprojekt",
  "Kommerzielle Umsetzung"
];

const opexData = [
  { name: "Koagulation/Flockung", min: 0.4, max: 1.5, color: "bg-slate-400" },
  { name: "Aktivkohle", min: 0.5, max: 3.0, color: "bg-sky-500" },
  { name: "Ozon/AOP", min: 1.0, max: 5.0, color: "bg-indigo-500" },
  { name: "Membranen", min: 1.0, max: 10.0, color: "bg-cyan-700" },
  { name: "HydroTex-Zielwert", min: 0.3, max: 1.0, color: "bg-hydro-teal", highlight: true }
];

const comparison = [
  {
    technology: "Koagulation/Flockung",
    strength: "Niedrige CAPEX und etablierter Anlagenbetrieb",
    limitation: "Hoher Chemikalienbedarf und Bildung von Nassschlamm",
    hydrotex: "Zielt auf geringere Schlammbelastung durch Extraktion und Regeneration"
  },
  {
    technology: "Aktivkohle",
    strength: "Starke Entfärbungsleistung",
    limitation: "Kosten für Austausch oder Regeneration des beladenen Mediums",
    hydrotex: "Konzipiert um einen wiederverwendbaren Lösungsmittelkreislauf"
  },
  {
    technology: "Ozon/AOP",
    strength: "Hohes Potenzial zur Entfärbung",
    limitation: "Energie- und Oxidationsmittelkosten können erheblich sein",
    hydrotex: "Zielt auf moderaten Energiebedarf und geringere Verbrauchsstofflast"
  },
  {
    technology: "Membranen",
    strength: "Sehr gute Polier- und Wiederverwendungsmöglichkeiten",
    limitation: "Fouling, Konzentratmanagement und hohe CAPEX",
    hydrotex: "Positioniert als Nachrüstpfad vor kapitalintensiven Wiederverwendungssystemen"
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hydrotex.eu/#organization",
      name: "HydroTex",
      url: "https://www.hydrotex.eu",
      email: "contact@hydrotex.eu",
      founder: {
        "@id": "https://www.hydrotex.eu/#founder"
      },
      sameAs: ["https://de.linkedin.com/in/amirtalebienvtech"]
    },
    {
      "@type": "Person",
      "@id": "https://www.hydrotex.eu/#founder",
      name: "Dr. Amir Talebi",
      jobTitle: "Umwelttechnologieforscher & Gründer",
      description: "Promotion in Environmental Technology und Gründer von HydroTex.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Freiburg",
        addressCountry: "DE"
      },
      sameAs: ["https://de.linkedin.com/in/amirtalebienvtech"]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hydrotex.eu/#website-de",
      url: "https://www.hydrotex.eu/de",
      name: "HydroTex",
      inLanguage: "de-DE",
      publisher: {
        "@id": "https://www.hydrotex.eu/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.hydrotex.eu/#service-de",
      name: "Validierung lösungsmittelbasierter Textilabwasserbehandlung",
      provider: {
        "@id": "https://www.hydrotex.eu/#organization"
      },
      areaServed: ["Deutschland", "Malaysia", "Südostasien", "Europäische Union"],
      serviceType: "Industrielle Validierung und Pilotentwicklung für Textilabwasserbehandlung",
      description:
        "HydroTex entwickelt lösungsmittelbasierte Textilabwasserbehandlung für Schlammreduktion, Wasserwiedergewinnung, zirkuläre Lösungsmittelregeneration und Pilotvalidierung."
    }
  ]
};

const formatCost = (value: number) =>
  value.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });

export default function GermanHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main lang="de">
        <Header />
        <Hero />
        <Impact />
        <Technology />
        <Roadmap />
        <OpexChart />
        <CompetitiveComparison />
        <Founder />
        <Materials />
        <ContactFooter />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/78 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/de#top" className="flex items-center gap-3" aria-label="HydroTex Startseite">
          <span className="flex size-9 items-center justify-center rounded-full bg-hydro-teal text-white">
            <Waves size={19} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-semibold text-hydro-ink">HydroTex</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-hydro-slate md:flex">
          <Link href="#impact" className="transition hover:text-hydro-teal">
            Wirkung
          </Link>
          <Link href="#roadmap" className="transition hover:text-hydro-teal">
            Fahrplan
          </Link>
          <Link href="#comparison" className="transition hover:text-hydro-teal">
            Vergleich
          </Link>
          <Link href="#founder" className="transition hover:text-hydro-teal">
            Gründer
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher current="de" />
          <Link href="#contact" className="btn-secondary hidden py-2.5 sm:inline-flex">
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}

function LanguageSwitcher({ current }: { current: "en" | "de" }) {
  const optionClass = (locale: "en" | "de") =>
    `rounded-full px-2.5 py-1 text-xs font-semibold transition ${
      current === locale
        ? "bg-hydro-teal text-white"
        : "text-hydro-slate hover:text-hydro-teal"
    }`;

  return (
    <div
      className="flex items-center rounded-full border border-hydro-line bg-white/82 p-1"
      aria-label="Sprachauswahl"
    >
      <Link href="/" className={optionClass("en")} aria-current={current === "en" ? "page" : undefined}>
        EN
      </Link>
      <Link href="/de" className={optionClass("de")} aria-current={current === "de" ? "page" : undefined}>
        DE
      </Link>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] overflow-hidden bg-[linear-gradient(135deg,#F7FBFA_0%,#EAF8F6_48%,#DDF2F3_100%)] pt-16"
    >
      <div className="absolute inset-0 opacity-[0.42]">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveStrokeDe" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#4BB6B7" stopOpacity="0.04" />
              <stop offset="48%" stopColor="#0F8B78" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#166A8F" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          {[160, 230, 300, 370, 440, 510, 580, 650, 720].map((y, index) => (
            <path
              key={y}
              d={`M -120 ${y} C 150 ${y - 55}, 300 ${y + 55}, 560 ${y} S 980 ${y - 55}, 1560 ${y + 18}`}
              fill="none"
              stroke="url(#waveStrokeDe)"
              strokeWidth={index % 3 === 0 ? 2.2 : 1.4}
            />
          ))}
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-hydro-paper/80 to-transparent" />
      <div className="section-shell relative flex min-h-[calc(88vh-4rem)] items-center py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Textilabwasser • Schlammreduktion • Wasserwiedergewinnung</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-hydro-ink sm:text-5xl lg:text-6xl">
            Lösungsmittelbasierte Behandlung von Textilabwässern zur Schlammreduktion und Wasserwiedergewinnung
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hydro-slate sm:text-xl">
            HydroTex entwickelt eine modulare Extraktions- und Regenerationsplattform
            für farbstoffreiche Textilabwässer mit dem Ziel, Betriebskosten zu
            senken, Lösungsmittel zirkulär wiederzuverwenden und industrielle
            Pilotvalidierung zu ermöglichen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#technology" className="btn-primary">
              Technologie ansehen <ArrowRight size={18} />
            </Link>
            <Link href="#contact" className="btn-secondary">
              Kontakt aufnehmen <Mail size={18} />
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-hydro-slate sm:grid-cols-3">
            {["Machbarkeitsorientiert", "Validierung mit realem Abwasser", "Kommerzieller Pilotierungspfad"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="shrink-0 text-hydro-teal" size={18} />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <Reveal id="impact" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Wirkungsziele</p>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="section-title">Ökologische und wirtschaftliche Vorteile klar nachvollziehbar.</h2>
            <p className="section-copy">
              HydroTex ist auf messbare Ergebnisse ausgerichtet, die für
              Investoren, Fördergeber und Industriepartner entscheidend sind:
              geringere Schlammbelastung, wettbewerbsfähige Ziel-Betriebskosten,
              zirkuläre Chemie und nachvollziehbare Prozessüberwachung.
            </p>
          </div>
          <p className="max-w-sm text-sm leading-6 text-hydro-slate">
            Angaben sind Zielwerte für die Validierung und müssen durch Tests
            mit realem Abwasser sowie Pilotbetrieb bestätigt werden.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map(({ value, label, note, icon: Icon }) => (
            <article key={label} className="metric-card">
              <Icon className="text-hydro-teal" size={24} />
              <p className="mt-5 text-3xl font-semibold text-hydro-ink">{value}</p>
              <h3 className="mt-2 text-base font-semibold text-hydro-blue">{label}</h3>
              <p className="mt-3 text-sm leading-6 text-hydro-slate">{note}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Technology() {
  return (
    <Reveal id="technology" className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow">Technologiekonzept</p>
          <h2 className="section-title">Ein zirkulärer Lösungsmittelkreislauf für farbstoffreiche Textilabwässer.</h2>
          <p className="section-copy">
            HydroTex ist als modularer Nachrüstpfad für Färbereien und
            Ausrüstungsbetriebe konzipiert. Das System überführt Farbstoffe aus
            dem Abwasser in eine wiederverwendbare organische Phase, regeneriert
            das Lösungsmittel und konzentriert Verunreinigungen in einem kleineren
            Abfallstrom.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Extraktion", "Gezielte Überführung von Farbstoffen aus dem Abwasser in eine wiederverwendbare Lösungsmittelphase."],
              ["Regeneration", "Lösungsmittelkreislauf für wiederholte Nutzung und geringeren Verbrauchsstoffbedarf."],
              ["Abfallreduktion", "Ziel ist der Ersatz voluminöser Schlämme durch einen kleineren konzentrierten Output."],
              ["Industrielle Steuerung", "SPS-kompatible Automatisierung mit optionaler KI-gestützter Prozessüberwachung."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-[8px] border border-hydro-line bg-white p-5">
                <h3 className="font-semibold text-hydro-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-hydro-slate">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[8px] border border-hydro-line bg-white p-4 shadow-soft">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <ProcessNode icon={Factory} title="Textilabwasser" text="Farbstoffbelastetes Abwasser" />
            <ArrowRight className="mx-auto hidden text-hydro-aqua sm:block" />
            <ProcessNode icon={Beaker} title="HydroTex-Modul" text="Extraktion + Regeneration" featured />
            <ArrowRight className="mx-auto hidden text-hydro-aqua sm:block" />
            <ProcessNode icon={Droplets} title="Wasserwiedergewinnung" text="Reduzierte Farbfracht" />
          </div>
          <div className="mt-4 rounded-[8px] bg-hydro-mint p-4 text-sm leading-6 text-hydro-slate">
            <strong className="text-hydro-ink">Validierungsfokus:</strong> Restgehalt
            an Lösungsmittel, Lösungsmittelverlust pro m³, Phasentrennung,
            Umgang mit Sekundärabfällen, CSB-Einfluss und stabile wiederholte
            Regenerationszyklen.
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProcessNode({
  icon: Icon,
  title,
  text,
  featured = false
}: {
  icon: typeof Factory;
  title: string;
  text: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-[8px] border p-5 text-center ${
        featured
          ? "border-hydro-teal bg-hydro-paper"
          : "border-hydro-line bg-white"
      }`}
    >
      <Icon className="mx-auto text-hydro-teal" size={28} />
      <h3 className="mt-4 font-semibold text-hydro-ink">{title}</h3>
      <p className="mt-1 text-sm text-hydro-slate">{text}</p>
    </div>
  );
}

function Roadmap() {
  return (
    <Reveal id="roadmap" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Validierungs- und Pilotierungspfad</p>
        <h2 className="section-title">Von der Machbarkeit zur kommerziellen Umsetzung.</h2>
        <p className="section-copy">
          Der Fahrplan ist bewusst stufenweise angelegt. Jede Phase reduziert
          technische, wirtschaftliche, regulatorische und kundenbezogene Risiken,
          bevor größere Investitionen ausgelöst werden.
        </p>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {roadmap.map((item, index) => (
            <div key={item} className="relative rounded-[8px] border border-hydro-line bg-hydro-paper p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-hydro-teal text-sm font-semibold text-white">
                  {index + 1}
                </span>
                {index < roadmap.length - 1 ? (
                  <ArrowRight className="hidden text-hydro-aqua lg:block" size={22} />
                ) : null}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-hydro-ink">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-hydro-slate">
                {[
                  "Proben, KPIs, Sicherheitsanforderungen und techno-ökonomische Annahmen definieren.",
                  "Reales Textilabwasser auf Entfärbung, Lösungsmittelverlust und Phasentrennung testen.",
                  "Kundenrelevanten Pilotbetrieb mit Entscheidungspunkten und Kostennachweisen durchführen.",
                  "Modulare Einheiten nach Validierung von Leistung, EHS und Wirtschaftlichkeit einsetzen."
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function OpexChart() {
  const maxScale = 10;
  return (
    <Reveal className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Wettbewerbsfähige OPEX</p>
          <h2 className="section-title">Ein Zielkostenkorridor im Wettbewerb mit etablierten Behandlungsverfahren.</h2>
          <p className="section-copy">
            HydroTex wird im Verhältnis zu Behandlungsoptionen positioniert, die
            Textilbetriebe bereits kennen. Der Ziel-OPEX-Korridor ist attraktiv,
            muss jedoch mit realem Abwasser, Lösungsmittelverlustdaten und
            Pilotbetrieb validiert werden.
          </p>
        </div>
        <div className="rounded-[8px] border border-hydro-line bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between gap-4 border-b border-hydro-line pb-4">
            <h3 className="font-semibold text-hydro-ink">Vergleich der Betriebskosten</h3>
            <span className="text-sm text-hydro-slate">€/m³</span>
          </div>
          <div className="mt-6 space-y-5" aria-label="Balkendiagramm der Betriebskostenbereiche">
            {opexData.map((item) => {
              const left = (item.min / maxScale) * 100;
              const width = ((item.max - item.min) / maxScale) * 100;
              return (
                <div key={item.name} className={item.highlight ? "rounded-[8px] bg-hydro-mint p-3" : ""}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-hydro-ink">{item.name}</span>
                    <span className="text-hydro-slate">
                      {formatCost(item.min)}–{formatCost(item.max)}
                    </span>
                  </div>
                  <div className="relative h-4 rounded-full bg-slate-100">
                    <div
                      className={`absolute top-0 h-4 rounded-full ${item.color}`}
                      style={{ left: `${left}%`, width: `${width}%` } as CSSProperties}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5 flex justify-between text-xs text-hydro-slate">
            <span>0</span>
            <span>2,5</span>
            <span>5,0</span>
            <span>7,5</span>
            <span>10,0</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function CompetitiveComparison() {
  return (
    <Reveal id="comparison" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Wettbewerbsvergleich</p>
        <h2 className="section-title">Kein weiteres Black-Box-Versprechen für die Abwasserbehandlung.</h2>
        <p className="section-copy">
          HydroTex sollte an den Technologien gemessen werden, die Textilbetriebe
          bereits prüfen. Die Differenzierung liegt nicht allein in der
          Entfärbung, sondern im Potenzial zur Schlammreduktion, Regeneration der
          Prozesschemie und einem wirtschaftlicheren Nachrüstpfad.
        </p>
        <div className="mt-10 overflow-hidden rounded-[8px] border border-hydro-line bg-white shadow-sm">
          <div className="hidden grid-cols-[1fr_1.25fr_1.25fr_1.35fr] bg-hydro-paper text-sm font-semibold text-hydro-ink md:grid">
            <div className="border-r border-hydro-line p-4">Technologie</div>
            <div className="border-r border-hydro-line p-4">Warum sie genutzt wird</div>
            <div className="border-r border-hydro-line p-4">Zentrale Grenze</div>
            <div className="p-4">HydroTex-Positionierung</div>
          </div>
          {comparison.map((row) => (
            <div
              key={row.technology}
              className="grid gap-0 border-t border-hydro-line md:grid-cols-[1fr_1.25fr_1.25fr_1.35fr]"
            >
              <ComparisonCell label="Technologie" value={row.technology} strong />
              <ComparisonCell label="Warum sie genutzt wird" value={row.strength} />
              <ComparisonCell label="Zentrale Grenze" value={row.limitation} />
              <ComparisonCell label="HydroTex-Positionierung" value={row.hydrotex} accent />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ComparisonCell({
  label,
  value,
  strong = false,
  accent = false
}: {
  label: string;
  value: string;
  strong?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="border-hydro-line p-4 text-sm leading-6 md:border-r md:last:border-r-0">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-hydro-teal md:hidden">
        {label}
      </span>
      <span className={`${strong ? "font-semibold text-hydro-ink" : ""} ${accent ? "text-hydro-teal" : "text-hydro-slate"}`}>
        {value}
      </span>
    </div>
  );
}

function Founder() {
  return (
    <Reveal id="founder" className="py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-[8px] border border-hydro-line bg-white p-6 shadow-soft">
          <div className="flex size-16 items-center justify-center rounded-full bg-hydro-mint text-2xl font-semibold text-hydro-teal">
            AT
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-hydro-ink">Dr. Amir Talebi</h2>
          <p className="mt-2 text-hydro-blue">Umwelttechnologieforscher & Gründer</p>
          <p className="mt-1 text-sm text-hydro-slate">Promotion in Environmental Technology</p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://de.linkedin.com/in/amirtalebienvtech"
              className="btn-secondary py-2.5"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <a href="mailto:contact@hydrotex.eu" className="btn-secondary py-2.5">
              <Mail size={17} /> E-Mail
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Gründerprofil</p>
          <h2 className="section-title">Technische Tiefe mit validierungsorientiertem Kommerzialisierungspfad.</h2>
          <p className="section-copy">
            HydroTex wird von Dr. Amir Talebi gegründet und verbindet
            Forschungserfahrung in der Umwelttechnologie mit einem praktischen
            Fokus auf Abwasserbehandlung, industrielle Machbarkeit und
            Pilotplanung. Der aktuelle Schwerpunkt liegt darauf,
            Proof-of-Concept-Chemie in Evidenz mit realem Abwasser,
            Kundengespräche und partnerfähige Pilotunterlagen zu überführen.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              [ShieldCheck, "Compliance-orientiertes Denken"],
              [Leaf, "Nachhaltigkeitsgetriebenes Design"],
              [Factory, "Fokus auf Industriepartner"]
            ].map(([Icon, label]) => {
              const TypedIcon = Icon as typeof ShieldCheck;
              return (
                <div key={label as string} className="rounded-[8px] border border-hydro-line bg-white p-4">
                  <TypedIcon className="text-hydro-teal" size={22} />
                  <p className="mt-3 text-sm font-medium text-hydro-ink">{label as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Materials() {
  return (
    <Reveal id="materials" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="rounded-[8px] border border-hydro-line bg-hydro-paper p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="eyebrow">Unterlagen anfragen</p>
            <h2 className="mt-3 text-3xl font-semibold text-hydro-ink">Unterlagen für Investoren und Partner auf Anfrage.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-hydro-slate">
              Detaillierte Geschäftsplanung, Finanzannahmen und Partnermaterialien
              werden ausschließlich im direkten Kontakt geteilt. Sensible
              Frühphaseninformationen bleiben damit außerhalb der öffentlichen
              Website.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href="mailto:contact@hydrotex.eu?subject=Anfrage%20HydroTex%20Businessplan"
              className="btn-primary"
            >
              <Mail size={18} /> Businessplan anfragen
            </a>
            <a
              href="mailto:contact@hydrotex.eu?subject=Anfrage%20HydroTex%20One-Pager"
              className="btn-secondary bg-white"
            >
              <Mail size={18} /> One-Pager anfragen
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-hydro-line bg-hydro-ink text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold">HydroTex</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/72">
              Lösungsmittelbasiertes Konzept zur Behandlung von Textilabwässern
              für Schlammreduktion, Wasserwiedergewinnung, zirkuläre
              Lösungsmittelregeneration und pilotfähige industrielle Validierung.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:contact@hydrotex.eu" className="btn-primary bg-white text-hydro-ink hover:bg-hydro-mint">
                <Mail size={18} /> contact@hydrotex.eu
              </a>
              <a
                href="https://de.linkedin.com/in/amirtalebienvtech"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary border-white/20 bg-white/8 text-white hover:border-white/50 hover:text-white"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Mehr erfahren</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              <Link href="#technology" className="hover:text-white">
                Technologie
              </Link>
              <Link href="#impact" className="hover:text-white">
                Wirkung
              </Link>
              <Link href="#roadmap" className="hover:text-white">
                Validierungsfahrplan
              </Link>
              <Link href="#materials" className="hover:text-white">
                Unterlagen anfragen
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Rechtliches</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              <Link href="/impressum" className="hover:text-white">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/12 pt-6 text-sm text-white/56">
          © {new Date().getFullYear()} HydroTex. Freiburg, Deutschland.
        </div>
      </div>
    </footer>
  );
}
