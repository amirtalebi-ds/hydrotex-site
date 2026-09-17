import { Header } from "@/components/hydrotex/Header";
import { Footer } from "@/components/hydrotex/Sections";
import { pageMetadata } from "@/components/hydrotex/metadata";
import Link from "next/link";

export const metadata = pageMetadata("de", "/impressum", "Impressum | HydroTex", "Anbieterkennzeichnung und Kontaktinformationen für HydroTex.");

export default function ImpressumPage() {
  return (
    <><Header locale="de" page="imprint"/><main id="main" className="legal-content" lang="de">
      <div className="section-shell">
        <Link href="/" className="text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
          ← Zurück zu HydroTex
        </Link>
        <div className="mt-10 max-w-3xl border-t border-hydro-line bg-white pt-8">
          <p className="eyebrow">Anbieterkennzeichnung</p>
          <h1 className="mt-3 text-4xl font-semibold text-hydro-ink">Impressum</h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-hydro-slate">
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Anbieter</h2>
              <p className="mt-2">Dr.-Ing. Amir Talebi<br />HydroTex – Gründungsvorhaben<br />Glottertalstraße 13<br />79271 St. Peter<br />Baden-Württemberg<br />Deutschland</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Kontakt</h2>
              <p className="mt-2">E-Mail: <a href="mailto:contact@hydrotex.eu" className="text-hydro-teal hover:text-hydro-blue">contact@hydrotex.eu</a></p>
            </section>
          </div>
        </div>
      </div>
    </main><Footer locale="de"/></>
  );
}

