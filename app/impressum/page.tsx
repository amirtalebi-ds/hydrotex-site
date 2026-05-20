// app/datenschutz/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | HydroTex",
  description: "Datenschutzerklärung (GDPR) für HydroTex.",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Datenschutzerklärung</h1>
      <p className="mt-6 text-zinc-700">
        Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten beim Besuch dieser Website.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
        <p className="text-zinc-700">
          Dr. Amir Talebi<br />
          HydroTex – Independent GreenTech Initiative<br />
          Glottertalstr. 13, 79271 St. Peter, Deutschland<br />
          E-Mail: contact@hydrotex.eu
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">2. Hosting</h2>
        <p className="text-zinc-700">
          Diese Website wird über Vercel bereitgestellt. Beim Aufruf der Website werden technisch erforderliche
          Zugriffsdaten (z. B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, User-Agent) verarbeitet, um die Website
          auszuliefern und die Sicherheit zu gewährleisten.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">3. Kontaktformular</h2>
        <p className="text-zinc-700">
          Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir die von Ihnen eingegebenen Daten
          (z. B. Name, E-Mail, Nachricht), um Ihre Anfrage zu bearbeiten und zu beantworten.
        </p>
        <p className="text-zinc-700">
          <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen/Kommunikation) und/oder
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
        </p>
        <p className="text-zinc-700">
          <strong>Formular-Dienst:</strong> Wenn du Formspree nutzt, werden die Formulardaten an Formspree übertragen und
          dort zur Zustellung/Verarbeitung der Nachricht verarbeitet.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">4. Speicherdauer</h2>
        <p className="text-zinc-700">
          Wir speichern Anfragen nur so lange, wie es für die Bearbeitung erforderlich ist, sowie ggf. im Rahmen
          gesetzlicher Aufbewahrungspflichten.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">5. Ihre Rechte</h2>
        <p className="text-zinc-700">
          Sie haben (je nach Voraussetzungen) Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Außerdem besteht ein Beschwerderecht bei einer
          Datenschutzaufsichtsbehörde.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold">6. Kontakt</h2>
        <p className="text-zinc-700">
          Für Datenschutzanfragen kontaktieren Sie uns unter: <strong>contact@hydrotex.eu</strong>
        </p>
      </section>

      <p className="mt-12 text-sm text-zinc-500">
        Stand: {new Date().toLocaleDateString("de-DE")}
      </p>
    </main>
  );
}
