import './App.css'
import { profile } from './profile'

function App() {
  return (
    <main className="portfolio">
      <section className="hero">
        {/* <p className="eyebrow">Portfólio</p> */}
        <div className="container">
          <h1>{profile.name}</h1>
          <img className="profile-image" src={profile.image} alt={profile.name} />
        </div>
        <hr className='divider'></hr>
        <p className="role">{profile.role}</p>
        <p className="intro">{
          profile.bio
          .filter((item) => item.text)
          .map((item, index) => (
            <span key={index}>
              {item.text}
              <br />
              <br />
            </span>
          ))}
        </p>
        <div className="hero-actions">
          <a href="#contato" className="btn primary">
            Entrar em contato
          </a>
        </div>
      </section>

      <section id="projetos" className="section">
        <h2>Áreas de atuação</h2>
        <div className="grid">
          {profile.atuacoes.map((item) => (
            <article key={item.label} className="card">
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="section contact">
        <h2>Contato</h2>
        <p>
          Disponível para freelas, colaborações e projetos autorais.
          <br />
          Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="social-links" aria-label="Links profissionais">
          {profile.links
            .filter((item) => item.url)
            .map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
        </div>
      </section>
    </main>
  )
}

export default App
