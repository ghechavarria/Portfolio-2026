import { useEffect, useRef } from 'react';

export default function RevealSection({ id, className = '', children }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && node.classList.add('is-visible')),
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`reveal ${className}`.trim()}>
      {children}
    </section>
  );
}
