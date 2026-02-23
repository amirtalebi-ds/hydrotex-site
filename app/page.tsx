"use client";

import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Shield,
  Cpu,
  LineChart,
  CheckCircle2,
  Mail,
  Factory,
  Droplets,
  Gauge,
} from "lucide-react";

type Status = "idle" | "sending" | "ok" | "error";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Section(props: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const { id, eyebrow, title, subtitle, children } = props;
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold tracking-widest text-zinc-500">
              {eyebrow.toUpperCase()}
            </div>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Pill(props: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600">
      {props.children}
    </span>
  );
}

function Card(props: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        {props.icon ? (
          <div className="mt-0.5 rounded-xl border border-zinc-200 bg-white p-2">
            {props.icon}
          </div>
        ) : null}
        <div>
          <div className="text-sm font-semibold text-zinc-900">{props.title}</div>
          <div className="mt-2 text-sm leading-relaxed text-zinc-600">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const formspreeEndpoint = "https://formspree.io/f/mgolaaag";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const nav = useMemo(
    () => [
      { href: "#why-now", label: "Why now" },
      { href: "#solution", label: "Solution" },
      { href: "#ai", label: "AI" },
      { href: "#for-who", label: "For who" },
      { href: "#pilot", label: "Pilot" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
        return;
      }

      const data = await res.json().catch(() => null);
      setStatus("error");
      setErrorMsg(
        data?.errors?.[0]?.message ||
          "Something went wrong. Please try again or email contact@hydrotex.eu."
      );
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email contact@hydrotex.eu.");
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white">
              <Droplets className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">HydroTex</div>
              <div className="text-xs text-zinc-500">
                Textile wastewater • Feasibility → Pilot
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-zinc-600 hover:text-zinc-900"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
          >
            Request pilot scope <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="py-14 sm:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>Sludge minimization focus</Pill>
                <Pill>Compliance-first</Pill>
                <Pill>Feasibility → Pilot</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Cut sludge burden.
                <br />
                Reduce compliance risk.
                <span className="block text-zinc-500">
                  A clearer path to textile wastewater upgrades.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600">
                HydroTex helps dyeing and finishing plants evaluate and validate a
                sludge-minimizing treatment approach through a structured
                feasibility → pilot pathway. The outcome is a practical
                recommendation and a de-risked route to implementation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
                >
                  Request pilot scope <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#pilot"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  See pilot pathway
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card title="Primary value" icon={<Shield className="h-4 w-4" />}>
                  Lower sludge exposure and clearer compliance planning.
                </Card>
                <Card title="Decision outcome" icon={<CheckCircle2 className="h-4 w-4" />}>
                  Go / No-go clarity based on site data and constraints.
                </Card>
                <Card title="First step" icon={<Mail className="h-4 w-4" />}>
                  A pilot scope template and feasibility checklist.
                </Card>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-zinc-900">
                Commercial focus
              </div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                <li className="flex gap-2">
                  <Factory className="mt-0.5 h-4 w-4 text-zinc-500" />
                  Small–medium dyeing & finishing plants
                </li>
                <li className="flex gap-2">
                  <Shield className="mt-0.5 h-4 w-4 text-zinc-500" />
                  Plants with sludge/disposal and compliance pressure
                </li>
                <li className="flex gap-2">
                  <Gauge className="mt-0.5 h-4 w-4 text-zinc-500" />
                  ETP operators and environmental managers
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
                <span className="font-semibold">What you receive:</span> a feasibility
                checklist + pilot scope template + a clear next-step plan.
              </div>

              <div className="mt-6 text-xs text-zinc-500">
                Founder-led environmental technology concept.
              </div>
            </div>
          </div>
        </section>

        {/* WHY NOW */}
        <Section
          id="why-now"
          eyebrow="Context"
          title="Upgrades are accelerating — and sludge is still the bottleneck."
          subtitle="Textile ETPs face tighter discharge expectations, variable influent loads, and rising disposal complexity. A feasibility-first pathway reduces wasted time and budget."
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="Compliance pressure" icon={<Shield className="h-4 w-4" />}>
              Clear, documented decision-making improves stakeholder alignment and
              reduces compliance surprises.
            </Card>
            <Card title="Operational variability" icon={<LineChart className="h-4 w-4" />}>
              Dye chemistry, flow swings, and process changes demand adaptable
              treatment logic.
            </Card>
            <Card title="Sludge cost & risk" icon={<Droplets className="h-4 w-4" />}>
              Sludge handling is often where costs and secondary impacts concentrate.
            </Card>
          </div>
        </Section>

        {/* SOLUTION */}
        <Section
          id="solution"
          eyebrow="Solution"
          title="A structured feasibility → pilot pathway."
          subtitle="We start with what you already have: plant constraints, ETP layout, discharge targets, and a manageable data plan."
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="1) Feasibility check" icon={<CheckCircle2 className="h-4 w-4" />}>
              Define objectives, constraints, and success metrics. Identify quick
              wins and key risks early.
            </Card>
            <Card title="2) Bench / validation plan" icon={<Gauge className="h-4 w-4" />}>
              Targeted testing to confirm separation and operability — not a long
              academic program.
            </Card>
            <Card title="3) Pilot scope" icon={<Factory className="h-4 w-4" />}>
              A clear pilot outline: instrumentation, safety interlocks, sampling,
              and decision gates.
            </Card>
          </div>
        </Section>

        {/* AI SECTION (NEW) */}
        <Section
          id="ai"
          eyebrow="AI-enabled"
          title="AI-supervised process optimization — designed for industrial reality."
          subtitle="HydroTex is developing a PLC-ready control concept that combines a digital twin with a lightweight ML-based separation advisor and safety interlocks."
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="3-layer architecture" icon={<Cpu className="h-4 w-4" />}>
              <div className="space-y-2">
                <div>
                  <span className="font-semibold text-zinc-900">Layer 1:</span>{" "}
                  Instrumentation & safeguards (sensors, alarms, interlocks).
                </div>
                <div>
                  <span className="font-semibold text-zinc-900">Layer 2:</span>{" "}
                  PLC control logic (stable operation, fallback modes).
                </div>
                <div>
                  <span className="font-semibold text-zinc-900">Layer 3:</span>{" "}
                  Digital twin + ML advisor (recommendations, not blind control).
                </div>
              </div>
            </Card>

            <Card title="Decision support (not hype)" icon={<LineChart className="h-4 w-4" />}>
              The ML layer proposes operating adjustments (e.g., setpoints, flow
              windows, phase management) while the PLC maintains safe, bounded
              control.
            </Card>

            <Card title="Safety & auditability" icon={<Shield className="h-4 w-4" />}>
              Recommendations are constrained by safety rules, logged for review,
              and tied to pilot decision gates — supporting traceable compliance
              discussions.
            </Card>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700">
            <span className="font-semibold">Positioning:</span> AI-supervised circular
            platform concept — feasibility-first, with PLC-ready architecture and
            pilot-grade documentation.
          </div>
        </Section>

        {/* FOR WHO */}
        <Section
          id="for-who"
          eyebrow="Fit"
          title="Who this is for"
          subtitle="A good fit when you need a practical pathway, not a black-box promise."
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card title="ETP operators" icon={<Factory className="h-4 w-4" />}>
              Improve stability, reduce operational pain, and document upgrades.
            </Card>
            <Card title="Environmental managers" icon={<Shield className="h-4 w-4" />}>
              Reduce compliance risk with a traceable plan and decision points.
            </Card>
            <Card title="Plant leadership" icon={<CheckCircle2 className="h-4 w-4" />}>
              Get a clear go/no-go view and a scoped pilot before major spend.
            </Card>
          </div>
        </Section>

        {/* PILOT */}
        <Section
          id="pilot"
          eyebrow="Pilot"
          title="Pilot partnership: scope, validate, decide."
          subtitle="A pilot should answer a small number of critical questions quickly: performance, operability, safety, and total cost implications."
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card title="Pilot deliverables" icon={<CheckCircle2 className="h-4 w-4" />}>
              Pilot scope template, instrumentation plan, sampling plan, decision
              gates, and a de-risked implementation path.
            </Card>
            <Card title="Pilot principles" icon={<Shield className="h-4 w-4" />}>
              Safety-first control philosophy, bounded automation, clear failure
              modes, and measurable success criteria.
            </Card>
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Request pilot scope"
          subtitle="Share basic plant information and we’ll respond with a feasibility checklist and pilot outline."
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            <div className="text-sm text-zinc-700">
              <p className="text-zinc-600">
                HydroTex focuses on feasibility-first wastewater upgrades.
              </p>

              <p className="mt-6 font-semibold text-zinc-900">
                Initial discussion typically covers:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-600">
                <li>Plant size & process type</li>
                <li>Current ETP setup</li>
                <li>Sludge handling challenges</li>
                <li>Regulatory pressure / discharge limits</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 text-zinc-600">
                Prefer email? Write to{" "}
                <a
                  className="font-medium text-zinc-900 underline underline-offset-4"
                  href="mailto:contact@hydrotex.eu"
                >
                  contact@hydrotex.eu
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <form onSubmit={onSubmit} className="space-y-4">
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
                  rows={5}
                  placeholder="Plant / context"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800",
                    status === "sending" && "opacity-60"
                  )}
                >
                  <Mail className="h-4 w-4" />
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                {status === "ok" && (
                  <div className="text-sm text-zinc-600">
                    <span className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Message sent. We’ll reply via email.
                    </span>
                  </div>
                )}

                {status === "error" && (
                  <div className="text-sm text-red-600">{errorMsg}</div>
                )}
              </form>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-zinc-500">
              © {new Date().getFullYear()} HydroTex • Independent GreenTech initiative
            </div>
            <div className="flex gap-5 text-sm">
              <a
                href="/impressum"
                className="text-zinc-600 hover:text-zinc-900"
              >
                Legal / Impressum
              </a>
              <a
                href="/datenschutz"
                className="text-zinc-600 hover:text-zinc-900"
              >
                Privacy Policy
              </a>
              <a
                href="mailto:contact@hydrotex.eu"
                className="text-zinc-600 hover:text-zinc-900"
              >
                contact@hydrotex.eu
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}