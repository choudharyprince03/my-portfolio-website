import React from 'react';
import { discoveryPillars } from '../data/content';
import Doodle from './Doodle';

export default function Discovery() {
  return (
    <section id="about" data-sc-act="flow" data-sc-drift="#FAFAFB" className="relative py-[clamp(5rem,11vw,10rem)]">
      <div className="sc-wrap grid gap-12 lg:grid-cols-[0.3fr_1fr] lg:gap-20">
        <p className="eyebrow lg:pt-3">(01) About</p>
        <div className="space-y-14">
          <h2 data-sc-in className="display max-w-[20ch] text-[clamp(2.6rem,6.4vw,6rem)]">
            I turn buyer friction into <span className="relative inline-block italic text-[var(--accent)]">shipped<Doodle name="underline" preserve delay={0.3} className="absolute -bottom-1 left-0 h-[0.14em] w-full" /></span> software.
          </h2>

          <ul data-sc-in data-sc-stagger="70" className="border-t border-[var(--line)]">
            {discoveryPillars.map((item, i) => (
              <li key={item.id} className="grid gap-2 border-b border-[var(--line)] py-7 sm:grid-cols-[3rem_1fr] sm:items-baseline">
                <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
                <span className="display text-[clamp(2rem,4vw,3.4rem)]">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
