import { Header } from "@/components/hydrotex/Header";
import { Footer } from "@/components/hydrotex/Sections";
import { pageMetadata } from "@/components/hydrotex/metadata";
import Link from "next/link";

export const metadata = pageMetadata("de", "/datenschutz", "Datenschutz | HydroTex", "Datenschutzhinweise für die HydroTex-Website.");

export default function DatenschutzPage() {
  return (
    <><Header locale="de" page="privacy"/><main id="main" className="legal-content" lang="de">
      <div className="section-shell">
        <Link href="/" className="text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
          ← Zurück zu HydroTex
        </Link>
        <div className="mt-10 max-w-3xl border-t border-hydro-line bg-white pt-8">
          <p className="eyebrow">Datenschutz</p>
          <h1 className="mt-3 text-4xl font-semibold text-hydro-ink">Datenschutzerklärung</h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-hydro-slate">
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">1. Verantwortlicher</h2>
              <p className="mt-2">Dr.-Ing. Amir Talebi<br />HydroTex – Gründungsvorhaben<br />Glottertalstraße 13<br />79271 St. Peter<br />Baden-Württemberg<br />Deutschland</p>
              <p className="mt-2">E-Mail: <a href="mailto:contact@hydrotex.eu" className="text-hydro-teal hover:text-hydro-blue">contact@hydrotex.eu</a></p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">2. Hosting</h2>
              <p className="mt-2">Diese Website wird über Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA, gehostet. Zur Auslieferung, Absicherung und zum Betrieb der Website kann die Hosting-Infrastruktur technisch notwendige Verbindungs- und Anfragedaten verarbeiten, beispielsweise IP-Adresse, Zeitpunkt und Ziel einer Anfrage sowie technische Angaben zum Browser und zur Verbindung.</p>
              <p className="mt-2">Soweit anwendbar, erfolgt diese Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchst. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren und zuverlässigen Bereitstellung der Website. Eine Verarbeitung außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums, insbesondere in den USA, kann dabei nicht ausgeschlossen werden. Vercel beschreibt seine Regelungen zur Datenverarbeitung und zu internationalen Übermittlungen in den nachfolgend verlinkten Informationen.</p>
              <p className="mt-2">Weitere Informationen: <a className="text-hydro-teal underline" href="https://vercel.com/legal/privacy-notice">Datenschutzhinweise von Vercel</a> und <a className="text-hydro-teal underline" href="https://vercel.com/legal/dpa">Vercel Data Processing Addendum</a>.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">3. Kontakt per E-Mail</h2>
              <p className="mt-2">Wenn Sie HydroTex per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben, um Ihre Anfrage zu beantworten und die damit verbundene weitere Kommunikation zu führen.</p>
              <p className="mt-2">Soweit Ihre Anfrage vorvertragliche Maßnahmen auf Ihren Wunsch oder die Durchführung eines Vertrags betrifft, ist Art. 6 Abs. 1 Buchst. b DSGVO die Rechtsgrundlage. In anderen Fällen beruht die Verarbeitung auf Art. 6 Abs. 1 Buchst. f DSGVO und unserem berechtigten Interesse, Anfragen zu beantworten. Die Angaben werden nur so lange aufbewahrt, wie dies zur Bearbeitung der Anfrage und aufgrund anwendbarer gesetzlicher Aufbewahrungspflichten erforderlich ist.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">4. Cookies / Analytics</h2>
              <p className="mt-2">Die aktuelle HydroTex-Website dient der Information. Sie bietet keine Benutzerkonten und kein Kontaktformular; die Kontaktaufnahme erfolgt über E-Mail-Links. Wir setzen auf dieser Website derzeit keine Analysewerkzeuge und kein Werbetracking ein. Für einwilligungspflichtige Analyse-Cookies ist daher derzeit kein Cookie-Banner erforderlich; ein solches Banner ist nicht eingerichtet. Technisch notwendige Verarbeitung durch die Hosting-Infrastruktur bleibt hiervon unberührt.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">5. Empfänger / Dienstleister</h2>
              <p className="mt-2">Personenbezogene Daten können durch technische Dienstleister verarbeitet werden, die für den Betrieb der Website und die Bearbeitung von E-Mail-Anfragen eingesetzt werden, insbesondere den Hosting-Anbieter und den jeweiligen E-Mail-Dienstleister. Dies erfolgt nur, soweit es für die jeweilige Leistung erforderlich ist.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">6. Speicherdauer</h2>
              <p className="mt-2">Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Verarbeitungszweck oder zur Erfüllung gesetzlicher Aufbewahrungspflichten erforderlich ist. Anschließend werden sie gelöscht, sofern kein anderer rechtmäßiger Grund für die weitere Speicherung besteht. Die Dauer technisch notwendiger Verarbeitung beim Hosting richtet sich nach dem jeweiligen Betriebs- und Sicherheitszweck sowie den anwendbaren Vorgaben des Dienstleisters; eine feste Frist wird hier nicht zugesichert.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">7. Rechte betroffener Personen</h2>
              <p className="mt-2">Unter den gesetzlichen Voraussetzungen haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und, soweit anwendbar, Datenübertragbarkeit. Sie können einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchst. f DSGVO aus Gründen widersprechen, die sich aus Ihrer besonderen Situation ergeben.</p>
              <p className="mt-2">Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt. Zur Ausübung Ihrer Rechte können Sie sich an die oben genannte Kontaktadresse wenden. Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, insbesondere an Ihrem gewöhnlichen Aufenthaltsort, Ihrem Arbeitsplatz oder am Ort des vermuteten Verstoßes.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">8. Aufsichtsbehörde</h2>
              <p className="mt-2">Für Baden-Württemberg ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW) die zuständige Datenschutzaufsichtsbehörde.</p>
              <p className="mt-2">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />Heilbronner Straße 35<br />70191 Stuttgart<br />Deutschland</p>
              <p className="mt-2">Kontakt und weitere Informationen: <a className="text-hydro-teal underline" href="https://www.baden-wuerttemberg.datenschutz.de/kontakt-aufnehmen/">www.baden-wuerttemberg.datenschutz.de</a>.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">9. Aktualisierung dieser Datenschutzerklärung</h2>
              <p className="mt-2">Wir können diese Datenschutzerklärung aktualisieren, wenn sich die Funktionen der Website, die eingesetzten Dienste oder rechtliche Anforderungen ändern.</p>
            </section>
          </div>
        </div>
      </div>
    </main><Footer locale="de"/></>
  );
}

