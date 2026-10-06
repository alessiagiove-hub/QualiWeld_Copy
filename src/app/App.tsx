import image_BADFAC40_6746_40E6_A38A_0EA26796CBDF_L0_001_13_04_2026_16_10_23_removebg_preview from '@/imports/BADFAC40-6746-40E6-A38A-0EA26796CBDF_L0_001-13_04_2026__16_10_23-removebg-preview.png'
import image_STS_Certificazioni from '@/imports/STS_Certificazioni.jpg'
import image_WhatsApp_Image_2026_02_10_at_12_31_18___Anto_Cal_removebg_preview from '@/imports/WhatsApp_Image_2026-02-10_at_12.31.18_-_Anto_Cal-removebg-preview.png'
import image_Progetto_senza_titolo_6 from '@/imports/Progetto_senza_titolo-6.png'
import image_WhatsApp_Image_2026_02_10_at_12_31_18___Anto_Cal from '@/imports/WhatsApp_Image_2026-02-10_at_12.31.18_-_Anto_Cal.jpg'
import image_Screenshot_2026_08_21_alle_14_41_24_2 from '@/imports/Screenshot_2026-08-21_alle_14.41.24-2.png'
import image_Danilo_Rondinelli from '@/imports/WhatsApp_Image_2026-09-11_at_18.48.06-2.jpeg'
import image_Antonio_Caliandro from '@/imports/WhatsApp_Image_2026-09-11_at_18.48.06.jpeg'
import image_Marcello_Trani from '@/imports/OKTOBERFEST_MONUMENTAL__Post_Instagram__45__-3.png'
import image_TC2_Global_Register from '@/imports/Screenshot_2026-09-11_alle_19.00.07-1.png'
import image_STS_Certificazioni_Partner from '@/imports/Screenshot_2026-09-11_alle_19.00.33.png'
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback'
import logoQualiweld from "../imports/Screenshot_2026-08-21_alle_14.41.24-1.png";
import {
  Menu, X, Phone, Mail, MapPin, Clock, Award, Shield,
  Users, ArrowRight, Check, GraduationCap,
  FlaskConical, Search, FileText, ChevronRight,
  BookOpen, Globe, Briefcase, Star,
  CheckCircle, ChevronDown, ChevronUp
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Page = "home" | "chi-siamo" | "corsi" | "servizi" | "contatti";
type CourseCategory = "tutti" | "cnd" | "saldatura" | "coordinatori" | "fgas";

interface Course {
  id: string;
  method: string;
  title: string;
  category: "cnd" | "saldatura" | "coordinatori" | "fgas";
  duration: number | string;
  level?: string;
  certification: string;
  includes: string[];
  description: string;
  schedule: string;
  location: string;
  prerequisites?: string;
}


// ─── Data ────────────────────────────────────────────────────────────────────

const COURSES: Course[] = [
  {
    id: "vt",
    method: "VT",
    title: "Esame Visivo",
    category: "cnd",
    duration: 35,
    level: "Livello 1 & 2",
    certification: "ISO 9712",
    includes: [
      "Materiale didattico completo",
      "Sessioni pratiche in laboratorio",
      "Esame teorico e pratico finale",
      "Patentino Europeo",
    ],
    description:
      "Il corso VT (Visual Testing) fornisce le competenze teoriche e pratiche per l'esame visivo di giunti saldati, componenti e strutture metalliche. La formazione copre tecniche di ispezione, normative di riferimento e redazione dei rapporti di controllo secondo EN ISO 17637.",
    schedule: "Mensile",
    location: "Taranto o presso il cliente",
    prerequisites: "Nessun prerequisito specifico",
  },
  {
    id: "pt",
    method: "PT",
    title: "Liquidi Penetranti",
    category: "cnd",
    duration: 35,
    level: "Livello 1 & 2",
    certification: "ISO 9712",
    includes: [
      "Materiale didattico",
      "Kit penetranti per le esercitazioni",
      "Esame teorico e pratico finale",
      "Patentino Europeo",
    ],
    description:
      "Il corso PT forma operatori capaci di rilevare discontinuità superficiali su materiali non porosi mediante l'uso di liquidi penetranti. Vengono trattati i principi fisici, le famiglie di penetranti, le normative di riferimento e le applicazioni industriali secondo EN ISO 3452.",
    schedule: "Mensile",
    location: "Taranto o presso il cliente",
    prerequisites: "Nessun prerequisito specifico",
  },
  {
    id: "mt",
    method: "MT",
    title: "Particelle Magnetiche",
    category: "cnd",
    duration: 35,
    level: "Livello 1 & 2",
    certification: "ISO 9712",
    includes: [
      "Materiale didattico",
      "Strumentazione per le prove pratiche",
      "Esame teorico e pratico finale",
      "Patentino Europeo",
    ],
    description:
      "Il corso MT abilita all'esame con particelle magnetiche per il rilevamento di discontinuità superficiali e sub-superficiali su materiali ferromagnetici. Include tecniche di magnetizzazione, scelta delle particelle e interpretazione delle indicazioni secondo EN ISO 17638.",
    schedule: "Mensile",
    location: "Taranto o presso il cliente",
    prerequisites: "Nessun prerequisito specifico",
  },
  {
    id: "ut-volumetrico-spessimetrico",
    method: "UT",
    title: "Ultrasuoni Volumetrici e Spessimetrici",
    category: "cnd",
    duration: 121,
    level: "Livello 1 & 2",
    certification: "ISO 9712",
    includes: [
      "Materiale didattico completo",
      "Laboratorio pratico con strumentazione UT",
      "Controllo volumetrico di giunti saldati",
      "Misurazione spessori e valutazione delle discontinuità",
      "Esame teorico e pratico finale",
      "Patentino Europeo",
    ],
    description:
      "Il corso fornisce le competenze teoriche e pratiche per il controllo ultrasonoro volumetrico di giunti saldati, componenti e strutture, oltre alle tecniche di misura dello spessore. Il programma è sviluppato secondo le norme di riferimento applicabili al metodo UT.",
    schedule: "Bimestrale",
    location: "Taranto o presso il cliente",
    prerequisites: "Conoscenza base dei CND consigliata",
  },
  {
    id: "rt",
    method: "RT",
    title: "Radiografie Industriali",
    category: "cnd",
    duration: 106,
    level: "Livello 1 & 2",
    certification: "ISO 9712",
    includes: [
      "Materiale didattico",
      "Esercitazioni pratiche su impianto RT certificato",
      "Normative di sicurezza radiologica",
      "Esame teorico e pratico finale",
      "Patentino Europeo",
    ],
    description:
      "Il corso RT forma operatori per l'esecuzione e l'interpretazione di radiografie industriali e gammagrafie su giunti saldati. Include normative di sicurezza radiologica (D.Lgs. 101/2020), tecniche di ripresa e criteri di accettazione secondo EN ISO 17636.",
    schedule: "Trimestrale",
    location: "Taranto (centro qualificato)",
    prerequisites:
      "Idoneità medica per lavoro con sorgenti radiogene (certificato medico richiesto)",
  },
  {
    id: "mig-mag",
    method: "MIG/MAG",
    title: "Qualifica Saldatore MIG/MAG",
    category: "saldatura",
    duration: 80,
    certification: "EN ISO 9606-1",
    includes: [
      "Materiale consumabile incluso",
      "Prove meccaniche di qualifica",
      "Certificato di qualifica ufficiale",
      "WPS di riferimento",
    ],
    description:
      "Qualifica saldatori su procedimento MIG/MAG (GMAW) secondo EN ISO 9606-1. Il corso comprende addestramento pratico su giunti di qualifica in posizione, con successiva qualifica e rilascio del certificato riconosciuto a livello europeo.",
    schedule: "Settimanale su richiesta",
    location: "Taranto o presso l'azienda cliente",
    prerequisites: "Esperienza base nella saldatura consigliata",
  },
  {
    id: "smaw",
    method: "SMAW",
    title: "Qualifica Saldatore SMAW",
    category: "saldatura",
    duration: 80,
    certification: "EN ISO 9606-1",
    includes: [
      "Materiale consumabile incluso",
      "Prove meccaniche di qualifica",
      "Certificato di qualifica ufficiale",
      "WPS di riferimento",
    ],
    description:
      "Qualifica saldatori su procedimento SMAW (a elettrodo rivestito) secondo EN ISO 9606-1. Addestramento pratico focalizzato sulle posizioni di qualifica richieste e sui criteri di accettazione della norma. Valido per settori industriali e costruzioni metalliche.",
    schedule: "Settimanale su richiesta",
    location: "Taranto o presso l'azienda cliente",
  },
  {
    id: "tig",
    method: "TIG",
    title: "Qualifica Saldatore TIG",
    category: "saldatura",
    duration: 80,
    certification: "EN ISO 9606-1",
    includes: [
      "Materiale consumabile incluso",
      "Prove meccaniche di qualifica",
      "Certificato di qualifica ufficiale",
      "WPS di riferimento",
    ],
    description:
      "Qualifica saldatori su procedimento TIG (GTAW) secondo EN ISO 9606-1, con focus su materiali critici come acciai inossidabili e leghe speciali. Ideale per settori oil & gas, navale e impianti chimici dove la qualità del giunto è prioritaria.",
    schedule: "Settimanale su richiesta",
    location: "Taranto o presso l'azienda cliente",
    prerequisites: "Esperienza base nella saldatura TIG consigliata",
  },
  {
    id: "brasatura",
    method: "BRAZ",
    title: "Qualifica Brasatura",
    category: "saldatura",
    duration: 80,
    certification: "EN ISO 13585",
    includes: [
      "Materiale incluso",
      "Prove di qualifica",
      "Certificato di qualifica",
      "Procedimento documentato",
    ],
    description:
      "Qualifica di personale e procedimenti di brasatura (forte e dolce) secondo EN ISO 13585 e AWS B2.2. Formazione teorica e pratica su tecniche di brasatura per applicazioni in ambito impiantistico, refrigerazione e componenti ad alta temperatura.",
    schedule: "Su richiesta",
    location: "Taranto o presso l'azienda cliente",
  },
  {
    id: "fgas",
    method: "F-GAS",
    title: "Patentino F-GAS",
    category: "fgas",
    duration: "Su richiesta",
    certification: "Certificazione F-GAS",
    includes: [
      "Informazioni su requisiti e documentazione",
      "Supporto alla procedura di iscrizione",
      "Preparazione al percorso di certificazione",
      "Indicazioni sulle modalità d’esame",
    ],
    description:
      "Percorso dedicato ai professionisti che operano su apparecchiature contenenti gas fluorurati a effetto serra. Contattaci per definire requisiti, calendario e modalità di partecipazione.",
    schedule: "Su richiesta",
    location: "Taranto o presso il cliente",
  },
  {
    id: "coordinatore",
    method: "WCO",
    title: "Welding Coordinator",
    category: "coordinatori",
    duration: 40,
    certification: "EN ISO 14731",
    includes: [
      "Dispense e materiale didattico completo",
      "Sessioni di preparazione e approfondimento",
      "Certificato di frequenza",
      "Tutoraggio post-corso",
    ],
    description:
      "Corso per la formazione del Coordinatore di Saldatura (Welding Coordinator) secondo EN ISO 14731. Copre pianificazione, supervisione e controllo dei processi di saldatura nelle costruzioni metalliche, requisiti EN 1090 e ISO 3834. Fondamentale per aziende che operano in regime EN 1090.",
    schedule: "Mensile (moduli weekend intensivi)",
    location: "Taranto",
    prerequisites: "Titolo di studio tecnico o esperienza documentata nel settore",
  },
];

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Chi Siamo", page: "chi-siamo" },
  { label: "I Nostri Corsi", page: "corsi" },
  { label: "Servizi per Aziende", page: "servizi" },
  { label: "Contatti", page: "contatti" },
];

