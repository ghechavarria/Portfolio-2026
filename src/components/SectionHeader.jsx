export default function SectionHeader({ index, label, title, align = 'left', icon }) {
  return (
    <div className={`section-heading${align === 'center' ? ' center' : ''}`}>
      {icon && align !== 'center' && <img src={icon} alt="" className="section-icon" />}
      <div className="section-heading-copy">
        <p className="label">
          {index && index !== '—' && <span className="section-index">{index}</span>}
          {label}
        </p>
        <h2>{title}</h2>
        <span className="section-accent" aria-hidden="true"></span>
      </div>
    </div>
  );
}
