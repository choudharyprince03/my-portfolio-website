import React from 'react';

// A scroll-driven type moment: two rows slide in opposite directions.
const row = (words) => words.flatMap((w, i) => [<span key={`w${i}`}>{w}</span>, <span key={`s${i}`} aria-hidden="true" className="text-[var(--accent)]">✦</span>]);

export default function TypeBand() {
  return (
    <section aria-label="What I work with" data-sc-act="flow" data-sc-drift="#FAFAFB" className="relative overflow-hidden py-[clamp(3rem,7vw,6rem)]">
      <div className="band band-a display flex w-max items-center gap-[0.5em] text-[clamp(3.5rem,11vw,10rem)]">
        {row(['Discovery', 'PRDs', 'Roadmaps', 'Launches', 'Discovery', 'PRDs'])}
      </div>
      <div className="band band-b display outline mt-2 flex w-max items-center gap-[0.5em] pl-[10vw] text-[clamp(3.5rem,11vw,10rem)] italic">
        {row(['React', 'Node', 'LLM APIs', 'Sales', 'React', 'Node'])}
      </div>
    </section>
  );
}
