import Link from "next/link";
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

const impactMetrics = [
  {
    value: "Up to 90%",
    label: "sludge reduction",
    note: "Target impact pending pilot validation",
    icon: TrendingDown
  },
  {
    value: "€0.3–1.0/m³",
    label: "target OPEX",
    note: "Designed for cost-focused textile ETPs",
    icon: BarChart3
  },
  {
    value: "Reusable",
    label: "bio-based solvent",
    note: "Circular regeneration loop concept",
    icon: Recycle
  },
  {
    value: "AI-supervised",
    label: "optimization",
    note: "PLC-ready decision support, not black-box control",
    icon: Sparkles
  }
];

const roadmap = [
  "Feasibility Study",
  "Real Wastewater Validation",
  "Pilot Project",
  "Commercial Deployment"
];

const opexData = [
  { name: "Coagulation", min: 0.4, max: 1.5, color: "bg-slate-400" },
  { name: "Activated Carbon", min: 0.5, max: 3.0, color: "bg-sky-500" },
  { name: "Ozone/AOP", min: 1.0, max: 5.0, color: "bg-indigo-500" },
  { name: "Membranes", min: 1.0, max: 10.0, color: "bg-cyan-700" },
  { name: "HydroTex target", min: 0.3, max: 1.0, color: "bg-hydro-teal", highlight: true }
];

