// All copy sourced from https://tulapay.ai.studio — the real TulaPay product:
// Cameroonian B2B fintech: unified payments, business intelligence,
// Business Health Score, and pathways to partner working capital.

export const brand = {
  name: 'TulaPay',
  tagline: 'Powering the financial growth of your business.',
  description:
    'TulaPay is a Cameroonian financial technology company providing business payments, financial visibility, and growth infrastructure for enterprises across Central Africa.',
  mission:
    'To empower African businesses with the payments, financial intelligence, and access to capital they need to grow.',
  goalQuote:
    'Every transaction should move a business closer to greater financial visibility, credibility, and opportunity.',
  email: 'contact@tulapay.cm',
  partnershipsEmail: 'partnerships@tulapay.cm',
  hours: 'Monday – Saturday: 08:00 – 19:00 (WAT)',
  locations: 'Douala & Yaoundé, Cameroon',
  regulatory:
    'TulaPay is a financial technology infrastructure provider. Working capital and credit facilities are facilitated through authorized financial partners and licensed credit institutions in Cameroon and the CEMAC zone. Eligible businesses may access financial opportunities based on applicable underwriting criteria and partner requirements.',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

// ————— Home —————
export const hero = {
  eyebrow: 'Cameroon (CEMAC) · Business Payments Infrastructure',
  titleA: 'Powering the',
  titleB: 'financial growth',
  titleC: 'of your business.',
  sub: 'TulaPay helps businesses in Cameroon accept payments, understand their financial performance, build stronger financial profiles, and access growth opportunities.',
  badges: ['BEAC & CEMAC Verified', 'Bilingual Platform (EN / FR)', 'Zero Setup Fees'],
}

export const paymentMethods = ['Mobile Money', 'Card', 'QR', 'Bank Transfer'] as const

export const platforms = [
  {
    icon: 'zap',
    title: 'Unified Payments',
    tag: 'Payments Gateway',
    desc: 'One place to manage your business payments.',
    body: 'Accept payments, track transactions, and gain a clearer view of your business activity. Mobile Money, Card, QR, or Transfer — every channel lands in one unified ledger.',
  },
  {
    icon: 'chart',
    title: 'Business Intelligence',
    tag: 'Know your business. Make better decisions.',
    desc: 'Real-time performance clarity',
    body: 'Your transactions tell a story. TulaPay turns that activity into insights that help you understand how your business is performing — revenue trends, cash flow velocity, and margin visibility.',
  },
  {
    icon: 'shield',
    title: 'Financial Profiles',
    tag: 'Trust & Verification',
    desc: 'Verifiable audit ledger',
    body: 'Transform raw cash flow records into credible financial statements and a verified digital profile that financial institutions and partners can evaluate with confidence.',
  },
  {
    icon: 'trending',
    title: 'Growth Opportunities',
    tag: 'Working Capital Pathways',
    desc: 'Pathways to partner capital',
    body: 'TulaPay connects your daily transaction flow with transparent financial intelligence, helping eligible businesses build pathways toward future working capital.',
  },
]

export const stats: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string }[] = [
  { value: 98.7, suffix: '%', label: 'Transaction success rate' },
  { value: 4.28, suffix: 'M', prefix: 'FCFA ', decimals: 2, label: 'Average monthly processing per merchant' },
  { value: 82, suffix: '%', label: 'Returning customers tracked on the ledger' },
  { value: 15, prefix: 'Top ', suffix: '%', label: 'Percentile among verified Cameroonian SMEs' },
]

export const trustPillars = [
  { icon: 'lock', title: 'Bank-Grade Security', desc: 'Encrypted transactions & segregated funds' },
  { icon: 'check', title: 'KYB Verification', desc: 'Certified business registry authentication' },
  { icon: 'scale', title: 'Regulatory Adherence', desc: 'Operating with licensed CEMAC & Cameroon partners' },
  { icon: 'file', title: 'Auditable Ledgers', desc: 'Transparent, exportable reconciliation records' },
  { icon: 'globe', title: 'CEMAC Interoperability', desc: 'Mobile Money & Card interoperability across the region' },
  { icon: 'clock', title: 'Platform Monitoring', desc: '24/7 automated platform monitoring' },
]

export const workingCapitalBullets = [
  'Business Health Score & inventory replenishment facility readiness',
  'Custom working capital pathway via banking partners & priority terms',
  'Up to FCFA 5M in partner facilities for eligible businesses',
  'Rapid onboarding for verified Cameroonian businesses',
]

export const capitalDisclaimer =
  'TulaPay is a financial technology infrastructure provider. Working capital and credit facilities are facilitated through authorized financial partners and licensed credit institutions in Cameroon and the CEMAC zone. Eligible businesses may access financial opportunities based on applicable underwriting criteria and partner requirements.'

