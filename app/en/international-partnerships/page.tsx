import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  GraduationCap,
  Leaf,
  Mail,
  MapPinned,
  Waves
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "International Partnerships & Validation",
  description:
    "HydroTex is preparing international validation of a sustainable technology for industrial textile wastewater treatment, connecting German environmental innovation with validation, capacity building and pilot development in Southeast Asia.",
  alternates: {
    canonical: "/en/international-partnerships",
    languages: {
      de: "/international-partnerships",
      en: "/en/international-partnerships"
    }
  },
  openGraph: {
    title: "HydroTex | International Partnerships & Validation",
    description:
      "International validation, development impact and cooperation pathway for sustainable industrial textile wastewater treatment.",
    url: "https://www.hydrotex.eu/en/international-partnerships",
    siteName: "HydroTex",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HydroTex international validation" }]
  }
};

const statusItems = [
  "HydroTex is currently in the German startup preparation phase. The founder is working with the IHK on the business plan and viability assessment before formal company registration.",
  "The business model and pitch deck have been developed further through EXI.green / Grunhof support.",
  "Academic collaboration with Universiti Sains Malaysia is documented by a Letter of Intent.",
  "A first international validation phase in Malaysia is in preparation, subject to suitable partners, samples and support."
];

const malaysiaReasons = [
  "Existing textile-related and industrial ecosystem.",
  "More than 15 years of Malaysia experience and professional network of the founder.",
  "Existing academic collaboration basis with Universiti Sains Malaysia.",
  "Access point to Southeast Asia, including later Indonesia, Vietnam and neighbouring markets.",
  "Suitable region for real wastewater validation, stakeholder learning and pilot preparation."
];

const roadmap = [
  {
    title: "1. Laboratory proof of concept",
    text: "Initial laboratory work with synthetic textile wastewater has shown promising colour reduction under selected conditions. These results are early proof-of-concept results and require validation with real industrial wastewater."
  },
  {
    title: "2. Real wastewater validation",
    text: "The next step is to test real wastewater samples from textile-related industrial contexts and assess removal performance, phase separation, residual streams, resource use and practical operating assumptions."
  },
  {
    title: "3. Pilot preparation with partners",
    text: "Based on validation data, HydroTex aims to prepare a pilot concept with academic and industrial partners, including sampling logic, KPIs, technical documentation and implementation conditions."
  },
  {
    title: "4. Modular deployment and commercialisation from Germany",
    text: "If validation is successful, HydroTex intends to develop modular treatment concepts and commercialisation pathways from Germany, while working with local partners for application and service models."
  }
];

const impactItems = [
  "Improved industrial wastewater management.",
  "Reduced pollutant loads in dye-rich textile wastewater streams.",
  "Potential reduction in sludge generation, subject to validation with real wastewater.",
  "Resource efficiency and circular economy in textile production.",
  "Possible water reuse where treatment quality and local conditions allow.",
  "Capacity building through workshops, training and university-industry exchange.",
  "Improved environmental performance in textile supply chains."
];

const sdgs = ["SDG 6 - Clean Water and Sanitation", "SDG 9 - Industry, Innovation and Infrastructure", "SDG 12 - Responsible Consumption and Production", "SDG 13 - Climate Action"];

