import { useState, useEffect } from 'react'
import './App.css'
import { profile } from './profile'

function App() {
  const [theme, setTheme] = useState('dark')
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className="portfolio-wrapper">
      <header className="header">
        <div className="header-brand">JG.</div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </header>

      <main className="portfolio">
        <section className="hero fade-up">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="eyebrow fade-up-delay-1">{profile.role}</p>
              <h1 className="display-text fade-up-delay-2">{profile.name}</h1>
              <div className="intro fade-up-delay-3">
                {profile.bio.filter(item => item.text).map((item, index) => (
                  <p key={index}>{item.text}</p>
                ))}
              </div>
              <div className="hero-actions fade-up-delay-4">
                <a href="#contato" className="btn-brutal primary">Entrar em contato</a>
              </div>
            </div>
            <div className="hero-visual fade-up-delay-2">
              <div className="portrait-container">
                <img className="profile-image" src={profile.image} alt={profile.name} />
                <div className="portrait-offset"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section expertise-section">
          <div className="section-header">
            <h2>Áreas de atuação</h2>
            <div className="section-line"></div>
          </div>
          <div className="expertise-grid">
            {profile.atuacoes.map((item, index) => (
              <article key={item.label} className={`expertise-card fade-up-delay-${(index % 4) + 1}`}>
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <h2>Vamos criar algo <br /><span className="accent-text">incrível juntos.</span></h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p>Disponível para freelas, colaborações e projetos autorais.</p>
              {profile.email.map((email, index) => (
                <a key={index} href={`mailto:${email}`} className="email-link">{email}</a>
              ))}
            </div>
            <div className="social-links" aria-label="Links profissionais">
              {profile.links.filter(item => item.url).map((item) => (
                <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="social-pill">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.</p>
      </footer>

      {showTopBtn && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App
