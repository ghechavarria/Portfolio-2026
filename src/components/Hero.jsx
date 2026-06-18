import { site } from '../data/portfolioData';
import CurrentlyPanel from './CurrentlyPanel';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true"></div>
      <div className="hero-orbs" aria-hidden="true">
        <span className="hero-orb hero-orb-a"></span>
        <span className="hero-orb hero-orb-b"></span>
        <span className="hero-orb hero-orb-c"></span>
      </div>
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-layout">
          <div className="hero-content">
            <p className="hero-badge">
              <span className="hero-badge-full">Miami, FL · Open to opportunities</span>
              <span className="hero-badge-short">{site.location}</span>
            </p>
            <h1>
              <span className="hero-eyebrow">Portfolio</span>
              <span className="hero-name">{site.name}</span>
            </h1>
            <div className="role-pills-scroll">
              <div className="role-pills" aria-label={site.roles.map((role) => role.text).join(', ')}>
                {site.roles.map((role) => (
                  <span className={`role-pill ${role.color}`} key={role.text}>
                    {role.text}
                  </span>
                ))}
              </div>
            </div>
            <p className="subtitle">{site.summary}</p>
            <p className="subtitle subtitle--mobile">{site.summaryMobile}</p>
            <div className="hero-stats" aria-label="Key metrics">
              {site.stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#experience">
                View experience
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <CurrentlyPanel />
        </div>

        <a className="hero-scroll" href="#about" aria-label="Scroll to about section">
          <span className="hero-scroll-label">Scroll</span>
          <span className="hero-scroll-chevron" aria-hidden="true">↓</span>
          <span className="hero-scroll-line" aria-hidden="true"></span>
        </a>
      </div>

      <div className="hero-edge" aria-hidden="true"></div>
    </section>
  );
}
