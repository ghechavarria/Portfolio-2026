import { useEffect, useState } from 'react';
import { navLinks, site } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export default function Topbar() {
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => setNavOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <>
      <header className={`topbar${scrolled ? ' is-scrolled' : ''}`}>
        <div className="topbar-row">
          <a className="topbar-brand" href="#top" onClick={() => setNavOpen(false)}>
            <span className="brand-mark">{site.profileInitials}</span>
            <span className="brand-name">{site.name}</span>
          </a>

          <nav className="topbar-nav desktop-nav" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href.replace('#', '') ? 'is-active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="topbar-controls">
            <button
              className={`nav-toggle${navOpen ? ' is-open' : ''}`}
              type="button"
              aria-expanded={navOpen}
              aria-controls="mobile-nav"
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setNavOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button
              className="theme-toggle"
              type="button"
              aria-label="Toggle color theme"
              aria-pressed={theme === 'light'}
              onClick={toggleTheme}
            >
              <span className="theme-track" aria-hidden="true">
                <span className="theme-thumb"></span>
              </span>
              <span className="theme-label">{theme === 'light' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </header>

      <button
        type="button"
        className={`menu-backdrop${navOpen ? ' is-open' : ''}`}
        aria-label="Close menu"
        tabIndex={navOpen ? 0 : -1}
        onClick={() => setNavOpen(false)}
      />

      <aside
        id="mobile-nav"
        className={`mobile-menu${navOpen ? ' is-open' : ''}`}
        aria-hidden={!navOpen}
      >
        <nav className="mobile-nav-links" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.replace('#', '') ? 'is-active' : ''}
              style={{ transitionDelay: navOpen ? `${index * 45}ms` : '0ms' }}
              onClick={() => setNavOpen(false)}
            >
              <span className="mobile-nav-index">0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href={`mailto:${site.email}`} onClick={() => setNavOpen(false)}>
            {site.email}
          </a>
          <span>{site.location}</span>
        </div>
      </aside>
    </>
  );
}