export default function InternationalPartnershipsPage() {
  return (
    <main lang="en">
      <Header />
      <Hero />
      <CurrentStatus />
      <WhyMalaysia />
      <ValidationRoadmap />
      <DevelopmentImpact />
      <CollaborationLogic />
      <Documentation />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/85 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/en" className="flex items-center gap-3" aria-label="HydroTex home">
          <span className="flex size-9 items-center justify-center rounded-full bg-hydro-teal text-white">
            <Waves size={19} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-semibold text-hydro-ink">HydroTex</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-hydro-slate md:flex">
          <Link href="/en" className="transition hover:text-hydro-teal">Home</Link>
          <Link href="#roadmap" className="transition hover:text-hydro-teal">Roadmap</Link>
          <Link href="#impact" className="transition hover:text-hydro-teal">Impact</Link>
          <Link href="#documentation" className="transition hover:text-hydro-teal">Documentation</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/international-partnerships" className="rounded-full px-2.5 py-1 text-xs font-semibold text-hydro-slate hover:text-hydro-teal">
            DE
          </Link>
          <a href="mailto:contact@hydrotex.eu" className="btn-secondary hidden py-2.5 sm:inline-flex">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F7FBFA_0%,#EAF8F6_52%,#DDF2F3_100%)] pt-16">
      <div className="section-shell grid min-h-[72vh] gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="eyebrow">International cooperation · validation · capacity building</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-hydro-ink sm:text-5xl lg:text-6xl">
            International Partnerships & Validation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-hydro-slate">
            HydroTex is preparing the international validation of a sustainable
            technology for industrial textile wastewater treatment. The project
            connects German environmental innovation with practical validation,
            capacity building and future pilot development in Southeast Asia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#status" className="btn-primary">
              View current status <ArrowRight size={18} />
            </Link>
            <a href="mailto:contact@hydrotex.eu?subject=HydroTex%20international%20cooperation" className="btn-secondary">
              Discuss cooperation <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="rounded-[8px] border border-hydro-line bg-white/86 p-6 shadow-soft">
          <div className="mb-5 flex items-center gap-4 rounded-[8px] bg-hydro-paper p-4">
            <img
              src="/images/amir-talebi-headshot.webp"
              alt="Dr.-Ing. Amir Talebi, founder of HydroTex"
              className="size-24 rounded-full border-4 border-white object-cover shadow-soft sm:size-28"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-hydro-teal">
                Founder-led validation
              </p>
              <p className="mt-2 text-sm leading-6 text-hydro-slate">
                Dr. Amir Talebi connects German startup preparation with long-term
                professional experience in Malaysia.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["Germany", "Startup preparation, technology development, know-how, IP and commercialisation base."],
              ["Malaysia", "First validation, learning and pilot-preparation region."],
              ["Southeast Asia", "Potential later expansion into Indonesia, Vietnam and neighbouring markets."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-[8px] bg-hydro-paper p-4">
                <h2 className="font-semibold text-hydro-ink">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-hydro-slate">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CurrentStatus() {
  return (
    <Reveal id="status" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Current status</p>
          <h2 className="section-title">Structured startup preparation in Germany.</h2>
          <p className="section-copy">
            HydroTex is an environmental technology initiative in structured
            validation and startup preparation. The company is not yet formally
            registered because the founder is currently completing the German
            startup support, business planning and viability assessment process.
          </p>
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

function WhyMalaysia() {
  return (
    <Reveal className="py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Why Malaysia?</p>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="section-title">A practical first validation region for Southeast Asia.</h2>
            <p className="section-copy">
              Malaysia is strategically selected as the first validation region
              because it combines industrial relevance, academic access, the
              founder's long-term professional network and proximity to wider
              Southeast Asian textile and manufacturing markets.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {malaysiaReasons.map((item) => (
              <div key={item} className="rounded-[8px] border border-hydro-line bg-white p-4">
                <MapPinned className="text-hydro-teal" size={22} />
                <p className="mt-3 text-sm leading-6 text-hydro-slate">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ValidationRoadmap() {
  return (
    <Reveal id="roadmap" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Validation roadmap</p>
        <h2 className="section-title">From early proof of concept to pilot preparation.</h2>
        <p className="section-copy">
          HydroTex follows a cautious validation pathway. Current results are
          early proof-of-concept results; real industrial wastewater validation
          is still required before stronger technical or commercial claims can
          be made.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {roadmap.map((step) => (
            <article key={step.title} className="rounded-[8px] border border-hydro-line bg-hydro-paper p-5">
              <h3 className="text-lg font-semibold text-hydro-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-hydro-slate">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function DevelopmentImpact() {
  return (
    <Reveal id="impact" className="py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Development impact</p>
          <h2 className="section-title">Cleaner production and resource efficiency in textile supply chains.</h2>
          <p className="section-copy">
            HydroTex aims to contribute to sustainable development through
            improved wastewater management, cleaner production, resource
            efficiency, local capacity building and better environmental
            performance in textile supply chains.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {sdgs.map((sdg) => (
              <span key={sdg} className="rounded-full border border-hydro-line bg-white px-3 py-1 text-xs font-semibold text-hydro-teal">
                {sdg}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {impactItems.map((item) => (
            <div key={item} className="flex gap-3 rounded-[8px] border border-hydro-line bg-white p-4">
              <Leaf className="mt-1 shrink-0 text-hydro-teal" size={18} />
              <p className="text-sm leading-6 text-hydro-slate">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function CollaborationLogic() {
  return (
    <Reveal className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <p className="eyebrow">Germany-Malaysia collaboration logic</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-[8px] border border-hydro-line bg-hydro-paper p-6">
            <Factory className="text-hydro-teal" size={28} />
            <h2 className="mt-5 text-2xl font-semibold text-hydro-ink">Germany as long-term base</h2>
            <p className="mt-4 text-sm leading-6 text-hydro-slate">
              Germany is intended to remain the long-term base for technology
              development, know-how, intellectual property, digital solutions,
              engineering, commercialisation and future high-value activities.
            </p>
          </article>
          <article className="rounded-[8px] border border-hydro-line bg-hydro-paper p-6">
            <GraduationCap className="text-hydro-teal" size={28} />
            <h2 className="mt-5 text-2xl font-semibold text-hydro-ink">Malaysia as validation region</h2>
            <p className="mt-4 text-sm leading-6 text-hydro-slate">
              Malaysia is planned as the first validation, learning and
              pilot-preparation region, based on academic collaboration,
              industrial relevance and the founder's long-term regional
              experience.
            </p>
          </article>
        </div>
      </div>
    </Reveal>
  );
}

function Documentation() {
  return (
    <Reveal id="documentation" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="rounded-[8px] border border-hydro-line bg-hydro-ink p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hydro-aqua">Partner & Project Documentation</p>
            <h2 className="mt-3 text-3xl font-semibold">Further information is available for cooperation partners.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">
              Further information, concept notes and validation documents are
              available upon request for potential cooperation partners.
              Sensitive partner documents, including Letters of Intent, are not
              published on the website unless explicitly cleared for publication.
            </p>
          </div>
          <a
            href="mailto:contact@hydrotex.eu?subject=HydroTex%20partner%20documentation"
            className="btn-primary mt-7 bg-white text-hydro-ink hover:bg-hydro-mint lg:mt-0"
          >
            Request information <Mail size={18} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hydro-line bg-white">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-hydro-slate sm:flex-row sm:items-center sm:justify-between">
        <p>HydroTex. Environmental technology initiative in startup preparation.</p>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-hydro-teal">Imprint</Link>
          <Link href="/datenschutz" className="hover:text-hydro-teal">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
