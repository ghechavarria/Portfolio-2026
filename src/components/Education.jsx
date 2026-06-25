import { education } from '../data/portfolioData';
import RevealSection from './RevealSection';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <RevealSection id="education" className="section education">
      <div className="education-layout">
        <SectionHeader
          index="04"
          label="Education"
          title="Always more to learn."
          icon="/assets/diploma.svg"
        />
        <div className="education-cards">
          {education.map((item) => (
            <div className="education-item" key={item.degree}>
              <span className="education-badge">{item.degree.split(' in ')[0]}</span>
              <div className="education-body">
                <span className="education-degree">{item.degree.split(' in ')[1] ?? item.degree}</span>
                <span className="education-meta">
                  {item.meta}
                  <br />
                  {item.school}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
