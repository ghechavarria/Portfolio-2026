import { useEffect, useState } from 'react';

const FALLBACK_THRESHOLD = 220;
const MAX_THRESHOLD = 280;
const HERO_RATIO = 0.35;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getThreshold = () => {
      const heroHeight = document.getElementById('top')?.offsetHeight;
      if (!heroHeight) return FALLBACK_THRESHOLD;
      return Math.min(heroHeight * HERO_RATIO, MAX_THRESHOLD);
    };

    let threshold = getThreshold();

    const onScroll = () => setVisible(window.scrollY > threshold);
    const onResize = () => {
      threshold = getThreshold();
      onScroll();
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <button
      type="button"
      className={`scroll-to-top${visible ? ' is-visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span className="scroll-to-top-label">Top</span>
      <span className="scroll-to-top-icon" aria-hidden="true">
        ↑
      </span>
    </button>
  );
}
