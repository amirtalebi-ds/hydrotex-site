import { Header } from "@/components/hydrotex/Header";
import { Footer } from "@/components/hydrotex/Sections";
import { pageMetadata } from "@/components/hydrotex/metadata";
import Link from "next/link";

export const metadata = pageMetadata("en", "/imprint", "Imprint | HydroTex", "Legal notice and publisher information for HydroTex.");

export default function ImprintPage() {
  return (
    <><Header locale="en" page="imprint"/><main id="main" className="legal-content" lang="en">
      <div className="section-shell">
        <Link href="/en" className="text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
          ← Back to HydroTex
        </Link>
        <div className="mt-10 max-w-3xl border-t border-hydro-line bg-white pt-8">
          <p className="eyebrow">Legal notice</p>
          <h1 className="mt-3 text-4xl font-semibold text-hydro-ink">Imprint</h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-hydro-slate">
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Publisher</h2>
              <p className="mt-2">Dr.-Ing. Amir Talebi<br />HydroTex – founding project<br />Glottertalstraße 13<br />79271 St. Peter<br />Baden-Württemberg<br />Germany</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Contact</h2>
              <p className="mt-2">Email: <a href="mailto:contact@hydrotex.eu" className="text-hydro-teal hover:text-hydro-blue">contact@hydrotex.eu</a></p>
            </section>
          </div>
        </div>
      </div>
    </main><Footer locale="en"/></>
  );
}

