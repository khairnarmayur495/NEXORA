
import { useState } from 'react'
import './App.css'

const whatsappNumber = '919325523544'

const whatsappMessage = encodeURIComponent(
  'Hello NEXORA, I want to discuss a project.'
)

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

const projects = [
  {
    number: '01',
    name: 'E-Commerce Experience',
    type: 'ONLINE STORE',
    description: 'A modern shopping experience for digital brands.',
    className: 'project-one',
    symbol: 'SHOP.'
  },
  {
    number: '02',
    name: 'Business Website',
    type: 'CORPORATE WEBSITE',
    description: 'A professional digital identity for growing businesses.',
    className: 'project-two',
    symbol: 'STUDIO.'
  },
  {
    number: '03',
    name: 'Creative Portfolio',
    type: 'PERSONAL BRAND',
    description: 'A bold portfolio built to make a lasting impression.',
    className: 'project-three',
    symbol: 'CREATE.'
  }
]

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    details: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `
Hello NEXORA! I want to discuss a project.

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Project Details:
${formData.details}
    `

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="website">

      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">N</span>
          NEXORA<span className="brand-dot">.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Projects</a>
          <a href="#about">About</a>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <main>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span></span>
              DIGITAL CREATIVE STUDIO
            </div>

            <h1>
              We turn ideas
              <br />
              into <span>digital</span>
              <br />
              experiences<span className="hero-period">.</span>
            </h1>

            <p className="hero-description">
              We design and develop beautiful websites
              that help businesses grow, connect and
              stand out in the digital world.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button-primary">
                Explore Projects ↗
              </a>

              <a href="#services" className="button-text">
                What we do <span>↓</span>
              </a>
            </div>

            <div className="hero-meta">
              <span>DESIGN WITH PURPOSE.</span>
              <span>BUILT FOR IMPACT.</span>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="showcase-top">
              <span>FEATURED DIGITAL EXPERIENCE</span>
              <span>01 — 03</span>
            </div>

            <div className="browser-window">
              <div className="browser-bar">
                <div className="browser-dots">
                  <i></i><i></i><i></i>
                </div>
                <span>yourbrand.com</span>
                <span>↗</span>
              </div>

              <div className="mockup-site">
                <div className="mockup-nav">
                  <strong>FORMA<span>.</span></strong>
                  <div>HOME &nbsp; ABOUT &nbsp; SHOP</div>
                </div>

                <div className="mockup-main">
                  <p>DESIGNED FOR EVERYDAY LIVING</p>
                  <h2>Make space<br />for better.</h2>
                  <span className="mockup-button">DISCOVER MORE ↗</span>
                </div>

                <div className="mockup-art">
                  <div className="art-shape"></div>
                  <div className="art-circle"></div>
                </div>
              </div>
            </div>

            <div className="showcase-bottom">
              <span>CREATIVE DESIGN</span>
              <span>RESPONSIVE DEVELOPMENT</span>
            </div>

            <div className="floating-tag">
              <span>✳</span> DIGITAL EXPERIENCE
            </div>
          </div>

          <div className="hero-bottom">
            <span>INDEPENDENT DIGITAL STUDIO</span>
            <a href="#services">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="intro section" id="about">
          <p className="section-label">01 / WHO WE ARE</p>

          <div className="intro-content">
            <h2>
              Not just websites.
              <br />
              <span>Digital identities.</span>
            </h2>

            <div>
              <p>
                NEXORA is a digital design and development
                studio helping businesses build a strong
                online presence through thoughtful design
                and modern technology.
              </p>
              <a href="#contact" className="text-link">
                LET'S BUILD SOMETHING ↗
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <p className="section-label">02 / WHAT WE DO</p>
              <h2>Ideas into <span>reality.</span></h2>
            </div>
            <p>Creative solutions for ambitious businesses.</p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span className="service-number">01</span>
              <div className="service-icon">↗</div>
              <h3>Website Development</h3>
              <p>
                Fast, responsive and modern websites
                built around your business goals.
              </p>
              <span className="service-arrow">↗</span>
            </article>

            <article className="service-card">
              <span className="service-number">02</span>
              <div className="service-icon">✳</div>
              <h3>UI / UX Design</h3>
              <p>
                Clean interfaces and thoughtful experiences
                that people love to use.
              </p>
              <span className="service-arrow">↗</span>
            </article>

            <article className="service-card">
              <span className="service-number">03</span>
              <div className="service-icon">◈</div>
              <h3>E-Commerce</h3>
              <p>
                Digital storefronts designed to showcase
                products and support online sales.
              </p>
              <span className="service-arrow">↗</span>
            </article>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="work section" id="work">
          <div className="section-heading">
            <div>
              <p className="section-label">03 / SELECTED CONCEPTS</p>
              <h2>Made to <span>stand out.</span></h2>
            </div>
            <p>Concept projects showcasing our design direction.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-preview ${project.className}`}>
                  <div className="project-preview-top">
                    <span>{project.symbol}</span>
                    <span>↗</span>
                  </div>

                  <div className="project-preview-center">
                    <span>{project.type}</span>
                    <h3>{project.symbol}</h3>
                  </div>

                  <div className="project-preview-bottom">
                    <span>DESIGNED BY NEXORA</span>
                    <span>{project.number}</span>
                  </div>
                </div>

                <div className="project-info">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>

          <p className="concept-note">
            * These are concept previews, not completed client projects.
          </p>
        </section>

        {/* PROCESS */}
        <section className="process section">
          <p className="section-label">04 / HOW WE WORK</p>
          <h2>Simple process. <span>Powerful results.</span></h2>

          <div className="process-grid">
            <div>
              <span>01</span>
              <h3>Discover</h3>
              <p>Understand your goals and vision.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Design</h3>
              <p>Create a visual direction for your brand.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Develop</h3>
              <p>Build your website with modern technology.</p>
            </div>

            <div>
              <span>04</span>
              <h3>Launch</h3>
              <p>Make your digital presence live.</p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="contact section" id="contact">
          <p className="section-label">05 / START A PROJECT</p>

          <div className="contact-layout">
            <div className="contact-content">
              <h2>
                Have an idea?
                <br />
                <span>Let's make it real.</span>
              </h2>

              <p>
                Tell us about your project. Let's create
                something meaningful together.
              </p>

              <div className="contact-note">
                <span>✳</span>
                <div>
                  <strong>LET'S CREATE SOMETHING GREAT</strong>
                  <small>Share your idea with the NEXORA team.</small>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>PROJECT INQUIRY</span>
                <span>✳</span>
              </div>

              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">What do you need? *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="UI / UX Design">UI / UX Design</option>
                  <option value="E-Commerce Website">E-Commerce Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="details">Tell us about your project *</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Describe your idea, requirements or goals..."
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                Send Inquiry on WhatsApp <span>↗</span>
              </button>

              <small className="form-disclaimer">
                Your details will be added to a WhatsApp message.
                You can review and send it there.
              </small>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <a href="#home" className="brand">
          <span className="brand-icon">N</span>
          NEXORA<span className="brand-dot">.</span>
        </a>

        <p>WE BUILD DIGITAL EXPERIENCES.</p>
        <a href="#home">BACK TO TOP ↑</a>
        <small>© 2026 NEXORA. All rights reserved.</small>
      </footer>

    </div>
  )
}

export default App
