import { projects } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';
import { GitHubIcon } from './SocialIcons';

export default function Projects() {
  return (
    <RevealSection id="projects" className="section projects">
      <SectionHeader
        index="05"
        label="Hackathon projects"
        title="Creative builds from past hackathons."
        align="center"
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.tone}`} key={project.title}>
            <div className="project-card-top">
              <span className="project-tag">{project.tag}</span>
              {project.github && (
                <a
                  className="project-github"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GitHubIcon />
                </a>
              )}
            </div>
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
