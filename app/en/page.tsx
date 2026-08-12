import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
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
  TrendingDown,
  Waves
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "HydroTex | Textile Wastewater Feasibility and Sludge Reduction",
  description:
    "HydroTex is a founder-led environmental technology and project-development initiative for feasibility studies, textile wastewater assessment, pilot preparation, and lower-sludge treatment validation.",
  alternates: {
    canonical: "/en",
    languages: {
      de: "/",
      en: "/en"
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: "https://www.hydrotex.eu/en",
    siteName: "HydroTex",
    title: "HydroTex | Textile Wastewater Feasibility and Sludge Reduction",
    description:
      "Feasibility-first environmental technology for textile wastewater: sludge reduction, compliance risk, techno-economic assessment, and pilot preparation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HydroTex textile wastewater validation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HydroTex | Textile Wastewater Feasibility and Sludge Reduction",
    description:
      "Founder-led environmental technology initiative for feasibility, industrial validation, and pilot preparation in textile wastewater.",
    images: ["/og-image.png"]
  }
};

const services = [
  {
    title: "Feasibility studies",
    text: "Assessment of wastewater problems, sludge-reduction potential, treatment options, and first technical decision criteria.",
    icon: ClipboardCheck
  },
  {
    title: "Wastewater and cost assessment",
    text: "Technical review of color load, chemical demand, sludge burden, operating cost, and compliance-related risk.",
    icon: BarChart3
  },
  {
    title: "Pilot preparation",
    text: "Sampling plan, KPIs, test logic, partner coordination, and documentation for later industrial pilot validation.",
    icon: Map
  }
];

const pathway = [
  {
    phase: "Phase 1",
    title: "Industrial engagement and wastewater access",
    text: "Engage textile mills, university partners, and technical partners, secure real wastewater samples, and test the concrete customer need."
  },
  {
    phase: "Phase 2",
    title: "Technical and economic feasibility",
    text: "Validate color removal, phase separation, solvent loss, secondary waste, and cost assumptions with real samples."
  },
  {
    phase: "Phase 3",
    title: "Pilot-ready project structure",
    text: "Prepare LOIs, pilot concept, budget logic, and grant or partner materials for the next industrial development step."
  }
];

const impactItems = [
  {
    title: "Potential sludge reduction",
    text: "HydroTex aims to assess whether an extraction-based approach can reduce sludge burden compared with chemical-intensive coagulation and flocculation pathways.",
    icon: TrendingDown
  },
  {
    title: "Lower compliance risk",
    text: "The focus is dye-rich wastewater, visible color reduction, and more transparent treatment evidence.",
    icon: ShieldCheck
  },
  {
    title: "Grant and impact relevance",
    text: "Validation addresses resource efficiency, waste reduction, and practical environmental impact in textile supply chains.",
    icon: Leaf
  }
];

const validationTargets = [
  "Real textile wastewater samples from Malaysia and Southeast Asia",
  "Color removal, phase separation, and repeated regeneration",
  "Solvent loss, secondary waste, and preliminary OPEX logic",
  "Pilot concept, partner discussions, and possible LOIs"
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
      jobTitle: "Founder and Environmental Technology Specialist",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Freiburg im Breisgau",
        addressCountry: "DE"
      },
      sameAs: ["https://de.linkedin.com/in/amirtalebienvtech"]
    },
    {
      "@type": "Service",
      "@id": "https://www.hydrotex.eu/#service-en",
      name: "Textile wastewater feasibility and pilot preparation",
      provider: {
        "@id": "https://www.hydrotex.eu/#organization"
      },
      areaServed: ["Germany", "Malaysia", "Southeast Asia"],
      serviceType:
        "Environmental technology, feasibility studies, textile wastewater assessment, and pilot preparation",
      description:
        "HydroTex supports validation of lower-sludge treatment approaches for dye-rich textile wastewater."
    }
  ]
};

