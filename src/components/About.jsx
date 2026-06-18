import { about, site } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function About() {
  return (
    <RevealSection id="about" className="section panel about">
      <div className="section-heading">
        <img src="/assets/arrows.svg" alt="" />
        <div>
          <p className="label">{about.label}</p>
          <h2>{about.heading}</h2>
        </div>
      </div>
      <div className="about-grid">
        <div className="card text-card">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="card portrait-card">
          <div className="portrait-frame" role="img" aria-label={site.name}>
            GH
          </div>
          <p>{site.location}</p>
          <p className="portrait-note">{site.languages.join(' & ')}</p>
        </div>
      </div>
    </RevealSection>
  );
}
