import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight, ArrowUp, Camera, Check, MessageCircle, Mail,
  MapPin, Menu, Send, Share2, X,
} from 'lucide-react'
import './App.css'
import { brand, footerAbout, navLinks } from './content'
import { Home } from './pages'
import { About, Contact, CtaBand, Pricing, Solutions } from './pages2'

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="TulaPay home">
          <span className="brand-mark">t</span>
          <span className="brand-name">tula<span>pay</span></span>
        </Link>
        <nav id="primary-nav" className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary">
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-button" onClick={() => setOpen(false)}>Book a Demo <ArrowRight size={15} /></Link>
        </nav>
        <button className="menu-button" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="primary-nav" aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand"><span className="brand-mark">t</span><span className="brand-name">tula<span>pay</span></span></Link>
          <p>{footerAbout}</p>
          <div className="socials">
            <a href="#" aria-label="LinkedIn"><Share2 size={16} /></a>
            <a href="#" aria-label="Twitter / X"><Send size={16} /></a>
            <a href="#" aria-label="Facebook"><MessageCircle size={16} /></a>
            <a href="#" aria-label="Instagram"><Camera size={16} /></a>
          </div>
        </div>
        <div>
          <h4>Platform</h4>
          <Link to="/solutions">Solutions</Link>
          <Link to="/solutions#payments">Unified Payments</Link>
          <Link to="/solutions#intelligence">Business Intelligence</Link>
          <Link to="/solutions#working-capital">Working Capital</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About TulaPay</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/contact">Careers & Talent</Link>
        </div>
        <div>
          <h4>Get the latest</h4>
          <p>Product news and insights for Cameroonian businesses. No spam.</p>
          {subscribed ? (
            <p className="subscribed"><Check size={15} /> You're on the list — thank you.</p>
          ) : (
            <form
              className="newsletter"
              onSubmit={e => {
                e.preventDefault()
                setSubscribed(true)
              }}
            >
              <input aria-label="Your email address" type="email" required placeholder="Your email address" />
              <button aria-label="Subscribe"><Send size={17} /></button>
            </form>
          )}
          <p className="footer-contact"><Mail size={14} /> {brand.email}</p>
          <p className="footer-contact"><MapPin size={14} /> {brand.locations}</p>
        </div>
      </div>
      <div className="container footer-disclaimer">{brand.regulatory}</div>
      <div className="container footer-bottom">
        <span>© 2026 TulaPay · {brand.locations}</span>
        <span>Settlement in XAF / FCFA (BEAC) · Privacy Policy & Terms</span>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function BackTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
      <ArrowUp size={18} />
    </button>
  )
}

function NotFound() {
  return (
    <div className="not-found">
      <div className="eyebrow">Page not found</div>
      <h1>Looks like this page<br /><span className="grad">moved.</span></h1>
      <Link to="/" className="button primary">Back home <ArrowRight size={17} /></Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <CtaBand />
      <Footer />
      <BackTop />
    </BrowserRouter>
  )
}
