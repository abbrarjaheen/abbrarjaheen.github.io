import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown, ArrowLeft, ArrowUpRight, Award, BookOpen, Download,
  Github, Linkedin, Mail, Menu, Moon, Sun, X, Zap,
} from 'lucide-react'

type Project = {
  number: string
  type: string
  title: string
  summary: string
  year: string
  tags: string[]
  detail: string
  method: string[]
  outcome: string
}

const projects: Project[] = [
  {
    number: '01',
    type: 'ENGINEERING THESIS',
    title: 'Heat Transfer Enhancement Using Spring Wire Inserts',
    summary: 'A numerical investigation of heat-transfer performance in a double-tube heat exchanger using passive enhancement inserts.',
    year: '2026',
    tags: ['ANSYS Fluent', 'CFD', 'Heat Transfer'],
    detail: 'Undergraduate thesis exploring spring-wire inserts as a passive technique to enhance heat transfer in a double-tube heat exchanger. The work examines the relationship between insert geometry, flow resistance and thermal performance.',
    method: ['Developed spring-wire insert configurations with controlled pitch and diameter ratios.', 'Set up a conjugate heat-transfer model in ANSYS Fluent.', 'Investigated Reynolds numbers in the 4,500–7,500 range.', 'Evaluated Nusselt number, friction factor and thermal performance factor.'],
    outcome: 'Research-focused project. Quantitative results and final publication details can be added after validation and approval.',
  },
  {
    number: '02',
    type: 'RENEWABLE ENERGY',
    title: '10 kW Rooftop Solar PV Feasibility Study',
    summary: 'A stand-alone solar photovoltaic concept for Sirajganj Collectorate School & College, including storage and system sizing.',
    year: '2025',
    tags: ['Solar PV', 'System Design', 'Energy'],
    detail: 'Designed an academic feasibility concept for a 10 kW stand-alone solar PV power plant, considering generation potential, inverter selection and battery storage requirements.',
    method: ['Selected 455 W PV modules and developed a 22-panel array concept.', 'Considered a 10 kW Sungrow inverter.', 'Sized a lithium iron phosphate battery bank concept using six 24 V, 300 Ah units.', 'Prepared a preliminary capital cost estimate of Tk 1,200,000.'],
    outcome: 'An academic design study. Final field installation and measured energy yield are not claimed.',
  },
  {
    number: '03',
    type: 'MECHANICAL DESIGN',
    title: 'Weight-Shifting Rover for Military Applications',
    summary: 'A mechanical rover concept exploring balance, mobility and weight-shifting as a means of navigating challenging terrain.',
    year: 'ACADEMIC PROJECT',
    tags: ['Mechanical Design', 'CAD', 'Prototyping'],
    detail: 'An academic engineering concept centered on a rover that uses controlled weight shifting to support mobility across uneven terrain.',
    method: ['Conceptualized a mechanical arrangement for shifting the rover mass.', 'Considered stability and mobility requirements.', 'Explored CAD-based design development.'],
    outcome: 'Concept project. Detailed test data, final specifications and deployment claims are intentionally not stated.',
  },
  {
    number: '04',
    type: 'BUSINESS & OPERATIONS',
    title: 'Supply Chain & Business Case Projects',
    summary: 'A collection of case-based projects and competitions focused on operational challenges, strategic thinking and practical solutions.',
    year: '2022 — 2026',
    tags: ['Supply Chain', 'Strategy', 'Research'],
    detail: 'A portfolio of business case competition experiences spanning supply chain, operations, sustainability and business strategy.',
    method: ['Structured ambiguous business problems into actionable workstreams.', 'Collaborated with cross-functional student teams.', 'Developed research-backed recommendations and presentations.'],
    outcome: 'Participated in 50+ national and international business case competitions. Individual case details can be added as approved.',
  },
]

