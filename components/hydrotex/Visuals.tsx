import { content, type Locale } from "./content";
export function FlowVisual({ locale }: { locale: Locale }) {
  const de = locale === "de";
  const labels = de ? ["ZULAUF", "TRENNUNG", "AUFBEREITUNG", "KREISLAUF"] : ["INFLUENT", "SEPARATION", "TREATMENT", "RECOVERY"];
  return <figure className="flow-visual" aria-label={de ? "Konzeptioneller Prozess: Industrielles Abwasser durchläuft Trennung und Aufbereitung bis zum behandelten Wasser. Ein Rückgewinnungs- und Regenerationskreislauf führt zum Prozess zurück." : "Conceptual process: Industrial wastewater passes through separation and treatment to a treated-water outlet. A recovery and regeneration loop returns to the process."}>
    <div className="figure-top"><span>HYDROTEX / {de ? "PROZESSKONZEPT" : "PROCESS CONCEPT"}</span><span className="gold-dot" /></div>
    <div className="engineering-flow">
      <svg viewBox="0 0 560 460" fill="none" aria-hidden="true">
        <g stroke="#022F5F" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M22 145h56v92H22zM22 163h56M22 219h56" fill="#F8FAFC"/>
          <rect x="181" y="121" width="100" height="140" rx="5" fill="white"/>
          <path d="M198 148h66M198 164h66M198 180h66M198 196h66M198 212h66M218 261v13m26-13v13"/>
          <rect x="372" y="121" width="100" height="140" rx="5" fill="white"/>
          <path d="M385 230h74M409 261v13m26-13v13"/>
        </g>
        <g stroke="#0393CA" strokeWidth="3" strokeLinejoin="round">
          <path d="M34 181h31m-31 12h31m-31 12h31M78 191h103M472 191h64"/>
          <path d="m143 184 9 7-9 7m375-14 9 7-9 7"/>
        </g>
        <g stroke="#00A9B7" strokeWidth="3" strokeLinejoin="round">
          <path d="M281 191h91m-37-7 9 7-9 7"/>
          <path d="M392 212v-42m15 42v-60m15 60v-42m15 42v-60m15 60v-42" strokeWidth="2"/>
          <path d="M422 274v63H231v-63m7 12-7-10-7 10"/>
        </g>
        <circle cx="326" cy="337" r="21" fill="white" stroke="#369849" strokeWidth="1.5"/>
        <path d="M316 337a10 10 0 0 1 17-7m-1-6 2 7-7-1m9 7a10 10 0 0 1-17 7m1 6-2-7 7 1" stroke="#369849" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M536 176v30" stroke="#022F5F" strokeWidth="1.5"/>
      </svg>
      <ol className="engineering-labels">{labels.map((label,i)=><li key={label} className={"engineering-label stage-"+(i+1)}><span>0{i+1} / </span><span>{label}</span></li>)}</ol>
    </div>
    <figcaption>{de ? "Wasser verstehen. Prozesse entwickeln. Kreisläufe schließen." : "Understand water. Engineer processes. Close the loop."}</figcaption>
  </figure>;
}
export function DataVisual({ locale }: { locale: Locale }) {
  const t = content[locale];
  return <figure className="data-visual"><div className="figure-top"><span>{locale === "de" ? "DATEN → ERKENNTNIS → ENTSCHEIDUNG" : "DATA → INSIGHT → DECISION"}</span><span className="status-dot" /></div><div className="data-inputs">{t.dataInputs.map((input, i) => <div key={input}><span>0{i+1}</span>{input}<i aria-hidden="true"/></div>)}</div><ol className="data-stages">{t.dataSteps.map((step, i) => <li key={step}><span aria-hidden="true">{i === 1 ? "⌁" : i === 2 ? "↗" : "≋"}</span>{step}</li>)}</ol><figcaption>{t.concept}</figcaption></figure>;
}