const CATEGORY_LABELS: Record<string, string> = {
  tutti: "Tutti i Corsi",
  cnd: "Controlli Non Distruttivi",
  saldatura: "Qualifica Saldatori",
  coordinatori: "Coordinatori",
  fgas: "Patentino F-GAS",
};

const SEO_PAGES: Record<Page, { title: string; description: string }> = {
  home: {
    title: "Qualiweld SRL | Corsi di saldatura, CND e certificazioni",
    description: "Qualiweld SRL: corsi di saldatura, controlli non distruttivi, qualifiche saldatori, prove di laboratorio e consulenza normativa a Crispiano, Taranto.",
  },
  "chi-siamo": {
    title: "Chi siamo | Qualiweld SRL",
    description: "Scopri Qualiweld SRL, centro specializzato in saldatura, certificazioni, CND e consulenza tecnica per aziende e professionisti.",
  },
  corsi: {
    title: "Corsi di saldatura, CND e F-GAS | Qualiweld SRL",
    description: "Corsi professionali per controlli non distruttivi, qualifiche saldatori, Welding Coordinator e Patentino F-GAS a Crispiano e presso aziende.",
  },
  servizi: {
    title: "Servizi tecnici per aziende | Qualiweld SRL",
    description: "Controlli non distruttivi, qualifiche saldatori, prove di laboratorio e assistenza EN 1090 e ISO 3834 per aziende industriali.",
  },
  contatti: {
    title: "Contatti | Qualiweld SRL",
    description: "Contatta Qualiweld SRL per corsi, certificazioni, CND, prove di laboratorio e consulenza tecnica. Sede a Crispiano, Taranto.",
  },
};

