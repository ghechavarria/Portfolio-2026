import { skills } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';

export default function Skills() {
  return (
    <RevealSection id="skills" className="section resume">
      <SectionHeader
        index="02"
        label="Resume"
        title="Skills, certifications, and tools."
        align="center"
      />
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
        <div className="card skill-group skill-group-wide">
          <h3>Certifications</h3>
          <ul className="cert-list cert-grid">
            {skills.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </RevealSection>
  );
}