// ————— Solutions —————
export const industries = [
  {
    id: 'retail',
    icon: 'store',
    name: 'Retail Stores',
    headline: 'Eliminate end-of-day reconciliation stress.',
    body: 'Accept payments instantly at checkout and track top-selling products across all till points in one unified ledger.',
    points: ['Unified till-point ledger', 'Peak-hour volume analytics & staff planning', 'Separate staff till tracking without cash leakages'],
  },
  {
    id: 'restaurants',
    icon: 'utensils',
    name: 'Restaurants & Hospitality',
    headline: 'Fast QR & Mobile Money table checkout.',
    body: 'Manage table service, takeaways, and catering deposits seamlessly. Gain clear visibility into peak dining hours, table turnover rates, and average spend per ticket.',
    points: ['Fast QR & Mobile Money table checkout', 'Table turnover & average ticket insights', 'Catering deposits & takeaway flows'],
  },
  {
    id: 'ecommerce',
    icon: 'cart',
    name: 'E-commerce & Digital Commerce',
    headline: 'Convert digital shoppers across Cameroon & CEMAC.',
    body: 'Convert digital shoppers across Cameroon and CEMAC with seamless payment links, developer-friendly APIs, and instant webhook verification for order fulfillment.',
    points: ['Hosted payment links & developer REST APIs', 'Instant webhook verification', 'High conversion rate across CEMAC buyers'],
  },
  {
    id: 'distribution',
    icon: 'truck',
    name: 'Distribution & FMCG Wholesaler',
    headline: 'Coordinate hundreds of field agents with zero errors.',
    body: 'Coordinate payments from hundreds of sub-retailers, wholesalers, and field agents. Issue verified invoices and receive digital payments with zero reconciliation errors.',
    points: ['Bulk transaction ledger for field agents', 'Automated invoice-to-payment matching', 'Zero reconciliation errors'],
  },
  {
    id: 'services',
    icon: 'briefcase',
    name: 'Professional & Corporate Services',
    headline: 'Automated invoice-to-payment matching.',
    body: 'Issue verified invoices, receive digital payments, and keep client billing organized with automated matching and clear audit trails.',
    points: ['Automated invoice-to-payment matching', 'Automated reconciliation & audit logging', 'Bilingual EN / FR client invoicing'],
  },
]

export const solutionPillars = [
  {
    id: 'payments',
    icon: 'zap',
    title: 'Unified Payments',
    lead: 'Accept Mobile Money, Card, QR, or Transfer — interoperable collection across every network your customers use.',
    features: ['Mobile Money & Card interoperability', 'Instant multi-channel settlement', 'Direct to business bank or digital balance', 'Automated digital receipting & SMS alerts'],
    demo: 'live',
  },
  {
    id: 'intelligence',
    icon: 'chart',
    title: 'Business Intelligence',
    lead: 'Turn transaction data into actionable financial insights, giving businesses greater visibility into revenue, cash flow, and overall financial health.',
    features: ['Automated digital ledger aggregation', 'Revenue trends & cash flow velocity', 'Peak-hour and product-line analytics', 'Transparent, exportable reconciliation records'],
    demo: 'chart',
  },
  {
    id: 'working-capital',
    icon: 'trending',
    title: 'Working Capital Pathways',
    lead: 'Build a stronger financial profile as your business grows, and unlock pathways to partner financing when you are ready.',
    features: ['Dynamic Business Health Score', 'Custom working capital pathway via banking partners', 'Real-time Business Health Score monitoring', 'Priority terms with authorized financial partners'],
    demo: 'score',
  },
  {
    id: 'security',
    icon: 'shield',
    title: 'Trust & Security Foundation',
    lead: 'Engineered for reliability, privacy, and compliance — operating with licensed banking and payment partners across Cameroon and the CEMAC zone.',
    features: ['Encrypted transactions & segregated funds', 'Certified business registry authentication (KYB)', 'Comprehensive audit history', '24/7 automated platform monitoring'],
    demo: null,
  },
]

// ————— Simulator / interactive copy —————
export const simulator = {
  eyebrow: 'Live Payment Stream',
  title: 'See a payment move through TulaPay',
  sub: 'Test how a simulated transaction from a Cameroonian merchant is instantly registered and reconciled.',
  merchants: ['Akwa Provision Store', 'Bastos Bistro', 'Mokolo Digital Shop', 'Bonapriso Boutique'],
  channels: paymentMethods,
  processing: 'Processing transaction…',
  success: 'Payment successful',
  autoReconciled: 'Auto-reconciled',
  settledTo: 'Settled to business balance',
}

export const healthScore = {
  eyebrow: 'Proprietary Benchmark',
  title: 'Business Health Score',
  body: 'Calculated on live merchant activity. Consistent business activity contributes to a stronger, transparent financial profile and a verified Business Health Score.',
  drivers: [
    { label: 'Transaction consistency', weight: 'Consistent daily settlement with low intraday volatility.' },
    { label: 'Channel diversification', weight: 'Healthy balance across Mobile Money, Cards, and Direct Transfers.' },
    { label: 'Customer recurrence', weight: 'Strong repeat purchase behaviour on the ledger.' },
    { label: 'Reconciliation accuracy', weight: 'Zero manual reconciliation overhead.' },
  ],
  status: 'Status: Healthy',
  percentile: 'Top 15% percentile among verified Cameroonian retailers & SMEs',
  disclaimer: 'The Business Health Score evaluates operational stability and transaction consistency. It assists merchants in managing performance and does not guarantee financial approvals.',
}

