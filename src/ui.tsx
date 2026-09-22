import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { hero } from './content'

/* Scroll-triggered reveal wrapper */
export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}

/* Animated number that counts up when scrolled into view */
export function CountUp({ value, prefix = '', suffix = '', decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const dur = 1400
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(value * eased)
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])
  return (
    <span ref={ref}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function PageHero({ label, title, sub, children }: { label: string; title: React.ReactNode; sub: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <div className="eyebrow">{label}</div>
          <h1>{title}</h1>
          <p>{sub}</p>
          {children}
        </Reveal>
        <Reveal className="hero-badges" delay={120}>
          {hero.badges.map(b => (
            <span className="badge" key={b}>
              <CheckCircle2 size={13} /> {b}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="section-title">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{children}</h2>
    </div>
  )
}
