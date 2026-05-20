import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterkennzeichnung und Kontaktinformationen für HydroTex."
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-hydro-paper" lang="de">
      <div className="section-shell py-20">
        <Link href="/de" className="text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
          ← Zurück zu HydroTex
        </Link>
        <div className="mt-10 max-w-3xl rounded-[8px] border border-hydro-line bg-white p-6 shadow-sm sm:p-8">
          <p className="eyebrow">Anbieterkennzeichnung</p>
          <h1 className="mt-3 text-4xl font-semibold text-hydro-ink">Impressum</h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-hydro-slate">
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Anbieter</h2>
              <p className="mt-2">
                HydroTex
                <br />
                Dr. Amir Talebi
                <br />
                Freiburg, Deutschland
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Kontakt</h2>
              <p className="mt-2">
                E-Mail:{" "}
                <a href="mailto:contact@hydrotex.eu" className="text-hydro-teal hover:text-hydro-blue">
                  contact@hydrotex.eu
                </a>
              </p>
            </section>
            <section className="rounded-[8px] bg-hydro-mint p-4">
              <h2 className="text-lg font-semibold text-hydro-ink">Hinweis</h2>
              <p className="mt-2">
                Vor einem produktiven Einsatz sollten die vollständige Geschäftsadresse,
                steuerliche Angaben und gegebenenfalls weitere rechtlich erforderliche
                Pflichtinformationen ergänzt werden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
