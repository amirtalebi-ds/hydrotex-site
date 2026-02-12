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
} from "lucide-react";

// HydroTex — Smart Green aligned venture homepage (neutral global positioning)
// Includes: 1) Hero 2) Why now 3) Why different 4) Validation

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
    { label: "Why different", href: "#different" },
    { label: "Validation", href: "#validation" },
    { label: "Business", href: "#business" },
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
              Textile Wastewater Treatment Concept
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
          Discuss feasibility
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
            Preparing textile plants for tighter wastewater enforcement.
          </motion.h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">
            HydroTex is an early-stage GreenTech venture built around a
            sludge-minimizing, circular wastewater treatment concept for textile
            dyeing and finishing plants. The goal is to reduce compliance risk,
            secondary waste generation, and long-term operating uncertainty as
            enforcement tightens and textile markets transition.
          </p>

          <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            <span className="font-semibold">Why now:</span> enforcement is
            tightening, discharge costs are rising, and “wait-and-see” increases
            penalty risk — a structured feasibility → pilot pathway reduces
            uncertainty before major upgrades.
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
              Talk to us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">Current focus</div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600">
            <li>Small–medium textile dyeing & finishing plants</li>
            <li>Regulation-driven textile markets (transition phase)</li>
            <li>Environmental & compliance decision-makers</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
            <span className="font-semibold">What we do:</span> feasibility and
            pilot validation first — then a scale-up roadmap aligned with plant
            constraints and compliance needs.
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
      eyebrow="The problem"
      title="Compliance pressure and sludge costs are increasing"
      subtitle="Textile plants face tightening wastewater regulations, high operating and sludge disposal costs, and uncertainty about future-proof investments."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Factory className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Regulatory risk</div>
          <p className="mt-2 text-sm text-zinc-600">
            Tightening enforcement increases the risk of penalties or operational
            disruption.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Recycle className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">High sludge burden</div>
          <p className="mt-2 text-sm text-zinc-600">
            Some conventional approaches shift pollutants into sludge, creating
            disposal and cost challenges.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Gauge className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Investment uncertainty
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Plants hesitate to commit to large upgrades without site-specific
            feasibility evidence.
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
      eyebrow="The approach"
      title="A phased pathway: feasibility → pilot → scale-up"
      subtitle="HydroTex is structured to reduce decision risk. We validate assumptions step-by-step before major capital commitments."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <LineChart className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Feasibility first</div>
          <p className="mt-2 text-sm text-zinc-600">
            Site-specific profiling and validation to define operating windows
            and KPIs.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Droplets className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Pilot validation</div>
          <p className="mt-2 text-sm text-zinc-600">
            Paid or co-funded proof-of-concept to test performance, waste
            profile, and stability.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ShieldCheck className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">Scale-up roadmap</div>
          <p className="mt-2 text-sm text-zinc-600">
            A data-driven plan aligned with compliance, operations, and
            integration constraints.
          </p>
        </div>
      </div>
    </Section>
  );
}

// 3) WHY DIFFERENT
function WhyDifferent() {
  return (
    <Section
      id="different"
      eyebrow="Why different"
      title="Lower sludge. Lower surprise costs."
      subtitle="Many approaches transfer pollutants into sludge or create new chemical burdens. HydroTex is structured to minimize secondary waste and reduce decision risk with step-by-step validation."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Recycle className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Minimize secondary waste
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Designed to reduce sludge-heavy outcomes and avoid shifting the
            problem into disposal.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <LineChart className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Evidence before investment
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Feasibility and pilot data come first — defining KPIs, operating
            windows, and realistic outcomes.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ShieldCheck className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Compliance-ready documentation
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Built with monitoring and reporting in mind — to support audits,
            permits, and regulator confidence.
          </p>
        </div>
      </div>
    </Section>
  );
}

// 4) VALIDATION
function Validation() {
  return (
    <Section
      id="validation"
      eyebrow="Proof & validation"
      title="Validation status"
      subtitle="Clear milestones, no over-claiming. Technical details are shared during feasibility/pilot discussions as appropriate."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <LineChart className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Milestone 1: feasibility package
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Define site KPIs, sampling plan, and success criteria — aligned with
            plant constraints and discharge limits.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <Droplets className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Milestone 2: pilot / proof of concept
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Pilot execution to verify performance stability, waste profile, and
            operational practicality.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <ShieldCheck className="h-5 w-5 text-zinc-700" />
          <div className="mt-3 font-semibold text-zinc-900">
            Milestone 3: scale-up roadmap
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Data-driven scale-up plan with integration concept, monitoring
            approach, and cost/risk assumptions.
          </p>
        </div>
      </div>
    </Section>
  );
}

function BusinessModel() {
  return (
    <Section
      id="business"
      eyebrow="Business model"
      title="From feasibility to scalable implementation"
      subtitle="A staged commercialization model designed to de-risk decisions for plants and partners."
    >
      <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-600">
        <li>Advisory and feasibility studies</li>
        <li>Paid or co-funded pilot / proof-of-concept projects</li>
        <li>System integration, licensing, or long-term service models (later)</li>
      </ul>
    </Section>
  );
}

function Pilot() {
  return (
    <Section
      id="pilot"
      eyebrow="Next steps"
      title="Pilot partners and feasibility validation"
      subtitle="The priority is to refine the pilot framework, confirm key assumptions, and build the funding pathway."
    >
      <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
        <p className="text-sm text-zinc-700">
          If you operate a textile dyeing/finishing site (or support one through
          an ETP), we can share a pilot scope template and discuss fit, sampling
          needs, and timeline.
        </p>
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
      title="Discuss feasibility or pilot collaboration"
      subtitle="Send a short message — we’ll reply with next steps and a pilot scope template."
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
          placeholder="Briefly describe your plant / context"
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
            ✅ Message sent (demo mode). Wire this form to a service later.
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
                © {new Date().getFullYear()} • v0.1
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-xs text-zinc-500">
          Disclaimer: Early-stage concept. Public information is intentionally
          high-level; technical details are shared during feasibility/pilot
          discussions as appropriate.
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
      <WhyDifferent />
      <Validation />
      <BusinessModel />
      <Pilot />
      <Contact />
      <Footer />
    </div>
  );
}
