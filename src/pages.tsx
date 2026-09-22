import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDown, ArrowRight, CheckCircle2, ChevronRight, Globe, LineChart, Lock,
  ShieldCheck, Sparkles, TrendingUp, Zap,
} from 'lucide-react'
import {
  capitalDisclaimer, hero, platforms, stats, timeline,
  trustPillars, workingCapitalBullets,
} from './content'
import { CountUp, Reveal, SectionTitle } from './ui'
import { EligibilitySimulator, PaymentSimulator, ScoreSection } from './interactive'

const pillarIcon: Record<string, typeof Zap> = { zap: Zap, chart: LineChart, shield: ShieldCheck, trending: TrendingUp }
const trustIcon: Record<string, typeof Lock> = { lock: Lock, check: ShieldCheck, scale: Globe, file: Lock, globe: Globe, clock: Globe }

/* ——— Marquee of real TulaPay capabilities ——— */
function Ticker() {
  const items = [
    'Unified Payments', 'Business Intelligence', 'Business Health Score',
    'Working Capital Pathways', 'KYB Verification', 'CEMAC Interoperability',
    'Bilingual EN / FR', 'Zero Setup Fees',
  ]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map(k => (
          <div className="ticker-group" key={k}>
            {items.map(i => <span key={i + k}>{i}</span>)}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ——— Sticky section nav (pill) ——— */
function SectionSpy({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id)
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        const vis = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis) setActive(vis.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.05, 0.25, 0.5] },
    )
    items.forEach(i => {
      const el = document.getElementById(i.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [items])
  return (
    <nav className="section-spy" aria-label="Sections">
      {items.map(i => (
        <a key={i.id} href={`#${i.id}`} className={active === i.id ? 'on' : ''}>{i.label}</a>
      ))}
    </nav>
  )
}

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const onMove = (e: React.MouseEvent) => {
    const r = (heroRef.current as HTMLElement).getBoundingClientRect()
    setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 2, y: ((e.clientY - r.top) / r.height - 0.5) * 2 })
  }

  return (
    <>
      <section className="hero" ref={heroRef} onMouseMove={onMove}>
        <div className="orb orb-a" style={{ transform: `translate(${tilt.x * -14}px, ${tilt.y * -10}px)` }} />
        <div className="orb orb-b" style={{ transform: `translate(${tilt.x * 18}px, ${tilt.y * 12}px)` }} />
        <div className="container hero-content">
          <Reveal>
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1>
              {hero.titleA} <span className="grad">{hero.titleB}</span> <br className="br-lg" /> {hero.titleC}
            </h1>
            <p className="hero-sub">{hero.sub}</p>
            <div className="hero-badges">
              {hero.badges.map(b => <span className="badge" key={b}><CheckCircle2 size={13} /> {b}</span>)}
            </div>
            <div className="hero-actions">
              <a href="#simulator" className="button primary">Try the live demo <Sparkles size={17} /></a>
              <a href="#platform" className="button outline">Explore the platform <ArrowDown size={16} /></a>
            </div>
          </Reveal>
          <Reveal className="hero-side" delay={120}>
            <PaymentSimulator />
          </Reveal>
        </div>
      </section>

      <Ticker />

      <section className="section" id="platform">
        <div className="container">
          <Reveal><SectionTitle eyebrow="The Platform">Built for the way <span className="grad">your business works.</span></SectionTitle></Reveal>
          <Reveal>
            <p className="section-lead centered">
              Whether you run a retail shop, restaurant, online business, distribution company, or growing SME,
              TulaPay gives you one platform to accept payments, understand your performance, and access financial opportunities.
            </p>
          </Reveal>
          <div className="platform-grid">
            {platforms.map((p, i) => {
              const Icon = pillarIcon[p.icon] ?? Zap
              return (
                <Reveal className="platform-card" key={p.title} delay={i * 90}>
                  <div className="card-tag">{p.tag}</div>
                  <div className="p-icon"><Icon size={24} /></div>
                  <h3>{p.title}</h3>
                  <p className="p-desc">{p.desc}</p>
                  <p className="p-body">{p.body}</p>
                  <span className="learn">Learn more <ChevronRight size={14} /></span>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section stats-band" id="results">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Verified Metrics">Real-time performance <span className="grad">clarity.</span></SectionTitle></Reveal>
          <div className="stat-grid">
            {stats.map((s, i) => (
              <Reveal className="stat-box" key={s.label} delay={i * 80}>
                <strong><CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} /></strong>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
          <p className="stat-note">Calculated on live merchant activity · Settlement currency: XAF / FCFA (BEAC)</p>
        </div>
      </section>

      <ScoreSection />

      <section className="section capital" id="working-capital">
        <div className="container capital-grid">
          <Reveal>
            <SectionTitle eyebrow="Financing Eligibility">Working capital <span className="grad">pathways.</span></SectionTitle>
            <p className="section-lead">
              TulaPay connects your daily transaction flow with transparent financial intelligence,
              helping eligible businesses build pathways toward future working capital.
            </p>
            <ul className="check-list">
              {workingCapitalBullets.map(b => <li key={b}><ShieldCheck size={16} /><span>{b}</span></li>)}
            </ul>
            <Link to="/contact" className="button primary">Learn about working capital <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={120}>
            <EligibilitySimulator />
          </Reveal>
        </div>
        <div className="container">
          <p className="disclaimer">{capitalDisclaimer}</p>
        </div>
      </section>

      <section className="section" id="journey">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Getting Started">Start building <span className="grad">today.</span></SectionTitle></Reveal>
          <div className="timeline">
            {timeline.map((t, i) => (
              <Reveal className="tl-step" key={t.step} delay={i * 90}>
                <div className="tl-num">{t.step}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Trust & Security Foundation">Engineered for <span className="grad">reliability.</span></SectionTitle></Reveal>
          <div className="trust-grid">
            {trustPillars.map((t, i) => {
              const Icon = trustIcon[t.icon] ?? ShieldCheck
              return (
                <Reveal className="trust-card" key={t.title} delay={i * 70}>
                  <Icon size={20} />
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <SectionSpy items={[{ id: 'platform', label: 'Platform' }, { id: 'results', label: 'Metrics' }, { id: 'intelligence', label: 'Health Score' }, { id: 'working-capital', label: 'Capital' }, { id: 'trust', label: 'Trust' }]} />
    </>
  )
}
