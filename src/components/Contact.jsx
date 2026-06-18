import { site } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './SocialIcons';

export default function Contact() {
  return (
    <RevealSection id="contact" className="section contact">
      <SectionHeader
        index="06"
        label="Contact"
        title="Let's build something reliable together."
        align="center"
      />
      <div className="contact-panel card">
        <div className="contact-glow" aria-hidden="true"></div>
        <div className="contact-grid">
          <div className="contact-intro">
            <p className="contact-kicker">Available for new opportunities</p>
            <p className="contact-copy">
              Based in Miami and open to roles that value analytical thinking, clear communication,
              and dependable execution across ERP, web, and technical development.
            </p>
            <div className="contact-chips">
              <span>{site.location}</span>
              {site.languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
            </div>
          </div>
          <div className="contact-cta">
            <a className="contact-link" href={`mailto:${site.email}`}>
              <span className="contact-link-label">Email me</span>
              <span className="contact-link-value">{site.email}</span>
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave" aria-hidden="true"></div>
      <div className="footer-inner">
        <p className="footer-tagline">Analyst · ERP programmer · Technical developer</p>
        <p className="footer-copy">&copy; {site.name} 2026</p>
        <div className="footer-links">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