const experience = [
  { period: 'JUN 2025 — NOV 2025', role: 'Industrial Trainee', org: 'Nitol Motors', place: 'Narayanganj, Bangladesh', note: 'Industrial exposure within an automotive organization, developing an understanding of practical operations and workplace systems.' },
  { period: '2025 — PRESENT', role: 'Supply Chain Intern', org: 'X-index Company', place: 'Dhaka, Bangladesh', note: 'Supply chain internship experience. Add the specific function, responsibilities and outcomes here.' },
  { period: '2025', role: 'Industrial Trainee', org: 'BITAC', place: 'Bangladesh', note: 'Industrial training experience. Add the training area and practical activities here.' },
  { period: '2025', role: 'Campus Ambassador', org: 'PRAN', place: 'Bangladesh', note: 'Campus representation and student engagement activities.' },
  { period: '2024 — 2025', role: 'Graphic Designer & Content Writer', org: 'AUST Sports Club', place: 'Dhaka, Bangladesh', note: 'Created visual and written communication supporting student club activities and events.' },
  { period: '2022', role: 'Junior Executive', org: 'Mind Spark', place: 'Bangladesh', note: 'Early professional experience. Add specific responsibilities and measurable contributions here.' },
]

const leadership = [
  ['HULT Prize', 'Campus Winner · National Finalist', '2026'],
  ['AUSTMUNC', 'Organizing Secretary', '2025'],
  ['AIAA AUST Student Branch', 'Chairperson', '2025 — 2026'],
  ['ASHRAE AUST Student Branch', 'General Secretary', '2025 — 2026'],
  ['AUST Mechanical Society', 'Academic Coordinator', '2025 — 2026'],
  ['ISCEA PTAK Prize', '60% Scholarship Award', '2024'],
  ['Supply Chain Research Challenge 5.0', '85% Scholarship Award', '—'],
]

const skillGroups = [
  { title: 'ENGINEERING', items: ['SolidWorks', 'ANSYS Fluent', 'CFD', 'MATLAB', 'Python', 'Mechanical Design', 'Heat Transfer'] },
  { title: 'BUSINESS & OPERATIONS', items: ['Supply Chain Management', 'Data Analysis', 'Process Improvement', 'Operations Management', 'Business Strategy', 'Research'] },
  { title: 'TOOLS & COMMUNICATION', items: ['Microsoft Excel', 'PowerPoint', 'Word', 'Power BI', 'Canva', 'Adobe Suite'] },
]

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] as const } },
}

