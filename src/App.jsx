import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import './App.css'

const services = [
  { icon: 'solar:videocamera-record-bold-duotone', title: 'Video production', copy: 'High-quality video production from first concept through final delivery.', items: ['Corporate videos', 'Brand and promotional videos', 'Commercials and TV ads', 'Product videos', 'Music videos', 'Documentaries', 'Interviews', 'Social media productions'] },
  { icon: 'solar:calendar-mark-bold-duotone', title: 'Event coverage', copy: 'Creative, precise coverage that preserves the moments and atmosphere that matter.', items: ['Weddings', 'Corporate events', 'Conferences and seminars', 'Concerts and festivals', 'Product launches', 'Award ceremonies', 'Private events'] },
  { icon: 'solar:clapperboard-edit-bold-duotone', title: 'Editing and post-production', copy: 'Professional post-production that transforms raw footage into compelling visual stories.', items: ['Professional video editing', 'Colour correction and grading', 'Sound design and audio mixing', 'Motion graphics', 'Intro and outro animation', 'Subtitles and captions', 'Highlight reels', 'Reels, TikTok and Shorts editing'] },
  { icon: 'mdi:quadcopter', title: 'Drone services', copy: 'Elevated aerial perspectives for events, properties, destinations and documentation.', items: ['Aerial photography', 'Aerial videography', 'Real estate coverage', 'Construction site documentation', 'Event drone coverage', 'Tourism and destination content'] },
  { icon: 'solar:smartphone-2-bold-duotone', title: 'Brand content creation', copy: 'Platform-ready stories that help brands connect meaningfully with their audience.', items: ['Social media content', 'Campaign videos', 'Product launch content', 'Behind-the-scenes videos', 'Customer testimonials', 'Lifestyle and brand storytelling'] },
  { icon: 'solar:lightbulb-bolt-bold-duotone', title: 'Creative direction', copy: 'Strategic guidance that shapes strong ideas into clear, powerful visual experiences.', items: ['Concept development', 'Storyboarding', 'Creative planning', 'Production management', 'Script consultation'] },
  { icon: 'solar:camera-bold-duotone', title: 'Photography', copy: 'Professional photography for individuals, businesses, brands and live events.', items: ['Event photography', 'Corporate photography', 'Product photography', 'Portrait photography', 'Brand photography'] },
  { icon: 'solar:square-academic-cap-2-bold-duotone', title: 'Training and mentorship', copy: 'Practical editing education and focused mentorship for emerging creatives and teams.', items: ['CapCut training', 'Adobe Premiere Pro training', 'Adobe After Effects training', 'DaVinci Resolve training', 'One-on-one mentorship', 'Corporate training'] },
]

const work = [
  { className: 'work-red', type: 'BRAND FILM', title: 'Ideas, put in motion.', meta: 'Commercial / Direction' },
  { className: 'work-dark', type: 'LIVE MOMENTS', title: 'Energy you can feel.', meta: 'Event / Aftermovie' },
  { className: 'work-light', type: 'SOCIAL FIRST', title: 'Built for the scroll.', meta: 'Content / Campaign' },
]

const teamMembers = Array.from({ length: 7 }, (_, index) => ({
  image: `/team-${String(index + 1).padStart(2, '0')}.jpeg`,
  number: String(index + 1).padStart(2, '0'),
}))

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
              <div className="service-intro"><h3>{service.title}</h3><p>{service.copy}</p></div>
              <details>
                <summary>View capabilities <Icon icon="solar:add-circle-linear" /></summary>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </details>
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
              {index === 0 && <video className="work-video" src="/pj-showreel.mp4" poster="/pj-profile.png" autoPlay muted loop playsInline preload="metadata" aria-label="PJ Media showreel" />}
              {index === 1 && <video className="work-video" src="/wedding-film.mp4" autoPlay muted loop playsInline preload="auto" aria-label="PJ Media wedding film" />}
              {index === 2 && <img className="stock-frame" src="/stock-aerial.jpg" alt="Aerial city and waterfront view captured by drone" />}
              <div className="work-caption"><h3>{item.title}</h3><p>{item.meta}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="team" id="team">
        <div className="section-label light"><span>The team</span><span>People behind the frames</span></div>
        <div className="team-heading" data-reveal>
          <h2>Small team.<br /><em>Big vision.</em></h2>
          <p>Meet the creative minds turning ideas into visuals with intention, precision and a shared eye for powerful stories.</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article key={member.image} data-reveal style={{ '--delay': `${index * 65}ms` }}>
              <div className="team-portrait">
                <img src={member.image} alt={`PJ Media team member ${index + 1}`} />
                <span className="portrait-wash" />
              </div>
              <div className="team-meta">
                <h3>Creative team</h3>
                <p>PJ Media crew</p>
                <span>{member.number}</span>
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
          <div className="contact-actions">
            <a className="contact-link" href="mailto:pjmediastudios@gmail.com">pjmediastudios@gmail.com <Icon icon="solar:arrow-right-up-linear" /></a>
            <a className="contact-link" href="tel:+2349051340245">+234 905 134 0245 <Icon icon="solar:phone-calling-linear" /></a>
          </div>
          <div className="footer-bottom">
            <img src="/pj-white-logo.png" alt="PJ Media" />
            <div><a href="https://www.instagram.com/pjmedia.studio" target="_blank" rel="noreferrer">Instagram</a><a href="https://x.com/pjmediastudio" target="_blank" rel="noreferrer">X</a></div>
            <p>© 2026 PJ Media<br />Every frame, created with intention.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
