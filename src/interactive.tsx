import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight, Banknote, Briefcase, CheckCircle2, ChevronDown, CreditCard, Landmark,
  Loader2, QrCode, ShieldCheck, ShoppingCart, Smartphone, Sparkles, Store, Truck, Utensils,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { eligibilityTiers, faqs, healthScore, simulator } from './content'
import { Reveal, SectionTitle } from './ui'

const channelIcon: Record<string, typeof Smartphone> = {
  'Mobile Money': Smartphone,
  Card: CreditCard,
  QR: QrCode,
  'Bank Transfer': Landmark,
}

const rand = (min: number, max: number) => Math.round(min + Math.random() * (max - min))

/* ——— Live payment simulator ——— */
export function PaymentSimulator() {
  const [channel, setChannel] = useState<string>(simulator.channels[0])
  const [merchant] = useState(() => simulator.merchants[rand(0, simulator.merchants.length - 1)])
  const [amount, setAmount] = useState(() => rand(1200, 48000))
  const [reference, setReference] = useState(() => rand(100000, 999999))
  const [phase, setPhase] = useState<'idle' | 'processing' | 'done'>('idle')

  const run = () => {
    if (phase === 'processing') return
    setPhase('processing')
    setAmount(rand(1200, 48000))
    setReference(rand(100000, 999999))
    window.setTimeout(() => setPhase('done'), 1100)
  }
  useEffect(() => {
    if (phase !== 'done') return
    const t = window.setTimeout(() => setPhase('idle'), 4200)
    return () => window.clearTimeout(t)
  }, [phase])

  return (
    <div className="sim-card" id="simulator">
      <div className="sim-head">
        <span className="pulse-dot" />
        <span className="sim-title">{simulator.eyebrow}</span>
        <span className="sim-live">LIVE</span>
      </div>
      <div className="sim-amount">{phase === 'processing' ? '· · · · ·' : `+ ${amount.toLocaleString('en-US')} FCFA`}</div>
      <div className="sim-meta">
        <span>{merchant}</span>
        <span className="sim-ref">REF · TP-{reference}</span>
      </div>
      <div className="sim-channels">
        {simulator.channels.map(c => {
          const Icon = channelIcon[c]
          return (
            <button key={c} type="button" className={`chip ${channel === c ? 'on' : ''}`} onClick={() => { setChannel(c); run() }}>
              {Icon && <Icon size={15} />} {c}
            </button>
          )
        })}
      </div>
      <div className={`sim-status ${phase}`}>
        {phase === 'idle' && <span>Awaiting transaction…</span>}
        {phase === 'processing' && <><Loader2 className="spin" size={16} /> {simulator.processing}</>}
        {phase === 'done' && <><CheckCircle2 size={16} /> {simulator.success} · {simulator.autoReconciled}</>}
      </div>
      <button type="button" className="button primary full" onClick={run} disabled={phase === 'processing'}>
        <Sparkles size={17} /> Trigger test payment
      </button>
      <p className="sim-foot">{simulator.sub}</p>
    </div>
  )
}

/* ——— Business Health Score card ——— */
export function HealthScoreCard() {
  const [score, setScore] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        window.setTimeout(() => setScore(78), 350)
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  const color = score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#ef4444'
  return (
    <div className="score-card" ref={ref}>
      <div className="score-head">
        <span className="score-eyebrow">{healthScore.eyebrow}</span>
        <span className="score-status"><span className="pulse-dot" /> {healthScore.status}</span>
      </div>
      <div className="gauge-ring" style={{ background: `conic-gradient(${color} ${score * 3.6}deg, rgba(255,255,255,.09) 0deg)` }}>
        <div className="gauge-inner">
          <strong>{score || '—'}</strong>
          <span>Health Score</span>
        </div>
      </div>
      <div className="score-drivers">
        {healthScore.drivers.map(d => (
          <div className="driver" key={d.label}>
            <span className="driver-label">{d.label}</span>
            <span className="driver-note">{d.weight}</span>
          </div>
        ))}
      </div>
      <p className="score-foot">{healthScore.disclaimer}</p>
    </div>
  )
}