export const eligibilityTiers = [
  { id: 'starter', label: '1M – 5M FCFA / mo', score: 62, outcome: 'Financial profile building', note: 'Keep building consistent digital transaction history.' },
  { id: 'growth', label: '5M – 20M FCFA / mo', score: 78, outcome: 'Priority partner review', note: 'Eligible for tailored partner facilities review.' },
  { id: 'scale', label: '20M – 100M+ FCFA / mo', score: 91, outcome: 'Facility pathway unlocked', note: 'Custom working capital pathway via banking partners.' },
]

export const faqs = [
  {
    q: 'What is TulaPay?',
    a: 'TulaPay is a Cameroonian financial technology company providing business payments, financial visibility, and growth infrastructure for enterprises across Central Africa, starting in Cameroon and expanding across the CEMAC region.',
  },
  {
    q: 'Which payment channels does TulaPay support?',
    a: 'TulaPay unifies Mobile Money, Card, QR, and Bank Transfer into one interoperable collection platform, with instant multi-channel settlement direct to your business bank account or digital balance.',
  },
  {
    q: 'What is the Business Health Score?',
    a: 'The Business Health Score evaluates operational stability and transaction consistency, calculated on live merchant activity. It assists merchants in managing performance and does not guarantee financial approvals.',
  },
  {
    q: 'How do working capital pathways work?',
    a: 'Consistent business activity contributes to a verified financial profile. Eligible businesses may eventually access working capital and tailored facilities through authorized financial partners and licensed credit institutions in Cameroon and the CEMAC zone.',
  },
  {
    q: 'Does TulaPay work in English and French?',
    a: 'Yes — bilingual English & French infrastructure is natively supported across the platform, invoices, receipts, and support.',
  },
  {
    q: 'How do I get started?',
    a: 'Rapid onboarding is available for verified Cameroonian businesses with zero setup fees. Fill out the contact form and our Cameroon merchant solutions team will walk you through KYB verification and activation.',
  },
]

export const pricingTiers = [
  {
    name: 'Starter',
    tag: '1M – 5M FCFA / mo',
    price: 'Zero setup fees',
    desc: 'For new and growing businesses starting their digital transaction history.',
    features: ['Unified Mobile Money, Card, QR & Transfer collection', 'Merchant transaction ledger', 'Automated digital receipting & SMS alerts', 'Bilingual EN / FR platform', 'Email support (Mon – Sat)'],
    cta: 'Start building',
    featured: false,
  },
  {
    name: 'Growth',
    tag: '5M – 20M FCFA / mo',
    price: 'Custom terms',
    desc: 'For established merchants who need intelligence and partner pathways.',
    features: ['Everything in Starter', 'Business Intelligence dashboard & revenue trends', 'Dynamic Business Health Score', 'Priority partner review for working capital', 'Dedicated merchant solutions team'],
    cta: 'Request a demo',
    featured: true,
  },
  {
    name: 'Scale',
    tag: '20M – 100M+ FCFA / mo',
    price: 'Tailored',
    desc: 'For distributors and multi-location operations coordinating many agents.',
    features: ['Everything in Growth', 'Bulk transaction ledger for field agents', 'Automated invoice-to-payment matching', 'Custom working capital pathway via banking partners', '24/7 automated platform monitoring'],
    cta: 'Talk to sales',
    featured: false,
  },
]

export const pricingNotes = [
  'Zero setup fees — rapid onboarding for verified Cameroonian businesses',
  'Automated daily reconciliation & verified merchant certificate included',
  'Processing terms confirmed during KYB verification with our team',
]

export const timeline = [
  { step: '01', title: 'Create your account', body: 'Rapid onboarding for verified Cameroonian businesses — register your business details to begin KYB verification.' },
  { step: '02', title: 'Verify & configure', body: 'Certified business registry authentication (KYB), then configure tills, payment links, and team access.' },
  { step: '03', title: 'Accept every payment', body: 'Go live with Mobile Money, Card, QR, and Transfer — every channel lands in one unified ledger.' },
  { step: '04', title: 'Grow your profile', body: 'Build a verified digital transaction history and a stronger financial profile as your business grows.' },
]

export const contactChannels = [
  { icon: 'mail', label: 'Business inquiries', value: brand.email, href: `mailto:${brand.email}` },
  { icon: 'handshake', label: 'Partnerships', value: brand.partnershipsEmail, href: `mailto:${brand.partnershipsEmail}` },
  { icon: 'map', label: 'Operations', value: brand.locations, href: null },
  { icon: 'clock', label: 'Support hours', value: brand.hours, href: null },
]

export const contactSubjects = [
  'Request a demo / consultation',
  'Direct merchant inquiries',
  'Partnerships',
  'Careers & talent',
  'Media & press',
]

export const footerAbout = brand.description
