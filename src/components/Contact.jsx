import { site } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';
import { EmailIcon, GitHubIcon, LinkedInIcon } from './SocialIcons';

export default function Contact() {
  return (
    <RevealSection id="contact" className="section contact">
      <SectionHeader
        index="05"
        label="Contact"
        title="Let's connect about your next opportunity."
        align="center"
      />
      <div className="contact-panel card">
        <div className="contact-grid">
          <div className="contact-intro">
            <p className="contact-copy">
              Based in Miami and available for roles that value analytical thinking, communication,
              and dependable execution.
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
              {site.email}
            </a>
            <div className="contact-social">
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
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
