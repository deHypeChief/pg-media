import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import './App.css'

const services = [
  { icon: 'solar:videocamera-record-bold-duotone', title: 'Event coverage', copy: 'From the first arrival to the final applause, we preserve the moments that matter.' },
  { icon: 'solar:clapperboard-play-bold-duotone', title: 'Commercials', copy: 'Brand films and campaign visuals designed to hold attention and move people.' },
  { icon: 'solar:smartphone-2-bold-duotone', title: 'Social content', copy: 'Platform-native content built for relevance, rhythm, and repeat viewing.' },
  { icon: 'solar:airbuds-case-open-bold-duotone', title: 'Aerial visuals', copy: 'Cinematic perspectives that give places, properties, and stories a new scale.' },
  { icon: 'solar:layers-bold-duotone', title: 'Post-production', copy: 'Precision editing, colour, sound, and motion that make every frame feel complete.' },
]

const work = [
  { className: 'work-red', type: 'BRAND FILM', title: 'Ideas, put in motion.', meta: 'Commercial / Direction' },
  { className: 'work-dark', type: 'LIVE MOMENTS', title: 'Energy you can feel.', meta: 'Event / Aftermovie' },
  { className: 'work-light', type: 'SOCIAL FIRST', title: 'Built for the scroll.', meta: 'Content / Campaign' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="PJ Media home" onClick={closeMenu}>
          <img src="/pj-white-logo.png" alt="PJ Media" />
        </a>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#team" onClick={closeMenu}>Team</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Start a project <Icon icon="solar:arrow-right-up-linear" /></a>
        <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="frame-rail" aria-hidden="true"><span>00:00:01</span><span>00:00:12</span><span>00:00:24</span></div>
        <div className="hero-content hero-enter">
          <p className="eyebrow"><span /> Creative media agency</p>
          <h1>Every frame<br />has a <em>purpose.</em></h1>
          <div className="hero-bottom">
            <p>We turn real stories into bold visual experiences that capture attention, spark emotion, and stay with people.</p>
            <a className="circle-link" href="#work" aria-label="Explore our work"><Icon icon="solar:arrow-down-linear" /></a>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">PJ</div>
        <p className="hero-side">Lagos · Nigeria · Available worldwide</p>
      </section>

      <section className="intro" id="about">
        <div className="section-label"><span>About PJ Media</span><span>EST. 2025</span></div>
        <div className="intro-grid" data-reveal>
          <h2>Stories people<br /><em>remember.</em></h2>
          <div className="intro-copy">
            <p className="lead">At PJ Media, we believe every great visual begins with a great story.</p>
            <p>We’re a creative media company producing content that captures attention, sparks emotion, and leaves a lasting impression. Every brand, business, and individual has a unique story. Our job is to bring it to life authentically.</p>
            <a className="text-link" href="#services">Discover what we do <Icon icon="solar:arrow-right-linear" /></a>
          </div>
        </div>
        <div className="statement-strip" aria-label="Our approach" data-reveal>
          <span>CREATIVITY</span><b>×</b><span>PRECISION</span><b>×</b><span>PURPOSE</span>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-label light"><span>What we do</span><span>Full-service production</span></div>
        <div className="services-heading" data-reveal>
          <h2>From first idea<br />to final <em>cut.</em></h2>
          <p>One creative partner from concept through delivery.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article key={service.title} data-reveal style={{ '--delay': `${index * 55}ms` }}>
              <span className="service-index">0{index + 1}</span>
              <Icon className="service-icon" icon={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Icon className="service-arrow" icon="solar:arrow-right-up-linear" />
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-label"><span>Selected work</span><span>Play the story</span></div>
        <div className="work-heading" data-reveal><h2>Made to be<br /><em>felt.</em></h2><p>A glimpse at the worlds we shape through image, sound, and motion.</p></div>
        <div className="work-grid">
          {work.map((item, index) => (
            <article className={item.className} key={item.title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
              <div className="work-top"><span>{item.type}</span><span>0{index + 1}</span></div>
              {index === 0 && <img src="/pj-profile.png" alt="PJ Media monogram artwork" />}
              {index === 1 && <img className="stock-frame" src="/stock-production.jpg" alt="Camera operator preparing professional production equipment" />}
              {index === 2 && <img className="stock-frame" src="/stock-aerial.jpg" alt="Aerial city and waterfront view captured by drone" />}
              <button type="button" aria-label={`Play ${item.title}`}><Icon icon="solar:play-bold" /></button>
              <div className="work-caption"><h3>{item.title}</h3><p>{item.meta}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="team" id="team">
        <div className="section-label light"><span>The team</span><span>People behind the frames</span></div>
        <div className="team-heading" data-reveal>
          <h2>Small team.<br /><em>Big vision.</em></h2>
          <p>Meet the creative minds turning ideas into visuals with intention. Team portraits are ready to be added when you provide them.</p>
        </div>
        <div className="team-grid">
          {[1, 2, 3, 4].map((member, index) => (
            <article key={member} data-reveal style={{ '--delay': `${index * 65}ms` }}>
              <div className="team-portrait">
                <span>PJ</span>
                <Icon icon="solar:camera-minimalistic-linear" />
              </div>
              <div className="team-meta">
                <h3>Team member</h3>
                <p>Portrait and role coming soon</p>
                <span>0{member}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process" data-reveal>
        <div className="process-line"><span>LISTEN</span><Icon icon="solar:arrow-right-linear" /><span>CREATE</span><Icon icon="solar:arrow-right-linear" /><span>REFINE</span><Icon icon="solar:arrow-right-linear" /><span>DELIVER</span></div>
        <p>We approach every project with curiosity, clarity, and care because the best work is made together.</p>
      </section>

      <footer id="contact">
        <img className="footer-texture" src="/pj-gradient.jpg" alt="" />
        <div className="footer-inner" data-reveal>
          <p className="eyebrow"><span /> Your story starts here</p>
          <h2>Let’s create<br />something <em>unforgettable.</em></h2>
          <a className="contact-link" href="mailto:hello@pjmedia.ng">hello@pjmedia.ng <Icon icon="solar:arrow-right-up-linear" /></a>
          <div className="footer-bottom">
            <img src="/pj-white-logo.png" alt="PJ Media" />
            <div><a href="#">Instagram</a><a href="#">YouTube</a><a href="#">TikTok</a></div>
            <p>© 2026 PJ Media<br />Every frame, created with intention.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
