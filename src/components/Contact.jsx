import { site } from '../data/portfolioData';
import RevealSection from './RevealSection';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './SocialIcons';

export default function Contact() {
  return (
    <RevealSection id="contact" className="section contact">
      <div className="section-title-center">
        <p className="label">Contact</p>
        <h2>Let's connect about your next opportunity.</h2>
      </div>
      <div className="contact-panel card">
        <p className="contact-copy">
          Based in Miami and available for roles that value analytical thinking, communication, and
          dependable execution.
        </p>
        <a className="contact-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="contact-meta">
          <span>{site.location}</span>
          {site.languages.map((language) => (
            <span key={language}>{language}</span>
          ))}
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <p>&copy; {site.name} 2026</p>
      <div className="footer-links">
        <a href={site.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
          LinkedIn
        </a>
        <a href={`mailto:${site.email}`}>
          <EmailIcon />
          Email
        </a>
      </div>
    </footer>
  );
}
