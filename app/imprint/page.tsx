import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal notice and publisher information for HydroTex."
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-hydro-paper">
      <div className="section-shell py-20">
        <Link href="/" className="text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
          ← Back to HydroTex
        </Link>
        <div className="mt-10 max-w-3xl rounded-[8px] border border-hydro-line bg-white p-6 shadow-sm sm:p-8">
          <p className="eyebrow">Legal notice</p>
          <h1 className="mt-3 text-4xl font-semibold text-hydro-ink">Imprint</h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-hydro-slate">
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Publisher</h2>
              <p className="mt-2">
                HydroTex
                <br />
                Dr. Amir Talebi
                <br />
                Freiburg, Germany
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Contact</h2>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:contact@hydrotex.eu" className="text-hydro-teal hover:text-hydro-blue">
                  contact@hydrotex.eu
                </a>
              </p>
            </section>
            <section className="rounded-[8px] bg-hydro-mint p-4">
              <h2 className="text-lg font-semibold text-hydro-ink">Production note</h2>
              <p className="mt-2">
                Add the official business address, tax details, and any required
                regulatory disclosures before final production deployment.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
