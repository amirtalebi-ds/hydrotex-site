import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for visitors to the HydroTex website."
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-hydro-paper">
      <div className="section-shell py-20">
        <Link href="/" className="text-sm font-semibold text-hydro-teal hover:text-hydro-blue">
          ← Back to HydroTex
        </Link>
        <div className="mt-10 max-w-3xl rounded-[8px] border border-hydro-line bg-white p-6 shadow-sm sm:p-8">
          <p className="eyebrow">Privacy</p>
          <h1 className="mt-3 text-4xl font-semibold text-hydro-ink">Privacy Policy</h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-hydro-slate">
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Overview</h2>
              <p className="mt-2">
                This website provides information about HydroTex and provides
                contact-based access to partner materials. The site is designed
                to be lightweight and does not require user accounts.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Contact by email</h2>
              <p className="mt-2">
                If you contact HydroTex by email, the information you provide is
                used to respond to your inquiry and manage follow-up
                communication.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Analytics and cookies</h2>
              <p className="mt-2">
                No analytics service or cookie banner is configured in this
                codebase by default. If analytics, forms, CRM tools, or
                third-party scripts are added later, this policy should be
                updated before deployment.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-hydro-ink">Responsible contact</h2>
              <p className="mt-2">
                Email:{" "}
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
