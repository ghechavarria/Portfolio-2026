import { experience } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <RevealSection id="experience" className="section panel experience">
      <SectionHeader
        index="03"
        label="Experience"
        title="Roles that span support, development, and analysis."
        icon="/assets/arrows2.svg"
      />
      <div className="timeline">
        {experience.map((role) => (
          <article className="timeline-item" key={`${role.title}-${role.date}`}>
            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-marker"></span>
            </div>
            <div className="card timeline-card">
              <span className="timeline-date">{role.date}</span>
              <h3>{role.title}</h3>
              <span className="timeline-org">{role.org}</span>
              <p>{role.description}</p>
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
