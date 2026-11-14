import React, { useEffect, useState } from 'react';
import { actMascotSequence, preloadMascotPoses } from '../data/mascot';

const actIds = ['hero', 'discovery', 'experience', 'work', 'craft', 'contact'];

export default function ScrollMascot() {
  const [activeId, setActiveId] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    preloadMascotPoses();
  }, []);

  useEffect(() => {
    let raf = 0;

    const readActiveAct = () => {
      raf = 0;
      const vh = window.innerHeight || 900;
      const y = window.scrollY || 0;
      setScrolled(y > vh * 0.85);

      const probe = vh * 0.48;
      let current = 'hero';

      for (const id of actIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom >= probe * 0.4) {
          current = id;
        }
      }
      setActiveId(current);
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(readActiveAct);
    };

    readActiveAct();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  const currentIdx = actIds.indexOf(activeId);
  const nextId = actIds[(currentIdx + 1) % actIds.length];
  const state = actMascotSequence.find((s) => s.id === activeId) || actMascotSequence[0];
  const visible = scrolled && activeId !== 'hero' && activeId !== 'contact';

  return (
    <a
      href={`#${nextId}`}
      aria-label={`Currently in ${state.note}. Jump to ${nextId}`}
      className={`fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full border border-[rgba(82,229,168,0.22)] bg-[#06110D]/88 px-3.5 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#EBF5EF] shadow-[0_14px_34px_rgba(3,10,7,0.7)] backdrop-blur-md transition-all duration-300 hover:border-[#52E5A8] md:inline-flex ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#52E5A8]" aria-hidden="true" />
      <span>{state.note}</span>
    </a>
  );
}