export default function EnglishHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main lang="en">
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
        <Link href="#top" className="flex items-center gap-3" aria-label="HydroTex home">
          <span className="flex size-9 items-center justify-center rounded-full bg-hydro-teal text-white">
            <Waves size={19} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-semibold text-hydro-ink">HydroTex</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-hydro-slate md:flex">
          <Link href="#services" className="transition hover:text-hydro-teal">
            Model
          </Link>
          <Link href="#impact" className="transition hover:text-hydro-teal">
            Impact
          </Link>
          <Link href="#pathway" className="transition hover:text-hydro-teal">
            Validation
          </Link>
          <Link href="/en/international-partnerships" className="transition hover:text-hydro-teal">
            Partnerships
          </Link>
          <Link href="#founder" className="transition hover:text-hydro-teal">
            Founder
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher current="en" />
          <Link href="#contact" className="btn-secondary hidden py-2.5 sm:inline-flex">
            Contact
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
            <linearGradient id="waveStrokeEn" x1="0" x2="1" y1="0" y2="0">
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
              stroke="url(#waveStrokeEn)"
              strokeWidth={index % 3 === 0 ? 2.2 : 1.4}
            />
          ))}
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-hydro-paper/90 to-transparent" />
      <div className="section-shell relative flex min-h-[calc(86vh-4rem)] items-center py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Textile wastewater · feasibility · pilot preparation</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-hydro-ink sm:text-5xl lg:text-6xl">
            Realistic validation for lower-sludge textile wastewater treatment.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hydro-slate sm:text-xl">
            HydroTex is a founder-led environmental technology and
            project-development initiative from Freiburg. The first step is not
            equipment sales, but evidence-building: wastewater assessment,
            techno-economic review, industrial engagement, and pilot-ready
            validation material.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#services" className="btn-primary">
              View the business model <ArrowRight size={18} />
            </Link>
            <Link href="#partnership" className="btn-secondary">
              Explore pilot partnership <Mail size={18} />
            </Link>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 text-sm text-hydro-slate sm:grid-cols-3">
            {["Feasibility-first", "Low-overhead setup", "Real wastewater validation"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="shrink-0 text-hydro-teal" size={18} />
                <span>{item}</span>
              </div>
            ))}
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
        <p className="eyebrow">Business model</p>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="section-title">Feasibility first, pilot second.</h2>
            <p className="section-copy">
              HydroTex is structured at the early stage as a commercial
              environmental technology, consulting, and project-development
              service. Revenue is expected first through project-based services,
              not through large infrastructure assumptions.
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
        <p className="eyebrow">Impact and customer value</p>
        <h2 className="section-title">Practical relevance for textile mills, grant providers, and impact investors.</h2>
        <p className="section-copy">
          The value lies in a testable pathway to lower sludge burden, reduced
          chemical dependency, better compliance confidence, and more realistic
          pilot decisions.
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
          <p className="eyebrow">Technology concept</p>
          <h2 className="section-title">Solvent extraction, validated without hype.</h2>
          <p className="section-copy">
            HydroTex investigates a regenerable extraction approach for
            dye-rich textile wastewater. The technology is still in validation:
            the critical questions are real samples, robust phase separation,
            solvent stability, secondary waste, and credible cost per cubic
            meter.
          </p>
        </div>
        <div className="rounded-[8px] border border-hydro-line bg-hydro-paper p-5 shadow-soft">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <ProcessNode icon={Factory} title="Textile mill" text="Colored effluent, sludge and compliance pressure" />
            <ArrowRight className="mx-auto hidden text-hydro-aqua sm:block" />
            <ProcessNode icon={FlaskConical} title="HydroTex review" text="Extraction, regeneration, cost logic" featured />
            <ArrowRight className="mx-auto hidden text-hydro-aqua sm:block" />
            <ProcessNode icon={Recycle} title="Pilot decision" text="Data-based next step" />
          </div>
          <div className="mt-4 rounded-[8px] bg-white p-4 text-sm leading-6 text-hydro-slate">
            <strong className="text-hydro-ink">Digital process optimisation:</strong> A later
            digital layer may include process monitoring, environmental data
            analytics, and data-driven optimisation. AI-supported optimisation
            may become relevant only after enough laboratory and pilot data
            exist.
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
        <p className="eyebrow">Validation roadmap</p>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="section-title">A grant- and pilot-ready development pathway.</h2>
            <p className="section-copy">
              The setup is intentionally lean: home-office coordination in
              Freiburg, industrial and university partners for validation, and
              Malaysia as the first access route to real textile wastewater
              streams.
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
    "HydroTex is in structured startup preparation in Germany, not yet a formally registered operating company.",
    "The business model and pitch deck have been developed further through EXI.green / Grunhof support.",
    "The business plan and viability assessment are being prepared with IHK support.",
    "Academic collaboration with Universiti Sains Malaysia is documented by a Letter of Intent.",
    "Malaysia is planned as the first international validation region for real wastewater learning and pilot preparation."
  ];

  return (
    <Reveal id="partnerships-status" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Partnerships and validation status</p>
          <h2 className="section-title">Structured preparation for international cooperation.</h2>
          <p className="section-copy">
            HydroTex is being prepared as an environmental technology initiative
            with a clear validation pathway. The current focus is business
            planning in Germany, partner development, and careful preparation
            for real wastewater validation in Malaysia.
          </p>
          <Link href="/en/international-partnerships" className="btn-primary mt-7">
            International partnerships <ArrowRight size={18} />
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
          <p className="mt-2 text-hydro-blue">Founder · Environmental Technology</p>
          <p className="mt-1 text-sm text-hydro-slate">Freiburg im Breisgau / Southern Upper Rhine</p>
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
              <Mail size={17} /> Email
            </a>
          </div>
        </div>
        <div>
          <p className="eyebrow">Founder-led initiative</p>
          <h2 className="section-title">Environmental technology, international validation, and data-driven development.</h2>
          <p className="section-copy">
            Dr. Amir Talebi combines a PhD in Environmental Technology, more
            than 15 years of professional experience in Malaysia, wastewater
            treatment and resource recovery expertise, environmental data
            science and analytics, and international collaboration experience.
            HydroTex is structured as a gradual transition into a specialized
            environmental technology and project-development initiative, with
            the current focus on customer discovery, real wastewater samples,
            feasibility evidence, and pilot preparation.
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hydro-aqua">Pilot partnership</p>
            <h2 className="mt-3 text-3xl font-semibold">Seeking industrial and validation partners.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
              HydroTex is looking for textile mills, university partners, and
              funding actors for real wastewater samples, technical discussions,
              LOI-ready cooperation, and pilot-oriented project development.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href="mailto:contact@hydrotex.eu?subject=HydroTex%20Pilot%20Partnership"
              className="btn-primary bg-white text-hydro-ink hover:bg-hydro-mint"
            >
              <Mail size={18} /> Contact
            </a>
            <a
              href="mailto:contact@hydrotex.eu?subject=HydroTex%20Materials"
              className="btn-secondary border-white/20 bg-white/8 text-white hover:border-white/50 hover:text-white"
            >
              <Mail size={18} /> Request materials
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
              Founder-led environmental technology and project-development
              initiative for feasibility, wastewater assessment, and pilot
              preparation in textile wastewater.
            </p>
            <a href="mailto:contact@hydrotex.eu" className="mt-6 inline-flex text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
              contact@hydrotex.eu
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-hydro-ink">Navigation</h3>
            <div className="mt-4 grid gap-3 text-sm text-hydro-slate">
              <Link href="#services" className="hover:text-hydro-teal">Business model</Link>
              <Link href="#impact" className="hover:text-hydro-teal">Impact</Link>
              <Link href="#pathway" className="hover:text-hydro-teal">Validation</Link>
              <Link href="/en/international-partnerships" className="hover:text-hydro-teal">International partnerships</Link>
              <Link href="#partnership" className="hover:text-hydro-teal">Pilot partnership</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-hydro-ink">Legal</h3>
            <div className="mt-4 grid gap-3 text-sm text-hydro-slate">
              <Link href="/impressum" className="hover:text-hydro-teal">Imprint</Link>
              <Link href="/datenschutz" className="hover:text-hydro-teal">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-hydro-line pt-6 text-sm text-hydro-slate">
          © {new Date().getFullYear()} HydroTex. Freiburg, Germany.
        </div>
      </div>
    </footer>
  );
}
