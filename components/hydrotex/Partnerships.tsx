import { content, partnerPath, type Locale } from "./content";
import { Header } from "./Header";
import { CTA, Footer, SectionHeading } from "./Sections";
import { pageMetadata } from "./metadata";
const details = {
 en: {
  label:"Projects & partnerships", title:"A shared pathway from laboratory insight to industrial validation.",
  intro:"HydroTex connects environmental engineering in Germany with academic cooperation and planned real-wastewater validation in Malaysia. The next steps depend on suitable samples, partners and support.",
  status:"Current development status", statusTitle:"Building a sound basis for the next stage.",
  statusCopy:"HydroTex is a Germany-based environmental engineering initiative in structured development and startup preparation. Business planning and viability assessment are being prepared with IHK support.",
  malaysia:"Why Malaysia?", malaysiaTitle:"Industrial relevance. Academic access. Regional experience.",
  reasons:["An existing textile-related and industrial ecosystem.","More than 15 years of the founder’s professional experience and network in Malaysia.","An academic collaboration basis with Universiti Sains Malaysia.","Access to wider Southeast Asian markets, with Indonesia, Vietnam and neighbouring markets as potential later applications.","A practical setting for real-wastewater validation, stakeholder learning and pilot preparation."],
  roadmapLabel:"Validation roadmap", roadmapTitle:"From early proof of concept to pilot preparation.",
  roadmapIntro:"Early laboratory results are a starting point. Real industrial wastewater validation is required before stronger technical or commercial claims can be made.",
  roadmap:[
   ["Laboratory proof of concept","Initial work with synthetic textile wastewater has shown promising colour reduction under selected conditions. These findings require validation with real industrial wastewater."],
   ["Real-wastewater validation","Evaluate removal performance, phase separation, solvent stability and losses, repeated regeneration, secondary waste streams, sludge burden and resource use with real samples."],
   ["Pilot preparation with partners","Prepare sampling plans, KPIs, process concepts, operating-cost assumptions, budgets and technical documentation. Evaluate scale-up conditions and possible Letters of Intent."],
   ["Application and implementation","If validation succeeds, develop modular treatment concepts and commercialisation pathways from Germany, with local partners for application and service. No commercially proven industrial system is implied."]
  ],
  impact:"Environmental objectives", impactTitle:"Resource efficiency across textile supply chains.",
  impactCopy:"The development pathway addresses cleaner production and environmental performance. Potential benefits remain subject to technical validation and local application conditions.",
  impacts:["Improved industrial wastewater management and reduced pollutant loads.","Potential sludge reduction and resource-efficient treatment.","Water reuse where treatment quality and local conditions allow.","Capacity building through workshops, training and university–industry exchange.","Relevance to SDG 6, 9, 12 and 13: water, industry, responsible production and climate action."],
  baseTitle:"Germany as the development base", base:"Engineering, know-how, intellectual property, data analysis and technology development remain centred in Germany.",
  regionTitle:"Malaysia as the first validation region", region:"Academic collaboration, industrial relevance and regional experience provide a basis for planned learning, real-wastewater evaluation and pilot preparation.",
  docs:"Partner documentation", docsTitle:"A technical conversation starts with the right information.", docsCopy:"Concept notes and validation documents are available on request. Sensitive partner documents, including Letters of Intent, are shared only when cleared for publication.", request:"Request information"
 },
 de: {
  label:"Projekte & Kooperationen", title:"Gemeinsam vom Labor zur industriellen Validierung.",
  intro:"HydroTex verbindet Umwelttechnik in Deutschland mit akademischer Zusammenarbeit und geplanter Abwasservalidierung in Malaysia. Die nächsten Schritte setzen geeignete Proben, Partner und Unterstützung voraus.",
  status:"Aktueller Entwicklungsstand", statusTitle:"Eine belastbare Grundlage für den nächsten Schritt.",
  statusCopy:"HydroTex ist eine in Deutschland angesiedelte Umwelttechnikinitiative in strukturierter Entwicklung und Gründungsvorbereitung. Businessplanung und Tragfähigkeitsbewertung werden mit IHK-Unterstützung vorbereitet.",
  malaysia:"Warum Malaysia?", malaysiaTitle:"Industrielle Relevanz. Hochschulzugang. Regionale Erfahrung.",
  reasons:["Ein bestehendes textiles und industrielles Umfeld.","Mehr als 15 Jahre Berufserfahrung und ein gewachsenes Netzwerk des Gründers in Malaysia.","Eine akademische Kooperationsbasis mit der Universiti Sains Malaysia.","Zugang zu weiteren südostasiatischen Märkten; Indonesien, Vietnam und Nachbarländer kommen als spätere Anwendungsregionen infrage.","Ein praxisnahes Umfeld für reale Abwassertests, fachlichen Austausch und Pilotvorbereitung."],
  roadmapLabel:"Validierungspfad", roadmapTitle:"Vom frühen Machbarkeitsnachweis zur Pilotvorbereitung.",
  roadmapIntro:"Erste Laborergebnisse sind ein Ausgangspunkt. Vor weitergehenden technischen oder kommerziellen Aussagen ist die Validierung mit realem Industrieabwasser erforderlich.",
  roadmap:[
   ["Machbarkeitsnachweis im Labor","Erste Untersuchungen mit synthetischem Textilabwasser zeigten unter ausgewählten Bedingungen vielversprechende Entfärbung. Diese Ergebnisse müssen mit realem Industrieabwasser überprüft werden."],
   ["Validierung mit realem Abwasser","Reinigungsleistung, Phasentrennung, Lösungsmittelstabilität und -verluste, wiederholte Regeneration, sekundäre Abfallströme, Schlammbelastung und Ressourcenbedarf anhand realer Proben bewerten."],
   ["Pilotvorbereitung mit Partnern","Probenpläne, KPIs, Prozesskonzepte, Betriebskostenannahmen, Budgets und technische Unterlagen erarbeiten. Voraussetzungen für die Skalierung und mögliche Absichtserklärungen prüfen."],
   ["Anwendung und Umsetzung","Bei erfolgreicher Validierung modulare Behandlungskonzepte und Verwertungswege von Deutschland aus entwickeln, mit lokalen Partnern für Anwendung und Service. Ein industriell bewährtes System wird damit nicht vorausgesetzt."]
  ],
  impact:"Umweltziele", impactTitle:"Ressourceneffizienz entlang textiler Lieferketten.",
  impactCopy:"Der Entwicklungspfad adressiert eine umweltschonendere Produktion und eine verbesserte Umweltleistung. Mögliche Vorteile sind technisch und unter den jeweiligen Anwendungsbedingungen zu validieren.",
  impacts:["Verbessertes industrielles Abwassermanagement und geringere Schadstofffrachten.","Potenzielle Schlammreduktion und ressourceneffiziente Behandlung.","Wasserwiederverwendung, sofern Wasserqualität und örtliche Bedingungen dies zulassen.","Wissenstransfer durch Workshops, Schulungen und den Austausch zwischen Hochschulen und Industrie.","Bezug zu SDG 6, 9, 12 und 13: Wasser, Industrie, verantwortungsvolle Produktion und Klimaschutz."],
  baseTitle:"Deutschland als Entwicklungsbasis", base:"Engineering, Know-how, geistiges Eigentum, Datenanalyse und Technologieentwicklung bleiben in Deutschland verankert.",
  regionTitle:"Malaysia als erste Validierungsregion", region:"Akademische Zusammenarbeit, industrielle Relevanz und regionale Erfahrung bilden die Grundlage für geplante Abwassertests, gemeinsames Lernen und Pilotvorbereitung.",
  docs:"Projekt- und Partnerunterlagen", docsTitle:"Ein Fachgespräch beginnt mit den richtigen Informationen.", docsCopy:"Konzeptpapiere und Validierungsunterlagen sind auf Anfrage erhältlich. Sensible Partnerdokumente, einschließlich Letters of Intent, werden nur nach entsprechender Freigabe veröffentlicht.", request:"Informationen anfragen"
 }
};
export function partnershipMetadata(locale: Locale) {
 const t=details[locale]; return pageMetadata(locale,partnerPath(locale), locale==="de" ? "Projekte & Kooperationen | HydroTex" : "Projects & Partnerships | HydroTex",t.intro,{de:partnerPath("de"),en:partnerPath("en")});
}
export function Partnerships({locale}:{locale:Locale}) {
 const t=details[locale]; const shared=content[locale];
 return <><Header locale={locale} page="partners"/><main id="main" lang={locale}>
  <section className="interior-hero"><div className="section-shell"><p className="eyebrow">{t.label}</p><h1>{t.title}</h1><p className="body-copy">{t.intro}</p><a className="text-link" href="#roadmap">{shared.technicalLink}<span aria-hidden="true">↓</span></a></div></section>
  <section className="section" id="status"><div className="section-shell"><SectionHeading label={t.status} title={t.statusTitle}/><p className="body-copy limited-copy">{t.statusCopy}</p><div className="partner-grid">{shared.partners.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section soft-section"><div className="section-shell two-columns"><SectionHeading label={t.malaysia} title={t.malaysiaTitle}/><ul className="detail-list">{t.reasons.map(reason=><li key={reason}>{reason}</li>)}</ul></div></section>
  <section className="section" id="roadmap"><div className="section-shell"><SectionHeading label={t.roadmapLabel} title={t.roadmapTitle}/><p className="body-copy limited-copy">{t.roadmapIntro}</p><div className="roadmap-grid">{t.roadmap.map(([title,text],i)=><article key={title}><span className="stage-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="section soft-section" id="impact"><div className="section-shell two-columns"><div><SectionHeading label={t.impact} title={t.impactTitle}/><p className="body-copy">{t.impactCopy}</p></div><ul className="detail-list">{t.impacts.map(item=><li key={item}>{item}</li>)}</ul></div></section>
  <section className="section"><div className="section-shell two-columns"><article><h2>{t.baseTitle}</h2><p className="body-copy">{t.base}</p></article><article><h2>{t.regionTitle}</h2><p className="body-copy">{t.region}</p></article></div></section>
  <section className="section soft-section" id="documentation"><div className="section-shell"><SectionHeading label={t.docs} title={t.docsTitle}/><p className="body-copy limited-copy">{t.docsCopy}</p><a href="mailto:contact@hydrotex.eu?subject=HydroTex%20partner%20documentation" className="text-link">{t.request}<span aria-hidden="true">→</span></a></div></section>
  <CTA locale={locale}/></main><Footer locale={locale}/></>;
}
