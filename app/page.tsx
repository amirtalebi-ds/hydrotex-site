import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Beaker,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Leaf,
  Linkedin,
  Mail,
  Map,
  Recycle,
  ShieldCheck,
  SlidersHorizontal,
  TrendingDown,
  Waves
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "HydroTex | Validierung für Textilabwasser und Schlammreduktion",
  description:
    "HydroTex ist eine gründergeführte Umwelttechnik- und Projektentwicklungsinitiative für Machbarkeitsstudien, Textilabwasserbewertung, Pilotvorbereitung und schlammärmere Behandlungsansätze.",
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
    url: "https://www.hydrotex.eu",
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
  }
};

const services = [
  {
    title: "Machbarkeitsstudien",
    text: "Bewertung von Abwasserproblemen, Schlammreduktion, Behandlungsoptionen und ersten technischen Entscheidungskriterien.",
    icon: ClipboardCheck
  },
  {
    title: "Abwasser- und Kostenbewertung",
    text: "Technische Einordnung von Farbfracht, Chemikalieneinsatz, Schlammbelastung, Betriebskosten und Compliance-Risiken.",
    icon: BarChart3
  },
  {
    title: "Pilotvorbereitung",
    text: "Probenplan, KPIs, Testlogik, Partnerkoordination und Unterlagen für eine spätere industrielle Pilotvalidierung.",
    icon: Map
  }
];

const pathway = [
  {
    phase: "Phase 1",
    title: "Industriegespräche und Abwasserzugang",
    text: "Textilbetriebe, Hochschul- und Technikpartner einbinden, reale Abwasserproben sichern und den konkreten Kundennutzen prüfen."
  },
  {
    phase: "Phase 2",
    title: "Technische und wirtschaftliche Machbarkeit",
    text: "Entfärbung, Phasentrennung, Lösungsmittelverluste, Sekundärabfall und Kostenannahmen mit realen Proben validieren."
  },
  {
    phase: "Phase 3",
    title: "Pilotfähige Projektstruktur",
    text: "LOIs, Pilotkonzept, Budgetlogik und Förder- oder Partnerunterlagen für den nächsten industriellen Entwicklungsschritt vorbereiten."
  }
];

const impactItems = [
  {
    title: "Potenzielle Schlammreduktion",
    text: "HydroTex prüft, ob ein extraktionsgestützter Ansatz die Schlammbelastung gegenüber chemikalienintensiven Fällungs- und Flockungsverfahren verringern kann.",
    icon: TrendingDown
  },
  {
    title: "Niedrigere Compliance-Risiken",
    text: "Der Fokus liegt auf farbstoffreichen Abwässern, sichtbarer Entfärbung und besser nachvollziehbarer Behandlungspraxis.",
    icon: ShieldCheck
  },
  {
    title: "Grant- und Impact-Relevanz",
    text: "Die Validierung adressiert Ressourceneffizienz, Abfallreduktion und praktische Umweltwirkung in textilen Lieferketten.",
    icon: Leaf
  }
];

