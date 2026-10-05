export interface TranslationType {
  nav: {
    home: string;
    heritage: string;
    expertise: string;
    technology: string;
    process: string;
    certifications: string;
    about: string;
    contact: string;
    ctaContact: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
    badge: string;
  };
  heritage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    sellaTitle: string;
    sellaSubtitle: string;
    sellaDesc: string;
    sellaPoints: string[];
    salixTitle: string;
    salixSubtitle: string;
    salixDesc: string;
    salixPoints: string[];
    synergyTitle: string;
    synergySubtitle: string;
    synergyDesc: string;
    cuoaBadge: string;
  };
  video: {
    eyebrow: string;
    title: string;
    description: string;
    playAria: string;
    tagline: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  expertise: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      category: string;
      description: string;
      features: string[];
    }[];
  };
  certifications: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badges: {
      name: string;
      desc: string;
    }[];
  };
  technology: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
      deliverable: string;
    }[];
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    btnPrimary: string;
    btnSecondary: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    info: {
      r_and_d: string;
      r_and_d_val: string;
      plant: string;
      plant_val: string;
      academic: string;
      academic_val: string;
      email: string;
      phone: string;
      hours: string;
      hours_val: string;
    };
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      interest: string;
      interestOptions: {
        placeholder: string;
        biotech: string;
        dermo: string;
        nutra: string;
        galenic: string;
        cdmo: string;
      };
      message: string;
      messagePlaceholder: string;
      privacyConsent: string;
      privacyLink: string;
      send: string;
      sending: string;
      successTitle: string;
      successDesc: string;
      errorRequired: string;
    };
  };
  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    privacyPolicy: string;
    cookiePolicy: string;
    termsOfUse: string;
    cookieSettings: string;
    rights: string;
    cuoaBadge: string;
    cuoaNote: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    acceptAll: string;
    rejectNonEssential: string;
    customize: string;
    savePreferences: string;
    technicalTitle: string;
    technicalDesc: string;
    technicalAlways: string;
    analyticsTitle: string;
    analyticsDesc: string;
    marketingTitle: string;
    marketingDesc: string;
  };
  legal: {
    privacyTitle: string;
    cookieTitle: string;
    termsTitle: string;
    close: string;
    lastUpdated: string;
  };
}

