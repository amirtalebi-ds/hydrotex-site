import { Header } from "@/components/hydrotex/Header";
import { Footer } from "@/components/hydrotex/Sections";
import { pageMetadata } from "@/components/hydrotex/metadata";
import Link from "next/link";

export const metadata = pageMetadata("en", "/privacy", "Privacy Policy | HydroTex", "Privacy information for visitors to the HydroTex website.");

export default function PrivacyPage() {
  return (
    <><Header locale="en" page="privacy"/><main id="main" className="legal-content" lang="en">
      <div className="section-shell">
        <Link href="/en" className="text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
          ← Back to HydroTex
        </Link>
        <div className="mt-10 max-w-3xl border-t border-hydro-line bg-white pt-8">
          <p className="eyebrow">Privacy</p>
          <h1 className="mt-3 text-4xl font-semibold text-hydro-ink">Privacy Policy</h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-hydro-slate">
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">1. Controller</h2>
              <p className="mt-2">Dr.-Ing. Amir Talebi<br />HydroTex – founding project<br />Glottertalstraße 13<br />79271 St. Peter<br />Baden-Württemberg<br />Germany</p>
              <p className="mt-2">Email: <a href="mailto:contact@hydrotex.eu" className="text-hydro-teal hover:text-hydro-blue">contact@hydrotex.eu</a></p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">2. Hosting</h2>
              <p className="mt-2">This website is hosted through Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. The hosting infrastructure may process technically necessary connection and request data to deliver, secure and operate the website. This may include an IP address, the time and destination of a request, and technical information about the browser and connection.</p>
              <p className="mt-2">Where applicable, this processing is based on Article 6(1)(f) GDPR and our legitimate interest in providing a secure and reliable website. Processing outside the European Union or European Economic Area, particularly in the United States, cannot be ruled out. Vercel describes its data-processing and international-transfer arrangements in the information linked below.</p>
              <p className="mt-2">Further information: <a className="text-hydro-teal underline" href="https://vercel.com/legal/privacy-notice">Vercel Privacy Notice</a> and <a className="text-hydro-teal underline" href="https://vercel.com/legal/dpa">Vercel Data Processing Addendum</a>.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">3. Contact by email</h2>
              <p className="mt-2">If you contact HydroTex by email, we process the information you provide to respond to your inquiry and manage related follow-up communication.</p>
              <p className="mt-2">Article 6(1)(b) GDPR applies where your inquiry concerns steps taken at your request before entering into a contract or the performance of a contract. Otherwise, processing is based on Article 6(1)(f) GDPR and our legitimate interest in responding to inquiries. We retain this information only for as long as needed to handle the inquiry and meet applicable legal retention obligations.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">4. Cookies / Analytics</h2>
              <p className="mt-2">The current HydroTex website provides information. It has no user accounts or contact form; contact is available through email links. We do not currently use analytics tools or advertising tracking on this website. A consent banner for analytics cookies is therefore not currently required, and no such banner is installed. This does not exclude technically necessary processing by the hosting infrastructure.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">5. Recipients / Service providers</h2>
              <p className="mt-2">Personal data may be processed by technical service providers used to operate the website and handle email inquiries, particularly the hosting provider and the relevant email service provider. Such processing takes place only where necessary to deliver the relevant service.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">6. Retention</h2>
              <p className="mt-2">Personal data are retained only for as long as necessary for the relevant processing purpose or to meet statutory retention obligations. They are then deleted unless another lawful reason requires continued retention. The duration of technically necessary hosting processing depends on the relevant operational and security purpose and the service provider’s applicable arrangements; no fixed period is promised here.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">7. Your rights</h2>
              <p className="mt-2">Subject to the applicable legal conditions, you have rights of access, rectification, erasure, restriction of processing and, where applicable, data portability. You may object to processing based on Article 6(1)(f) GDPR on grounds relating to your particular situation.</p>
              <p className="mt-2">Where processing relies on your consent, you may withdraw that consent at any time with effect for the future. Withdrawal does not affect the lawfulness of processing carried out beforehand. You can use the contact details above to exercise your rights. You also have the right to lodge a complaint with a data-protection supervisory authority, particularly in the place of your habitual residence, place of work or the alleged infringement.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">8. Supervisory authority</h2>
              <p className="mt-2">The competent data-protection supervisory authority for Baden-Württemberg is the State Commissioner for Data Protection and Freedom of Information Baden-Württemberg (LfDI BW).</p>
              <p className="mt-2">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />Heilbronner Straße 35<br />70191 Stuttgart<br />Germany</p>
              <p className="mt-2">Contact and further information: <a className="text-hydro-teal underline" href="https://www.baden-wuerttemberg.datenschutz.de/kontakt-aufnehmen/">www.baden-wuerttemberg.datenschutz.de</a>.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">9. Updates to this privacy policy</h2>
              <p className="mt-2">We may update this privacy policy when website functionality, the services used or legal requirements change.</p>
            </section>
          </div>
        </div>
      </div>
    </main><Footer locale="en"/></>
  );
}

