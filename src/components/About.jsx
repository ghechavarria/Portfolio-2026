import { about, site } from '../data/portfolioData';
import CurrentlyPanel from './CurrentlyPanel';
import ProfileAvatar from './ProfileAvatar';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <RevealSection id="about" className="section panel about">
      <SectionHeader
        index="01"
        label={about.label}
        title={about.heading}
        icon="/assets/arrows.svg"
      />
      <div className="about-currently">
        <CurrentlyPanel />
      </div>
      <div className="about-grid">
        <div className="card text-card">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="card portrait-card">
          <div className="portrait-ring">
            <ProfileAvatar className="portrait-frame" initials={site.profileInitials} />
          </div>
          <p className="portrait-location">{site.location}</p>
          <p className="portrait-note">{site.languages.join(' · ')}</p>
        </div>
      </div>
    </RevealSection>
  );
}