export const translations: Record<"en" | "it", TranslationType> = {
  en: {
    nav: {
      home: "Home",
      heritage: "Heritage & Synergy",
      expertise: "CDMO Expertise",
      technology: "Technology",
      process: "Process",
      certifications: "Quality Standards",
      about: "About",
      contact: "Contact",
      ctaContact: "Request Consultation",
    },
    hero: {
      eyebrow: "Vicenza, Veneto • Est. 1920 & 1998 • Life Sciences Hub",
      titleLine1: "Century-Old Pharma Heritage.",
      titleLine2: "Next-Gen Biotech Precision.",
      subtitle:
        "Nexofarm unites the century-old pharmaceutical mastery of Sella Farmaceutici (1920) with Salix's high-tech nutraceutical CDMO capabilities (1998) to formulate high-performance biotechnology, dermocosmetics, and health solutions.",
      ctaPrimary: "Explore CDMO Solutions",
      ctaSecondary: "Connect With Our Labs",
      stat1Value: "100+",
      stat1Label: "Years Pharma Heritage",
      stat2Value: "10,000+ m²",
      stat2Label: "Industrial Facility",
      stat3Value: "AIFA / GMP",
      stat3Label: "Certified Quality",
      stat4Value: "100%",
      stat4Label: "Made in Italy Excellence",
      badge: "Sella & Salix Joint Venture",
    },
    heritage: {
      eyebrow: "The Union of Two Italian Legacies",
      title: "Rooted in Tradition. Engineered for the Future.",
      subtitle:
        "Born from a visionary joint venture developed at CUOA Business School, Nexofarm brings together the complementary strengths of two premier industrial champions located in the province of Vicenza, Veneto.",
      sellaTitle: "Laboratorio Farmaceutico Sella",
      sellaSubtitle: "Founded in 1920 · Schio (VI)",
      sellaDesc:
        "Over a century of pharmaceutical history, ethical rigor, and galenic formulation. A revered family-run pillar with deep clinical trust, AIFA pharmaceutical licenses, and renowned OTC and dermomedical care brands.",
      sellaPoints: [
        "100+ years of continuous pharmaceutical production",
        "Official AIFA-authorized GMP manufacturing lines",
        "Historic galenic formulation & dermatological mastery",
        "Rigorous pharmaceutical stability and safety protocols",
      ],
      salixTitle: "Salix S.r.l.",
      salixSubtitle: "Founded in 1998 · Monte di Malo (VI)",
      salixDesc:
        "Over 25 years of cutting-edge contract manufacturing (CDMO) excellence in food supplements, nutraceuticals, and medical devices. An ultra-modern 10,000+ m² automated complex serving global health brands.",
      salixPoints: [
        "High-capacity automated solid and liquid production lines",
        "Pioneering microencapsulation and bioavailability technology",
        "Specialized in medical devices and dietary health foods",
        "Agile R&D and rapid market-readiness scale-up",
      ],
      synergyTitle: "The Nexofarm Synergy",
      synergySubtitle: "The Ultimate 'In & Out' Life Sciences Engine",
      synergyDesc:
        "By merging Sella's century-long galenic rigor with Salix's high-speed nutraceutical CDMO scale, Nexofarm delivers fully integrated solutions: topical high-performance dermocosmetics paired with oral nutricosmetics, all under one roof.",
      cuoaBadge: "Academic Conception: CUOA Business School · Altavilla Vicentina",
    },
    video: {
      eyebrow: "Discover Nexofarm",
      title: "Scientific Rigor Meets Italian Artistry.",
      description:
        "Explore our multidisciplinary laboratories and state-of-the-art facilities in Vicenza, where classical pharmaceutical ethics inspire modern biotechnological innovation.",
      playAria: "Play institutional presentation video",
      tagline: "Watch our institutional presentation",
    },
    about: {
      eyebrow: "About Nexofarm",
      title: "Science, heritage, and industrial mastery working as one.",
      p1: "Nexofarm represents the convergence of high-purity biotechnology, clinical cosmetic science, and advanced nutraceutical manufacturing. We transform scientific research into products that create tangible value for global enterprises and demanding consumers.",
      p2: "Located in the heart of Veneto's Life Sciences and Wellness industrial district, we uphold Italy's celebrated culture of meticulous craftsmanship while driving future-oriented research in green extraction, microbiome care, and bio-fermentation.",
      p3: "Our mission is to serve as Europe's most reliable and technologically advanced CDMO partner, providing end-to-end support from early-stage discovery to international commercial batch release.",
      pillars: [
        {
          title: "Pharmaceutical Ethics",
          description:
            "A foundation of 100+ years of GMP standards, galenic purity, and zero compromise on clinical safety.",
        },
        {
          title: "Biotechnology & Science",
          description:
            "Proprietary microencapsulation, biofermentation, and high-performance active ingredient delivery.",
        },
        {
          title: "Cosmetic & Nutra Elegance",
          description:
            "Formulations that combine profound physiological efficacy with sophisticated Italian sensory luxury.",
        },
        {
          title: "Sustainable Responsibility",
          description:
            "Circular chemistry, upcycled Mediterranean botanicals, energy-efficient production, and eco-certified packaging.",
        },
      ],
    },
    expertise: {
      eyebrow: "Our Core Expertises",
      title: "Four Specialized Disciplines.",
      subtitle:
        "A cohesive ecosystem of services designed to accelerate formulation, clinical substantiation, and industrial manufacturing for domestic and international brands.",
      items: [
        {
          title: "High-Tech Biotechnology",
          category: "Active Ingredient Engineering",
          description:
            "Custom development of bio-fermented actives, biomimetic peptides, and plant stem cell extracts designed to target cellular regeneration and barrier reinforcement.",
          features: [
            "Supercritical CO2 Botanical Extraction",
            "Targeted Microencapsulation & Liposomal Delivery",
            "Cellular Viability & In-Vitro Efficacy Testing",
            "Microbiome-Friendly Active Optimization",
          ],
        },
        {
          title: "Clinical Dermocosmetics",
          category: "Advanced Topical Formulations",
          description:
            "High-performance skincare and dermatological treatments combining pharmaceutical potency with the refined textures demanded by premium global beauty markets.",
          features: [
            "Anti-Aging & Cellular Protection Serums",
            "Barrier Repair & Sensitive Skin Formulations",
            "Dermatologically Tested & Hypoallergenic Lines",
            "Clean Beauty & ECOCERT Compliant Ingredients",
          ],
        },
        {
          title: "Advanced Nutricosmetics",
          category: "Beauty-From-Within & Supplements",
          description:
            "Oral formulations engineered to complement topical treatments, acting systemically to enhance skin elasticity, hair vitality, and cellular defense from within.",
          features: [
            "Ready-to-Drink Liquid Vials & Stick Packs",
            "Slow-Release Multi-Layer Tablets & Softgels",
            "Collagen, Antioxidant & Ceramide Synergies",
            "Clean Label & Plant-Based Formulations",
          ],
        },
        {
          title: "Galenics & Contract CDMO",
          category: "Turnkey Industrial Production",
          description:
            "Comprehensive contract manufacturing services from pilot batches to millions of finished units, backed by complete EU regulatory dossiers and AIFA/GMP compliance.",
          features: [
            "10,000+ m² Automated Production Plant in Vicenza",
            "Full Batch Record Tracing & QC Stability Testing",
            "EU Cosmetic CPNP & Supplement Notification Support",
            "Flexible Batch Sizes with Primary & Secondary Packaging",
          ],
        },
      ],
    },
    certifications: {
      eyebrow: "Quality & Governance",
      title: "World-Class Certifications & Regulatory Standards",
      subtitle:
        "Every batch produced under Nexofarm's roof adheres to the strictest Italian, European, and international health authority standards.",
      badges: [
        {
          name: "GMP / AIFA",
          desc: "Pharmaceutical Good Manufacturing Practice authorized by the Italian Medicines Agency.",
        },
        {
          name: "ISO 22716:2007",
          desc: "International standard for Cosmetic Good Manufacturing Practices (Cosmetics GMP).",
        },
        {
          name: "ISO 9001:2015",
          desc: "Total Quality Management System across research, formulation, and production.",
        },
        {
          name: "ISO 13485:2016",
          desc: "Certified Quality System for Medical Device Design and Manufacturing.",
        },
        {
          name: "Made in Italy",
          desc: "100% verified Italian production within the Veneto Life Sciences cluster.",
        },
        {
          name: "Cleanroom Grade C/D",
          desc: "HEPA-filtered controlled atmosphere environments for sterile & aseptic preparations.",
        },
      ],
    },
    technology: {
      eyebrow: "Laboratory Technology",
      title: "Innovation Driven by Precision.",
      subtitle:
        "State-of-the-art analytical equipment and automated production machinery guarantee batch-to-batch consistency, stability, and therapeutic bioavailability.",
      steps: [
        {
          number: "01",
          title: "Molecular Discovery & Screening",
          description:
            "Advanced chromatography (HPLC-MS) and bio-assays identify the most active botanical and synthetic molecules with optimal bio-affinity.",
        },
        {
          number: "02",
          title: "Precision Microencapsulation",
          description:
            "Liposomal and phospholipid coating technology safeguards fragile actives against oxidation, guaranteeing prolonged release and deep penetration.",
        },
        {
          number: "03",
          title: "Automated Cleanroom Filling",
          description:
            "Ultra-clean automated production lines handle solid forms, liquid ampoules, airless bottles, and stick packs with robotic precision.",
        },
        {
          number: "04",
          title: "Full-Spectrum Analytical Release",
          description:
            "Accelerated stability testing, challenge tests, microbiological purity assays, and organoleptic audits ensure zero deviations.",
        },
      ],
    },
    process: {
      eyebrow: "Our CDMO Workflow",
      title: "From Scientific Concept to Market Leadership.",
      subtitle:
        "A structured, transparent 5-stage pathway that takes your project seamlessly from laboratory bench to pharmacy shelves worldwide.",
      steps: [
        {
          number: "01",
          title: "Scientific Discovery & Briefing",
          description:
            "We analyze your target market, therapeutic aims, and regulatory perimeter to establish the formulation blueprint.",
          deliverable: "Deliverable: Technical Feasibility Report & Project Roadmap",
        },
        {
          number: "02",
          title: "Formulation & Prototyping",
          description:
            "Our galenic and biotech chemists formulate pilot lab prototypes, optimizing sensory feel, active concentration, and taste profiles.",
          deliverable: "Deliverable: Lab Bench Samples & Sensory Dossier",
        },
        {
          number: "03",
          title: "Validation & Clinical Testing",
          description:
            "Rigorous safety assessment, patch testing, in-vitro/in-vivo efficacy evaluations, and accelerated ICH stability protocols.",
          deliverable: "Deliverable: Safety Assessment & Stability Protocol Dossier",
        },
        {
          number: "04",
          title: "GMP Industrial Scale-Up",
          description:
            "Seamless pilot-to-industrial transfer inside our automated Vicenza facility, producing trial batches under strict quality supervision.",
          deliverable: "Deliverable: Industrial Validation Batch & Certificate of Analysis",
        },
        {
          number: "05",
          title: "Packaging & Regulatory Release",
          description:
            "Final packaging, batch release by Qualified Persons, and provision of complete regulatory dossiers (CPNP, PIF, AIFA notifications).",
          deliverable: "Deliverable: Market-Ready Product & Regulatory Compliance File",
        },
      ],
    },
    cta: {
      badge: "Partnership & Innovation",
      title: "Let's Shape the Next Scientific Breakthrough Together.",
      subtitle:
        "Whether you are launching a pioneering dermocosmetic line, a high-bioavailability nutricosmetic range, or seeking an AIFA/GMP certified Italian CDMO partner, our multidisciplinary team is ready.",
      btnPrimary: "Schedule a Laboratory Consultation",
      btnSecondary: "Discover Our Heritage",
    },
    contact: {
      eyebrow: "Connect With Nexofarm",
      title: "Start a Scientific Dialogue.",
      subtitle:
        "Reach out directly to our scientific management team in Vicenza to discuss your formulation, CDMO manufacturing requirements, or strategic partnership.",
      info: {
        r_and_d: "Pharma R&D Lab (Sella Heritage)",
        r_and_d_val: "Via Vicenza 67, 36015 Schio (VI), Italy",
        plant: "Industrial CDMO Plant (Salix Facility)",
        plant_val: "36030 Monte di Malo (VI), Italy",
        academic: "Academic Conception Origin",
        academic_val: "CUOA Business School, Altavilla Vicentina (VI)",
        email: "Scientific & Commercial Inquiries",
        phone: "Direct Switchboard",
        hours: "Operating Hours",
        hours_val: "Mon – Fri · 08:30 – 18:00 CET",
      },
      form: {
        name: "Full Name",
        namePlaceholder: "Dr. / Prof. / Mr. / Ms. Full Name",
        company: "Company / Organization",
        companyPlaceholder: "Pharmaceutical / Cosmetic Brand Name",
        email: "Work Email",
        emailPlaceholder: "name@company.com",
        interest: "Area of Interest",
        interestOptions: {
          placeholder: "Select your project category...",
          biotech: "High-Tech Biotechnology & Active Ingredients",
          dermo: "Clinical Dermocosmetics Formulation",
          nutra: "Nutricosmetics & Dietary Supplements (CDMO)",
          galenic: "Pharmaceutical Galenics & OTC Manufacturing",
          cdmo: "Comprehensive Turnkey CDMO Partnership",
        },
        message: "Project Details & Objectives",
        messagePlaceholder:
          "Please describe your formulation requirements, desired batch volumes, target markets, or technical specifications...",
        privacyConsent:
          "I agree to the processing of my personal data according to the Italian and EU GDPR Privacy Policy.",
        privacyLink: "Read Privacy Policy",
        send: "Submit Inquiry to Scientific Board",
        sending: "Transmitting Inquiry...",
        successTitle: "Inquiry Successfully Transmitted",
        successDesc:
          "Thank you for contacting Nexofarm. Our scientific director and business development team will review your project and respond within 24 business hours.",
        errorRequired: "Please complete all required fields and accept the privacy policy.",
      },
    },
    footer: {
      description:
        "Nexofarm is the Life Sciences joint venture uniting the century-old pharmaceutical expertise of Sella Farmaceutici (1920) with Salix's high-tech nutraceutical CDMO capabilities (1998). Based in Vicenza, Italy.",
      navTitle: "Navigation",
      contactTitle: "Headquarters & Labs",
      legalTitle: "Compliance & Legal",
      privacyPolicy: "Privacy Policy (GDPR)",
      cookiePolicy: "Cookie Policy",
      termsOfUse: "Terms & Conditions",
      cookieSettings: "Cookie Preferences",
      rights: "© 2026 Nexofarm S.r.l. - All rights reserved. Made in Italy.",
      cuoaBadge: "Final Project developed for CUOA Business School International Summer Program.",
      cuoaNote: "Project developed in collaboration with CUOA Business School (Altavilla Vicentina, Italy).",
    },
    cookieBanner: {
      title: "Cookie Consent & Privacy Preferences",
      description:
        "This website uses technical cookies essential for its proper functioning and, with your consent, analytical and profiling cookies to evaluate site usage and deliver tailored experiences, in compliance with the Italian Privacy Authority (Garante Privacy) Guidelines of June 10, 2021 and EU Regulation 2016/679 (GDPR).",
      acceptAll: "Accept All Cookies",
      rejectNonEssential: "Reject Non-Essential",
      customize: "Customize Preferences",
      savePreferences: "Save Preferences",
      technicalTitle: "Technical & Essential Cookies",
      technicalDesc:
        "Necessary for the operation of the site, security, and storing your language and cookie preferences. Cannot be disabled.",
      technicalAlways: "Always Active",
      analyticsTitle: "Analytical & Performance Cookies",
      analyticsDesc:
        "Used to collect aggregated, anonymous statistical information on how visitors navigate the site to optimize performance.",
      marketingTitle: "Marketing & Profiling Cookies",
      marketingDesc:
        "Used to present personalized commercial information based on your preferences and browsing patterns.",
    },
    legal: {
      privacyTitle: "Privacy Policy (Informativa sulla Privacy)",
      cookieTitle: "Cookie Policy (Informativa Estesa sui Cookie)",
      termsTitle: "Terms and Conditions of Use (Termini di Utilizzo)",
      close: "Close Document",
      lastUpdated: "Last updated: October 2026 · Compliant with EU GDPR 2016/679 & Garante Privacy",
    },
  },
  it: {
    nav: {
      home: "Home",
      heritage: "Eredità & Sinergia",
      expertise: "Competenze CDMO",
      technology: "Tecnologia",
      process: "Metodo Produttivo",
      certifications: "Standard di Qualità",
      about: "Chi Siamo",
      contact: "Contatti",
      ctaContact: "Richiedi Consulenza",
    },
    hero: {
      eyebrow: "Vicenza, Veneto • Dal 1920 & 1998 • Polo Life Sciences",
      titleLine1: "Eredità Farmaceutica Secolare.",
      titleLine2: "Precisione Biotecnologica Avanzata.",
      subtitle:
        "Nexofarm unisce la maestria farmaceutica centenaria di Sella Farmaceutici (1920) con le capacità CDMO nutraceutiche all'avanguardia di Salix (1998) per formulare soluzioni biotecnologiche, dermocosmetiche e per la salute ad alte prestazioni.",
      ctaPrimary: "Esplora i Servizi CDMO",
      ctaSecondary: "Contatta i Nostri Laboratori",
      stat1Value: "100+",
      stat1Label: "Anni di Tradizione Pharma",
      stat2Value: "10.000+ m²",
      stat2Label: "Polo Produttivo Vicentino",
      stat3Value: "AIFA / GMP",
      stat3Label: "Qualità Certificata",
      stat4Value: "100%",
      stat4Label: "Eccellenza Made in Italy",
      badge: "Joint Venture Sella & Salix",
    },
    heritage: {
      eyebrow: "L'Unione di Due Eccellenze Vicentine",
      title: "Radici nella Tradizione. Ingegnerizzati per il Futuro.",
      subtitle:
        "Nata da un'intuizione strategica sviluppata presso la CUOA Business School, Nexofarm fonde le forze complementari di due campioni industriali della provincia di Vicenza, nel cuore del distretto veneto del benessere.",
      sellaTitle: "Laboratorio Chimico Farmaceutico Sella",
      sellaSubtitle: "Fondato nel 1920 · Schio (VI)",
      sellaDesc:
        "Oltre un secolo di storia farmaceutica, etica galenica e rigore scientifico. Una storica impresa familiare con autorizzazione AIFA, massima credibilità clinica e marchi di riferimento nel canale farmacia.",
      sellaPoints: [
        "Oltre 100 anni di produzione farmaceutica ininterrotta",
        "Officina farmaceutica certificata GMP autorizzata AIFA",
        "Maestria formulativa galenica e dermatologica storica",
        "Protocolli rigorosi di sicurezza e stabilità farmaceutica",
      ],
      salixTitle: "Salix S.r.l.",
      salixSubtitle: "Fondata nel 1998 · Monte di Malo (VI)",
      salixDesc:
        "Oltre 25 anni di eccellenza conto terzi (CDMO) nello sviluppo di integratori alimentari, nutraceutici e dispositivi medici. Un moderno complesso produttivo automatizzato di oltre 10.000 m² a servizio di primari brand internazionali.",
      salixPoints: [
        "Linee automatizzate ad alta capacità per forme solide e liquide",
        "Tecnologia pionieristica di microincapsulazione e biodisponibilità",
        "Specializzazione in dispositivi medici e alimenti a fini medici speciali",
        "R&D dinamico e rapidità di scale-up industriale per il mercato",
      ],
      synergyTitle: "La Sinergia Nexofarm",
      synergySubtitle: "Il Polo Completo 'In & Out' delle Life Sciences",
      synergyDesc:
        "Integrando il rigore galenico secolare di Sella con la potenza produttiva nutraceutica di Salix, Nexofarm realizza l'approccio integrato: dermocosmesi topica di precisione combinata a nutricosmesi orale (bellezza dall'interno), tutto sotto la medesima regia scientifica.",
      cuoaBadge: "Ideazione Accademica: CUOA Business School · Altavilla Vicentina",
    },
    video: {
      eyebrow: "Scopri Nexofarm",
      title: "Il Rigore Scientifico Incontra la Maestria Italiana.",
      description:
        "Esplora i nostri laboratori multidisciplinari e gli stabilimenti all'avanguardia a Vicenza, dove l'etica farmaceutica classica incontra l'innovazione biotecnologica più evoluta.",
      playAria: "Riproduci il video di presentazione istituzionale",
      tagline: "Guarda la presentazione istituzionale",
    },
    about: {
      eyebrow: "Chi Siamo",
      title: "Scienza, eredità storica e maestria industriale in un'unica realtà.",
      p1: "Nexofarm rappresenta la convergenza tra biotecnologie ad altissima purezza, scienza dermocosmetica clinica e produzione nutraceutica avanzata. Trasformiamo la ricerca scientifica in formulazioni capaci di generare valore concreto per aziende globali e consumatori esigenti.",
      p2: "Situati nel cuore del distretto industriale veneto delle Life Sciences e del Benessere, custodiamo l'inestimabile tradizione italiana della cura del dettaglio, promuovendo al contempo la ricerca di frontiera in estrazione verde, cura del microbioma e biofermentazione.",
      p3: "La nostra missione è fungere da partner CDMO europeo d'eccellenza, offrendo un supporto completo e trasparente: dalla scoperta scientifica preliminare al rilascio dei lotti commerciali in tutto il mondo.",
      pillars: [
        {
          title: "Etica Farmaceutica",
          description:
            "Oltre un secolo di standard GMP, purezza galenica e assoluta intransigenza sulla sicurezza clinica.",
        },
        {
          title: "Biotecnologia & Scienza",
          description:
            "Microincapsulazione proprietaria, biofermentazione avanzata e veicolazione mirata dei principi attivi.",
        },
        {
          title: "Eleganza Cosmetica e Nutra",
          description:
            "Formulazioni che coniugano una profonda efficacia fisiologica con il piacere sensoriale e l'eleganza italiana.",
        },
        {
          title: "Responsabilità Sostenibile",
          description:
            "Chimica circolare, estratti botanici mediterranei tracciabili, stabilimenti ad alta efficienza e packaging eco-compatibile.",
        },
      ],
    },
    expertise: {
      eyebrow: "Le Nostre Competenze",
      title: "Quattro Discipline Specialistiche.",
      subtitle:
        "Un ecosistema integrato di competenze progettato per accelerare lo sviluppo formulativo, la validazione clinica e la fabbricazione industriale per marchi italiani ed esteri.",
      items: [
        {
          title: "Biotecnologia High-Tech",
          category: "Ingegneria dei Principi Attivi",
          description:
            "Sviluppo personalizzato di attivi bio-fermentati, peptidi biomimetici ed estratti da cellule staminali vegetali mirati alla rigenerazione cellulare e al potenziamento della barriera cutanea.",
          features: [
            "Estrazione Botanica con CO2 Supercritica",
            "Microincapsulazione e Sistemi di Rilascio Liposomiale",
            "Test di Vitalità Cellulare ed Efficacia In-Vitro",
            "Ottimizzazione di Attivi Microbioma-Friendly",
          ],
        },
        {
          title: "Dermocosmesi Clinica",
          category: "Formulazioni Topiche Avanzate",
          description:
            "Trattamenti dermatologici e cosmetici ad alta prestazione che fondono l'efficacia farmaceutica con le texture sofisticate e sensoriali richieste dal mercato cosmetico premium.",
          features: [
            "Sieri Anti-Aging e Protezione Cellulare",
            "Formulazioni Riparatrici per Pelli Sensibili e Reattive",
            "Linee Dermatologicamente Testate e Ipoallergeniche",
            "Ingredienti Certificabili Clean Beauty & ECOCERT",
          ],
        },
        {
          title: "Nutricosmetica Avanzata",
          category: "Beauty-From-Within & Integratori",
          description:
            "Formulazioni orali studiate per agire in sinergia sistemica con i trattamenti topici, promuovendo l'elasticità cutanea, la vitalità degli annessi e la protezione dallo stress ossidativo dall'interno.",
          features: [
            "Flaconcini Bevibili, Bustine e Stick Pack Monodose",
            "Compresse Multistrato a Rilascio Modulato e Capsule",
            "Sinergie di Collagene Idrolizzato, Antiossidanti e Ceramidi",
            "Formulazioni Clean Label a Base Botanica",
          ],
        },
        {
          title: "Galenica & CDMO Industriale",
          category: "Produzione Conto Terzi Chiavi in Mano",
          description:
            "Servizio CDMO completo, dai lotti pilota alla produzione di milioni di unità finite, con piena redazione dei dossier regolatori e standard di fabbricazione autorizzati AIFA/GMP.",
          features: [
            "Stabilimento Automatizzato di oltre 10.000 m² a Vicenza",
            "Tracciabilità Completa dei Lotti e Test di Stabilità ICH",
            "Dossier Cosmetici CPNP/PIF e Notifiche Integratori UE",
            "Flessibilità nei Volumi, Confezionamento Primario e Secondario",
          ],
        },
      ],
    },
    certifications: {
      eyebrow: "Qualità e Governance",
      title: "Certificazioni Internazionali e Standard Normativi",
      subtitle:
        "Ogni lotto formulato e prodotto negli stabilimenti Nexofarm rispetta i più stringenti requisiti delle autorità sanitarie italiane, europee e mondiali.",
      badges: [
        {
          name: "GMP / AIFA",
          desc: "Norme di Buona Fabbricazione farmaceutiche autorizzate dall'Agenzia Italiana del Farmaco.",
        },
        {
          name: "ISO 22716:2007",
          desc: "Standard internazionale per le Buone Pratiche di Fabbricazione dei prodotti cosmetici.",
        },
        {
          name: "ISO 9001:2015",
          desc: "Sistema di Gestione della Qualità applicato a ricerca, formulazione e processi industriali.",
        },
        {
          name: "ISO 13485:2016",
          desc: "Certificazione dei Sistemi di Qualità per la fabbricazione di Dispositivi Medici.",
        },
        {
          name: "Made in Italy",
          desc: "Produzione 100% italiana verificata all'interno del distretto veneto delle Life Sciences.",
        },
        {
          name: "Cleanroom Classe C/D",
          desc: "Camere bianche a contaminazione controllata con filtri HEPA per preparazioni sterili.",
        },
      ],
    },
    technology: {
      eyebrow: "Tecnologia di Laboratorio",
      title: "L'Innovazione Guidata dalla Precisione.",
      subtitle:
        "Strumentazioni analitiche avanzate e macchinari di confezionamento automatizzati assicurano omogeneità lotto-lotto, stabilità nel tempo e massima biodisponibilità terapeutica.",
      steps: [
        {
          number: "01",
          title: "Screening e Scoperta Molecolare",
          description:
            "Cromatografia avanzata (HPLC-MS) e bio-saggi selezionano le molecole botaniche e di sintesi con la più elevata affinità recettoriale e purezza chimica.",
        },
        {
          number: "02",
          title: "Microincapsulazione di Precisione",
          description:
            "Tecnologie liposomiali e fosfolipidiche proteggono gli attivi instabili dall'ossidazione, assicurando rilascio mirato e penetrazione fisiologica ottimale.",
        },
        {
          number: "03",
          title: "Dosaggio Automatizzato in Cleanroom",
          description:
            "Linee robotizzate operano in atmosfera controllata per il riempimento di forme solide, flaconi orali, dispenser airless e stick pack con tolleranze microscopiche.",
        },
        {
          number: "04",
          title: "Rilascio Analitico Full-Spectrum",
          description:
            "Test di stabilità accelerata ICH, challenge test microbiologici e controlli organolettici certificano la conformità di ogni singolo lotto prima del rilascio.",
        },
      ],
    },
    process: {
      eyebrow: "Il Nostro Metodo CDMO",
      title: "Dal Concetto Scientifico al Successo sul Mercato.",
      subtitle:
        "Un iter trasparente e strutturato in 5 fasi che accompagna il vostro progetto dal banco di ricerca fino agli scaffali delle farmacie in tutto il mondo.",
      steps: [
        {
          number: "01",
          title: "Briefing Scientifico & Fattibilità",
          description:
            "Analisi del mercato obiettivo, dei claim desiderati e del perimetro normativo per definire l'architettura formulativa ideale.",
          deliverable: "Deliverable: Report di Fattibilità Tecnica & Roadmap di Progetto",
        },
        {
          number: "02",
          title: "Formulazione & Prototipazione",
          description:
            "I nostri chimici galenici e biotecnologi sviluppano prototipi di laboratorio, ottimizzando stabilità, profilo sensoriale e palatabilità.",
          deliverable: "Deliverable: Campionature di Laboratorio & Dossier Sensoriale",
        },
        {
          number: "03",
          title: "Validazione & Test Clinici",
          description:
            "Valutazione di tollerabilità cutanea, patch test, studi di efficacia in-vitro/in-vivo e protocolli di stabilità accelerata secondo linee guida ICH.",
          deliverable: "Deliverable: Safety Assessment & Protocollo di Stabilità Convalidato",
        },
        {
          number: "04",
          title: "Scale-Up Industriale GMP",
          description:
            "Trasferimento dal laboratorio all'impianto industriale di Vicenza, con produzione di lotti pilota e validazione dei parametri di processo.",
          deliverable: "Deliverable: Lotto Pilota Industriale & Certificato di Analisi (CoA)",
        },
        {
          number: "05",
          title: "Confezionamento & Rilascio Dossier",
          description:
            "Confezionamento primario e secondario, rilascio lotti da parte della Persona Qualificata (QP) e fornitura dei dossier regolatori completi (CPNP/PIF/AIFA).",
          deliverable: "Deliverable: Prodotto Finito & Fascicolo Tecnico Regolatorio",
        },
      ],
    },
    cta: {
      badge: "Partnership & Sviluppo",
      title: "Costruiamo Insieme la Prossima Innovazione Scientifica.",
      subtitle:
        "Che si tratti del lancio di una linea dermocosmetica innovativa, di un integratore nutricosmetico ad alta biodisponibilità o della ricerca di un partner CDMO italiano certificato AIFA/GMP, il nostro comitato scientifico è a vostra disposizione.",
      btnPrimary: "Pianifica un Incontro Scientifico",
      btnSecondary: "Scopri la Nostra Storia",
    },
    contact: {
      eyebrow: "Contatta Nexofarm",
      title: "Iniziamo un Dialogo Scientifico.",
      subtitle:
        "Entrate in contatto diretto con la direzione scientifica e commerciale a Vicenza per discutere le vostre esigenze formulatrici o produttive conto terzi.",
      info: {
        r_and_d: "Laboratorio R&D Pharma (Sede Sella)",
        r_and_d_val: "Via Vicenza 67, 36015 Schio (VI), Italia",
        plant: "Stabilimento Industriale CDMO (Sede Salix)",
        plant_val: "36030 Monte di Malo (VI), Italia",
        academic: "Origine Accademica del Progetto",
        academic_val: "CUOA Business School, Altavilla Vicentina (VI)",
        email: "Richieste Tecniche e Commerciali",
        phone: "Centralino Diretto",
        hours: "Orari di Apertura",
        hours_val: "Lun – Ven · 08:30 – 18:00 CET",
      },
      form: {
        name: "Nome e Cognome",
        namePlaceholder: "Dott. / Ing. Nome e Cognome",
        company: "Azienda / Organizzazione",
        companyPlaceholder: "Ragione Sociale o Marchio",
        email: "Email Aziendale",
        emailPlaceholder: "nome@azienda.it",
        interest: "Area di Interesse",
        interestOptions: {
          placeholder: "Seleziona la categoria del progetto...",
          biotech: "Biotecnologie High-Tech e Principi Attivi",
          dermo: "Sviluppo Dermocosmetico Clinico",
          nutra: "Nutricosmetica e Integratori Alimentari (CDMO)",
          galenic: "Produzione Galenica e Farmaci OTC",
          cdmo: "Partnership Produttiva CDMO Completa",
        },
        message: "Dettagli del Progetto",
        messagePlaceholder:
          "Descrivi brevemente gli obiettivi formulativi, i volumi previsti, il mercato di riferimento o i requisiti tecnici...",
        privacyConsent:
          "Dichiaro di aver letto e accetto l'Informativa sulla Privacy ai sensi del Regolamento UE 2016/679 (GDPR).",
        privacyLink: "Leggi l'Informativa Privacy",
        send: "Invia Richiesta al Comitato Scientifico",
        sending: "Trasmissione in corso...",
        successTitle: "Richiesta Trasmessa con Successo",
        successDesc:
          "Grazie per aver contattato Nexofarm. La direzione scientifica e commerciale esaminerà il vostro progetto e vi ricontatterà entro 24 ore lavorative.",
        errorRequired: "Compila tutti i campi obbligatori e accetta l'informativa sulla privacy.",
      },
    },
    footer: {
      description:
        "Nexofarm è la joint venture del settore Life Sciences che unisce l'esperienza farmaceutica centenaria di Sella Farmaceutici (1920) e la capacità CDMO nutraceutica di Salix (1998). Con sede nella provincia di Vicenza, Italia.",
      navTitle: "Navigazione",
      contactTitle: "Sedi e Laboratori",
      legalTitle: "Note Legali & Conformità",
      privacyPolicy: "Informativa Privacy (GDPR)",
      cookiePolicy: "Informativa Cookie",
      termsOfUse: "Termini e Condizioni d'Uso",
      cookieSettings: "Preferenze Cookie",
      rights: "© 2026 Nexofarm S.r.l. - Tutti i diritti riservati. Made in Italy.",
      cuoaBadge: "Progetto finale sviluppato per il Summer Program di CUOA Business School.",
      cuoaNote: "Progetto concepito in collaborazione con CUOA Business School (Altavilla Vicentina, VI).",
    },
    cookieBanner: {
      title: "Consenso Cookie e Gestione della Privacy",
      description:
        "Questo sito web utilizza cookie tecnici necessari al corretto funzionamento e, previo consenso dell'utente, cookie analitici e di profilazione per misurare l'audience e offrire contenuti personalizzati, in conformità alle Linee Guida del Garante Privacy del 10 giugno 2021 e al Regolamento UE 2016/679 (GDPR).",
      acceptAll: "Accetta Tutti i Cookie",
      rejectNonEssential: "Rifiuta Non Necessari",
      customize: "Personalizza Preferenze",
      savePreferences: "Salva Preferenze",
      technicalTitle: "Cookie Tecnici e Necessari",
      technicalDesc:
        "Indispensabili per la navigazione, la sicurezza informatica e la memorizzazione della lingua e del consenso cookie. Non possono essere disattivati.",
      technicalAlways: "Sempre Attivi",
      analyticsTitle: "Cookie Analitici e Prestazionali",
      analyticsDesc:
        "Raccolgono dati statistici aggregati e anonimizzati sull'utilizzo del sito per consentirci di misurare e migliorare le prestazioni.",
      marketingTitle: "Cookie di Profilazione e Marketing",
      marketingDesc:
        "Utilizzati per proporre contenuti e comunicazioni commerciali in linea con gli interessi e i comportamenti dell'utente.",
    },
    legal: {
      privacyTitle: "Informativa sul Trattamento dei Dati Personali (GDPR)",
      cookieTitle: "Informativa Estesa sui Cookie",
      termsTitle: "Termini e Condizioni di Utilizzo del Sito",
      close: "Chiudi Documento",
      lastUpdated: "Ultimo aggiornamento: Ottobre 2026 · Conforme al GDPR UE 2016/679 e Garante Privacy",
    },
  },
};