const comparison = [
  {
    technology: "Coagulation",
    strength: "Low CAPEX and familiar operation",
    limitation: "High chemical demand and wet sludge generation",
    hydrotex: "Targets lower waste burden through extraction and regeneration"
  },
  {
    technology: "Activated Carbon",
    strength: "Strong color removal",
    limitation: "Spent media replacement or regeneration cost",
    hydrotex: "Designed around a reusable solvent loop"
  },
  {
    technology: "Ozone/AOP",
    strength: "High decolorization potential",
    limitation: "Energy and oxidant cost can be significant",
    hydrotex: "Targets moderate energy use and lower consumable burden"
  },
  {
    technology: "Membranes",
    strength: "Excellent polishing and reuse potential",
    limitation: "Fouling, concentrate management, and high CAPEX",
    hydrotex: "Positioned as a retrofit pathway before high-CAPEX reuse systems"
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
      jobTitle: "Environmental Technology Researcher & Founder",
      description: "PhD in Environmental Technology and founder of HydroTex.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Freiburg",
        addressCountry: "DE"
      },
      sameAs: ["https://de.linkedin.com/in/amirtalebienvtech"]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hydrotex.eu/#website",
      url: "https://www.hydrotex.eu",
      name: "HydroTex",
      publisher: {
        "@id": "https://www.hydrotex.eu/#organization"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.hydrotex.eu/#service",
      name: "Solvent-Based Textile Wastewater Treatment Validation",
      provider: {
        "@id": "https://www.hydrotex.eu/#organization"
      },
      areaServed: ["Germany", "Malaysia", "Southeast Asia", "European Union"],
      serviceType: "Industrial textile wastewater treatment validation and pilot development",
      description:
        "HydroTex develops solvent-based textile wastewater treatment for sludge reduction, water recovery, circular solvent regeneration, and pilot validation."
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
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
        <Link href="#top" className="flex items-center gap-3" aria-label="HydroTex home">
          <span className="flex size-9 items-center justify-center rounded-full bg-hydro-teal text-white">
            <Waves size={19} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-semibold text-hydro-ink">HydroTex</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-hydro-slate md:flex">
          <Link href="#impact" className="transition hover:text-hydro-teal">
            Impact
          </Link>
          <Link href="#roadmap" className="transition hover:text-hydro-teal">
            Roadmap
          </Link>
          <Link href="#comparison" className="transition hover:text-hydro-teal">
            Comparison
          </Link>
          <Link href="#founder" className="transition hover:text-hydro-teal">
            Founder
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher current="en" />
          <Link href="#contact" className="btn-secondary hidden py-2.5 sm:inline-flex">
            Contact Us
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
      aria-label="Language selector"
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
            <linearGradient id="waveStroke" x1="0" x2="1" y1="0" y2="0">
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
              stroke="url(#waveStroke)"
              strokeWidth={index % 3 === 0 ? 2.2 : 1.4}
            />
          ))}
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-hydro-paper/80 to-transparent" />
      <div className="section-shell relative flex min-h-[calc(88vh-4rem)] items-center py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Textile wastewater • sludge reduction • water recovery</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-hydro-ink sm:text-5xl lg:text-6xl">
            Solvent-Based Textile Wastewater Treatment for Sludge Reduction and Water Recovery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hydro-slate sm:text-xl">
            HydroTex is developing a modular extraction and regeneration platform
            for dye-rich textile wastewater, targeting lower operating costs,
            circular solvent reuse, and pilot-ready industrial validation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#technology" className="btn-primary">
              Explore the Technology <ArrowRight size={18} />
            </Link>
            <Link href="#contact" className="btn-secondary">
              Contact Us <Mail size={18} />
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-hydro-slate sm:grid-cols-3">
            {["Feasibility-first", "Real wastewater validation", "Commercial pilot pathway"].map(
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
        <p className="eyebrow">Impact targets</p>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <h2 className="section-title">Environmental and economic benefits, stated clearly.</h2>
            <p className="section-copy">
              HydroTex is built around measurable outcomes that matter to
              investors, grant evaluators, and industrial partners: lower sludge
              burden, lower target treatment cost, circular chemistry, and
              traceable process control.
            </p>
          </div>
          <p className="max-w-sm text-sm leading-6 text-hydro-slate">
            Figures are target values for validation and should be confirmed
            through real wastewater testing and pilot operation.
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
          <p className="eyebrow">Technology concept</p>
          <h2 className="section-title">A circular solvent loop for dye-rich textile effluent.</h2>
          <p className="section-copy">
            HydroTex is designed as a modular retrofit pathway for dyeing and
            finishing plants. The system transfers dyes from wastewater into a
            reusable organic phase, regenerates the solvent, and concentrates
            contaminants into a smaller waste stream.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Extraction", "Targeted dye transfer from wastewater into a reusable solvent phase."],
              ["Regeneration", "Solvent loop designed for repeated reuse and lower consumable demand."],
              ["Waste reduction", "Aim to replace bulky sludge with a smaller concentrated output."],
              ["Industrial control", "PLC-ready automation with optional AI-supervised optimization."]
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
            <ProcessNode icon={Factory} title="Textile effluent" text="Colored wastewater" />
            <ArrowRight className="mx-auto hidden text-hydro-aqua sm:block" />
            <ProcessNode icon={Beaker} title="HydroTex module" text="Extraction + regeneration" featured />
            <ArrowRight className="mx-auto hidden text-hydro-aqua sm:block" />
            <ProcessNode icon={Droplets} title="Recovered water" text="Lower color load" />
          </div>
          <div className="mt-4 rounded-[8px] bg-hydro-mint p-4 text-sm leading-6 text-hydro-slate">
            <strong className="text-hydro-ink">Validation focus:</strong> residual solvent,
            solvent loss per m³, phase separation, secondary waste handling,
            COD impact, and stable repeated regeneration cycles.
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
        <p className="eyebrow">Validation roadmap</p>
        <h2 className="section-title">From feasibility to commercial deployment.</h2>
        <p className="section-copy">
          The roadmap is intentionally staged. Each phase reduces technical,
          economic, and customer-adoption risk before major capital is committed.
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
                  "Define samples, KPIs, safety requirements, and techno-economic assumptions.",
                  "Test real textile wastewater for color removal, solvent loss, and phase separation.",
                  "Operate a customer-relevant pilot with decision gates and cost evidence.",
                  "Deploy modular units after performance, EHS, and economics are validated."
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
          <p className="eyebrow">Competitive OPEX</p>
          <h2 className="section-title">A target cost range designed to compete with established treatments.</h2>
          <p className="section-copy">
            HydroTex is positioned against the treatment options already known
            to textile mills. The target OPEX range is attractive, but it must
            be validated with real wastewater, solvent-loss data, and pilot
            operating evidence.
          </p>
        </div>
        <div className="rounded-[8px] border border-hydro-line bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between gap-4 border-b border-hydro-line pb-4">
            <h3 className="font-semibold text-hydro-ink">Operating cost comparison</h3>
            <span className="text-sm text-hydro-slate">€/m³</span>
          </div>
          <div className="mt-6 space-y-5" aria-label="Operating cost range bar chart">
            {opexData.map((item) => {
              const left = (item.min / maxScale) * 100;
              const width = ((item.max - item.min) / maxScale) * 100;
              return (
                <div key={item.name} className={item.highlight ? "rounded-[8px] bg-hydro-mint p-3" : ""}>
                  <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-hydro-ink">{item.name}</span>
                    <span className="text-hydro-slate">
                      {item.min.toFixed(1)}–{item.max.toFixed(1)}
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
            <span>2.5</span>
            <span>5.0</span>
            <span>7.5</span>
            <span>10.0</span>
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
        <p className="eyebrow">Competitive comparison</p>
        <h2 className="section-title">Not another black-box treatment promise.</h2>
        <p className="section-copy">
          HydroTex should be evaluated against the technologies mills already
          consider. The differentiation is not simply color removal; it is the
          potential to reduce sludge, regenerate process chemistry, and provide
          a lower-cost retrofit path.
        </p>
        <div className="mt-10 overflow-hidden rounded-[8px] border border-hydro-line bg-white shadow-sm">
          <div className="hidden grid-cols-[1fr_1.25fr_1.25fr_1.35fr] bg-hydro-paper text-sm font-semibold text-hydro-ink md:grid">
            <div className="border-r border-hydro-line p-4">Technology</div>
            <div className="border-r border-hydro-line p-4">Why it is used</div>
            <div className="border-r border-hydro-line p-4">Key limitation</div>
            <div className="p-4">HydroTex positioning</div>
          </div>
          {comparison.map((row) => (
            <div
              key={row.technology}
              className="grid gap-0 border-t border-hydro-line md:grid-cols-[1fr_1.25fr_1.25fr_1.35fr]"
            >
              <ComparisonCell label="Technology" value={row.technology} strong />
              <ComparisonCell label="Why it is used" value={row.strength} />
              <ComparisonCell label="Key limitation" value={row.limitation} />
              <ComparisonCell label="HydroTex positioning" value={row.hydrotex} accent />
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
          <p className="mt-2 text-hydro-blue">Environmental Technology Researcher & Founder</p>
          <p className="mt-1 text-sm text-hydro-slate">PhD in Environmental Technology</p>
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
              <Mail size={17} /> Email
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Founder profile</p>
          <h2 className="section-title">Technical depth with a validation-first commercialization path.</h2>
          <p className="section-copy">
            HydroTex is founder-led by Dr. Amir Talebi, combining environmental
            technology research with a practical focus on wastewater treatment,
            industrial feasibility, and pilot planning. The current priority is
            to convert proof-of-concept chemistry into real wastewater evidence,
            customer discovery, and partner-ready pilot documentation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              [ShieldCheck, "Compliance-ready thinking"],
              [Leaf, "Sustainability-driven design"],
              [Factory, "Industrial partner focus"]
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
            <p className="eyebrow">Request materials</p>
            <h2 className="mt-3 text-3xl font-semibold text-hydro-ink">Investor and partner materials by request.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-hydro-slate">
              Detailed business planning, financial assumptions, and partner
              materials are shared through direct contact only. This keeps
              sensitive early-stage information off the public website.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href="mailto:contact@hydrotex.eu?subject=Request%20HydroTex%20Business%20Plan"
              className="btn-primary"
            >
              <Mail size={18} /> Request Business Plan
            </a>
            <a
              href="mailto:contact@hydrotex.eu?subject=Request%20HydroTex%20One-Pager"
              className="btn-secondary bg-white"
            >
              <Mail size={18} /> Request One-Pager
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
              Solvent-based textile wastewater treatment concept for sludge
              reduction, water recovery, circular solvent regeneration, and
              pilot-ready industrial validation.
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
            <h3 className="font-semibold">Explore</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              <Link href="#technology" className="hover:text-white">
                Technology
              </Link>
              <Link href="#impact" className="hover:text-white">
                Impact
              </Link>
              <Link href="#roadmap" className="hover:text-white">
                Validation Roadmap
              </Link>
              <Link href="#materials" className="hover:text-white">
                Request Materials
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/72">
              <Link href="/impressum" className="hover:text-white">
                Imprint
              </Link>
              <Link href="/datenschutz" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/12 pt-6 text-sm text-white/56">
          © {new Date().getFullYear()} HydroTex. Freiburg, Germany.
        </div>
      </div>
    </footer>
  );
}
