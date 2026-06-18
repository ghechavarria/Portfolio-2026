import { site } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero-content">
        <h1>{site.name}</h1>
        <p className="role-line" aria-label={site.roles.map((role) => role.text).join(', ')}>
          {site.roles.map((role, index) => (
            <span key={role.text}>
              {index > 0 && <span className="role-sep">/</span>}
              <span className={`role-word ${role.color}`}>{role.text}</span>
            </span>
          ))}
        </p>
        <p className="subtitle">{site.summary}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#experience">
            View experience
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true">
        <div className="wave wave-a"></div>
        <div className="wave wave-b"></div>
        <div className="wave wave-c"></div>
      </div>
    </section>
  );
}
