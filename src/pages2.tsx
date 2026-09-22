import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Clock, Globe, Lock, Mail, MapPin, Send,
  ShieldCheck, Sparkles, Users,
} from 'lucide-react'
import {
  brand, capitalDisclaimer, contactChannels, contactSubjects,
  industries, pricingNotes, pricingTiers, solutionPillars,
} from './content'
import { PageHero, Reveal, SectionTitle } from './ui'
import { EligibilitySimulator, Faq, HealthScoreCard, IndustryTabs, PaymentSimulator } from './interactive'

const healthIntro =
  'Your transactions tell a story. TulaPay turns that activity into insights that help you understand how your business is performing.'

/* ————— About ————— */
export function About() {
  return (
    <>
      <PageHero
        label="Our Mission"
        title={<>Built in Africa. Designed for the way <span className="grad">African businesses</span> move money.</>}
        sub="TulaPay is building financial infrastructure that helps businesses participate in a more connected digital economy, starting in Cameroon and expanding across the CEMAC region."
      />
      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="big-quote">“{brand.goalQuote}”</div>
            <p className="section-lead">Our Goal is Simple</p>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="h3">{brand.mission}</h3>
            <p className="section-lead">{brand.description}</p>
            <div className="mini-stats">
              <div><strong>2</strong><span>Operation hubs — Douala & Yaoundé</span></div>
              <div><strong>EN · FR</strong><span>Bilingual infrastructure natively supported</span></div>
              <div><strong>CEMAC</strong><span>Regional interoperability focus</span></div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section values">
        <div className="container">
          <Reveal><SectionTitle eyebrow="Trust & Verification">Transform raw activity into <span className="grad">credible financial identity.</span></SectionTitle></Reveal>
          <Reveal>
            <p className="section-lead centered">
              Transform raw cash flow records into credible financial statements and a verified digital profile
              that financial institutions and partners can evaluate with confidence.
            </p>
          </Reveal>
          <div className="values-grid">
            {[
              { icon: ShieldCheck, t: 'Verifiable audit ledger', d: 'Every transaction is registered, reconciled, and exportable for partners.' },
              { icon: Users, t: 'Built with merchants', d: 'Shaped around how Cameroonian retailers, restaurants, and distributors actually trade.' },
              { icon: Globe, t: 'CEMAC first, then beyond', d: 'Regional rails and licensing-first growth across Central Africa.' },
            ].map((v, i) => (
              <Reveal className="value" key={v.t} delay={i * 90}>
                <v.icon size={22} />
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section score-section">
        <div className="container score-grid">
          <Reveal>
            <SectionTitle eyebrow="Proprietary Benchmark">Know your business. <span className="grad">Make better decisions.</span></SectionTitle>
            <p className="section-lead">{healthIntro}</p>
            <Link to="/contact" className="button primary">Talk to our team <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={120}><HealthScoreCard /></Reveal>
        </div>
      </section>
      <FaqSection />
    </>
  )
}

/* ————— Solutions ————— */
export function Solutions() {
  return (
    <>
      <PageHero
        label="Platform"
        title={<>One place to manage <span className="grad">your business payments.</span></>}
        sub="Accept payments, track transactions, and gain a clearer view of your business activity — Mobile Money, Card, QR, or Transfer."
      />
      <section className="section">
        <div className="container">
          <div className="industry-head">
            <Reveal><SectionTitle eyebrow="Industry Solutions">Built for the way <span className="grad">your business works.</span></SectionTitle></Reveal>
            <Reveal><p className="section-lead">Bring payment activity and business visibility together — pick your industry to see how.</p></Reveal>
          </div>
          <Reveal delay={100}>
            <IndustryTabs items={industries} />
          </Reveal>
        </div>
      </section>
      <section className="section pillars">
        <div className="container">
          {solutionPillars.map((p, i) => (
            <div className={`pillar ${i % 2 ? 'flip' : ''}`} key={p.id} id={p.id}>
              <Reveal className="pillar-copy">
                <div className="eyebrow">{p.title}</div>
                <h2>{p.lead}</h2>
                <ul className="check-list">
                  {p.features.map(f => <li key={f}><ShieldCheck size={16} /><span>{f}</span></li>)}
                </ul>
                <Link to="/contact" className="button primary">Get Started <ArrowRight size={16} /></Link>
              </Reveal>
              <Reveal className="pillar-art" delay={120}>
                {p.demo === 'live' ? <PaymentSimulator /> : p.demo === 'score' ? <HealthScoreCard /> : <DemoChart />}
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <section className="section capital">
        <div className="container capital-grid">
          <Reveal>
            <SectionTitle eyebrow="Financing Eligibility">Eligibility pathway <span className="grad">simulator.</span></SectionTitle>
            <p className="section-lead">Consistent business activity contributes to a stronger, transparent financial profile and a verified Business Health Score.</p>
          </Reveal>
          <Reveal delay={120}><EligibilitySimulator /></Reveal>
        </div>
        <div className="container"><p className="disclaimer">{capitalDisclaimer}</p></div>
      </section>
      <CtaBand />
    </>
  )
}

function DemoChart() {
  const bars = [34, 52, 41, 66, 58, 78, 71, 88, 80, 95]
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O']
  return (
    <div className="chart-card">
      <div className="sim-head">
        <span className="pulse-dot" />
        <span className="sim-title">Performance & Revenue Trends</span>
        <span className="sim-live">30D</span>
      </div>
      <div className="chart-bars">
        {bars.map((b, i) => (
          <div className="bar-col" key={i}>
            <div className="bar" style={{ height: `${b}%` }} />
            <span>{months[i]}</span>
          </div>
        ))}
      </div>
      <div className="chart-legend">
        <span><i className="dot up" /> Revenue trend +{38}%</span>
        <span><i className="dot" /> Cash flow velocity 64.2%</span>
      </div>
    </div>
  )
}

/* ————— Pricing ————— */
export function Pricing() {
  const [annual, setAnnual] = useState(false)
  return (
    <>
      <PageHero
        label="Simple Pricing"
        title={<>More value. <span className="grad">Less friction.</span></>}
        sub="Transparent pricing that works for you, whether you're getting started or scaling up. Zero setup fees — rapid onboarding for verified Cameroonian businesses."
      />
      <section className="section">
        <div className="container">
          <Reveal className="billing-toggle">
            <button type="button" className={`seg ${!annual ? 'on' : ''}`} onClick={() => setAnnual(false)}>Monthly volume</button>
            <button type="button" className={`seg ${annual ? 'on' : ''}`} onClick={() => setAnnual(true)}>Annual partnership</button>
          </Reveal>
          <div className="pricing-grid">
            {pricingTiers.map((t, i) => (
              <Reveal className={`price-card ${t.featured ? 'featured' : ''}`} key={t.name} delay={i * 90}>
                <div className="price-head">
                  <span className="badge">{t.tag}</span>
                  {t.featured && <span className="most-pop">Most popular</span>}
                </div>
                <h3>{t.name}</h3>
                <strong className="price">{annual ? 'Custom terms' : t.price}</strong>
                <p className="price-desc">{t.desc}</p>
                <div className="check-row-list">
                  {t.features.map(f => <div className="check-row" key={f}><CheckCircle2 size={16} />{f}</div>)}
                </div>
                <Link to="/contact" className="button primary full">{t.cta} <ArrowRight size={16} /></Link>
              </Reveal>
            ))}
          </div>
          <div className="pricing-notes">
            {pricingNotes.map(n => <div className="check-row" key={n}><CheckCircle2 size={16} />{n}</div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal><SectionTitle eyebrow="FAQ">Common questions, <span className="grad">clear answers.</span></SectionTitle></Reveal>
          <Reveal delay={100}><Faq /></Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

/* ————— Contact ————— */
export function Contact() {
  const [sent, setSent] = useState(false)
  const [subject, setSubject] = useState(contactSubjects[0])
  return (
    <>
      <PageHero
        label="Contact & Legal"
        title={<>Let's start <span className="grad">something good.</span></>}
        sub="Fill out this quick form to connect with our Cameroon merchant solutions team. Your information is confidential and will never be shared."
      />
      <section className="section contact-section" id="contact-form">
        <div className="container contact-grid">
          <Reveal>
            <SectionTitle>We'd love to <span className="grad">hear from you.</span></SectionTitle>
            <p className="section-lead">Direct merchant inquiries, partnerships, careers, or media — pick a topic and we'll route your message to the right team.</p>
            <div className="contact-channels">
              {contactChannels.map(c => {
                const Icon = c.icon === 'mail' ? Mail : c.icon === 'handshake' ? Users : c.icon === 'map' ? MapPin : Clock
                return (
                  <a className="channel" key={c.label} href={c.href ?? '#contact-form'} onClick={e => !c.href && e.preventDefault()}>
                    <span className="channel-icon"><Icon size={17} /></span>
                    <span><small>{c.label}</small><strong>{c.value}</strong></span>
                  </a>
                )
              })}
            </div>
            <div className="reg-note">
              <Lock size={15} />
              <span>Regulatory Transparency: Operating with licensed banking and payment partners across Cameroon and the CEMAC zone.</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            {sent ? (
              <div className="success">
                <CheckCircle2 size={40} />
                <h3>Thank you! Request Received</h3>
                <p>Our Cameroon merchant solutions team will get back to you within one business day (Mon – Sat, 08:00 – 19:00 WAT).</p>
                <button className="button outline" onClick={() => setSent(false)}>Submit another inquiry</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <div className="form-row">
                  <label>Full Name *<input required placeholder="Nom & Prénom" /></label>
                  <label>Business Name *<input required placeholder="Your registered business" /></label>
                </div>
                <div className="form-row">
                  <label>Business Email *<input required type="email" placeholder="you@company.cm" /></label>
                  <label>Phone / WhatsApp *<input required type="tel" placeholder="+237 …" /></label>
                </div>
                <div className="form-row">
                  <label>Business Type *<input required placeholder="Retail, restaurant, distribution…" /></label>
                  <label>Estimated Monthly Volume *
                    <select required defaultValue="">
                      <option value="" disabled>Select volume</option>
                      <option>1M – 5M FCFA / mo</option>
                      <option>5M – 20M FCFA / mo</option>
                      <option>20M – 100M+ FCFA / mo</option>
                    </select>
                  </label>
                </div>
                <label>What do you need?
                  <select value={subject} onChange={e => setSubject(e.target.value)}>
                    {contactSubjects.map(s => <option key={s}>{s}</option>)}
                  </select>
                </label>
                <label>Tell us about your payment channels, number of retail locations, or growth goals…
                  <textarea required rows={5} placeholder="e.g. 3 shops in Douala, Mobile Money + cash today" />
                </label>
                <button className="button primary full" type="submit"><Send size={16} /> Request a Demo / Consultation</button>
                <p className="form-foot"><Lock size={13} /> Encrypted transmission · Never shared</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

export function FaqSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal><SectionTitle eyebrow="FAQ">Questions, <span className="grad">answered.</span></SectionTitle></Reveal>
        <Reveal delay={100}><Faq /></Reveal>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal>
          <SectionTitle>Ready to take <span className="grad">your business further?</span></SectionTitle>
          <p className="section-lead centered">Start building a better financial foundation for your business with TulaPay.</p>
          <div className="hero-actions center">
            <Link to="/contact" className="button primary">Get Started <ArrowRight size={17} /></Link>
            <Link to="/solutions" className="button outline">Explore solutions <Sparkles size={16} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
