import React from 'react';
import { journey } from '../data/content';

export default function Journey() {
  return (
    <section id="experience" data-sc-act="flow" data-sc-drift="#E6EBF2" className="relative bg-[var(--paper-2)] py-[clamp(5rem,11vw,10rem)]">
      <div className="sc-wrap grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">(02) Experience</p>
          <h2 data-sc-in className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)]">The path so far.</h2>
        </div>

        <ol className="relative pl-8 sm:pl-12">
          <span className="spine" aria-hidden="true" />
          {journey.map((j) => (
            <li key={j.id} data-sc-act="flow" className="relative border-b border-[var(--line)] pb-12 pt-2 last:border-0 [&:not(:first-child)]:pt-12">
              <span aria-hidden="true" className={`absolute -left-[calc(2rem+4px)] top-[1.1rem] h-[9px] w-[9px] rounded-full sm:-left-[calc(3rem+4px)] ${j.current ? 'bg-[var(--accent)]' : 'bg-[var(--ink)]'}`} />
              <div className="focus-entry">
              <p className="eyebrow">{j.period}{j.current && <span className="ml-3 text-[var(--accent)]">● Now</span>}</p>
              <h3 className="display mt-3 text-[clamp(2.2rem,4.4vw,4rem)]">{j.title}</h3>
              <p className="mt-1 text-lg text-[var(--muted)]">{j.org}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {j.chips.slice(0, 4).map((c) => (
                  <li key={c} className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[0.7rem]">{c}</li>
                ))}
              </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
