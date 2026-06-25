import { projects, websites } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';
import { ExternalLinkIcon, GitHubIcon } from './SocialIcons';

export default function Projects() {
  return (
    <RevealSection id="projects" className="section projects">
      <SectionHeader
        index="05"
        label="Projects"
        title="Websites and hackathon builds."
        align="center"
      />
      <div className="projects-block">
        <p className="projects-subheading">Websites I&apos;ve worked on</p>
        <div className="website-showcase">
          {websites.map((site) => (
            <a
              className="website-feature"
              href={site.url}
              target="_blank"
              rel="noreferrer"
              key={site.url}
            >
              <div className="website-preview">
                <span className="website-status">Live website</span>
                <img src={site.screenshot} alt={`${site.title} homepage screenshot`} loading="lazy" />
              </div>
              <div className="website-feature-copy">
                <h3>{site.title}</h3>
                <p>{site.description}</p>
                <ul className="project-tech">
                  {site.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <span className="website-launch">
                {site.url.replace(/^https?:\/\//, '')}
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="projects-block">
        <p className="projects-subheading">Hackathon projects</p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-card-top">
                <div className="project-card-labels">
                  <span className="project-tag">{project.tag}</span>
                  {project.winner && <span className="project-winner">Winner</span>}
                </div>
                <div className="project-card-links">
                  {project.url && (
                    <a
                      className="project-card-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="project-card-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3>
                {project.devpost ? (
                  <a href={project.devpost} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p>{project.description}</p>
              <ul className="project-tech">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
