import Image from "next/image";
import Link from "next/link";
import { Droplets, Recycle, ChartNoAxesCombined, Network, Factory, Leaf, Gauge, Waypoints, GraduationCap, ArrowRight, RotateCcw } from "lucide-react";
import { expansion } from "./expansion-content";
import { content, partnerPath, type Locale } from "./content";
import { ProcessFlow, SectionHeading } from "./Sections";

export function CompanySections({ locale }: { locale: Locale }) {
 const t = expansion[locale]; const shared = content[locale]; const de = locale === "de";
 const icons = [Droplets, Recycle, ChartNoAxesCombined, GraduationCap];
 const cycleIcons = [Droplets, Factory, Recycle, Leaf, RotateCcw];
 const architectureIcons = [Factory, Gauge, Waypoints, ChartNoAxesCombined, Network, GraduationCap];
 return <>
  <section className="section soft-section company-capabilities" id="services"><div className="section-shell"><SectionHeading label={de ? "Unsere Kompetenzen" : "Our capabilities"} title={t.capabilitiesTitle}/><figure className="section-visual capability-hub-visual">
  <Image
    src="/images/brand/hydrotex-capability-hub.png"
    alt={de
      ? "HydroTex Kompetenzfelder: Wasser- und Abwassertechnik, zirkuläre Technologien, Umweltdatenwissenschaft und Zusammenarbeit"
      : "HydroTex capability areas: water and wastewater engineering, circular technologies, environmental data science and collaboration"}
    width={1672}
    height={941}
    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 96px), 1080px"
  />
</figure><div className="company-cards">{t.cards.map(([title,copy],i)=>{const Icon=icons[i];return <article key={title}><Icon aria-hidden="true" strokeWidth={1.5}/><h3>{title}</h3><p>{copy}</p></article>;})}</div></div></section>
  <section className="section circular-section" id="circular"><div className="section-shell"><SectionHeading label={de ? "Ressourcen im Kreislauf" : "Resources in circulation"} title={t.circularTitle}/><p className="body-copy limited-copy">{t.circularIntro}</p><figure className="section-visual circular-process-visual">
  <Image
    src="/images/brand/hydrotex-circular-process.png"
    alt={de
      ? "Konzeptioneller HydroTex-Kreislauf für Behandlung, Rückgewinnung, Wasserwiederverwendung und Abfallreduktion"
      : "Conceptual HydroTex cycle for treatment, recovery, water reuse and waste reduction"}
    width={1672}
    height={941}
    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 96px), 1040px"
  />
  <figcaption>
    {de
      ? "Konzeptioneller Kreislauf · Rückführung abhängig von technischer Eignung"
      : "Conceptual cycle · Return flows depend on technical feasibility"}
  </figcaption>
</figure></div></section>
  <section className="section soft-section" id="technology"><div className="section-shell two-columns technology-grid"><div><SectionHeading label={de ? "Aktuelle Leitanwendung" : "Current flagship application"} title={t.flagshipTitle}/><p className="body-copy">{t.flagshipIntro}</p><p className="body-copy">{shared.technologyCopy}</p><ul className="theme-list">{shared.themes.map(x=><li key={x}>{x}</li>)}</ul><p className="technical-note">{shared.criteria}</p><Link href={partnerPath(locale)+"#roadmap"} className="text-link">{shared.technicalLink}<span aria-hidden="true">→</span></Link></div><ProcessFlow locale={locale}/></div></section>
  <section className="section intelligence-section" id="intelligence"><div className="section-shell"><SectionHeading label={de ? "Modelle · Daten · Entscheidungen" : "Models · Data · Decisions"} title={t.digitalTitle}/><p className="body-copy limited-copy">{t.digitalIntro}</p><ol className="digital-architecture">{t.architecture.map((label,i)=>{const Icon=architectureIcons[i];return <li key={label}><Icon aria-hidden="true" strokeWidth={1.5}/><span>{label}</span>{i<5&&<ArrowRight className="flow-arrow" aria-hidden="true"/>}</li>;})}</ol><ul className="digital-modules">{t.modules.map(x=><li key={x}>{x}</li>)}</ul><div className="prototype-status"><div><p className="eyebrow">{t.statusTitle}</p><h3>{de ? "In Simulationen getestet" : "Tested in simulation"}</h3></div><div>{t.status.map(x=><p key={x}>{x}</p>)}</div></div><div className="decision-path"><p className="eyebrow">{de ? "Daten → Erkenntnis → Entscheidung" : "Data → Insight → Decision"}</p><ol>{t.decision.map((x,i)=><li key={x}><span>{x}</span>{i<4&&<ArrowRight aria-hidden="true" size={18}/>}</li>)}</ol></div></div></section>
  <section className="section research-section" id="research"><div className="section-shell"><SectionHeading label={de ? "Angewandte Forschung" : "Applied research"} title={t.researchTitle}/><p className="body-copy limited-copy">{t.researchIntro}</p><div className="research-grid"><figure className="research-network"><div className="network-brand"><Image src="/images/brand/hydrotex-emblem.png" alt="HydroTex" width={1254} height={1254} sizes="120px" unoptimized/></div><ul>{t.network.map(x=><li key={x}><Network aria-hidden="true" size={24}/>{x}</li>)}</ul><figcaption>{t.geography}<br/>{de ? "Thematisches Netzwerk · keine Darstellung bestätigter Einzelpartnerschaften" : "Conceptual network · not a representation of confirmed individual partnerships"}</figcaption></figure><article className="collaboration-card"><p className="eyebrow">{de ? "Forschung · Wissenstransfer" : "Research · knowledge transfer"}</p><h3>{t.collaborationTitle}</h3>{t.collaboration.map(x=><p key={x}>{x}</p>)}</article></div><div className="partner-grid">{shared.partners.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><Link className="text-link" href={partnerPath(locale)}>{shared.partnersLink}<span aria-hidden="true">→</span></Link></div></section>
  <section className="section soft-section" id="development-roadmap"><div className="section-shell"><SectionHeading label={de ? "Schrittweise Validierung" : "Stepwise validation"} title={t.roadmapTitle}/><p className="body-copy limited-copy">{de ? "Simulationen bilden den digitalen Ausgangspunkt. Physische Laborvalidierung ist der nächste Meilenstein; Pilot und industrielle Anwendung sind zukünftige Schritte." : "Simulation provides the digital starting point. Physical laboratory validation is the next milestone; pilot and industrial application are future steps."}</p><div className="development-tracks">{[t.physical,t.digital].map((track,row)=><article key={row}><h3>{t.tracks[row]}</h3><ol>{track.map((x,i)=>{const state=row===0?(i===0?0:i===1?1:2):(i<2?0:i===2?1:2);return <li key={x} data-state={state}><span className="roadmap-state">{t.states[state]}</span><strong>{x}</strong></li>;})}</ol></article>)}</div></div></section>
  <section className="section company-about" id="about"><span className="anchor-alias" id="company-formation"/><div className="section-shell"><SectionHeading label="HydroTex UG (haftungsbeschränkt)" title={t.aboutTitle}/><div className="about-grid"><div>{t.about.map(x=><p className="body-copy" key={x}>{x}</p>)}</div><aside className="company-record"><h3>HydroTex UG (haftungsbeschränkt)</h3><p>HRB 736772 · Amtsgericht Freiburg</p><p>Glottertalstraße 13<br/>79271 St. Peter<br/>Baden-Württemberg · {de ? "Deutschland" : "Germany"}</p><a className="text-link" href="mailto:contact@hydrotex.eu">contact@hydrotex.eu</a></aside></div></div></section>
 </>;
}
