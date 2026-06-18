import { projects } from '../data/portfolioData';
import RevealSection from './RevealSection';

export default function Projects() {
  return (
    <RevealSection id="projects" className="section projects">
      <div className="section-title-center">
        <p className="label">Hackathon projects</p>
        <h2>Creative builds from past hackathons.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.tone}`} key={project.title}>
            <span className="project-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tech">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