function useSeo(page: Page) {
  useEffect(() => {
    const { title, description } = SEO_PAGES[page];
    const canonicalUrl = window.location.href.split("#")[0];
    document.title = title;

    const setMeta = (selector: string, attribute: "name" | "property" | "http-equiv", key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('meta[name="viewport"]', "name", "viewport", "width=device-width, initial-scale=1, viewport-fit=cover");
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta('meta[name="keywords"]', "name", "keywords", "corsi saldatura Taranto, controlli non distruttivi CND, qualifica saldatori, patentino F-GAS, EN 1090, ISO 3834, prove di laboratorio");
    setMeta('meta[name="author"]', "name", "author", "Qualiweld SRL");
    setMeta('meta[http-equiv="content-language"]', "http-equiv", "content-language", "it-IT");
    setMeta('meta[name="geo.region"]', "name", "geo.region", "IT-TA");
    setMeta('meta[name="geo.placename"]', "name", "geo.placename", "Crispiano, Taranto");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${window.location.origin}/#website`,
          name: "Qualiweld SRL",
          url: window.location.origin,
          inLanguage: "it-IT",
          description: SEO_PAGES.home.description,
        },
        {
          "@type": "ProfessionalService",
          "@id": `${window.location.origin}/#business`,
          name: "Qualiweld SRL",
          description: SEO_PAGES.home.description,
          url: window.location.origin,
          telephone: "+39 388 8095092",
          email: "qualiweld@outlook.it",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via Massafra n. 28",
            postalCode: "74012",
            addressLocality: "Crispiano",
            addressRegion: "TA",
            addressCountry: "IT",
          },
          areaServed: ["Italia", "Europa"],
          availableLanguage: "Italiano",
          sameAs: ["https://www.instagram.com/qualiweld_srls?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==", "https://www.linkedin.com/company/qualiweld-srls/?viewAsMember=true"],
          knowsAbout: ["Saldatura", "Controlli non distruttivi", "Qualifica saldatori", "Patentino F-GAS", "EN 1090", "ISO 3834", "Prove di laboratorio"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servizi e formazione Qualiweld",
            itemListElement: [
              "Corsi di saldatura e qualifica saldatori",
              "Controlli non distruttivi: VT, PT, MT, UT, PAUT e TOFD",
              "Prove di laboratorio su materiali e giunti saldati",
              "Consulenza per EN 1090 e ISO 3834",
              "Formazione e Patentino F-GAS",
            ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${window.location.origin}/#faq`,
          inLanguage: "it-IT",
          mainEntity: [
            { "@type": "Question", name: "A chi sono rivolti i corsi Qualiweld?", acceptedAnswer: { "@type": "Answer", text: "I corsi sono rivolti a privati, professionisti e aziende che desiderano sviluppare o aggiornare competenze nella saldatura, nei CND e nella coordinazione della saldatura." } },
            { "@type": "Question", name: "Il Patentino Europeo viene rilasciato al termine del corso?", acceptedAnswer: { "@type": "Answer", text: "Al termine di ogni corso è previsto l’esame finalizzato all’ottenimento del Patentino Europeo, secondo i requisiti del percorso formativo scelto." } },
            { "@type": "Question", name: "È possibile frequentare un corso presso la propria azienda?", acceptedAnswer: { "@type": "Answer", text: "Per gruppi e aziende possono essere organizzati percorsi personalizzati presso la sede del cliente, definendo calendario, programma e condizioni dedicate." } },
          ],
        },
      ],
    };
    let schemaScript = document.getElementById("qualiweld-local-business-schema") as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "qualiweld-local-business-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, [page]);
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar({
  currentPage,
  onNavigate,
}: {
  currentPage: Page;
  onNavigate: (p: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navigate = (p: Page) => {
    onNavigate(p);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full isolate transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-[#080808]/95 xl:bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 flex items-center justify-between h-20 sm:h-24 lg:h-28">
        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          aria-label="Vai alla home di Qualiweld"
          className="flex items-center gap-2"
        >
          <img src={image_WhatsApp_Image_2026_02_10_at_12_31_18___Anto_Cal_removebg_preview} alt="Logo Qualiweld" className="h-16 sm:h-20 lg:h-24 max-w-[42vw] sm:max-w-none w-auto object-contain rounded-[0px]" />
          
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex flex-1 min-w-0 items-center justify-between gap-4 ml-6 lg:ml-10">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`px-1 py-2 text-base font-semibold uppercase tracking-wide transition-colors ${
                currentPage === page
                  ? "text-[#E10600]"
                  : "text-[#A9A9A9] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-white/08 px-5 sm:px-6 py-5 flex flex-col gap-3">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`text-left py-1 text-lg font-semibold uppercase tracking-wide ${
                currentPage === page ? "text-[#E10600]" : "text-white"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => navigate("contatti")}
            className="mt-2 bg-[#E10600] text-white font-semibold uppercase tracking-wide px-5 py-3 text-sm"
          >
            Contattaci
          </button>
        </div>
      )}
    </header>
  );
}

// ─── Course Modal ─────────────────────────────────────────────────────────────

function CourseModal({
  course,
  onClose,
  onContact,
}: {
  course: Course;
  onClose: () => void;
  onContact: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-[#111111] w-full max-w-2xl max-h-[92vh] overflow-y-auto sm:rounded-sm border border-white/08 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#111111] border-b border-white/08 px-6 py-4 flex items-start justify-between z-10">
          <div>
            <span className="inline-block bg-[#E10600] text-white text-xs font-black uppercase tracking-widest px-2 py-0.5 mb-2">
              {course.method}
            </span>
            <h2 className="text-2xl font-black uppercase text-white leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {course.title}
            </h2>
          </div>
          <button onClick={onClose} className="text-[#A9A9A9] hover:text-white transition-colors mt-1 ml-4 shrink-0">
            <X size={20} />
          </button>
        </div>

        <div className="px-5 sm:px-6 py-5 sm:py-6 space-y-6">
          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { icon: Clock, label: "Durata", value: typeof course.duration === "number" ? `${course.duration} ore` : course.duration },
              { icon: MapPin, label: "Sede", value: course.location },
              { icon: Award, label: "Certificazione", value: course.certification },
              ...(course.level ? [{ icon: Star, label: "Livello", value: course.level }] : []),
              { icon: BookOpen, label: "Calendario", value: course.schedule },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-[#1B1B1B] px-4 py-3">
                <div className="flex items-center gap-1.5 text-[#E10600] mb-1">
                  <Icon size={13} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">{label}</span>
                </div>
                <div className="text-sm text-white font-medium">{value}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E10600] mb-2">Descrizione del corso</h3>
            <p className="text-[#A9A9A9] leading-relaxed text-sm">{course.description}</p>
          </div>

          {/* Prerequisites */}
          {course.prerequisites && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E10600] mb-2">Prerequisiti</h3>
              <p className="text-[#A9A9A9] text-sm">{course.prerequisites}</p>
            </div>
          )}

          {/* Includes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E10600] mb-3">Cosa include</h3>
            <ul className="space-y-2">
              {course.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#E4E4E4]">
                  <CheckCircle size={15} className="text-[#E10600] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Course enquiry */}
          <div className="bg-[#1B1B1B] border border-[#E10600]/25 p-5">
            <h3 className="text-lg font-black uppercase text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Sei interessato a questo corso?</h3>
            <p className="mt-2 text-sm text-[#A9A9A9] leading-relaxed">
              Contattaci per ricevere tutte le informazioni su calendario, iscrizione e modalità di pagamento. Potrai scegliere tra pagamento in un'unica soluzione o una soluzione rateizzata, da concordare con il nostro team.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onContact}
              className="flex-1 bg-[#E10600] text-white font-semibold uppercase tracking-wide py-3.5 text-sm flex items-center justify-center gap-2 hover:bg-[#B90400] transition-colors"
            >
              Richiedi Informazioni <ArrowRight size={16} />
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-white/15 text-white font-semibold uppercase tracking-wide py-3.5 text-sm hover:border-white/30 transition-colors"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-[#E10600] text-xs font-bold uppercase tracking-[0.25em]">{eyebrow}</span>
      <h2
        className={`text-4xl lg:text-5xl font-black uppercase leading-tight mt-2 ${light ? "text-white" : "text-white"}`}
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#A9A9A9] mt-4 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-[#040C16] border-t border-white/06">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <span className="text-3xl font-black uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              <span className="text-white">QUALI</span>
              <span className="text-[#E10600]">WELD</span>
            </span>
            
          </div>
          <p className="text-[#A9A9A9] text-sm leading-relaxed">
            Centro certificato per saldatura e controlli non distruttivi. Soluzioni integrate secondo ISO, ASME, EN 1090 e ISO 3834.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.instagram.com/qualiweld_srls?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#A9A9A9] hover:text-white hover:border-white/30 transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/company/qualiweld-srls/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#A9A9A9] hover:text-white hover:border-white/30 transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#E10600] mb-4">Navigazione</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map(({ label, page }) => (
              <li key={page}>
                <button
                  onClick={() => onNavigate(page)}
                  className="text-[#A9A9A9] text-sm hover:text-white transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#E10600] mb-4">Servizi</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Controlli Non Distruttivi (CND)", target: "service-cnd" },
              { label: "Qualifiche Saldatori", target: "service-qualifiche" },
              { label: "Welding Coordinator", target: "service-qualifiche" },
              { label: "Prove di Laboratorio", target: "service-lab" },
              { label: "Documentazione EN 1090", target: "service-doc" },
              { label: "Assistenza ISO 3834", target: "service-doc" },
            ].map(({ label, target }) => (
              <li key={label}>
                <button onClick={() => { onNavigate("servizi"); window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50); }} className="text-left text-[#A9A9A9] hover:text-white transition-colors">
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#E10600] mb-4">Contatti</h4>
          <ul className="space-y-3">
            {[
              { icon: MapPin, text: "Via Massafra n. 28, 74012 Crispiano (TA)", href: "https://maps.app.goo.gl/8J3G4EdHWPGFvLyM6" },
              { icon: Phone, text: "+39 388 8095092", href: "tel:+393888095092" },
              { icon: Mail, text: "qualiweld@outlook.it", href: "mailto:qualiweld@outlook.it" },
              { icon: Globe, text: "Copertura nazionale ed internazionale" },
            ].map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-[#A9A9A9]">
                <Icon size={14} className="text-[#E10600] mt-0.5 shrink-0" />
                {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-white hover:underline underline-offset-4 transition-colors">{text}</a> : text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/06">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#A9A9A9]">
          <span>© {new Date().getFullYear()} Qualiweld SRL — Tutti i diritti riservati</span>
          <span>P.IVA: 03473710733</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
      {children}
    </div>
  );
}

function AnimatedStat({ value, active }: { value: string; active: boolean }) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const target = Number.parseInt(value, 10);
    const suffix = value.replace(String(target), "");
    const start = performance.now();
    const duration = 1100;
    let frame = 0;
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{display}</>;
}

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const statsRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[#040C16] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1730584476141-232435a40c32?w=1920&h=1080&fit=crop&auto=format)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040C16]/97 via-[#040C16]/80 to-[#040C16]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040C16] via-transparent to-transparent" />

        {/* Orange accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E10600]" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 pt-24 pb-20 lg:pt-32">
          <div className="max-w-3xl">
            
            <h1
              className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tight text-white mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              SALDATURA<br />
              CERTIFICATA.<br />
              <span className="text-[#E10600]">ECCELLENZA</span><br />
              TECNICA.
            </h1>
            <p className="text-[#A9A9A9] text-lg max-w-xl leading-relaxed mb-10">
              Qualifiche, controlli non distruttivi e formazione specializzata secondo ISO, ASME, EN 1090 e ISO 3834. Soluzioni certificate per il settore industriale, navale e oil & gas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate("corsi")}
                className="w-full sm:w-auto justify-center bg-[#E10600] text-white font-semibold uppercase tracking-wide px-8 py-4 flex items-center gap-2 hover:bg-[#B90400] transition-colors"
              >
                Scopri i Corsi <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onNavigate("contatti")}
                className="w-full sm:w-auto border border-white/20 text-white font-semibold uppercase tracking-wide px-8 py-4 hover:border-white/40 hover:bg-white/05 transition-colors"
              >
                Richiedi Preventivo
              </button>
            </div>

            {/* Certifications strip */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-12">
              {["ISO 9712", "EN ISO 9606", "EN 1090", "ISO 3834", "ASME"].map((cert) => (
                <span key={cert} className="text-[11px] font-bold text-[#A9A9A9] uppercase tracking-widest border border-white/10 px-3 py-1">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#A9A9A9]">
          <span className="text-[10px] uppercase tracking-widest">Scopri</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* Stats bar */}
      <section ref={statsRef} className="bg-[#E10600] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
          {[
            { value: "15+", label: "Anni di Esperienza" },
            { value: "500+", label: "Operatori Certificati" },
            { value: "200+", label: "Aziende Servite" },
            { value: "7", label: "Metodi CND" },
          ].map(({ value, label }, index) => (
            <div key={label} className={`transition-all duration-700 ${statsVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${["delay-0", "delay-100", "delay-200", "delay-300"][index]}`}>
              <div className="text-4xl lg:text-5xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                <AnimatedStat value={value} active={statsVisible} />
              </div>
              <div className="text-xs uppercase tracking-wider opacity-85 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <ScrollReveal>
      {/* Services Overview */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#080808]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <SectionTitle
            eyebrow="I Nostri Servizi"
            title="SOLUZIONI INTEGRATE PER LA SALDATURA"
            subtitle="Dalla qualifica del saldatore al controllo non distruttivo, dalla documentazione normativa alle prove di laboratorio. Un unico interlocutore per tutte le esigenze del settore."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Search,
                title: "Controlli Non Distruttivi",
                desc: "VT, PT, MT, UT volumetrico/PAUT/TOFD, RT e gammagrafie, Vacuum Box, PMI.",
                page: "servizi" as Page,
              },
              {
                icon: GraduationCap,
                title: "Formazione CND",
                desc: "Corsi teorico-pratici per operatori CND con certificazione ISO 9712.",
                page: "corsi" as Page,
              },
              {
                icon: Award,
                title: "Qualifiche Saldatori",
                desc: "Qualifiche MIG/MAG, SMAW, TIG, Brasatura e Welding Coordinator.",
                page: "corsi" as Page,
              },
              {
                icon: FlaskConical,
                title: "Prove di Laboratorio",
                desc: "Prove meccaniche e metallografiche per qualifica procedimenti e materiali.",
                page: "servizi" as Page,
              },
            ].map(({ icon: Icon, title, desc, page }) => (
              <div
                key={title}
                className="group bg-[#111111] border border-white/06 p-6 hover:border-[#E10600]/40 transition-all duration-300 cursor-pointer"
                onClick={() => onNavigate(page)}
              >
                <div className="w-10 h-10 bg-[#E10600]/10 flex items-center justify-center mb-5 group-hover:bg-[#E10600]/20 transition-colors">
                  <Icon size={20} className="text-[#E10600]" />
                </div>
                <h3 className="text-white font-black uppercase text-lg leading-tight mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-[#A9A9A9] text-sm leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1 text-[#E10600] text-xs font-semibold uppercase tracking-wide mt-5">
                  Scopri <ChevronRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </ScrollReveal>

      <ScrollReveal>
      {/* Why Us */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              eyebrow="Perché Sceglierci"
              title="COMPETENZA CERTIFICATA. RISULTATI CONCRETI."
              subtitle="Qualiweld è il riferimento per aziende e professionisti che operano nei settori industriale, navale, oil & gas e costruzioni metalliche."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Personale tecnico certificato secondo normative internazionali",
                "Strumentazione avanzata e verifiche anche on-site presso il cliente",
                "Formazione tecnica completa e continuamente aggiornata",
                "Prove e controlli interni per massima affidabilità dei risultati",
                "Flessibilità operativa con copertura su tutto il territorio nazionale",
                "Supporto documentale per EN 1090, ISO 3834, ISO 9001, 14001, 45001",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#E4E4E4] text-sm">
                  <span className="w-5 h-5 bg-[#E10600] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onNavigate("chi-siamo")}
              className="mt-8 border border-[#E10600] text-[#E10600] font-semibold uppercase tracking-wide px-6 py-3 text-sm flex items-center gap-2 hover:bg-[#E10600] hover:text-white transition-colors"
            >
              Scopri chi siamo <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-[#1B1B1B] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1730584474196-b0e8a29303e8?w=800&h=600&fit=crop&auto=format"
                alt="Saldatori al lavoro in officina"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#E10600] p-5 shadow-xl">
              <div className="text-4xl font-black text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>ISO</div>
              <div className="text-white/80 text-xs uppercase tracking-widest mt-0.5">Certificato</div>
            </div>
          </div>
        </div>
      </section>

      </ScrollReveal>

      <ScrollReveal>
      {/* Sectors */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#080808]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <SectionTitle
            eyebrow="Settori di Applicazione"
            title="COMPETENZA IN OGNI SETTORE"
            subtitle="Le nostre soluzioni certificate trovano applicazione nei settori più esigenti, dove la qualità della saldatura è un requisito imprescindibile."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {["Industriale", "Navale & Offshore", "Oil & Gas", "Costruzioni Metalliche", "Manifatturiero", "Impiantistico", "Petrolchimico", "Infrastrutture"].map((sector) => (
              <span key={sector} className="border border-[#E10600]/30 text-[#E4E4E4] px-4 py-2 text-sm font-medium hover:border-[#E10600] hover:text-[#E10600] transition-colors cursor-default">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* CTA Banner */}
      <section className="bg-[#E10600] py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Hai bisogno di una consulenza tecnica?
            </h2>
            <p className="text-white/80 mt-2">Contattaci per un preventivo personalizzato. Risposta garantita entro 24 ore.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 shrink-0">
            <button
              onClick={() => onNavigate("contatti")}
              className="w-full sm:w-auto text-center bg-white text-[#E10600] font-bold uppercase tracking-wide px-8 py-4 hover:bg-white/90 transition-colors text-sm"
            >
              Contattaci
            </button>
            <button
              onClick={() => onNavigate("corsi")}
              className="w-full sm:w-auto text-center border-2 border-white text-white font-bold uppercase tracking-wide px-8 py-4 hover:bg-white/10 transition-colors text-sm"
            >
              I Nostri Corsi
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Chi Siamo Page ───────────────────────────────────────────────────────────

function ChiSiamoPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 bg-[#080808] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E10600]" />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#E10600]/03 to-transparent" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <span className="inline-flex items-center gap-2 text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#E10600]" />
            Chi Siamo
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            COMPETENZA,<br />CERTIFICAZIONE,<br /><span className="text-[#E10600]">AFFIDABILITÀ.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#080808]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle eyebrow="La Nostra Storia" title="UN RIFERIMENTO NEL SETTORE SALDATURA" />
            <div className="mt-6 space-y-4 text-[#A9A9A9] leading-relaxed">
              <p>
                Qualiweld SRL nasce dall'esperienza pluriennale nel settore della saldatura e dei controlli non distruttivi. Con sede a Taranto, siamo diventati un punto di riferimento per aziende e professionisti che operano nei settori industriale, navale, oil & gas e costruzioni metalliche.
              </p>
              <p>
                La nostra missione è fornire soluzioni certificate di alta qualità, combinando competenza tecnica, strumentazione avanzata e un approccio orientato al cliente. Ogni servizio è progettato per rispondere alle esigenze specifiche dei nostri committenti, con la flessibilità di operare sia presso la nostra sede che direttamente on-site.
              </p>
              <p>
                Ci occupiamo dell'intero ciclo della qualità in saldatura: dalla formazione e qualifica degli operatori, ai controlli durante e dopo la produzione, fino all'assistenza documentale per le principali normative internazionali.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#111111] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1747999461210-a56f72294428?w=800&h=800&fit=crop&auto=format"
                alt="Operatore al lavoro con smerigliatrice industriale"
                className="w-full h-full object-cover opacity-75"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-[#E10600] p-4 text-white">
              <div className="text-3xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>15+</div>
              <div className="text-xs uppercase tracking-wider opacity-80">Anni nel settore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#111111] border-y border-white/6">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <SectionTitle
            eyebrow="Le persone dietro Qualiweld"
            title="I NOSTRI SOCI"
            subtitle="Tre professionalità complementari, unite dalla stessa idea di qualità: competenza verificabile, presenza sul campo e soluzioni concrete."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { role: "Site Manager", name: "Marcello Trani", text: "Classe 1989, con quasi 10 anni di esperienza è diventato un punto di riferimento nei controlli non distruttivi. Ha maturato esperienze in tutta Italia, partecipando a importanti progetti per aziende come Eni, Saipem e AC Boilers, tra le altre. È qualificato come operatore CND nei metodi VT, PT, MT e RT.", image: image_Marcello_Trani, imagePosition: "object-[50%_0%]" },
              { role: "Amministratore Unico · Ispettore di Saldatura", name: "Antonio Caliandro", text: "Ha forgiato la sua esperienza lavorando a progetti imponenti come la ricostruzione del Viadotto Genova San Giorgio, costruendo un percorso di crescita che non si è mai fermato.", image: image_Antonio_Caliandro, imagePosition: "object-center brightness-[1.1] contrast-[1.25]" },
              { role: "NDT Manager · Responsabile Commerciale", name: "Danilo Rondinelli", text: "Porta in QualiWeld oltre 10 anni di esperienza in prima linea nei cantieri e negli impianti dei colossi industriali italiani ed europei: Eni, Ilva, Edison, Saipem e Vestas.", image: image_Danilo_Rondinelli, imagePosition: "object-[50%_12%] brightness-[1.1] contrast-[1.25]" },
            ].map((partner, index) => (
              <article key={partner.role} className="bg-[#111111] p-7 lg:p-8 group hover:bg-[#1B1B1B] transition-colors">
                <div className="flex items-start justify-between gap-5">
                  <span className="text-[#E10600] font-bold text-xs tracking-[0.24em] uppercase">{partner.role}</span>
                  {partner.image ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/20 bg-white overflow-hidden shrink-0 group-hover:border-[#E10600]/60 transition-colors">
                      <ImageWithFallback src={partner.image} alt={`Ritratto di ${partner.name}`} className={`w-full h-full object-cover ${partner.imagePosition}`} />
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dashed border-white/25 bg-[#080808] flex items-center justify-center text-center text-[#A9A9A9] text-[9px] font-bold uppercase tracking-[0.16em] leading-tight shrink-0 group-hover:border-[#E10600]/60 transition-colors">
                      Foto<br />socio
                    </div>
                  )}
                </div>
                <div className="mt-8 mb-6 h-px w-12 bg-[#E10600]" />
                <h3 className="text-white font-black uppercase text-2xl leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{partner.name}</h3>
                <p className="mt-4 text-[#A9A9A9] text-sm leading-relaxed">{partner.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner network */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#080808] border-b border-white/6">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <SectionTitle
            eyebrow="Rete di competenze"
            title="I NOSTRI PARTNER"
            subtitle="Collaboriamo con realtà specializzate per offrire competenze, servizi e supporto tecnico sempre più completi."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { name: "Consorzio RMB", area: "Controlli non distruttivi", text: "Leader nel campo dei controlli non distruttivi in tutta Italia, ha deciso di supportarci in questa fase di crescita per permetterci di effettuare tutti i tipi di controlli richiesti nelle varie commesse a noi affidate.", collaboration: "Supporto tecnico CND", logo: image_BADFAC40_6746_40E6_A38A_0EA26796CBDF_L0_001_13_04_2026_16_10_23_removebg_preview, logoClass: "object-cover object-[50%_4%]" },
              { name: "TC2 Global Register", area: "Certificazioni, ispezioni ed expediting", text: "Ente accreditato che, oltre a occuparsi di certificazione, è tra i più noti per attività di ispezione ed expediting, per seguire e monitorare varie commesse in giro per il mondo.", collaboration: "Supporto alle commesse internazionali", logo: image_TC2_Global_Register, logoClass: "object-contain" },
              { name: "STS Certificazioni", area: "Certificazioni e F-Gas", text: "Ente accreditato per il rilascio di certificazioni di saldatura e di prodotto, oltre che per i controlli non distruttivi. Opera anche nel settore F-Gas, per il quale ha trovato in noi un punto di riferimento per il Sud Italia.", collaboration: "Riferimento per il Sud Italia", logo: image_STS_Certificazioni_Partner, logoClass: "object-cover object-[50%_4%]" },
            ].map((partner, index) => (
              <article key={index} className="bg-[#080808] p-7 lg:p-8 group hover:bg-[#111111] transition-colors">
                <div className="h-24 border border-dashed border-white/20 bg-black flex items-center justify-center px-6 group-hover:border-[#E10600]/60 transition-colors">
                  <ImageWithFallback
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="h-full w-full object-contain object-right"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <h3 className="text-white font-black uppercase text-2xl leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{partner.name}</h3>
                </div>
                <p className="mt-2 text-[#E10600] text-[11px] font-bold uppercase tracking-[0.16em]">{partner.area}</p>
                <p className="mt-5 text-[#A9A9A9] text-sm leading-relaxed">{partner.text}</p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-white text-xs font-semibold">{partner.collaboration}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#111111]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <SectionTitle
            eyebrow="Normative di Riferimento"
            title="LAVORIAMO SECONDO GLI STANDARD INTERNAZIONALI"
            subtitle="Tutte le nostre attività sono eseguite in conformità alle principali normative internazionali di settore. Offriamo anche assistenza per la redazione e l'implementazione della documentazione normativa."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                code: "ISO 9712",
                title: "Qualifica CND",
                desc: "Qualifica e certificazione degli operatori nei metodi di controllo non distruttivo.",
              },
              {
                code: "EN ISO 9606",
                title: "Qualifica Saldatori",
                desc: "Qualifica dei saldatori per la saldatura per fusione di materiali metallici.",
              },
              {
                code: "EN 1090",
                title: "Esecuzione Strutture",
                desc: "Requisiti tecnici per l'esecuzione di strutture di acciaio e di alluminio.",
              },
              {
                code: "ISO 3834",
                title: "Qualità in Saldatura",
                desc: "Requisiti di qualità per la saldatura per fusione dei materiali metallici.",
              },
              {
                code: "ISO 14731",
                title: "Coordinazione Saldatura",
                desc: "Coordinazione della saldatura: compiti e responsabilità del coordinatore.",
              },
              {
                code: "ASME",
                title: "Codici Americani",
                desc: "Codici e standard ASME per applicazioni in ambito oil & gas e impiantistico.",
              },
              {
                code: "ISO 9001",
                title: "Gestione Qualità",
                desc: "Sistemi di gestione per la qualità — Requisiti e documentazione.",
              },
              {
                code: "ISO 45001",
                title: "Sicurezza sul Lavoro",
                desc: "Sistemi di gestione per la salute e la sicurezza sul lavoro.",
              },
              {
                code: "ISO 14001",
                title: "Ambiente",
                desc: "Sistemi di gestione ambientale — Requisiti e guida per l'uso.",
              },
            ].map(({ code, title, desc }) => (
              <div key={code} className="bg-[#080808] border border-white/06 p-5 hover:border-[#E10600]/30 transition-colors">
                <span className="text-[#E10600] font-black text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {code}
                </span>
                <h4 className="text-white font-semibold text-sm mt-1 mb-2">{title}</h4>
                <p className="text-[#A9A9A9] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#080808]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <SectionTitle eyebrow="I Nostri Valori" title="COSA CI GUIDA OGNI GIORNO" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Qualità Certificata",
                desc: "Ogni servizio è erogato secondo standard internazionali verificati. Non scattiamo sull'eccellenza tecnica.",
              },
              {
                icon: Users,
                title: "Competenza Umana",
                desc: "Il nostro team è composto da tecnici certificati con anni di esperienza sul campo, aggiornati continuamente.",
              },
              {
                icon: Globe,
                title: "Flessibilità Operativa",
                desc: "Operiamo presso la nostra sede a Taranto e direttamente nei cantieri e nelle officine dei clienti su tutto il territorio nazionale.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border-t-2 border-[#E10600] pt-6">
                <Icon size={28} className="text-[#E10600] mb-4" />
                <h3 className="text-white font-black uppercase text-xl mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-[#A9A9A9] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Corsi Page ───────────────────────────────────────────────────────────────

function CorsiPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("tutti");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [openCourseFaq, setOpenCourseFaq] = useState<number | null>(null);
  const filtered =
    activeCategory === "tutti"
      ? COURSES
      : COURSES.filter((c) => c.category === activeCategory);

  return (
    <>
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onContact={() => {
            setSelectedCourse(null);
            onNavigate("contatti");
          }}
        />
      )}

      {/* Page hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 bg-[#080808] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E10600]" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <span className="inline-flex items-center gap-2 text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#E10600]" />
            Formazione Specializzata
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            I NOSTRI<br /><span className="text-[#E10600]">CORSI</span>
          </h1>
          <p className="text-[#A9A9A9] max-w-xl mt-4 leading-relaxed">
            Corsi teorico-pratici con rilascio di certificazione secondo normativa. Organizziamo sessioni presso la nostra sede a Taranto e, su richiesta, direttamente in azienda.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-[#111111] border-y border-white/06 sticky top-20 sm:top-24 lg:top-28 z-30">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <div className="flex overflow-x-auto gap-0 scrollbar-none">
            {(["tutti", "cnd", "saldatura", "coordinatori", "fgas"] as CourseCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors ${
                  activeCategory === cat
                    ? "border-[#E10600] text-[#E10600]"
                    : "border-transparent text-[#A9A9A9] hover:text-white"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="py-16 bg-[#080808] min-h-[60vh]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((course) => (
              <div
                key={course.id}
                className="group bg-[#111111] border border-white/06 hover:border-[#E10600]/40 transition-all duration-300 flex flex-col"
              >
                {/* Card header */}
                <div className="p-5 border-b border-white/06">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-[#E10600] text-white text-xs font-black uppercase tracking-wider px-2.5 py-1">
                      {course.method}
                    </span>
                    <span className="bg-[#1B1B1B] text-[#A9A9A9] text-xs uppercase tracking-wide px-2.5 py-1">
                      {course.category === "cnd" ? "CND" : course.category === "saldatura" ? "Saldatura" : course.category === "fgas" ? "F-GAS" : "Coordinatori"}
                    </span>
                  </div>
                  <h3 className="text-white font-black uppercase text-xl leading-tight group-hover:text-[#E10600] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {course.title}
                  </h3>
                  {course.level && (
                    <div className="text-[#A9A9A9] text-xs mt-1">{course.level}</div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-[#A9A9A9] text-sm">
                      <Clock size={13} className="text-[#E10600]" />
                      <span className="font-semibold text-white">{typeof course.duration === "number" ? `${course.duration} ore` : course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#A9A9A9] text-sm">
                      <Award size={13} className="text-[#E10600]" />
                      <span>{course.certification}</span>
                    </div>
                  </div>

                  <p className="text-[#A9A9A9] text-sm leading-relaxed line-clamp-3 flex-1">
                    {course.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/06">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="w-full bg-[#E10600]/10 border border-[#E10600]/30 text-[#E10600] text-xs font-semibold uppercase tracking-wide px-4 py-2.5 flex items-center justify-center gap-1.5 hover:bg-[#E10600] hover:text-white transition-colors"
                    >
                      Richiedi informazioni <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification value */}
      <section className="py-20 bg-[#111111] border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <div className="bg-[#E10600] p-8 sm:p-10">
            <span className="text-white/80 text-xs font-bold uppercase tracking-[0.24em]">Il valore della formazione</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black uppercase text-white leading-[0.9]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>UNA CERTIFICAZIONE,<br />UN NUOVO SLANCIO.</h2>
            <p className="mt-5 max-w-md text-white/85 leading-relaxed text-sm">Investire nelle competenze certificate significa presentarsi al mercato con strumenti concreti, riconosciuti e spendibili nel proprio percorso professionale.</p>
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3 mt-8 text-sm text-white">
              <span className="flex items-center gap-2"><Check size={15} /> Competenze verificabili</span>
              <span className="flex items-center gap-2"><Check size={15} /> Più opportunità</span>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-[#111111] border-t border-white/06">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E10600]/10 flex items-center justify-center shrink-0">
              <Briefcase size={18} className="text-[#E10600]" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Corsi aziendali su misura</h4>
              <p className="text-[#A9A9A9] text-sm mt-1">
                Organizziamo corsi direttamente in azienda, con date e programmi personalizzati in base alle vostre esigenze produttive. Tariffe dedicate per gruppi.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate("contatti")}
            className="w-full md:w-auto justify-center shrink-0 bg-[#E10600] text-white font-semibold uppercase tracking-wide px-6 py-3 text-sm flex items-center gap-2 hover:bg-[#B90400] transition-colors"
          >
            Richiedi Preventivo <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Course FAQ */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#080808] border-t border-white/6">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-4"><span className="w-8 h-px bg-[#E10600]" />FAQ Corsi</span>
            <h2 className="text-4xl lg:text-5xl font-black uppercase text-white leading-[0.95]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>LE RISPOSTE<br />CHE CERCHI.</h2>
            <p className="mt-5 text-[#A9A9A9] leading-relaxed max-w-md">Per ogni dubbio sul percorso formativo, sulle qualifiche e sulle modalità di partecipazione, il nostro team è a disposizione.</p>
          </div>
          <div className="border-t border-white/10">
            {[
              { q: "A chi sono rivolti i corsi Qualiweld?", a: "I corsi sono rivolti a privati, professionisti e aziende che desiderano sviluppare o aggiornare competenze nella saldatura, nei CND e nella coordinazione della saldatura." },
              { q: "Il Patentino Europeo viene rilasciato al termine del corso?", a: "Sì. Al termine di ogni corso è previsto l’esame finalizzato all’ottenimento del Patentino Europeo, secondo i requisiti del percorso formativo scelto." },
              { q: "Posso frequentare il corso presso la mia azienda?", a: "Sì. Per gruppi e aziende possiamo organizzare percorsi personalizzati presso la vostra sede, definendo calendario, programma e condizioni dedicate." },
              { q: "È possibile rateizzare il costo del corso?", a: "Sì. Scrivici per trovare la soluzione più adatta a te: valuteremo insieme le opzioni disponibili in base al percorso selezionato." },
            ].map((faq, index) => {
              const isOpen = openCourseFaq === index;
              return <div key={faq.q} className="border-b border-white/10">
                <button onClick={() => setOpenCourseFaq(isOpen ? null : index)} className="w-full py-5 flex items-center justify-between gap-5 text-left group" aria-expanded={isOpen}>
                  <span className={`font-semibold text-base transition-colors ${isOpen ? "text-[#E10600]" : "text-white group-hover:text-[#E10600]"}`}>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} className="text-[#E10600] shrink-0" /> : <ChevronDown size={18} className="text-[#A9A9A9] shrink-0" />}
                </button>
                {isOpen && <p className="pb-5 pr-10 text-sm leading-relaxed text-[#A9A9A9]">{faq.a}</p>}
              </div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Servizi Page ─────────────────────────────────────────────────────────────

function ServiziPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      code: "CND",
      title: "Controlli Non Distruttivi",
      desc: "Eseguiamo controlli su componenti e strutture, sia in officina che presso cantieri e impianti, con la strumentazione più avanzata disponibile.",
      items: [
        { method: "VT", name: "Esame Visivo", note: "EN ISO 17637" },
        { method: "PT", name: "Liquidi Penetranti", note: "EN ISO 3452" },
        { method: "MT", name: "Particelle Magnetiche", note: "EN ISO 17638" },
        { method: "UT", name: "Ultrasuoni volumetrici e spessimetrici", note: "EN ISO 16810 / 10863" },
        { method: "PAUT / TOFD", name: "Ultrasuoni avanzati PAUT / TOFD", note: "Tecniche avanzate di ispezione" },
        { method: "RT", name: "Radiografie Industriali & Gammagrafie", note: "EN ISO 17636" },
        { method: "VBT", name: "Vacuum Box Testing", note: "ASME V / EN 1779" },
        { method: "PMI", name: "Positive Material Identification", note: "XRF / LIBS" },
      ],
    },
    {
      icon: Award,
      code: "QUALIFICHE",
      title: "Qualifiche Saldatori e Procedimenti",
      desc: "Centro qualifiche a Taranto o direttamente presso le aziende. Rilasciamo certificati riconosciuti a livello europeo e internazionale.",
      items: [
        { method: "MIG/MAG", name: "Qualifica saldatori GMAW", note: "EN ISO 9606-1" },
        { method: "SMAW", name: "Qualifica saldatori a elettrodo", note: "EN ISO 9606-1" },
        { method: "TIG", name: "Qualifica saldatori GTAW", note: "EN ISO 9606-1" },
        { method: "BRAZ", name: "Qualifica brasatura (pers. e proc.)", note: "EN ISO 13585" },
        { method: "WPS", name: "Redazione e qualifica WPS/PQR", note: "EN ISO 15614" },
        { method: "WCO", name: "WCO", note: "EN ISO 14731" },
      ],
    },
    {
      icon: FlaskConical,
      code: "LAB",
      title: "Prove di Laboratorio",
      desc: "Prove meccaniche e metallografiche per la qualifica dei procedimenti di saldatura, caratterizzazione materiali e analisi di giunti e componenti.",
      items: [
        { method: "MECH", name: "Prove di trazione e piegatura", note: "EN ISO 6892 / 5173" },
        { method: "HARD", name: "Prove di durezza Vickers / Brinell", note: "EN ISO 6507 / 6506" },
        { method: "IMPACT", name: "Prove di resilienza Charpy", note: "EN ISO 148-1" },
        { method: "MACRO", name: "Esame macrografico su giunti", note: "EN ISO 17639" },
        { method: "MICRO", name: "Analisi metallografica e micrografia", note: "EN ISO 17639" },
        { method: "CHEM", name: "Analisi chimica materiali metallici", note: "Spettroscopia OES" },
      ],
    },
    {
      icon: FileText,
      code: "DOC",
      title: "Documentazione e Assistenza Normativa",
      desc: "Supporto completo per la redazione e implementazione della documentazione richiesta dalle principali normative del settore.",
      items: [
        { method: "1090", name: "Documentazione EN 1090-1/2", note: "Costruzioni metalliche" },
        { method: "3834", name: "Assistenza ISO 3834 (parte 2/3/4)", note: "Qualità in saldatura" },
        { method: "9001", name: "Supporto ISO 9001:2015", note: "Sistema qualità" },
        { method: "14001", name: "Supporto ISO 14001:2015", note: "Gestione ambientale" },
        { method: "45001", name: "Supporto ISO 45001:2018", note: "Salute e sicurezza" },
        { method: "WPS", name: "Redazione procedure tecniche saldatura", note: "WPS / pWPS / WPQR" },
      ],
    },
  ];

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 bg-[#080808] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E10600]" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <span className="inline-flex items-center gap-2 text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#E10600]" />
            Per le Aziende
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            SERVIZI<br />PER <span className="text-[#E10600]">AZIENDE</span>
          </h1>
          <p className="text-[#A9A9A9] max-w-xl mt-4 leading-relaxed">
            Soluzioni integrate e certificate secondo le normative ISO, ASME, EN 1090 e ISO 3834. Un unico interlocutore per tutte le esigenze della qualità in saldatura.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, si) => (
        <section
          key={service.code}
          id={`service-${service.code.toLowerCase()}`}
          className={`py-14 md:py-16 lg:py-20 scroll-mt-20 ${si % 2 === 0 ? "bg-[#080808]" : "bg-[#111111]"}`}
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Service header */}
              <div className="lg:col-span-2">
                <div className="w-12 h-12 bg-[#E10600]/10 flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-[#E10600]" />
                </div>
                <span className="text-[#E10600] font-black text-sm uppercase tracking-widest">{service.code}</span>
                <h2 className="text-3xl lg:text-4xl font-black uppercase text-white leading-tight mt-1 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {service.title}
                </h2>
                <p className="text-[#A9A9A9] leading-relaxed text-sm">{service.desc}</p>
                <button
                  onClick={() => onNavigate("contatti")}
                  className="mt-6 text-[#E10600] text-sm font-semibold uppercase tracking-wide flex items-center gap-1.5 hover:gap-3 transition-all"
                >
                  Richiedi preventivo <ArrowRight size={14} />
                </button>
              </div>

              {/* Methods list */}
              <div className="lg:col-span-3 grid grid-cols-1 min-[520px]:grid-cols-2 gap-3">
                {service.items.map(({ method, name, note }) => (
                  <div key={method} className="flex items-start gap-3 bg-[#080808]/50 border border-white/06 p-4 hover:border-[#E10600]/25 transition-colors">
                    <span className="text-xs font-black text-[#E10600] uppercase shrink-0 min-w-[2.5rem] pt-0.5">{method}</span>
                    <div>
                      <div className="text-white text-sm font-semibold">{name}</div>
                      <div className="text-[#A9A9A9] text-xs mt-0.5">{note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-14 md:py-16 lg:py-24 bg-[#080808] border-t border-white/06">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <SectionTitle eyebrow="FAQ" title="DOMANDE FREQUENTI" />
          <div className="mt-10 max-w-3xl space-y-3">
            {[
              {
                q: "Eseguite i controlli direttamente presso la nostra azienda?",
                a: "Sì, operiamo sia presso la nostra sede a Taranto che in mobilità su tutto il territorio nazionale. Portiamo strumentazione avanzata direttamente nei vostri cantieri, officine o impianti.",
              },
              {
                q: "Quanto tempo richiede una qualifica saldatore?",
                a: "Le qualifiche su singolo procedimento richiedono tipicamente 1-3 giornate, incluse le prove pratiche e i controlli meccanici. I tempi possono variare in base al numero di saldatori e ai procedimenti richiesti.",
              },
              {
                q: "I certificati rilasciati sono riconosciuti a livello europeo?",
                a: "Sì. Le qualifiche dei saldatori sono rilasciate secondo EN ISO 9606-1 e sono riconosciute in tutta Europa. Le certificazioni CND seguono la norma ISO 9712 con validità internazionale.",
              },
              {
                q: "Offrite supporto per l'ottenimento della marcatura CE EN 1090?",
                a: "Sì, offriamo un servizio completo di assistenza documentale per l'implementazione del sistema di controllo della produzione in fabbrica (FPC) richiesto dalla EN 1090-1, inclusa la redazione di tutta la documentazione tecnica.",
              },
              {
                q: "È possibile rateizzare i costi dei corsi?",
                a: "Assolutamente sì. Per i corsi individuali offriamo piani di rateizzazione in 2-4 rate mensili senza interessi. Per importi elevati o per aziende con più partecipanti, sono disponibili soluzioni di finanziamento agevolato. Contattateci per i dettagli.",
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="border border-white/06 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-white font-semibold text-sm pr-4">{q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-[#E10600] shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-[#A9A9A9] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 border-t border-white/06 pt-3">
                    <p className="text-[#A9A9A9] text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#E10600]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Richiedi un preventivo personalizzato
            </h2>
            <p className="text-white/80 mt-2 text-sm">Risposta garantita entro 24 ore lavorative.</p>
          </div>
          <button
            onClick={() => onNavigate("contatti")}
            className="shrink-0 bg-white text-[#E10600] font-bold uppercase tracking-wide px-8 py-4 hover:bg-white/90 transition-colors text-sm flex items-center gap-2"
          >
            Contattaci ora <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </>
  );
}

// ─── Contatti Page ────────────────────────────────────────────────────────────

function ContattiPage() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  return (
    <>
      {/* Page hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 bg-[#080808] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E10600]" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10">
          <span className="inline-flex items-center gap-2 text-[#E10600] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-px bg-[#E10600]" />
            Parliamo
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            CONTATTACI
          </h1>
          <p className="text-[#A9A9A9] max-w-xl mt-4 leading-relaxed">
            Compila il modulo per richiedere informazioni, un preventivo o per prenotare un corso. Risponderemo entro 24 ore lavorative.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#080808]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 xl:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-black uppercase text-white mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Informazioni di Contatto
            </h2>
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Sede Operativa", value: "Via Massafra n. 28, 74012 Crispiano (TA)", href: "https://maps.app.goo.gl/8J3G4EdHWPGFvLyM6" },
                { icon: Phone, label: "Telefono", value: "+39 388 8095092", href: "tel:+393888095092" },
                { icon: Mail, label: "Email", value: "qualiweld@outlook.it", href: "mailto:qualiweld@outlook.it" },
                { icon: Clock, label: "Orari", value: "Lun–Ven: 8:00 – 18:00" },
                { icon: Globe, label: "Copertura", value: "Territorio nazionale ed internazionale" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#E10600]/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#E10600]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#A9A9A9] mb-0.5">{label}</div>
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-white text-sm font-medium hover:text-[#E10600] hover:underline underline-offset-4 transition-colors">{value}</a> : <div className="text-white text-sm font-medium">{value}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 pt-8 border-t border-white/06">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#A9A9A9] mb-3">Seguici</div>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/qualiweld_srls?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram Qualiweld" className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#A9A9A9] hover:text-white hover:border-white/30 transition-colors">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.979-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/qualiweld-srls/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Qualiweld" className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#A9A9A9] hover:text-white hover:border-white/30 transition-colors">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Google Form */}
          <div className="lg:col-span-2 bg-[#111111] border border-white/10 p-8 lg:p-10 flex flex-col items-start justify-center">
            <span className="text-[#E10600] text-xs font-bold uppercase tracking-[0.24em]">Richieste e preventivi</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black uppercase text-white leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Parliamo del tuo progetto.
            </h2>
            <p className="mt-4 max-w-xl text-[#A9A9A9] leading-relaxed">
              Compila il modulo per richiedere informazioni sui corsi, servizi tecnici o una consulenza personalizzata. Ti risponderemo entro 24 ore lavorative.
            </p>
            <label className="mt-7 flex items-start gap-3 max-w-xl cursor-pointer">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(event) => setPrivacyAccepted(event.target.checked)}
                className="mt-0.5 h-4 w-4 accent-[#E10600]"
              />
              <span className="text-xs text-[#A9A9A9] leading-relaxed">
                Ho letto e preso visione della{' '}
                <button type="button" onClick={() => setPrivacyOpen(true)} className="font-semibold text-white underline underline-offset-4 hover:text-[#E10600] transition-colors">Privacy e Policy</button>{' '}
                e acconsento al trattamento dei dati per ricevere riscontro alla mia richiesta.
              </span>
            </label>
            <a
              href={privacyAccepted ? "https://forms.gle/fU5LWW9p8ZTh3owW7" : undefined}
              target={privacyAccepted ? "_blank" : undefined}
              rel={privacyAccepted ? "noopener noreferrer" : undefined}
              aria-disabled={!privacyAccepted}
              onClick={(event) => { if (!privacyAccepted) event.preventDefault(); }}
              className={`mt-6 inline-flex items-center gap-3 px-6 py-4 text-sm font-bold uppercase tracking-wide transition-colors ${privacyAccepted ? "bg-[#E10600] text-white hover:bg-[#B90400] cursor-pointer" : "bg-white/10 text-[#A9A9A9] cursor-not-allowed"}`}
            >
              Compila il form per richiedere informazioni <ArrowRight size={18} />
            </a>
            {!privacyAccepted && <p className="mt-3 text-xs text-[#A9A9A9]">Per proseguire, conferma di aver letto la Privacy e Policy.</p>}
          </div>
        </div>
      </section>

      {privacyOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/75" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/15 shadow-2xl">
            <div className="sticky top-0 flex items-start justify-between gap-6 bg-[#111111] border-b border-white/10 px-6 py-5">
              <div>
                <span className="text-[#E10600] text-[10px] font-bold uppercase tracking-[0.22em]">Qualiweld SRL</span>
                <h2 id="privacy-title" className="mt-1 text-2xl font-black uppercase text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Privacy e Policy</h2>
              </div>
              <button type="button" onClick={() => setPrivacyOpen(false)} aria-label="Chiudi informativa privacy" className="text-[#A9A9A9] hover:text-white transition-colors"><X size={22} /></button>
            </div>
            <div className="p-6 space-y-6 text-sm text-[#A9A9A9] leading-relaxed">
              <div><h3 className="text-white font-semibold mb-1">Titolare del trattamento</h3><p>Qualiweld SRL · Via Massafra n. 28, 74012 Crispiano (TA) · P.IVA 03473710733 · qualiweld@outlook.it.</p></div>
              <div><h3 className="text-white font-semibold mb-1">Dati e finalità</h3><p>Raccogliamo i dati identificativi e di contatto, le informazioni aziendali e il contenuto della richiesta esclusivamente per gestire informazioni, preventivi, corsi e consulenze richieste.</p></div>
              <div><h3 className="text-white font-semibold mb-1">Base giuridica e conservazione</h3><p>Il trattamento è necessario per rispondere a una richiesta dell’interessato e per eventuali misure precontrattuali. I dati sono conservati per il tempo strettamente necessario alla gestione della richiesta.</p></div>
              <div><h3 className="text-white font-semibold mb-1">Diritti dell’interessato</h3><p>Puoi richiedere accesso, rettifica, cancellazione o limitazione del trattamento scrivendo a qualiweld@outlook.it.</p></div>
              <p className="pt-4 border-t border-white/10 text-xs">Il modulo di contatto è ospitato su Google Forms ed è soggetto anche alle condizioni e all’informativa privacy di Google.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(false);
  useSeo(currentPage);

  useEffect(() => {
    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY <= 0 && !event.relatedTarget && !exitIntentShown) {
        setShowExitIntent(true);
        setExitIntentShown(true);
      }
    };
    window.addEventListener("mouseout", handleExitIntent);
    return () => window.removeEventListener("mouseout", handleExitIntent);
  }, [exitIntentShown]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="relative min-h-screen w-full max-w-none min-w-0 overflow-x-hidden bg-background text-foreground">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="w-full min-w-0">
        {currentPage === "home" && <HomePage onNavigate={navigateTo} />}
        {currentPage === "chi-siamo" && <ChiSiamoPage />}
        {currentPage === "corsi" && <CorsiPage onNavigate={navigateTo} />}
        {currentPage === "servizi" && <ServiziPage onNavigate={navigateTo} />}
        {currentPage === "contatti" && <ContattiPage />}
      </main>

      <Footer onNavigate={navigateTo} />
      {showExitIntent && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="exit-intent-title">
          <div className="relative w-full max-w-lg bg-[#111111] border border-[#E10600]/40 p-7 sm:p-9 shadow-2xl">
            <button type="button" onClick={() => setShowExitIntent(false)} aria-label="Chiudi popup" className="absolute right-4 top-4 text-[#A9A9A9] hover:text-white transition-colors"><X size={20} /></button>
            <span className="text-[#E10600] text-xs font-bold uppercase tracking-[0.22em]">Qualiweld SRL</span>
            <h2 id="exit-intent-title" className="mt-3 text-3xl sm:text-4xl font-black uppercase text-white leading-[0.95]" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Hai trovato le informazioni che cercavi?</h2>
            <p className="mt-5 text-[#A9A9A9] leading-relaxed">Contattaci per ulteriori dettagli e per una consulenza gratuita: saremo felici di aiutarti a individuare il percorso o il servizio più adatto alle tue esigenze.</p>
            <button type="button" onClick={() => { setShowExitIntent(false); navigateTo("contatti"); }} className="mt-7 w-full sm:w-auto bg-[#E10600] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#B90400] transition-colors">Contattaci</button>
          </div>
        </div>
      )}
    </div>
  );
}
