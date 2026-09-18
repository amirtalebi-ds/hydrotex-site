export type Locale = "de" | "en";
export const homePath = (locale: Locale) => locale === "de" ? "/" : "/en";
export const partnerPath = (locale: Locale) => locale === "de" ? "/international-partnerships" : "/en/international-partnerships";
export const content = {
  en: {
    nav: ["Solutions", "Technology", "Projects & Collaborations", "About", "Contact"],
    discuss: "Discuss a project", explore: "Discover our approach", menu: "Menu", close: "Close menu",
    headline: "Intelligent solutions for industrial wastewater.",
    intro: "HydroTex develops and validates resource-efficient solutions for industrial wastewater, combining environmental engineering, process evaluation and data-driven optimisation.",
    focus: "Current focus: dye-rich textile wastewater, resource-efficient treatment and circular process concepts.",
    approachLabel: "From assessment to implementation",
    approach: "Turning wastewater challenges into engineered decisions.",
    stages: [
      ["Assess", "Wastewater characterisation, treatment challenges, environmental performance and feasibility."],
      ["Validate", "Laboratory validation, process evaluation, techno-economic analysis and pilot preparation."],
      ["Engineer", "Customer-specific process concepts, pilot engineering, optimisation and implementation support."]
    ],
    technologyLabel: "Current technology focus", technology: "Smarter treatment of dye-rich textile wastewater.",
    technologyCopy: "HydroTex is investigating a regenerable extraction and separation approach for dye-rich textile wastewater. Laboratory findings provide a starting point; real-wastewater validation and scale-up evaluation remain part of the development pathway.",
    themes: ["Sludge reduction", "Resource recovery", "Process efficiency"],
    flow: ["Textile wastewater", "Selective extraction / separation", "Regeneration & recovery", "Water reuse / reduced sludge load"],
    flowNote: "Development concept · Results must be validated",
    criteria: "Validation considers phase separation, solvent stability and losses, secondary waste streams, regeneration, sludge implications and operating costs.",
    technicalLink: "Explore the validation pathway",
    why: "Engineering, environmental insight and data in one workflow.",
    pillars: [
      ["Lower-sludge pathways", "Reducing dependence on sludge-intensive treatment where technically feasible."],
      ["Circular process thinking", "Recovery and regeneration considered from the beginning."],
      ["Data-driven evaluation", "Performance, operating conditions and economics assessed together."],
      ["Industry-specific engineering", "Solutions adapted to wastewater composition and operating reality, with each process evaluated in its industrial context."]
    ],
    intelligenceLabel: "Process intelligence", intelligence: "From treatment data to better operating decisions.",
    intelligenceCopy: "HydroTex is developing a digital layer for process monitoring, environmental data analysis and optimisation. As laboratory and pilot data grow, predictive models can support operating decisions and future process automation.",
    dataSteps: ["Laboratory & pilot data", "Process evaluation", "Operating decisions"],
    dataInputs: ["Water composition", "Operating conditions", "Resource use"],
    concept: "Conceptual workflow · no performance data",
    internationalLabel: "Engineered in Germany · validated with international partners",
    international: "German environmental engineering with international application.",
    internationalNote: "Germany is the engineering and development base. International real-wastewater validation is being prepared with suitable academic and industrial partners.",
    germany: "Germany", internationalSide: "International collaboration",
    germanyItems: ["Engineering", "Project development", "Data analysis", "Technology development"],
    internationalItems: ["Industrial wastewater access", "University cooperation", "Field validation", "Pilot projects"],
    partnersLabel: "Collaboration & development", partnersTitle: "Building the conditions for meaningful validation.",
    partners: [
      ["Academic collaboration", "Collaboration with Universiti Sains Malaysia is documented by a Letter of Intent."],
      ["Ecosystem support", "Business model and pitch development through EXI.green / Grünhof support; business planning and viability assessment with IHK support."],
      ["Industrial validation", "Seeking suitable industrial wastewater samples and partners for real-wastewater testing and pilot preparation."],
      ["Technology & environmental dialogue", "Open to technical cooperation and dialogue with environmental authorities around validation and application requirements."]
    ],
    partnersLink: "Projects & partnerships",
    founderRole: "Founder · Environmental Technology",
    founderCopy: "Environmental engineer specialising in wastewater treatment, resource recovery and environmental systems analysis, with international academic and industrial experience across Germany, Southeast Asia and Europe.",
    founderLink: "Founder profile",
    cta: "Have an industrial wastewater challenge?",
    ctaCopy: "Let’s examine whether HydroTex can help turn it into a technically and economically viable treatment pathway.",
    footer: "Environmental engineering. Resource-efficient pathways. Intelligent water solutions.",
    legal: ["Imprint", "Privacy"], location: "Freiburg, Germany", skip: "Skip to content"
  },
  de: {
    nav: ["Lösungen", "Technologie", "Projekte & Kooperationen", "Über uns", "Kontakt"],
    discuss: "Projekt besprechen", explore: "Unseren Ansatz entdecken", menu: "Menü", close: "Menü schließen",
    headline: "Intelligente Lösungen für industrielle Abwässer.",
    intro: "HydroTex entwickelt und validiert ressourceneffiziente Lösungen für industrielle Abwässer und verbindet Umwelttechnik, Prozessbewertung und datenbasierte Optimierung.",
    focus: "Aktueller Schwerpunkt: farbstoffreiche Textilabwässer, ressourceneffiziente Behandlung und kreislauforientierte Prozesskonzepte.",
    approachLabel: "Von der Bewertung bis zur Umsetzung",
    approach: "Aus Abwasserfragen werden fundierte technische Entscheidungen.",
    stages: [
      ["Bewerten", "Abwassercharakterisierung, Behandlungsanforderungen, Umweltleistung und Machbarkeit."],
      ["Validieren", "Laborvalidierung, Prozessbewertung, techno-ökonomische Analyse und Pilotvorbereitung."],
      ["Entwickeln", "Kundenspezifische Prozesskonzepte, Pilotengineering, Optimierung und Unterstützung bei der Umsetzung."]
    ],
    technologyLabel: "Aktueller Technologieschwerpunkt", technology: "Neue Behandlungswege für farbstoffreiche Textilabwässer.",
    technologyCopy: "HydroTex untersucht einen regenerierbaren Extraktions- und Trennansatz für farbstoffreiche Textilabwässer. Laborergebnisse bilden den Ausgangspunkt; die Validierung mit realem Abwasser und die Bewertung der Skalierbarkeit sind weitere Schritte im Entwicklungspfad.",
    themes: ["Schlammreduktion", "Ressourcenrückgewinnung", "Prozesseffizienz"],
    flow: ["Textilabwasser", "Selektive Extraktion / Trennung", "Regeneration & Rückgewinnung", "Wasserwiederverwendung / geringere Schlammbelastung"],
    flowNote: "Entwicklungskonzept · Ergebnisse sind zu validieren",
    criteria: "Die Validierung umfasst Phasentrennung, Lösungsmittelstabilität und -verluste, sekundäre Abfallströme, Regeneration, Schlammbelastung und Betriebskosten.",
    technicalLink: "Zum Validierungspfad",
    why: "Umwelttechnik, Prozessverständnis und Daten in einem Workflow.",
    pillars: [
      ["Schlammärmere Behandlungswege", "Die Abhängigkeit von schlammintensiven Verfahren verringern, wo dies technisch sinnvoll ist."],
      ["Kreislauforientierte Prozesse", "Rückgewinnung und Regeneration von Beginn an mitdenken."],
      ["Datenbasierte Bewertung", "Leistung, Betriebsbedingungen und Wirtschaftlichkeit gemeinsam beurteilen."],
      ["Branchenspezifisches Engineering", "Lösungen an Abwasserzusammensetzung und Betriebsrealität anpassen und im jeweiligen industriellen Kontext bewerten."]
    ],
    intelligenceLabel: "Prozessintelligenz", intelligence: "Von Behandlungsdaten zu besseren Betriebsentscheidungen.",
    intelligenceCopy: "HydroTex entwickelt eine digitale Ebene für Prozessmonitoring, Umweltdatenanalyse und Optimierung. Mit wachsender Labor- und Pilotdatenbasis können prädiktive Modelle Betriebsentscheidungen und eine zukünftige Prozessautomatisierung unterstützen.",
    dataSteps: ["Labor- & Pilotdaten", "Prozessbewertung", "Betriebsentscheidungen"],
    dataInputs: ["Wasserzusammensetzung", "Betriebsbedingungen", "Ressourceneinsatz"],
    concept: "Konzeptioneller Ablauf · keine Leistungsdaten",
    internationalLabel: "In Deutschland entwickelt · mit internationalen Partnern validiert",
    international: "Deutsche Umwelttechnik mit internationaler Anwendung.",
    internationalNote: "Deutschland ist die Basis für Engineering und Entwicklung. Die internationale Validierung mit realem Abwasser wird mit geeigneten Hochschul- und Industriepartnern vorbereitet.",
    germany: "Deutschland", internationalSide: "Internationale Zusammenarbeit",
    germanyItems: ["Engineering", "Projektentwicklung", "Datenanalyse", "Technologieentwicklung"],
    internationalItems: ["Zugang zu Industrieabwasser", "Hochschulkooperation", "Validierung vor Ort", "Pilotprojekte"],
    partnersLabel: "Zusammenarbeit & Entwicklung", partnersTitle: "Die Grundlagen für belastbare Validierung schaffen.",
    partners: [
      ["Akademische Zusammenarbeit", "Die Zusammenarbeit mit der Universiti Sains Malaysia ist durch einen Letter of Intent dokumentiert."],
      ["Unterstützendes Netzwerk", "Geschäftsmodell und Pitch wurden mit EXI.green / Grünhof weiterentwickelt; Businessplanung und Tragfähigkeitsbewertung werden mit IHK-Unterstützung vorbereitet."],
      ["Industrielle Validierung", "Gesucht werden geeignete industrielle Abwasserproben und Partner für reale Abwassertests und Pilotvorbereitung."],
      ["Technischer und behördlicher Austausch", "Offen für technische Kooperation und den Austausch mit Umweltbehörden zu Validierung und Anwendungsanforderungen."]
    ],
    partnersLink: "Projekte & Kooperationen",
    founderRole: "Gründer · Umwelttechnologie",
    founderCopy: "Umweltingenieur mit den Schwerpunkten Abwasserbehandlung, Ressourcenrückgewinnung und Umweltsystemanalyse sowie internationaler Erfahrung in Wissenschaft und Industrie in Deutschland, Südostasien und Europa.",
    founderLink: "Gründerprofil",
    cta: "Industrielle Abwasserherausforderung?",
    ctaCopy: "Lassen Sie uns gemeinsam prüfen, ob HydroTex daraus einen technisch und wirtschaftlich tragfähigen Behandlungsansatz entwickeln kann.",
    footer: "Umwelttechnik. Ressourceneffiziente Prozesse. Intelligente Wasserlösungen.",
    legal: ["Impressum", "Datenschutz"], location: "Freiburg, Deutschland", skip: "Zum Inhalt"
  }
};
