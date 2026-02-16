"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Recycle,
  Factory,
  ShieldCheck,
  Gauge,
  Leaf,
  ArrowRight,
  Mail,
  LineChart,
  CheckCircle2,
  ClipboardList,
  Users,
  Briefcase,
} from "lucide-react";

const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
    <div className="mb-10">
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600">
          {subtitle}
        </p>
      )}
    </div>
    {children}
  </section>
);

function Nav() {
  const items = [
    { label: "Why now", href: "#why-now" },
    { label: "Solution", href: "#solution" },
    { label: "For who", href: "#for-who" },
    { label: "Pilot", href: "#pilot" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-zinc-900">HydroTex</div>
            <div className="text-xs text-zinc-500">
              Textile wastewater • Feasibility → Pilot
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
        >
          Request pilot scope
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
          >
            Cut sludge burden. Reduce compliance risk.
            <span className="block text-zinc-500">
              A clearer path to textile wastewater upgrades.
            </span>
          </motion.h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">
            HydroTex helps textile dyeing and finishing plants evaluate and
            validate a sludge-minimizing treatment approach through a structured{" "}
            <span className="font-medium text-zinc-800">
              feasibility → pilot
            </span>{" "}
            pathway. The outcome is a practical recommendation and a de-risked
            route to implementation.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Primary value
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                Lower sludge exposure
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Decision outcome
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                Go / No-go clarity
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                First step
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                Pilot scope template
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pilot"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
            >
              See pilot pathway <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
            >
              Contact <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 text-xs text-zinc-500">
            Early-stage venture. Technical details are shared during feasibility
            and pilot discussions.
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">
            Commercial focus
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600">
            <li>Small–medium dyeing & finishing plants</li>
            <li>Plants with sludge/disposal and compliance pressure</li>
            <li>ETP operators and environmental managers</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            <span className="font-semibold">What you receive:</span> a feasibility
            checklist + pilot scope template + a clear next-step plan.
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyNow() {
  return (
    <Section
      id="why-now"
      eyebrow="Why now"
      title="Wastewater enforcement is tightening — and the cost of waiting is rising"
      subtitle="Plants increasingly need evidence-based decisions. HydroTex is designed to reduce the risk of “wrong upgrade” investments."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ShieldCheck className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Compliance risk
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            More monitoring, stricter limits, and higher penalty exposure.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Recycle className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Sludge cost</div>
          <p className="mt-2 text-sm text-zinc-600">
            Sludge handling and disposal can drive unexpected operating costs.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Gauge className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Upgrade uncertainty
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Plants need site-specific evidence before committing to capex.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Solution() {
  return (
    <Section
      id="solution"
      eyebrow="Solution"
      title="A practical path: feasibility first, then pilot"
      subtitle="HydroTex is a structured decision process that produces concrete outputs you can act on."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ClipboardList className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Feasibility package
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Sampling plan, baseline profile, KPIs, and pilot success criteria.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Droplets className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Pilot scope</div>
          <p className="mt-2 text-sm text-zinc-600">
            Defined test plan focused on stability, waste profile, and
            operational practicality.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <LineChart className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Next-step roadmap
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Go/no-go recommendation and a realistic implementation pathway.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
        <div className="text-sm font-semibold text-zinc-900">
          Pilot evaluation (examples)
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Effluent performance
            </div>
            <div className="mt-2 text-sm font-medium text-zinc-900">
              Color/COD proxy (site-specific)
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Sludge exposure
            </div>
            <div className="mt-2 text-sm font-medium text-zinc-900">
              Baseline vs pilot burden
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              Secondary waste
            </div>
            <div className="mt-2 text-sm font-medium text-zinc-900">
              Profile + handling plan
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ForWho() {
  return (
    <Section
      id="for-who"
      eyebrow="For who"
      title="Designed for real decision-makers"
      subtitle="Built for the people who carry the operational and compliance consequences."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Users className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Plant owners</div>
          <p className="mt-2 text-sm text-zinc-600">
            Need clarity before committing to upgrades or major capex.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Factory className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">ETP operators</div>
          <p className="mt-2 text-sm text-zinc-600">
            Want stable operations and fewer sludge and chemical surprises.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Briefcase className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Compliance teams</div>
          <p className="mt-2 text-sm text-zinc-600">
            Need documentation and a clear story for audits and regulators.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Pilot() {
  return (
    <Section
      id="pilot"
      eyebrow="Pilot"
      title="Request the pilot scope template"
      subtitle="If you operate a dyeing/finishing plant (or support one via an ETP), we can share a pilot scope template and discuss feasibility fit."
    >
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
        <ul className="space-y-3 text-sm text-zinc-700">
          <li className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-700" />
            <span>
              <span className="font-semibold">Input:</span> basic flow/influent
              context and compliance target
            </span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-700" />
            <span>
              <span className="font-semibold">Output:</span> feasibility checklist
              + pilot scope template
            </span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-zinc-700" />
            <span>
              <span className="font-semibold">Outcome:</span> clear next-step plan
              (go/no-go + timeline)
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Request pilot scope"
      subtitle="Share basic plant information and we’ll respond with a feasibility checklist and pilot outline."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-sm text-zinc-600">
          <p>HydroTex focuses on feasibility-first wastewater upgrades.</p>
          <p>Initial discussion typically covers:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Plant size & process type</li>
            <li>Current ETP setup</li>
            <li>Sludge handling challenges</li>
            <li>Regulatory pressure / discharge limits</li>
          </ul>
          <p className="pt-4">
                      </p>
        </div>

        <form
          action="https://formspree.io/f/mgolaaag"
          method="POST"
          className="max-w-xl space-y-4"
        >
          <input
            required
            name="name"
            placeholder="Name"
            className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
          />

          <textarea
            required
            name="message"
            rows={4}
            placeholder="Plant / context"
            className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
          />

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
          >
            <Mail className="h-4 w-4" />
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-600 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold text-zinc-900">HydroTex</div>
              <div className="text-xs text-zinc-500">
                Feasibility-to-pilot pathway • Textile wastewater
              </div>
            </div>
          </div>
          <div className="text-xs text-zinc-500">© HydroTex • v0.3</div>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          Disclaimer: Early-stage venture. This website contains high-level
          information only and does not include public performance guarantees.
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />
      <Hero />
      <WhyNow />
      <Solution />
      <ForWho />
      <Pilot />
      <ContactSection />
      <Footer />
    </div>
  );
}
{/* ================= FOOTER ================= */}
<footer className="mt-24 border-t border-zinc-200 py-10 text-sm text-zinc-600">
  <div className="mx-auto max-w-6xl px-6 space-y-4">

    <div className="font-medium text-zinc-800">
      HydroTex — Independent GreenTech initiative
    </div>

    <div className="flex gap-6">
      <a href="/imprint" className="hover:text-zinc-900">
        Imprint
      </a>
      <a href="/privacy" className="hover:text-zinc-900">
        Privacy Policy
      </a>
    </div>

    <div className="text-xs text-zinc-500">
      © {new Date().getFullYear()} HydroTex. All rights reserved.
    </div>

  </div>
</footer>

