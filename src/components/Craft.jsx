import React, { useEffect, useRef } from 'react';
import { lenses } from '../data/content';

// Scroll-driven: the section is three screens tall with a sticky stage.
// Each stage of scroll shows the next lens (Product, Engineering, Commercial).
export default function Craft({ activeLensId, onSelectLens }) {
  const sectionRef = useRef(null);
  const active = lenses.find((l) => l.id === activeLensId) || lenses[0];
  const activeIndex = Math.max(0, lenses.findIndex((l) => l.id === active.id));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const span = el.offsetHeight - window.innerHeight;
      if (span <= 0) return;
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / span));
      const idx = Math.min(lenses.length - 1, Math.floor(p * lenses.length));
      onSelectLens(lenses[idx].id);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [onSelectLens]);

  const jumpTo = (i) => {
    const el = sectionRef.current;
    if (!el) return;
    const span = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (span * (i + 0.5)) / lenses.length, behavior: 'smooth' });
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[var(--paper-2)]"
      style={{ height: `${lenses.length * 100}vh` }}
    >
      <div className="sticky top-0 flex min-h-screen flex-col justify-center py-24">
        <div className="sc-wrap">
          <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:gap-20">
            <p className="eyebrow lg:pt-3">(04) Skills &amp; expertise</p>
            <h2 className="display text-[clamp(2.6rem,6vw,5.5rem)]">Three lenses, one judgment.</h2>
          </div>

          <div role="tablist" aria-label="Perspective lenses" className="mt-12 flex flex-wrap gap-x-10 gap-y-2 border-b border-[var(--line)]">
            {lenses.map((l, i) => {
              const on = i === activeIndex;
              return (
                <button
                  key={l.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => jumpTo(i)}
                  className={`display -mb-px border-b-2 pb-3 text-4xl transition-colors sm:text-5xl ${on ? 'border-[var(--accent)] text-[var(--ink)]' : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'}`}
                >
                  {l.tab}
                </button>
              );
            })}
          </div>

          <ul key={active.id} role="tabpanel" className="panel-in mt-10 grid border-t border-[var(--line)] md:grid-cols-2 md:gap-x-16">
            {active.skills.map((s, i) => (
              <li key={s} style={{ '--i': i }} className="row-hover flex items-baseline justify-between border-b border-[var(--line)] py-5">
                <span className="display text-3xl sm:text-4xl">{s}</span>
                <span className="font-mono text-xs text-[var(--muted)]">0{i + 1}</span>
              </li>
            ))}
          </ul>

          <div aria-hidden="true" className="mt-10 flex gap-2">
            {lenses.map((l, i) => (
              <span key={l.id} className={`h-px flex-1 transition-colors duration-500 ${i <= activeIndex ? 'bg-[var(--accent)]' : 'bg-[var(--line)]'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
