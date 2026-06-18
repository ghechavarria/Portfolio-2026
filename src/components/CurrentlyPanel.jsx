import { currently } from '../data/portfolioData';

export default function CurrentlyPanel({ className = '' }) {
  return (
    <aside
      className={`hero-panel card${className ? ` ${className}` : ''}`}
      aria-label="What I'm doing now"
    >
      <p className="hero-panel-label">{currently.label}</p>
      <h2 className="hero-panel-title">{currently.title}</h2>
      <ul className="hero-panel-list">
        {currently.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="hero-panel-stack">
        {currently.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </aside>
  );
}
