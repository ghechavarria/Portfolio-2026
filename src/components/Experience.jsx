import { education, experience } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';

export default function Experience() {
  return (
    <RevealSection id="experience" className="section panel experience">
      <SectionHeader
        index="03"
        label="Experience"
        title="Roles that span support, development, and analysis."
        align="right"
        icon="/assets/arrows2.svg"
      />
      <div className="timeline">
        {experience.map((role, index) => (
          <article className="timeline-item" key={`${role.title}-${role.date}`}>
            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
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
      <div className="education-panel card">
        <SectionHeader
          index="—"
          label="Education"
          title="Always more to learn."
          icon="/assets/diploma.svg"
        />
        <div className="education-grid">
          {education.map((item) => (
            <div className="education-item" key={item.degree}>
              <span className="education-degree">{item.degree}</span>
              <span className="education-meta">
                {item.meta}
                <br />
                {item.school}
              </span>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
