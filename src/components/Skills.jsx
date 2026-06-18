import { skills } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Skills() {
  return (
    <RevealSection id="skills" className="section resume">
      <div className="section-title-center">
        <p className="label">Resume</p>
        <h2>Skills, certifications, and tools.</h2>
      </div>
      <div className="skills-grid">
        <div className="card skill-group">
          <h3>Languages</h3>
          <ul className="skill-pills">
            {skills.languages.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="card skill-group">
          <h3>Systems &amp; tools</h3>
          <ul className="skill-pills">
            {skills.systems.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="card skill-group">
          <h3>Certifications</h3>
          <ul className="cert-list">
            {skills.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}
