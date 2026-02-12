"use client";

import React, { useState, type ReactNode } from "react";
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
  Target,
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
    { label: "Problem", href: "#problem" },
    { label: "Approach", href: "#approach" },
    { label: "Investor snapshot", href: "#snapshot" },
    { label: "Why different", href: "#different" },
    { label: "Validation", href: "#validation" },
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
              Textile wastewater treatment concept
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
          href="#pilot"
          className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
        >
          Request a pilot scope
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
            Reduce sludge burden and compliance risk in textile wastewater.
          </motion.h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">
            HydroTex is an early-stage GreenTech concept structured as a{" "}
            <span className="font-medium text-zinc-800">
              feasibility → pilot → scale-up
            </span>{" "}
            pathway for textile dyeing and finishing plants. Public information
            is intentionally high-level; technical details are shared during
            feasibility/pilot discussions.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Target outcomes
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                Less sludge • lower OPEX risk
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Built for
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                Dyeing & finishing ETPs
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Commercial path
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                Feasibility → paid pilot
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#snapshot"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
            >
              View investor snapshot <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
            >
              Contact <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 text-xs text-zinc-500">
            Note: Early-stage concept. No public performance claims are made on
            this page.
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">
            Current focus (near-term)
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600">
            <li>Small–medium dyeing & finishing plants</li>
            <li>Regulation-driven markets (transition phase)</li>
            <li>Decision-makers: plant, ETP, compliance</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            <span className="font-semibold">What we provide:</span> a defined
            feasibility package + pilot scope template to de-risk adoption.
          </div>
        </div>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="Problem"
      title="Textile wastewater is getting riskier and more expensive"
      subtitle="Plants face tightening enforcement, sludge/disposal burdens, and uncertainty about which upgrades will hold under future requirements."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Factory className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Enforcement pressure
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Non-compliance risk rises as standards tighten and monitoring
            improves.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Recycle className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Sludge burden</div>
          <p className="mt-2 text-sm text-zinc-600">
            Some conventional approaches shift pollutants into sludge, creating
            disposal costs and operational friction.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Gauge className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Capex decision risk
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Big upgrades are hard to justify without site-specific feasibility
            evidence.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Approach() {
  return (
    <Section
      id="approach"
      eyebrow="Approach"
      title="A phased pathway to reduce decision risk"
      subtitle="HydroTex is structured around validation first. The goal is to define KPIs and operating windows before scaling."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ClipboardList className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Feasibility package
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Sampling plan, baseline characterization, KPI definition, and pilot
            success criteria.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Droplets className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Pilot validation</div>
          <p className="mt-2 text-sm text-zinc-600">
            Proof-of-concept with monitoring focused on stability and secondary
            waste profile.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <LineChart className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Scale-up roadmap</div>
          <p className="mt-2 text-sm text-zinc-600">
            Integration plan + monitoring approach + cost and compliance
            assumptions.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Snapshot() {
  return (
    <Section
      id="snapshot"
      eyebrow="Investor snapshot"
      title="What HydroTex is (and is not)"
      subtitle="This section is written to be shareable with accelerators, partners, and early-stage investors — clear, specific, and controlled."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
            <CheckCircle2 className="h-5 w-5 text-zinc-800" />
            What it is
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600">
            <li>
              A defined wastewater treatment concept for textile dyeing/finishing
              plants
            </li>
            <li>
              Structured as feasibility → pilot → scale-up (validation before big
              capex)
            </li>
            <li>
              Designed to minimize sludge burden and secondary waste risk
              (objective)
            </li>
            <li>
              Built with compliance documentation and monitoring needs in mind
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
            <Target className="h-5 w-5 text-zinc-800" />
            What we will measure (pilot KPIs)
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Color/COD proxy
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                TBD (site-specific)
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Sludge burden
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                TBD (baseline vs pilot)
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Secondary waste
              </div>
              <div className="mt-2 text-sm font-medium text-zinc-900">
                Profile + handling plan
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
            <span className="font-semibold">Positioning:</span> neutral global
            framing, with emphasis on regulation-driven and transition-stage
            textile markets.
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyDifferent() {
  return (
    <Section
      id="different"
      eyebrow="Why different"
      title="Minimize sludge and avoid hidden trade-offs"
      subtitle="Many solutions trade one cost for another. HydroTex is designed to explicitly track secondary waste and compliance documentation from day one."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Recycle className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Secondary waste awareness
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Pilot evaluation includes waste streams and handling assumptions, not
            only effluent metrics.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ShieldCheck className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Compliance-ready framing
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Documentation and monitoring are part of the product, not an
            afterthought.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <LineChart className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Evidence before scale
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            The pathway reduces risk for plants and partners by validating before
            expansion.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Validation() {
  return (
    <Section
      id="validation"
      eyebrow="Validation"
      title="Milestones (no over-claiming)"
      subtitle="Clear steps and outputs. Technical details are shared during feasibility/pilot discussions as appropriate."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ClipboardList className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Milestone 1: feasibility package
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            KPIs, sampling plan, baseline profile, pilot success criteria.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Droplets className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Milestone 2: pilot / proof of concept
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Stability, waste profile, monitoring method, operational constraints.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <LineChart className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Milestone 3: scale-up roadmap
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Integration plan + monitoring approach + economics assumptions.
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
      title="Request a pilot scope template"
      subtitle="If you run a dyeing/finishing plant or support one through an ETP, we can share a pilot scope template and discuss feasibility fit."
    >
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>What we need: basic influent/flow context + compliance target</li>
          <li>What you get: pilot scope template + feasibility checklist</li>
          <li>Outcome: go/no-go recommendation and next-step plan</li>
        </ul>
      </div>
    </Section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("ok");
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Contact"
      subtitle="Send a short note. We’ll reply with next steps and a pilot scope template."
    >
      <form onSubmit={onSubmit} className="max-w-xl space-y-4">
        <input
          required
          placeholder="Name"
          className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
        />
        <textarea
          required
          rows={4}
          placeholder="Plant / context (one paragraph is enough)"
          className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
        >
          <Mail className="h-4 w-4" /> Send message
        </button>
        {status === "ok" && (
          <div className="text-sm text-zinc-600">
            ✅ Message sent (demo mode). We can wire this to email next.
          </div>
        )}
      </form>
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
                Early-stage concept • Public info is high-level
              </div>
            </div>
          </div>
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} HydroTex • v0.2
          </div>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          Disclaimer: This website describes an early-stage concept. No public
          performance guarantees are made. Technical details are shared during
          feasibility/pilot discussions as appropriate.
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
      <Problem />
      <Approach />
      <Snapshot />
      <WhyDifferent />
      <Validation />
      <Pilot />
      <Contact />
      <Footer />
    </div>
  );
}
