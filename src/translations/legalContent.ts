export interface LegalDocContent {
  title: string;
  subtitle: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export const legalDocuments: Record<"en" | "it", {
  privacy: LegalDocContent;
  cookies: LegalDocContent;
  terms: LegalDocContent;
}> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      subtitle: "Information on the processing of personal data pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR)",
      sections: [
        {
          heading: "1. Data Controller and Joint Venture Governance",
          paragraphs: [
            "The Data Controller is Nexofarm S.r.l., a life sciences joint venture established between Laboratorio Chimico Farmaceutico A. Sella S.r.l. (registered office in Via Vicenza 67, 36015 Schio, Vicenza, Italy) and Salix S.r.l. (registered office in 36030 Monte di Malo, Vicenza, Italy), hereinafter collectively referred to as 'Nexofarm', 'we', or 'Controller'.",
            "For any inquiry concerning the processing of personal data or to exercise your statutory rights under the GDPR, you may contact our designated Data Protection Officer (DPO) at dpo@nexofarm.com or write to privacy@nexofarm.com."
          ]
        },
        {
          heading: "2. Categories of Personal Data Collected",
          paragraphs: [
            "We collect and process personal data in full compliance with the principles of lawfulness, fairness, transparency, and data minimization. Depending on your interactions with our website and scientific CDMO services, we may collect:",
          ],
          bullets: [
            "Identification and contact details: Full name, professional title, corporate affiliation, business email address, telephone number, and physical office location.",
            "Inquiry and project details: Information provided in contact forms, RFPs, technical questions regarding biotechnology, dermocosmetics, nutricosmetics, and CDMO manufacturing.",
            "Technical browsing data: Internet Protocol (IP) addresses, browser type, operating system, referrer URL, pages visited, and date/time of access collected automatically for security and server diagnostics."
          ]
        },
        {
          heading: "3. Legal Bases and Purposes of Processing",
          paragraphs: [
            "Your personal data is processed solely for the following explicit and legitimate purposes:",
          ],
          bullets: [
            "Pre-contractual and scientific response (Art. 6(1)(b) GDPR): To evaluate formulation requests, provide CDMO technical feasibility reports, and respond to communications initiated by you.",
            "Legal and regulatory obligations (Art. 6(1)(c) GDPR): To comply with mandatory European and Italian statutory duties, including pharmaceutical safety, cosmetovigilance, and fiscal accounting obligations.",
            "Legitimate interest of the Controller (Art. 6(1)(f) GDPR): To safeguard the security, stability, and integrity of our digital infrastructure, and to prevent fraudulent activities.",
            "Direct B2B communication and newsletters (Art. 6(1)(a) GDPR): Subject to your optional and explicit consent, to send institutional scientific updates, industry symposium invitations, and technical publications."
          ]
        },
        {
          heading: "4. Data Retention Periods",
          paragraphs: [
            "Personal data is retained only for the duration strictly necessary to fulfill the specific purposes for which it was collected:",
          ],
          bullets: [
            "Contact form submissions and pre-contractual inquiries: Retained for up to 24 months from the last substantive contact, unless a commercial contract is executed.",
            "Contractual, administrative, and accounting records: Retained for 10 years in compliance with the Italian Civil Code and fiscal laws.",
            "Technical web server logs: Retained for a maximum of 30 days for cybersecurity analysis, after which they are automatically anonymized or purged."
          ]
        },
        {
          heading: "5. Data Transfers and Processors",
          paragraphs: [
            "Your personal data is hosted on secure servers located within the European Economic Area (EEA). Data is shared exclusively with authorized internal staff bound by confidentiality obligations and verified third-party Data Processors (Art. 28 GDPR) providing IT infrastructure, cloud hosting, and analytical tooling.",
            "No personal data is sold, rented, or transferred to third parties outside the EEA without appropriate safeguards conforming to Chapter V of the GDPR (such as EU Standard Contractual Clauses)."
          ]
        },
        {
          heading: "6. Rights of the Data Subject (Articles 15–22 GDPR)",
          paragraphs: [
            "As an individual residing in the European Union or accessing our European services, you hold the following non-negotiable statutory rights:",
          ],
          bullets: [
            "Right of Access (Art. 15): Request confirmation of whether your data is being processed and obtain a copy thereof.",
            "Right to Rectification (Art. 16): Request the prompt correction of inaccurate or outdated personal data.",
            "Right to Erasure ('Right to be Forgotten', Art. 17): Request deletion of your data when no longer necessary for original purposes.",
            "Right to Restriction of Processing (Art. 18): Restrict processing under statutory conditions.",
            "Right to Data Portability (Art. 20): Receive your data in a structured, commonly used, machine-readable format.",
            "Right to Object (Art. 21): Object to processing grounded in legitimate interest or direct marketing at any time.",
            "Right to Lodge a Complaint: Submit a formal complaint to the Italian Data Protection Supervisory Authority (Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Rome, www.garanteprivacy.it) or your local EU supervisory authority."
          ]
        }
      ]
    },
    cookies: {
      title: "Cookie Policy",
      subtitle: "Extended information on cookies and tracking technologies pursuant to the Guidelines of the Italian Garante Privacy of June 10, 2021, and Directive 2002/58/EC",
      sections: [
        {
          heading: "1. What are Cookies and Tracking Technologies?",
          paragraphs: [
            "Cookies are small text strings that websites visited by users store on their client devices (computers, tablets, smartphones) to be retransmitted to the same sites on subsequent visits.",
            "Nexofarm employs cookies strictly in compliance with the Guidelines of the Italian Data Protection Authority (Garante per la protezione dei dati personali) adopted on June 10, 2021, ensuring total transparency and user control."
          ]
        },
        {
          heading: "2. Types of Cookies Used on This Website",
          paragraphs: [
            "Our website classifies cookies into three distinct categories:",
          ],
          bullets: [
            "Technical and Strictly Necessary Cookies: Essential for browsing, load balancing, SSL encryption, session continuity, language preference storage (EN/IT), and recording your cookie consent state. These cookies do not require prior consent under Art. 122(1) of the Italian Privacy Code.",
            "Analytical and Performance Cookies: Used in aggregate form to measure traffic volume and user navigation paths to improve page speed and layout. Analytical tools are configured with IP anonymization (masking the last octet) to prevent individual profiling.",
            "Marketing and Profiling Cookies: Optional trackers intended to create browsing profiles to present tailored scientific webinars, B2B services, or communications. These cookies are deactivated by default and are ONLY installed with your explicit, affirmative opt-in consent."
          ]
        },
        {
          heading: "3. Granular Cookie Inventory",
          paragraphs: [
            "Below is the inventory of active cookies implemented across the Nexofarm digital domain:",
          ],
          bullets: [
            "'nexofarm_lang' (Technical / 1st Party): Stores chosen display language (English or Italian). Duration: 12 months.",
            "'nexofarm_cookie_consent_v1' (Technical / 1st Party): Records cookie choices made via the consent banner. Duration: 6 months.",
            "'_ga', '_ga_*' (Analytical / 1st-3rd Party, Optional): Generates anonymized visitor counts and traffic sources. Duration: 14 months.",
            "'__cf_bm' (Security / Technical): Cloudflare bot management and DDOS mitigation. Duration: 30 minutes."
          ]
        },
        {
          heading: "4. Managing and Revoking Cookie Consent",
          paragraphs: [
            "You have complete autonomy over your cookie choices at all times. You can open our Cookie Consent Center at any time by clicking the 'Cookie Preferences' link in the website footer to modify or withdraw your preferences without affecting your ability to browse the website.",
            "Furthermore, you may configure your browser settings to reject cookies entirely. Note that disabling technical cookies may impair the responsiveness and display formatting of the site."
          ]
        }
      ]
    },
    terms: {
      title: "Terms and Conditions of Use",
      subtitle: "Legal conditions governing the access, navigation, and consultation of the Nexofarm institutional portal",
      sections: [
        {
          heading: "1. Acceptance of Terms and Corporate Scope",
          paragraphs: [
            "Welcome to the official institutional website of Nexofarm S.r.l., a joint venture between Laboratorio Chimico Farmaceutico A. Sella S.r.l. and Salix S.r.l. (hereinafter 'Nexofarm').",
            "By accessing, browsing, or utilizing this website, you explicitly acknowledge and agree to comply with these Terms and Conditions of Use and all applicable laws and regulations. If you do not accept these terms, you are invited to cease browsing immediately."
          ]
        },
        {
          heading: "2. Intellectual and Industrial Property Rights",
          paragraphs: [
            "All content displayed on this website—including but not limited to brand names, logos ('Nexofarm', 'Sella', 'Salix'), laboratory imagery, 3D renderings, scientific graphics, videos, codebases, text, and layout architectures—is the exclusive intellectual property of Nexofarm or its founding partners and is protected by Italian Legislative Decree 30/2005 (Industrial Property Code), Italian Copyright Law (Law 633/1941), and international intellectual property treaties.",
            "Any reproduction, modification, distribution, public transmission, or unauthorized harvesting of content without prior express written consent from Nexofarm is strictly prohibited."
          ]
        },
        {
          heading: "3. Scientific and B2B Informational Disclaimer",
          paragraphs: [
            "The information provided on this portal is strictly intended for B2B industrial, scientific, and professional audiences (pharmaceutical executives, cosmetic brand managers, regulatory specialists, researchers).",
            "Under no circumstances should content on this website be construed as medical diagnosis, prescription advice, or direct healthcare treatment recommendation. Inquiries concerning pharmaceutical products or dietary supplements must be directed to licensed medical practitioners or pharmacists."
          ]
        },
        {
          heading: "4. Prohibited Uses",
          paragraphs: [
            "Users agree not to utilize the portal for any unlawful purpose or in any manner that could disable, damage, or compromise the stability of our servers. Specifically prohibited activities include:",
          ],
          bullets: [
            "Deploying scraping bots, automated extractors, or data-mining utilities without prior written authorization.",
            "Injecting malicious scripts, trojans, denial-of-service payloads, or unauthorized penetration test vectors.",
            "Impersonating corporate officers, scientists, or representatives of Sella Farmaceutici, Salix, or Nexofarm."
          ]
        },
        {
          heading: "5. Governing Law and Exclusive Jurisdiction",
          paragraphs: [
            "These Terms and Conditions of Use and any non-contractual obligations arising out of or in connection with them are exclusively governed by the substantive and procedural laws of the Republic of Italy.",
            "Any dispute, controversy, or claim arising from the interpretation, validity, or execution of these Terms shall be submitted to the exclusive jurisdiction of the Court of Vicenza (Tribunale di Vicenza), Italy."
          ]
        }
      ]
    }
  },
  it: {
    privacy: {
      title: "Informativa sulla Privacy",
      subtitle: "Informativa sul trattamento dei dati personali ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR)",
      sections: [
        {
          heading: "1. Titolare del Trattamento e Governance della Joint Venture",
          paragraphs: [
            "Il Titolare del Trattamento è Nexofarm S.r.l., joint venture nel settore delle Life Sciences costituita tra Laboratorio Chimico Farmaceutico A. Sella S.r.l. (sede legale in Via Vicenza 67, 36015 Schio, Vicenza) e Salix S.r.l. (sede legale in 36030 Monte di Malo, Vicenza), di seguito congiuntamente indicati come 'Nexofarm' o 'Titolare'.",
            "Per qualsiasi richiesta riguardante il trattamento dei dati personali o per l'esercizio dei diritti garantiti dal GDPR, è possibile contattare il Responsabile della Protezione dei Dati (DPO) all'indirizzo dpo@nexofarm.com oppure scrivere all'indirizzo privacy@nexofarm.com."
          ]
        },
        {
          heading: "2. Categorie di Dati Personali Trattati",
          paragraphs: [
            "Raccogliamo e trattiamo i dati personali nel pieno rispetto dei principi di liceità, correttezza, trasparenza e minimizzazione. A seconda delle modalità di interazione con il nostro portale e i servizi CDMO, possono essere trattati:",
          ],
          bullets: [
            "Dati identificativi e di contatto: Nome, cognome, titolo professionale, ragione sociale dell'azienda di appartenenza, indirizzo email aziendale, recapito telefonico e sede legale.",
            "Dati relativi alle richieste e ai progetti: Informazioni fornite nei moduli di contatto, richieste di quotazione (RFP), quesiti tecnici su biotecnologie, dermocosmesi, nutricosmetica e produzione conto terzi.",
            "Dati tecnici di navigazione: Indirizzi IP, tipologia di browser, sistema operativo, URL di provenienza, pagine consultate e orari di accesso raccolti automaticamente per ragioni di sicurezza e diagnostica sistemistica."
          ]
        },
        {
          heading: "3. Basi Giuridiche e Finalità del Trattamento",
          paragraphs: [
            "I dati personali sono trattati esclusivamente per le seguenti finalità legittime:",
          ],
          bullets: [
            "Esecuzione di misure precontrattuali e risposta tecnica (art. 6, par. 1, lett. b, GDPR): Valutare richieste formulatrici, redigere report di fattibilità CDMO e riscontrare le comunicazioni inviate dall'utente.",
            "Adempimento di obblighi legali e regolatori (art. 6, par. 1, lett. c, GDPR): Ottemperare a normative comunitarie e nazionali obbligatorie, inclusi gli obblighi di farmacovigilanza, cosmetovigilanza e adempimenti fiscali.",
            "Legittimo interesse del Titolare (art. 6, par. 1, lett. f, GDPR): Garantire la resilienza, sicurezza informatica e protezione delle infrastrutture digitali aziendali contro frodi e attacchi cyber.",
            "Comunicazioni scientifiche e commerciali B2B (art. 6, par. 1, lett. a, GDPR): Previo consenso esplicito e facoltativo, per l'invio di newsletter istituzionali, inviti a convegni del settore e report scientifici."
          ]
        },
        {
          heading: "4. Periodo di Conservazione dei Dati",
          paragraphs: [
            "I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti:",
          ],
          bullets: [
            "Dati inviati tramite form di contatto: Conservati per un massimo di 24 mesi dall'ultima interazione, salvo instaurazione di un rapporto contrattuale.",
            "Dati contrattuali, amministrativi e contabili: Conservati per 10 anni in conformità all'art. 2220 del Codice Civile italiano e alle normative fiscali vigenti.",
            "Log di sistema e dati di navigazione: Conservati per un massimo di 30 giorni a fini di sicurezza informatica e successivamente cancellati o resi anonimi."
          ]
        },
        {
          heading: "5. Destinatari dei Dati e Trasferimenti Extra-UE",
          paragraphs: [
            "I dati personali sono ospitati su infrastrutture cloud sicure residenti nello Spazio Economico Europeo (SEE). I dati possono essere comunicati unicamente a personale interno autorizzato e a Responsabili del Trattamento designati ai sensi dell'art. 28 GDPR (fornitori di hosting, manutenzione IT, consulenti legali).",
            "Nessun dato viene venduto o trasferito al di fuori dello Spazio Economico Europeo senza le garanzie adeguate di cui al Capo V del GDPR (quali Clausole Contrattuali Standard approvate dalla Commissione UE)."
          ]
        },
        {
          heading: "6. Diritti dell'Interessato (Artt. 15–22 GDPR)",
          paragraphs: [
            "In qualità di interessato, la legge le riconosce i seguenti diritti azionabili in qualsiasi momento e a titolo gratuito:",
          ],
          bullets: [
            "Diritto di Accesso (art. 15): Ottenere la conferma che sia o meno in corso un trattamento di dati personali e riceverne copia.",
            "Diritto di Rettifica (art. 16): Richiedere la correzione di dati inesatti o l'integrazione di quelli incompleti.",
            "Diritto alla Cancellazione ('Diritto all'Oblio', art. 17): Ottenere la cancellazione dei dati personali non più necessari.",
            "Diritto di Limitazione (art. 18): Richiedere la sospensione temporanea del trattamento nei casi previsti dalla legge.",
            "Diritto alla Portabilità (art. 20): Ricevere i dati personali in un formato strutturato, di uso comune e leggibile da dispositivo automatico.",
            "Diritto di Opposizione (art. 21): Opporsi in qualsiasi momento al trattamento fondato sul legittimo interesse o per finalità promozionali.",
            "Diritto di Reclamo: Proporre reclamo formale all'Autorità Garante per la Protezione dei Dati Personali (Piazza Venezia 11, 00187 Roma, protocollo@gpdp.it, www.garanteprivacy.it)."
          ]
        }
      ]
    },
    cookies: {
      title: "Informativa Estesa sui Cookie",
      subtitle: "Informativa conforme alle Linee Guida del Garante Privacy del 10 giugno 2021 e alla Direttiva 2002/58/CE (ePrivacy)",
      sections: [
        {
          heading: "1. Cosa sono i Cookie e le Tecnologie di Tracciamento?",
          paragraphs: [
            "I cookie sono stringhe di testo di piccole dimensioni che i siti visitati dall'utente inviano al suo terminale (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.",
            "Nexofarm impiega i cookie nel rigoroso rispetto delle Linee Guida in materia di cookie e altri strumenti di tracciamento emanate dal Garante per la protezione dei dati personali il 10 giugno 2021 (G.U. n. 163 del 9 luglio 2021)."
          ]
        },
        {
          heading: "2. Categorie di Cookie Utilizzati dal Sito",
          paragraphs: [
            "Questo portale suddivide gli strumenti di tracciamento in tre categorie ben definite:",
          ],
          bullets: [
            "Cookie Tecnici e Strettamente Necessari: Indispensabili per consentire la navigazione, la corretta visualizzazione delle pagine, la sicurezza informatica e la memorizzazione della lingua preferita (EN/IT) e del consenso espresso. Ai sensi dell'art. 122, comma 1 del Codice Privacy, non richiedono il preventivo consenso dell'utente.",
            "Cookie Analitici e di Misurazione: Utilizzati in forma aggregata e anonimizzata per conteggiare gli accessi e analizzare la navigazione ai fini di ottimizzazione tecnica. L'indirizzo IP dell'utente viene mascherato per impedire l'identificazione diretta.",
            "Cookie di Profilazione e Marketing: Destinati a ricondurre all'utente specifici comportamenti di navigazione al fine di mostrare contenuti personalizzati. Sono disattivati per impostazione predefinita e vengono installati ESCLUSIVAMENTE previo consenso libero ed esplicito dell'utente."
          ]
        },
        {
          heading: "3. Registro dei Cookie Attivi",
          paragraphs: [
            "Di seguito si riporta l'inventario dei cookie gestiti dal sito Nexofarm:",
          ],
          bullets: [
            "'nexofarm_lang' (Tecnico / Prima Parte): Memorizza la selezione della lingua (Italiano o Inglese). Durata: 12 mesi.",
            "'nexofarm_cookie_consent_v1' (Tecnico / Prima Parte): Registra le preferenze sul consenso ai cookie. Durata: 6 mesi.",
            "'_ga', '_ga_*' (Analitico / Anonimizzato, Facoltativo): Statistiche aggregate sulle visite. Durata: 14 mesi.",
            "'__cf_bm' (Tecnico / Terza Parte Sicurezza): Mitigazione bot e protezione perimetrale Cloudflare. Durata: 30 minuti."
          ]
        },
        {
          heading: "4. Gestione e Revoca del Consenso",
          paragraphs: [
            "L'utente può in qualsiasi momento rivedere o modificare le proprie scelte cliccando sul link 'Preferenze Cookie' presente nel footer del sito.",
            "È inoltre sempre possibile disattivare o cancellare i cookie attraverso le impostazioni del proprio browser internet (Chrome, Safari, Firefox, Edge). La disattivazione dei cookie tecnici potrebbe compromettere la corretta visualizzazione di alcune sezioni del sito."
          ]
        }
      ]
    },
    terms: {
      title: "Termini e Condizioni di Utilizzo",
      subtitle: "Disciplina legale per l'accesso, la consultazione e l'uso del portale istituzionale Nexofarm",
      sections: [
        {
          heading: "1. Oggetto e Accettazione delle Condizioni",
          paragraphs: [
            "Benvenuti sul sito istituzionale di Nexofarm S.r.l., joint venture promossa da Laboratorio Chimico Farmaceutico A. Sella S.r.l. e Salix S.r.l. (di seguito 'Nexofarm').",
            "La navigazione e la consultazione di questo portale implicano l'integrale accettazione dei presenti Termini e Condizioni d'Uso. Qualora l'utente non intenda accettare tali condizioni, è invitato a interrompere immediatamente la navigazione."
          ]
        },
        {
          heading: "2. Proprietà Intellettuale e Industriale",
          paragraphs: [
            "Tutti i contenuti presenti sul sito—inclusi a titolo esemplificativo marchi, loghi ('Nexofarm', 'Sella', 'Salix'), immagini di laboratorio, render tridimensionali, testi scientifici, codice sorgente, video e architetture grafiche—sono di proprietà esclusiva di Nexofarm e delle società fondatrici e sono protetti dal Codice della Proprietà Industriale (D.Lgs. 30/2005) e dalla Legge sul Diritto d'Autore (L. 633/1941).",
            "È severamente vietata la riproduzione, duplicazione, diffusione o utilizzo commerciale di qualsiasi elemento senza la preventiva autorizzazione scritta di Nexofarm."
          ]
        },
        {
          heading: "3. Destinazione d'Uso e Disclaimer Scientifico B2B",
          paragraphs: [
            "I contenuti e le informazioni tecniche presenti su questo portale sono destinati a operatori economici B2B, scienziati, farmacisti e professionisti dei settori farmaceutico, cosmetico e nutraceutico.",
            "Nessuna informazione presente sul sito deve essere interpretata come consulto medico, diagnosi clinica o prescrizione farmacologica. Per qualsiasi problematica di salute è sempre necessario consultare il proprio medico o farmacista."
          ]
        },
        {
          heading: "4. Condotte Vietate",
          paragraphs: [
            "L'utente si impegna a consultare il sito nel rispetto della legalità e dei principi di correttezza. È espressamente vietato:",
          ],
          bullets: [
            "L'uso di web scraper, crawler o sistemi automatizzati di estrazione dati senza autorizzazione scritta.",
            "Il compimento di azioni volte a compromettere la sicurezza informatica, la stabilità o l'integrità dei server.",
            "L'impersonificazione di personale, scienziati o rappresentanti legali delle società del gruppo."
          ]
        },
        {
          heading: "5. Legge Applicabile e Foro Esclusivo Competente",
          paragraphs: [
            "I presenti Termini e Condizioni sono regolati dalla legge sostanziale e processuale della Repubblica Italiana.",
            "Per qualsiasi controversia relativa all'interpretazione, validità, efficacia o esecuzione dei presenti termini, sarà competente in via esclusiva ed inderogabile il Tribunale di Vicenza."
          ]
        }
      ]
    }
  }
};
