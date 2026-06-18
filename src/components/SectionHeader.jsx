export default function SectionHeader({ index, label, title, align = 'left', icon }) {
  return (
    <div className={`section-heading${align === 'center' ? ' center' : align === 'right' ? ' right' : ''}`}>
      {align !== 'center' && icon && <img src={icon} alt="" />}
      <div>
        <p className="label">
          {index && index !== '—' && <span className="section-index">{index}</span>}
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {align === 'right' && icon && <img src={icon} alt="" />}
    </div>
  );
}
