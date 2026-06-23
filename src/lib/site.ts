/**
 * Central content source for AMI Ruhama Mission Hospital.
 *
 * Everything the marketing site renders lives here so non-developers can
 * update copy, services, fees and contact details in one place.
 *
 * Provenance: facts are drawn from the hospital's official profile deck.
 * Items marked `TODO: confirm` were either missing from the deck or were
 * inconsistent in the source and should be verified before launch.
 */

export const site = {
  name: "AMI Ruhama Mission Hospital",
  shortName: "AMI Ruhama",
  // Historical name — kept only for context/SEO, never shown prominently.
  formerName: "AMI Ruhama Church Waraba Medical Centre Ltd",
  motto: "My Health, My Life",
  tagline: "Quality is our priority",
  level: "Level 4 Hospital",
  affiliation: "Ami Ruhama Church",
  url: "https://www.amiruhamamissionhospital.org", // TODO: confirm final domain (old deck listed amiruhamawarabamedicalcentre.com)

  description:
    "AMI Ruhama Mission Hospital is a faith-based Level 4 hospital in Tongaren, Bungoma County, providing high-quality and affordable healthcare to the communities of Soysambu and beyond. Open 24 hours a day.",

  // Short, human summary used in hero / about intros.
  intro:
    "A faith-based hospital serving Soysambu and the wider Tongaren community with quality, round-the-clock care.",

  contact: {
    phonePrimary: "0750 329 401",
    phoneSecondary: "0726 633 275",
    email: "warabamedicalcentre@gmail.com", // TODO: confirm updated email under the new "Mission Hospital" brand
    addressLine: "Soysambu Market, Tongaren Sub-County",
    region: "Bungoma County, Kenya",
    hours: "Open 24 hours · 7 days a week",
    // Registration / accreditation codes from the official profile
    mflCode: "20791",
    nhifCode: "444015451",
    kmpdcRegNo: "017299", // TODO: confirm — label/value alignment was ambiguous in the source deck
  },

  social: {
    // TODO: confirm official social handles before linking publicly
    facebook: "",
    twitter: "",
    instagram: "",
  },

  vision:
    "To be the healthcare provider of choice in our region, known for clinical excellence, compassionate staff and care that every family can access and afford.",

  mission:
    "To deliver high-quality, patient-focused healthcare that the communities we serve can reach, afford and trust.",

  values: [
    {
      key: "advancement",
      title: "Advancement",
      body: "Continuously improving the quality of healthcare we offer our community.",
    },
    {
      key: "responsibility",
      title: "Responsibility",
      body: "We accept personal accountability for every aspect of the work we do.",
    },
    {
      key: "respect",
      title: "Respect & Dignity",
      body: "We honour the dignity, individuality and rights of every person — protecting each patient's privacy, confidentiality and right to information.",
    },
    {
      key: "cooperation",
      title: "Cooperation",
      body: "We work in partnership with our patients and one another to deliver quality services.",
    },
    {
      key: "trust",
      title: "Trust",
      body: "We build trust through honesty and open communication with every patient.",
    },
  ],

  // Headline figures — all drawn directly from the official profile.
  stats: [
    { value: "80,000+", label: "People in our catchment community" },
    { value: "Level 4", label: "Accredited hospital facility" },
    { value: "24/7", label: "Hours open, every day of the year" },
    { value: "18", label: "Inpatient beds" },
  ],

  // Primary care services
  services: [
    {
      key: "outpatient",
      title: "Outpatient Services",
      summary:
        "Consultations, diagnosis and treatment for everyday illnesses and ongoing care — no appointment needed.",
      icon: "stethoscope",
    },
    {
      key: "inpatient",
      title: "Inpatient Care",
      summary:
        "An 18-bed ward with round-the-clock nursing for patients who need admission and close monitoring.",
      icon: "bed",
    },
    {
      key: "maternity",
      title: "Maternity Services",
      summary:
        "Safe delivery and supportive care for mothers and newborns, before, during and after birth.",
      icon: "baby",
    },
    {
      key: "mch",
      title: "Maternal & Child Health",
      summary:
        "Antenatal care (ANC), child welfare clinics (CWC), immunisation and family planning under one roof.",
      icon: "heart",
    },
    {
      key: "laboratory",
      title: "Laboratory Services",
      summary:
        "An on-site lab offering 28+ diagnostic tests — from full haemograms to liver, kidney and hormonal profiles.",
      icon: "flask",
    },
    {
      key: "pharmacy",
      title: "Pharmacy",
      summary:
        "A stocked in-house pharmacy so prescriptions are filled quickly and conveniently after your visit.",
      icon: "pill",
    },
    {
      key: "radiology",
      title: "Radiology & Imaging",
      summary:
        "Diagnostic imaging to support accurate diagnosis and treatment planning.",
      icon: "scan",
    },
    {
      key: "chronic",
      title: "Chronic Disease Clinic",
      summary:
        "Ongoing management for hypertension, diabetes and arthritis, with preventive screening and follow-up.",
      icon: "pulse",
    },
    {
      key: "outreach",
      title: "Community Outreach",
      summary:
        "Free medical camps and preventive health drives that take care beyond our walls, in partnership with Soysambu Health CBO.",
      icon: "people",
    },
  ],

  // Insurance & payment schemes accepted (from the profile)
  insurance: ["SHIF / SHA", "MAKL (TSC / NPS / KPs)"],

  // Transparent, real fees from the official profile (Kenyan Shillings).
  fees: [
    { item: "General Consultation", price: "KSh 500" },
    { item: "Specialist Consultation", price: "KSh 1,500" },
    { item: "Nursing Fee", price: "KSh 500" },
    { item: "Medical Day Care", price: "KSh 3,000" },
    { item: "MCH / Child Welfare Clinic", price: "KSh 1,500" },
  ],

  // A representative selection of the 28+ laboratory tests offered.
  labSample: [
    { item: "Full Haemogram", price: "KSh 1,000" },
    { item: "Urinalysis", price: "KSh 300" },
    { item: "Blood Grouping", price: "KSh 300" },
    { item: "Liver Function Tests (LFTs)", price: "KSh 3,500" },
    { item: "Kidney Function Tests (UECs)", price: "KSh 2,000" },
    { item: "Lipid / Cholesterol Profile", price: "KSh 4,000" },
    { item: "Thyroid Profile (TSH, T3, T4)", price: "KSh 4,000" },
    { item: "Pregnancy Test", price: "KSh 150" },
  ],

  // Leadership — names/titles from the official profile.
  // NOTE: the deck listed the Administrator as both "Calistus Simiyu" and
  // "Calistus Wekesa". Showing one with a TODO until confirmed.
  leadership: [
    {
      name: "Calistus Simiyu",
      role: "Hospital Administrator",
      note: "TODO: confirm name — deck also lists 'Calistus Wekesa'",
    },
    {
      name: "Dr. Godfrey Obala",
      role: "Senior Medical Officer",
      note: "",
    },
    {
      name: "Dr. Njanwe W. J. Paul",
      role: "Paediatric Consultant",
      note: "MMed, Child Health & Paediatrics",
    },
  ],

  partners: [
    {
      name: "Ami Ruhama Church",
      role: "Founding faith partner",
    },
    {
      name: "Soysambu Health CBO",
      role: "Community outreach & free medical camps",
    },
    {
      name: "SHIF / SHA",
      role: "Accredited insurance provider",
    },
  ],
} as const;

export type SiteContent = typeof site;

// Primary navigation used by the navbar and footer.
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/impact", label: "Community Impact" },
  { href: "/contact", label: "Contact" },
] as const;
