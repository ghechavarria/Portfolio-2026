import { education, experience } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Experience() {
  return (
    <RevealSection id="experience" className="section panel experience">
      <div className="section-heading right">
        <div>
          <p className="label">Experience</p>
          <h2>Roles that span support, development, and analysis.</h2>
        </div>
        <img src="/assets/arrows2.svg" alt="" />
      </div>
      <div className="timeline">
        {experience.map((role) => (
          <article className="timeline-item" key={`${role.title}-${role.date}`}>
            <div className="timeline-marker" aria-hidden="true"></div>
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
        <div className="section-heading">
          <img src="/assets/diploma.svg" alt="" />
          <div>
            <p className="label">Education</p>
            <h2>Always more to learn.</h2>
          </div>
        </div>
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