/* ——— Eligibility simulator (volume → readiness) ——— */
export function EligibilitySimulator() {
  const [tierId, setTierId] = useState(eligibilityTiers[1].id)
  const tier = eligibilityTiers.find(t => t.id === tierId)!
  return (
    <div className="elig-card" id="eligibility">
      <div className="elig-head">
        <Banknote size={18} />
        <h3>Eligibility Pathway Simulator</h3>
      </div>
      <p className="elig-sub">How your transaction volume builds credit readiness</p>
      <div className="elig-tiers" role="tablist" aria-label="Monthly volume">
        {eligibilityTiers.map(t => (
          <button key={t.id} type="button" role="tab" aria-selected={t.id === tierId} className={`tier ${t.id === tierId ? 'on' : ''}`} onClick={() => setTierId(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="elig-meter">
        <div className="elig-bar" style={{ width: `${tier.score}%` }} />
        <span className="elig-num">{tier.score}%</span>
      </div>
      <div className="elig-outcome">
        <strong>{tier.outcome}</strong>
        <span>{tier.note}</span>
        <span className="elig-up">Up to FCFA 5M via partner facilities · {tier.label}</span>
      </div>
      <Link className="text-link" to="/contact">Learn about working capital <ArrowRight size={14} /></Link>
    </div>
  )
}

/* ——— Accordion FAQ ——— */
export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div className={`faq ${open === i ? 'open' : ''}`} key={f.q}>
          <button type="button" className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {f.q}
            <ChevronDown size={18} />
          </button>
          <div className="faq-a"><p>{f.a}</p></div>
        </div>
      ))}
    </div>
  )
}

/* ——— Health Score section used on Home ——— */
export function ScoreSection() {
  return (
    <section className="section score-section" id="intelligence">
      <div className="container score-grid">
        <Reveal>
          <SectionTitle eyebrow={healthScore.eyebrow}>{healthScore.title}</SectionTitle>
          <p className="section-lead">{healthScore.body}</p>
          <ul className="check-list">
            {healthScore.drivers.map(d => (
              <li key={d.label}>
                <ShieldCheck size={16} />
                <div>
                  <strong>{d.label}</strong>
                  <span>{d.weight}</span>
                </div>
              </li>
            ))}
          </ul>
          <Link className="text-link" to="/contact">Learn about working capital <ArrowRight size={14} /></Link>
        </Reveal>
        <Reveal delay={120}>
          <HealthScoreCard />
        </Reveal>
      </div>
    </section>
  )
}

/* ——— Industry tab switcher ——— */
const industryIcons: Record<string, typeof Store> = { store: Store, utensils: Utensils, cart: ShoppingCart, truck: Truck, briefcase: Briefcase }
export function IndustryTabs({ items }: { items: typeof import('./content').industries }) {
  const [active, setActive] = useState(items[0].id)
  const item = items.find(i => i.id === active)!
  const Icon = industryIcons[item.icon] ?? Store
  return (
    <div className="industry-tabs">
      <div className="tab-row" role="tablist">
        {items.map(i => (
          <button key={i.id} type="button" role="tab" aria-selected={i.id === active} className={`tab ${i.id === active ? 'on' : ''}`} onClick={() => setActive(i.id)}>
            {i.name}
          </button>
        ))}
      </div>
      <div className="tab-panel" key={item.id}>
        <div className="tab-icon"><Icon size={26} /></div>
        <h3>{item.headline}</h3>
        <p>{item.body}</p>
        <ul>
          {item.points.map(p => <li key={p}><CheckCircle2 size={15} /> {p}</li>)}
        </ul>
      </div>
    </div>
  )
}