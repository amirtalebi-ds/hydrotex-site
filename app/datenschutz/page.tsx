import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise für Besucherinnen und Besucher der HydroTex-Website."
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-hydro-paper" lang="de">
      <div className="section-shell py-20">
        <Link href="/de" className="text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
          ← Zurück zu HydroTex
        </Link>
        <div className="mt-10 max-w-3xl rounded-[8px] border border-hydro-line bg-white p-6 shadow-sm sm:p-8">
          <p className="eyebrow">Datenschutz</p>
          <h1 className="mt-3 text-4xl font-semibold text-hydro-ink">Datenschutzerklärung</h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-hydro-slate">
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Überblick</h2>
              <p className="mt-2">
                Diese Website informiert über HydroTex und ermöglicht die
                kontaktbasierte Anfrage von Partnerunterlagen. Die Seite ist
                bewusst schlank aufgebaut und erfordert keine Benutzerkonten.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Kontakt per E-Mail</h2>
              <p className="mt-2">
                Wenn Sie HydroTex per E-Mail kontaktieren, werden die von Ihnen
                übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für
                etwaige Anschlusskommunikation genutzt.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Analyse und Cookies</h2>
              <p className="mt-2">
                In diesem Codebestand ist standardmäßig kein Analysedienst und
                kein Cookie-Banner eingerichtet. Sollten später Analysewerkzeuge,
                Formulare, CRM-Systeme oder externe Skripte ergänzt werden, muss
                diese Erklärung vor dem produktiven Einsatz entsprechend
                aktualisiert werden.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Verantwortlicher Kontakt</h2>
              <p className="mt-2">
                E-Mail:{" "}
                <a href="mailto:contact@hydrotex.eu" className="text-hydro-teal hover:text-hydro-blue">
                  contact@hydrotex.eu
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
