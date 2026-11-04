export interface ColorSwatch {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  pantone: string;
  description: string;
  isLight?: boolean;
}

export const BRAND_COLORS: ColorSwatch[] = [
  {
    name: "Royal Navy Blue",
    role: "Primary Brand Anchor",
    hex: "#0B2545",
    rgb: "11, 37, 69",
    cmyk: "98, 80, 40, 45",
    pantone: "PMS 281 C",
    description: "Evokes clinical authority, supreme trust, scientific stability and executive confidence.",
  },
  {
    name: "Imperial Midnight",
    role: "Deep Background & Shadows",
    hex: "#081B33",
    rgb: "8, 27, 51",
    cmyk: "100, 85, 45, 60",
    pantone: "PMS 282 C",
    description: "Deep luxury backdrop creating dramatic contrast for 3D illuminated medical signage.",
  },
  {
    name: "Luminous Medical Teal",
    role: "Diagnostic Vitality & Technology",
    hex: "#00B4D8",
    rgb: "0, 180, 216",
    cmyk: "75, 5, 0, 0",
    pantone: "PMS 3115 C",
    description: "Represents cutting-edge imaging technology, vitality, clarity, and cellular health.",
  },
  {
    name: "Bio-Cyan Glow",
    role: "Active Focus & Illumination",
    hex: "#48CAE4",
    rgb: "72, 202, 228",
    cmyk: "60, 0, 5, 0",
    pantone: "PMS 305 C",
    description: "Used for high-visibility highlights, LED backlit channel letters, and interactive callouts.",
  },
  {
    name: "Clinical Pure White",
    role: "Hygiene & Clarity",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    cmyk: "0, 0, 0, 0",
    pantone: "Opaque White",
    description: "Symbolizes laboratory sterile perfection, uncompromised purity, and luminous contrast.",
    isLight: true,
  },
  {
    name: "Titanium Grey",
    role: "Structural Precision & Accents",
    hex: "#E2E8F0",
    rgb: "226, 232, 240",
    cmyk: "15, 10, 8, 0",
    pantone: "Cool Gray 1 C",
    description: "Ultra-clean hairline gridlines, medical hardware finish, and subtle structural frames.",
    isLight: true,
  },
];

export const BRAND_TAGLINE = "Precision Diagnostics · Advanced Care · Trusted Results";
export const BRAND_FULL_NAME = "MOTi DIAGNOSTICS CENTRE";

export const SAMPLE_DOCTORS = [
  {
    id: "doc-1",
    name: "Dr. Alok Vardhan",
    degrees: "MD, DNB (Pathology), FICP",
    role: "Chief Pathologist & Lab Director",
    department: "Department of Molecular Diagnostics",
    phone: "+91 98200 45120",
    email: "alok.vardhan@motidiagnostics.com",
    regNo: "MCI-54219/2008",
  },
  {
    id: "doc-2",
    name: "Dr. Elena Rostova",
    degrees: "MD, FRCR (UK), EDiR",
    role: "Head of Advanced Imaging & MRI",
    department: "Department of 3T MRI & 128 CT",
    phone: "+91 98200 45125",
    email: "elena.rostova@motidiagnostics.com",
    regNo: "MCI-71894/2012",
  },
  {
    id: "doc-3",
    name: "Dr. Sarah J. Reed",
    degrees: "Ph.D., FACMG",
    role: "Senior Consultant Geneticist",
    department: "Genomics & Preventive Oncology",
    phone: "+91 98200 45130",
    email: "sarah.reed@motidiagnostics.com",
    regNo: "MCI-88421/2016",
  },
];

export const CLINICAL_SERVICES = [
  {
    code: "IMG-01",
    name: "3.0 Tesla Silent MRI",
    category: "Advanced Radiology",
    specs: "Ultra-wide 70cm bore, high-definition neuro & musculoskeletal imaging",
  },
  {
    code: "IMG-02",
    name: "128-Slice Low-Dose Dual Energy CT",
    category: "Cardio-Vascular CT",
    specs: "Sub-second coronary angiography with 80% radiation reduction",
  },
  {
    code: "GEN-01",
    name: "Next-Gen Genomic Sequencing (NGS)",
    category: "Molecular Pathology",
    specs: "Preventive oncology panel covering 104 hereditary cancer genes",
  },
  {
    code: "LAB-01",
    name: "High-Throughput Robotic Immunoassay",
    category: "Clinical Biochemistry",
    specs: "Fully automated closed-track system with 60-minute turnaround",
  },
  {
    code: "USG-01",
    name: "4D Color Doppler Ultrasound",
    category: "Ultrasonography",
    specs: "HD-Live matrix fetal echo and elastography tissue analysis",
  },
];

export const SOCIAL_CAMPAIGNS = [
  {
    id: "camp-1",
    title: "Full Body Master Health Check 2026",
    subtitle: "Over 85 Essential Diagnostic Parameters Covered",
    badge: "Preventive Wellness",
    callout: "Complimentary Vitamin D3 & B12 Test Included",
    cta: "Book Online · Report in 4 Hours",
    phone: "+91 1800 200 6684",
    highlights: ["Complete Hemogram", "Lipid & Liver Panel", "HbA1c & Thyroid", "Chest X-Ray & ECG"],
  },
  {
    id: "camp-2",
    title: "Ultra-HD 3T Silent MRI & 128 CT Scan",
    subtitle: "World-Class Neuro, Cardiac & Orthopedic Imaging",
    badge: "Advanced Imaging",
    callout: "70cm Wide Bore with Anxiety-Free Ambient Lighting",
    cta: "Zero Waiting Time · Same-Day Appointments",
    phone: "+91 1800 200 6684",
    highlights: ["Sub-Millimeter Clarity", "Painless Silent Scan", "Low-Radiation Protocol", "30-Min Tele-Radiology"],
  },
  {
    id: "camp-3",
    title: "Next-Gen Genomic Cancer Screening",
    subtitle: "Identify Hereditary Risks Years Before Symptoms",
    badge: "Genomic Oncology",
    callout: "Genetic Counseling by Certified Clinical Specialists",
    cta: "Confidential DNA Analysis",
    phone: "+91 1800 200 6684",
    highlights: ["104 Gene Screen", "Personalized Report", "Risk Mitigation Plan", "Family Genetic Audit"],
  },
  {
    id: "camp-4",
    title: "VIP Home Blood Sample Collection",
    subtitle: "Safe, Hygienic & NABL-Standard Vacuum Phlebotomy",
    badge: "Express Care",
    callout: "100% Painless Micro-Needle Technology",
    cta: "Slot Booking Open 6 AM - 8 PM",
    phone: "+91 1800 200 6684",
    highlights: ["Cold-Chain Transport", "Zero Service Fee", "Instant Digital Receipt", "WhatsApp Report Push"],
  },
];

export const ACCREDITATIONS = [
  { code: "ISO 15189:2022", name: "Medical Laboratories Quality & Competence" },
  { code: "NABL Certified", name: "National Accreditation Board for Testing" },
  { code: "CAP Accredited", name: "College of American Pathologists Standard" },
  { code: "AERB Approved", name: "Atomic Energy Regulatory Board Certified" },
];
