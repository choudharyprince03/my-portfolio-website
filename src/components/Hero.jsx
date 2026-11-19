import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import { profile } from '../data/content';
import Doodle from './Doodle';

export default function Hero() {
  return (
    <section id="hero" data-sc-act="flow" data-sc-drift="#FAFAFB" className="relative overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col pb-8 pt-32 sm:pt-36 md:pt-40 lg:pt-44">
        <Doodle name="sparkle" delay={0.6} className="absolute right-[10%] top-[24%] hidden h-24 w-24 md:block" />
        <Doodle name="cross" delay={0.9} className="absolute right-[24%] top-[20%] hidden h-8 w-8 md:block" />
        <Doodle name="loop" delay={1.1} className="absolute right-[7%] top-[50%] hidden h-24 w-36 md:block" />
        <Doodle name="burst" delay={1.3} className="absolute right-[30%] top-[40%] hidden h-10 w-10 lg:block" />
        <div className="sc-wrap grid h-full grid-rows-[auto_1fr_auto] gap-6 md:gap-8">
          <p className="hero-fade eyebrow flex flex-wrap gap-x-6 gap-y-1">
            <span>{profile.role}</span><span>{profile.company}</span><span>Portfolio {profile.year}</span>
          </p>

          <div className="relative flex items-end">
            <h1 className="display text-[clamp(4.5rem,16.5vw,17rem)]">
              <span className="hero-mask block"><span className="hero-rise" style={{ '--d': '60ms' }}><span className="split-l">Prince</span></span></span>
              <span className="relative block w-fit italic text-[var(--accent)]"><span className="hero-mask block"><span className="hero-rise" style={{ '--d': '160ms' }}><span className="split-r">Choudhary</span></span></span><Doodle name="underline" preserve delay={0.9} className="absolute -bottom-[0.02em] left-0 h-[0.12em] w-full" /></span>
            </h1>
          </div>

          <div className="grid items-end gap-6 border-t border-[var(--line)] pt-5 md:grid-cols-[1fr_auto]">
            <p style={{ '--d': '320ms' }} className="hero-fade [text-shadow:0_0_14px_#FAFAFB,0_0_6px_#FAFAFB,0_0_2px_#FAFAFB] max-w-[34ch] text-xl leading-snug sm:text-2xl">
              Product manager with a technical background.
            </p>
            <div style={{ '--d': '420ms' }} className="hero-fade relative flex items-center gap-3">
              <Doodle name="arrow" delay={1.5} className="absolute -top-16 -left-14 hidden h-14 w-14 -scale-x-100 rotate-[8deg] lg:block" />
              <a href="#work" data-sc-magnet="0.25" className="btn btn-solid">View projects <ArrowDownRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
