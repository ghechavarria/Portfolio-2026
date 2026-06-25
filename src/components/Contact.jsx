import { useState } from 'react';
import { site } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';
import ContactFormModal from './ContactFormModal';
import { GitHubIcon, LinkedInIcon, ExternalLinkIcon } from './SocialIcons';

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);

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
            <button className="contact-link" type="button" onClick={() => setFormOpen(true)}>
              <span className="contact-link-label">Contact me</span>
              <span className="contact-link-value">Send a message</span>
            </button>
          </div>
        </div>
      </div>
      <ContactFormModal open={formOpen} onClose={() => setFormOpen(false)} />
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
          <a href={site.website} target="_blank" rel="noreferrer" aria-label="Portfolio">
            <ExternalLinkIcon />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