function SectionLabel({ children, number }: { children: string; number: string }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span><i /></div>
}

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ['Mechanical & Production Engineer', 'Supply Chain Enthusiast', 'Researcher', 'Aspiring Business Leader']

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 2600)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  const closeMenu = () => setMenuOpen(false)
  const navLinks = ['About', 'Experience', 'Projects', 'Leadership', 'Research', 'Skills', 'Contact']

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="wordmark" onClick={closeMenu}>KA<span>.</span></a>
          <div className="nav-links">
            {navLinks.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
          </div>
          <div className="nav-actions">
            <button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
            <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            {navLinks.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}<ArrowUpRight size={15} /></a>)}
            <button onClick={() => setDark(!dark)}>{dark ? <Sun size={16} /> : <Moon size={16} />} Switch theme</button>
          </motion.div>}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>
              <span className="status-dot" /> OPEN TO OPPORTUNITIES · BANGLADESH
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .7 }}>
              Engineering ideas.<br />Building <em>systems.</em><br />Creating impact<span className="period">.</span>
            </motion.h1>
            <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .42 }}>
              <span className="role-prefix">I AM A</span>
              <AnimatePresence mode="wait"><motion.span key={roleIndex} className="role-value" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -9 }} transition={{ duration: .25 }}>{roles[roleIndex]}</motion.span></AnimatePresence>
            </motion.div>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
              I’m Khan Abbrar Jaheen Islam — a Mechanical & Production Engineering graduate interested in the intersection of engineering, supply chain, research and business.
            </motion.p>
            <motion.div className="hero-ctas" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href="#contact"><Download size={16} /> CV available on request</a>
            </motion.div>
            <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .72 }}>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn placeholder"><Linkedin size={17} /></a>
              <a href="https://github.com/abbrarjaheen" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
              <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email placeholder"><Mail size={17} /></a>
              <span>CONNECT WITH ME</span>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .3, duration: .8 }}>
            <div className="visual-grid" />
            <div className="portrait-frame">
              <div className="portrait-placeholder">
                <div className="portrait-initials">KA<span>.</span></div>
                <div className="portrait-caption">YOUR PORTRAIT<br />GOES HERE</div>
              </div>
              <div className="portrait-index">FIG. 01 / PROFILE</div>
            </div>
            <div className="floating-note note-top"><span>01</span> ANALYTICAL MINDSET</div>
            <div className="floating-note note-bottom"><Zap size={14} /> CURIOUS BY DESIGN</div>
            <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
          <div className="hero-index">DHAKA, BD <span>·</span> 23° 48' N</div>
        </section>

        <section className="intro-strip">
          <div className="container strip-inner">
            <span>ENGINEERING</span><i /><span>SUPPLY CHAIN</span><i /><span>RESEARCH</span><i /><span>LEADERSHIP</span><i /><span>STRATEGY</span>
          </div>
        </section>

        <section className="section container" id="about">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <div className="about-grid">
            <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>Curiosity is the<br />starting point of<br /><em>every solution.</em></motion.h2>
            <motion.div className="about-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="lead">I’m an engineering graduate who likes understanding how things work — and how they can work better.</p>
              <p>With a background in Mechanical & Production Engineering from Ahsanullah University of Science and Technology (AUST), I bring an analytical approach to complex problems. My interests span mechanical systems, supply chain operations, technology and business strategy.</p>
              <p>Beyond the classroom, I’ve explored ideas through research, industrial exposure, student leadership and more than 50 business case competitions. I enjoy connecting technical thinking with people, processes and practical outcomes.</p>
              <div className="about-meta">
                <div><span>EDUCATION</span><strong>BSc, Mechanical & Production Engineering</strong><small>AUST · CGPA 3.30 / 4.00 · 2026</small></div>
                <div><span>CREDENTIAL</span><strong>Certified Supply Chain Analyst (CSCA)</strong><small>Certification</small></div>
              </div>
            </motion.div>
          </div>
          <div className="stat-row">
            <div className="stat"><strong>50<span>+</span></strong><small>BUSINESS CASE COMPETITIONS</small></div>
            <div className="stat"><strong>01</strong><small>HULT PRIZE CAMPUS WIN</small></div>
            <div className="stat"><strong>03<span>+</span></strong><small>AREAS OF EXPLORATION</small></div>
            <div className="stat"><strong>∞</strong><small>QUESTIONS TO ASK</small></div>
          </div>
        </section>

        <section className="section section-muted" id="experience">
          <div className="container">
            <SectionLabel number="02">WHERE I’VE BEEN</SectionLabel>
            <div className="section-heading-row"><h2>Experience &<br /><em>exposure.</em></h2><p>Every role is a chance to learn a different part of the system — from the shop floor to student communities.</p></div>
            <div className="experience-list">
              {experience.map((item, index) => <motion.article className="experience-item" key={item.org + item.role} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }}>
                <div className="experience-period">{item.period}</div>
                <div className="experience-main"><h3>{item.role}</h3><div className="experience-org">{item.org} <span>·</span> {item.place}</div><p>{item.note}</p></div>
                <span className="experience-number">0{index + 1}</span>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <div className="section-heading-row"><h2>Ideas into<br /><em>application.</em></h2><p>A selection of engineering, energy and business projects. Open a project to explore its approach and scope.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => <motion.button type="button" className={`project-card project-card-${index + 1}`} key={project.number} onClick={() => setActiveProject(project)} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }}>
              <div className="project-art">
                <span className="project-art-number">{project.number} / 04</span>
                {index === 0 ? <div className="spring-art"><div /><div /><div /><div /><div /><div /><div /></div> : index === 1 ? <div className="solar-art"><div className="sun-orb" /><div className="solar-panel"><i /><i /><i /><i /><i /><i /></div><div className="solar-base" /></div> : index === 2 ? <div className="rover-art"><div className="rover-body"><i /><i /></div><div className="rover-wheel wheel-a" /><div className="rover-wheel wheel-b" /><div className="rover-wheel wheel-c" /><div className="rover-wheel wheel-d" /><div className="rover-beam" /></div> : <div className="strategy-art"><div className="strategy-node">IDEA</div><div className="strategy-lines" /><div className="strategy-node">INSIGHT</div><div className="strategy-lines" /><div className="strategy-node">IMPACT</div></div>}
                <span className="art-open"><ArrowUpRight size={18} /></span>
              </div>
              <div className="project-info"><div className="project-type">{project.type} <span>{project.year}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </motion.button>)}
          </div>
        </section>

        <section className="section section-muted" id="leadership">
          <div className="container">
            <SectionLabel number="04">BEYOND THE CLASSROOM</SectionLabel>
            <div className="leadership-grid">
              <div><h2>Lead with<br /><em>purpose.</em></h2><p className="leadership-intro">Leadership, to me, is about bringing people together around a shared goal — and creating room for everyone to contribute.</p><div className="leadership-stamp"><Award size={22} /><span>LEARN · CONTRIBUTE · GROW</span></div></div>
              <div className="achievement-list">{leadership.map(([org, role, year], i) => <div className="achievement" key={org}><span className="achievement-index">0{i + 1}</span><div><strong>{org}</strong><small>{role}</small></div><time>{year}</time></div>)}</div>
            </div>
          </div>
        </section>

        <section className="section container" id="research">
          <SectionLabel number="05">THOUGHT & INQUIRY</SectionLabel>
          <div className="section-heading-row"><h2>Research with<br /><em>intent.</em></h2><p>Exploring questions at the intersection of industrial systems, materials, energy and sustainable operations.</p></div>
          <div className="research-grid">
            <article className="research-feature"><div className="research-icon"><BookOpen size={22} /></div><span className="project-type">PUBLICATION · 2025</span><h3>Supply Chain Insider</h3><p>Published article in <em>Supply Chain Insider</em>, Volume 16, Issue 1 (2025). Add the article title and a direct publication link when available.</p><span className="research-foot">VOL. 16 / NO. 1 <ArrowUpRight size={16} /></span></article>
            <article className="research-secondary"><span className="project-type">ENGINEERING RESEARCH</span><h3>Heat transfer enhancement</h3><p>Undergraduate thesis on spring-wire inserts in double-tube heat exchangers, using numerical investigation and thermal performance metrics.</p><div className="research-tags"><span>CFD</span><span>THERMAL SYSTEMS</span><span>EXERGY</span></div></article>
            <article className="research-secondary"><span className="project-type">RESEARCH INTERESTS</span><h3>Systems that work better</h3><p>Waste management, circular economy, materials, sustainable manufacturing and supply chain resilience.</p><div className="research-tags"><span>CIRCULARITY</span><span>MATERIALS</span><span>OPERATIONS</span></div></article>
          </div>
          <div className="conference-line"><span>CONFERENCE PARTICIPATION</span><strong>Materials Symposium 2025 · BUET</strong><strong>AUBIC 2026</strong><strong>Waste Management & Circular Economy</strong></div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <SectionLabel number="06">TOOLS OF THE TRADE</SectionLabel>
            <div className="section-heading-row"><h2>Skills in<br /><em>practice.</em></h2><p>A growing toolkit for investigating technical problems, improving processes and communicating ideas.</p></div>
            <div className="skills-grid">{skillGroups.map((group, i) => <div className="skill-group" key={group.title}><span className="skill-number">0{i + 1}</span><h3>{group.title}</h3><div className="skill-chips">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <SectionLabel number="07">START A CONVERSATION</SectionLabel>
            <div className="contact-main"><div><span className="contact-kicker">HAVE A PROJECT, IDEA OR OPPORTUNITY?</span><h2>Let’s make<br /><em>something matter.</em></h2></div><a className="contact-arrow" href="mailto:YOUR_EMAIL@example.com" aria-label="Email Abbrar"><ArrowUpRight size={36} /></a></div>
            <div className="contact-bottom"><p>I’m always interested in thoughtful conversations, meaningful collaborations and opportunities to learn.</p><div className="contact-links"><a href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={14} /></a><a href="https://github.com/abbrarjaheen" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14} /></a></div></div>
          </div>
        </section>
      </main>

      <footer className="footer container"><a href="#home" className="wordmark">KA<span>.</span></a><span>DESIGNED WITH CURIOSITY · {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a></footer>

      <AnimatePresence>
        {activeProject && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null) }}>
          <motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .98 }}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button>
            <span className="project-type">{activeProject.type} · {activeProject.year}</span><h2 id="modal-title">{activeProject.title}</h2><p className="modal-summary">{activeProject.detail}</p>
            <div className="modal-tags">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="modal-content-grid"><div><h3>APPROACH & METHODOLOGY</h3>{activeProject.method.map((line, i) => <p className="method-line" key={line}><span>0{i + 1}</span>{line}</p>)}</div><div className="modal-outcome"><h3>STATUS & NOTES</h3><p>{activeProject.outcome}</p></div></div>
            <button className="modal-back" onClick={() => setActiveProject(null)}><ArrowLeft size={15} /> BACK TO PROJECTS</button>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default App
