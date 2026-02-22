{/* ================= CONTACT ================= */}
<Section
  id="contact"
  eyebrow="Contact"
  title="Request pilot scope"
  subtitle="Share basic plant information and we’ll respond with a feasibility checklist and pilot outline."
>
  <div className="grid gap-8 lg:grid-cols-2">
    <div className="rounded-3xl border border-zinc-200 p-6">
      <h3 className="text-base font-semibold text-zinc-900">What happens next</h3>
      <ul className="mt-4 space-y-3 text-sm text-zinc-700">
        <li>• We confirm fit (scope, constraints, compliance targets).</li>
        <li>• We propose a structured feasibility → pilot pathway.</li>
        <li>• You receive a practical checklist + pilot scope template.</li>
      </ul>

      <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
        Prefer email? Write to{" "}
        <a className="font-medium text-zinc-900 underline" href="mailto:contact@hydrotex.eu">
          contact@hydrotex.eu
        </a>
        .
      </div>
    </div>

    <div className="rounded-3xl border border-zinc-200 p-6">
      <form
        action="https://formspree.io/f/mgolaaag"
        method="POST"
        className="max-w-xl space-y-4"
      >
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
        />

        <input
          name="email"
          required
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
        />

        <textarea
          name="message"
          required
          rows={5}
          placeholder="Plant / context is enough"
          className="w-full rounded-xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-zinc-400"
        />

        {/* Optional: helps you see where it came from */}
        <input type="hidden" name="source" value="hydrotex.eu contact form" />

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-800"
        >
          <Mail className="h-4 w-4" /> Send message
        </button>

        <p className="text-xs text-zinc-500">
          By sending this form you agree that we may use your details to reply to your request.
          See{" "}
          <a className="underline" href="/datenschutz">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  </div>
</Section>