const validationTargets = [
  "Reale Textilabwasserproben aus Malaysia und Südostasien",
  "Farbstoffentfernung, Phasentrennung und wiederholte Regeneration",
  "Lösungsmittelverlust, Sekundärabfall und vorläufige OPEX-Logik",
  "Pilotkonzept, Partnergespräche und mögliche LOIs"
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
      jobTitle: "Gründer und Umwelttechnologie-Fachmann",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Freiburg im Breisgau",
        addressCountry: "DE"
      },
      sameAs: ["https://de.linkedin.com/in/amirtalebienvtech"]
    },
    {
      "@type": "Service",
      "@id": "https://www.hydrotex.eu/#service",
      name: "Textilabwasser-Machbarkeit und Pilotvorbereitung",
      provider: {
        "@id": "https://www.hydrotex.eu/#organization"
      },
      areaServed: ["Deutschland", "Malaysia", "Südostasien"],
      serviceType:
        "Umwelttechnik, Machbarkeitsstudien, Textilabwasserbewertung und Pilotvorbereitung",
      description:
        "HydroTex unterstützt die Validierung schlammärmerer Behandlungsansätze für farbstoffreiche Textilabwässer."
    }
  ]
};

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
        <Services />
        <Impact />
        <Technology />
        <Pathway />
        <PartnershipsStatus />
        <Founder />
        <Partnership />
        <ContactFooter />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-3" aria-label="HydroTex Startseite">
          <span className="flex size-9 items-center justify-center rounded-full bg-hydro-teal text-white">
            <Waves size={19} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-semibold text-hydro-ink">HydroTex</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-hydro-slate md:flex">
          <Link href="#services" className="transition hover:text-hydro-teal">
            Modell
          </Link>
          <Link href="#impact" className="transition hover:text-hydro-teal">
            Wirkung
          </Link>
          <Link href="#pathway" className="transition hover:text-hydro-teal">
            Validierung
          </Link>
          <Link href="/international-partnerships" className="transition hover:text-hydro-teal">
            Kooperation
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
      <Link href="/en" className={optionClass("en")} aria-current={current === "en" ? "page" : undefined}>
        EN
      </Link>
      <Link href="/" className={optionClass("de")} aria-current={current === "de" ? "page" : undefined}>
        DE
      </Link>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[86vh] overflow-hidden bg-[linear-gradient(135deg,#F7FBFA_0%,#EAF8F6_48%,#DDF2F3_100%)] pt-16"
    >
      <div className="absolute inset-0 opacity-[0.4]">
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
          {[160, 240, 320, 400, 480, 560, 640, 720].map((y, index) => (
            <path
              key={y}
              d={`M -120 ${y} C 160 ${y - 50}, 310 ${y + 55}, 570 ${y} S 980 ${y - 55}, 1560 ${y + 18}`}
              fill="none"
              stroke="url(#waveStrokeDe)"
              strokeWidth={index % 3 === 0 ? 2.2 : 1.4}
            />
          ))}
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-hydro-paper/90 to-transparent" />
      <div className="section-shell relative flex min-h-[calc(86vh-4rem)] items-center py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Textilabwasser · Machbarkeit · Pilotvorbereitung</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-hydro-ink sm:text-5xl lg:text-6xl">
            Schlammärmere Textilabwasserbehandlung realistisch validieren.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hydro-slate sm:text-xl">
            HydroTex ist eine gründergeführte Umwelttechnik- und
            Projektentwicklungsinitiative aus Freiburg. Der erste Schritt ist
            nicht Anlagenverkauf, sondern belastbare Machbarkeitsarbeit:
            Abwasserbewertung, techno-ökonomische Prüfung, Industriegespräche
            und pilotfähige Validierungsunterlagen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#services" className="btn-primary">
              Geschäftsmodell ansehen <ArrowRight size={18} />
            </Link>
            <Link href="#partnership" className="btn-secondary">
              Pilotpartnerschaft prüfen <Mail size={18} />
            </Link>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 text-sm text-hydro-slate sm:grid-cols-3">
            {["Feasibility-first", "Low-overhead Aufbau", "Validierung mit realem Abwasser"].map(
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

function Services() {
  return (
    <Reveal id="services" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Business Model</p>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="section-title">Erst prüfen, dann pilotieren.</h2>
            <p className="section-copy">
              HydroTex ist in der Frühphase als gewerbliche Umwelttechnik-,
              Beratungs- und Projektentwicklungsdienstleistung strukturiert.
              Umsatz entsteht zunächst über projektbasierte Leistungen, nicht
              über große Infrastrukturannahmen.
            </p>
          </div>
          <div className="grid gap-4">
            {services.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[8px] border border-hydro-line bg-hydro-paper p-5">
                <div className="flex gap-4">
                  <Icon className="mt-1 shrink-0 text-hydro-teal" size={24} />
                  <div>
                    <h3 className="font-semibold text-hydro-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-hydro-slate">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Impact() {
  return (
    <Reveal id="impact" className="py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Impact und Kundennutzen</p>
        <h2 className="section-title">Praktische Wirkung für Textilbetriebe, Fördergeber und Impact-Investoren.</h2>
        <p className="section-copy">
          Der Nutzen liegt in einem prüfbaren Pfad zu weniger Schlammbelastung,
          geringerer chemischer Abhängigkeit, besserer Compliance-Sicherheit und
          realistischeren Pilotentscheidungen.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {impactItems.map(({ title, text, icon: Icon }) => (
            <article key={title} className="metric-card">
              <Icon className="text-hydro-teal" size={24} />
              <h3 className="mt-5 text-lg font-semibold text-hydro-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-hydro-slate">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Technology() {
  return (
    <Reveal id="technology" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="eyebrow">Technologiekonzept</p>
          <h2 className="section-title">Lösungsmittelbasierte Extraktion, nüchtern validiert.</h2>
          <p className="section-copy">
            HydroTex untersucht einen regenerierbaren Extraktionsansatz für
            farbstoffreiche Textilabwässer. Die Technologie ist noch in der
            Validierungsphase: Entscheidend sind reale Proben, robuste
            Phasentrennung, Lösungsmittelstabilität, Sekundärabfall und
            nachvollziehbare Kosten pro Kubikmeter.
          </p>
        </div>
        <div className="rounded-[8px] border border-hydro-line bg-hydro-paper p-5 shadow-soft">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <ProcessNode icon={Factory} title="Textilbetrieb" text="Farbige Abwässer, Schlamm- und Compliance-Druck" />
            <ArrowRight className="mx-auto hidden text-hydro-aqua sm:block" />
            <ProcessNode icon={FlaskConical} title="HydroTex-Prüfung" text="Extraktion, Regeneration, Kostenlogik" featured />
            <ArrowRight className="mx-auto hidden text-hydro-aqua sm:block" />
            <ProcessNode icon={Recycle} title="Pilotentscheidung" text="Datenbasierte nächste Schritte" />
          </div>
          <div className="mt-4 rounded-[8px] bg-white p-4 text-sm leading-6 text-hydro-slate">
            <strong className="text-hydro-ink">Digitale Prozessoptimierung:</strong> Eine
            spätere digitale Ebene kann Prozessmonitoring, Umwelt-Datenanalyse
            und datenbasierte Optimierung umfassen. KI-gestützte Optimierung
            kann perspektivisch relevant werden, wenn ausreichend Labor- und
            Pilotdaten vorliegen.
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
        featured ? "border-hydro-teal bg-white" : "border-hydro-line bg-white"
      }`}
    >
      <Icon className="mx-auto text-hydro-teal" size={28} />
      <h3 className="mt-4 font-semibold text-hydro-ink">{title}</h3>
      <p className="mt-1 text-sm text-hydro-slate">{text}</p>
    </div>
  );
}

function Pathway() {
  return (
    <Reveal id="pathway" className="py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Validierungsroadmap</p>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="section-title">Ein Förder- und pilotfähiger Entwicklungspfad.</h2>
            <p className="section-copy">
              Der Aufbau ist bewusst schlank: Homeoffice-Koordination in
              Freiburg, Industrie- und Hochschulpartner für Validierung,
              Malaysia als erster Zugang zu realen Textilabwasserströmen.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-hydro-slate">
              {validationTargets.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-1 shrink-0 text-hydro-teal" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {pathway.map((step) => (
              <article key={step.phase} className="rounded-[8px] border border-hydro-line bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-hydro-teal">{step.phase}</p>
                <h3 className="mt-2 text-lg font-semibold text-hydro-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-hydro-slate">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function PartnershipsStatus() {
  const statusItems = [
    "HydroTex befindet sich in strukturierter Gründungsvorbereitung in Deutschland und ist noch kein formal registriertes operatives Unternehmen.",
    "Geschäftsmodell und Pitch Deck wurden durch EXI.green / Grünhof-Unterstützung weiterentwickelt.",
    "Businessplan und Tragfähigkeitsbewertung werden mit IHK-Unterstützung vorbereitet.",
    "Die akademische Zusammenarbeit mit der Universiti Sains Malaysia ist durch einen Letter of Intent dokumentiert.",
    "Malaysia ist als erste internationale Validierungsregion für reale Abwasserprüfung und Pilotvorbereitung vorgesehen."
  ];

  return (
    <Reveal id="partnerships-status" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Partnerschaften und Validierungsstatus</p>
          <h2 className="section-title">Strukturierte Vorbereitung für internationale Kooperation.</h2>
          <p className="section-copy">
            HydroTex wird als Umwelttechnologie-Initiative mit einem klaren
            Validierungspfad vorbereitet. Der aktuelle Schwerpunkt liegt auf
            der Gründungs- und Businessplanung in Deutschland, dem Aufbau von
            Partnern und der sorgfältigen Vorbereitung einer realen
            Abwasservalidierung in Malaysia.
          </p>
          <Link href="/international-partnerships" className="btn-primary mt-7">
            Internationale Kooperation <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid gap-3">
          {statusItems.map((item) => (
            <div key={item} className="rounded-[8px] border border-hydro-line bg-hydro-paper p-4">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-hydro-teal" size={18} />
                <p className="text-sm leading-6 text-hydro-slate">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Founder() {
  return (
    <Reveal id="founder" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="rounded-[8px] border border-hydro-line bg-hydro-paper p-6 shadow-soft">
          <img
            src="/images/amir-talebi-lab-portrait.webp"
            alt="Dr.-Ing. Amir Talebi, founder of HydroTex"
            className="size-32 rounded-full border-4 border-white object-cover shadow-soft sm:size-36"
            loading="lazy"
          />
          <h2 className="mt-6 text-2xl font-semibold text-hydro-ink">Dr. Amir Talebi</h2>
          <p className="mt-2 text-hydro-blue">Gründer · Environmental Technology</p>
          <p className="mt-1 text-sm text-hydro-slate">Freiburg im Breisgau / Südlicher Oberrhein</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://de.linkedin.com/in/amirtalebienvtech"
              className="btn-secondary bg-white py-2.5"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <a href="mailto:contact@hydrotex.eu" className="btn-secondary bg-white py-2.5">
              <Mail size={17} /> E-Mail
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Founder-led Initiative</p>
          <h2 className="section-title">Umwelttechnologie, internationale Validierung und datenbasierte Entwicklung.</h2>
          <p className="section-copy">
            Dr. Amir Talebi verbindet einen PhD in Environmental Technology,
            mehr als 15 Jahre Berufserfahrung in Malaysia, Expertise in
            Abwasserbehandlung und Ressourcenrückgewinnung, Umwelt-Datenanalyse
            sowie internationale Kooperationserfahrung. HydroTex ist als
            schrittweiser Übergang in eine spezialisierte Umwelttechnologie-
            und Projektentwicklungsinitiative angelegt. Der aktuelle
            Schwerpunkt liegt auf Kundengesprächen, realen Abwasserproben,
            Machbarkeitsnachweisen und Pilotvorbereitung.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function Partnership() {
  return (
    <Reveal id="partnership" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="rounded-[8px] border border-hydro-line bg-hydro-ink p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hydro-aqua">Pilot Partnership</p>
            <h2 className="mt-3 text-3xl font-semibold">Gesucht: Industrie- und Validierungspartner.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
              HydroTex sucht textile Betriebe, Hochschulpartner und
              Förderakteure für reale Abwasserproben, technische Gespräche,
              LOI-fähige Kooperationen und pilotorientierte Projektentwicklung.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href="mailto:contact@hydrotex.eu?subject=HydroTex%20Pilotpartnerschaft"
              className="btn-primary bg-white text-hydro-ink hover:bg-hydro-mint"
            >
              <Mail size={18} /> Kontakt aufnehmen
            </a>
            <a
              href="mailto:contact@hydrotex.eu?subject=HydroTex%20Unterlagen"
              className="btn-secondary border-white/20 bg-white/8 text-white hover:border-white/50 hover:text-white"
            >
              <Mail size={18} /> Unterlagen anfragen
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-hydro-line bg-white">
      <div className="section-shell py-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold text-hydro-ink">HydroTex</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-hydro-slate">
              Gründergeführte Umwelttechnik- und Projektentwicklungsinitiative
              für Machbarkeit, Abwasserbewertung und Pilotvorbereitung im
              Textilabwasser.
            </p>
            <a href="mailto:contact@hydrotex.eu" className="mt-6 inline-flex text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
              contact@hydrotex.eu
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-hydro-ink">Navigation</h3>
            <div className="mt-4 grid gap-3 text-sm text-hydro-slate">
              <Link href="#services" className="hover:text-hydro-teal">Business Model</Link>
              <Link href="#impact" className="hover:text-hydro-teal">Impact</Link>
              <Link href="#pathway" className="hover:text-hydro-teal">Validierung</Link>
              <Link href="/international-partnerships" className="hover:text-hydro-teal">Internationale Kooperation</Link>
              <Link href="#partnership" className="hover:text-hydro-teal">Pilotpartnerschaft</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-hydro-ink">Rechtliches</h3>
            <div className="mt-4 grid gap-3 text-sm text-hydro-slate">
              <Link href="/impressum" className="hover:text-hydro-teal">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-hydro-teal">Datenschutz</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-hydro-line pt-6 text-sm text-hydro-slate">
          © {new Date().getFullYear()} HydroTex. Freiburg, Deutschland.
        </div>
      </div>
    </footer>
  );
}
