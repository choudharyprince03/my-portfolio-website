import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import Doodle from './Doodle';
import ProjectCover from './ProjectCover';

function MinimalNexus({ p, i }) {
  return (
    <article className="grid items-center gap-10 border-b border-[var(--line)] py-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow">0{i + 1} · {p.category}</p>
        <h3 className="display mt-3 text-[clamp(3.5rem,7vw,7rem)]">
          <Link to={`/project/${p.id}`} className="ulink">{p.name}</Link>
        </h3>
        <p className="mt-4 max-w-[30ch] text-lg text-[var(--muted)]">{p.shortLine}</p>
        <div className="mt-8 flex items-center gap-6 text-sm font-medium">
          <Link to={`/project/${p.id}`} className="ulink inline-flex items-center gap-1.5">Case study <ArrowUpRight size={15} /></Link>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="ulink inline-flex items-center gap-1.5 text-[var(--muted)]">Live site <ExternalLink size={13} /></a>
          )}
        </div>
      </div>
      <Link to={`/project/${p.id}`} aria-label={`Open ${p.name} case study`} className="photo-frame block lg:col-span-7">
        <ProjectCover project={p} />
      </Link>
    </article>
  );
}

export default function LaunchWork() {
  return (
    <section id="work" data-sc-act="flow" data-sc-drift="#FAFAFB" className="relative py-[clamp(5rem,11vw,10rem)]">
      <div className="sc-wrap">
        <div className="grid gap-6 lg:grid-cols-[0.3fr_1fr] lg:gap-20">
          <p className="eyebrow lg:pt-3">(03) Selected projects</p>
          <h2 data-sc-in className="display text-[clamp(2.6rem,6.4vw,6rem)]">
            Built, shipped, <span className="relative inline-block italic text-[var(--accent)]">explained.<Doodle name="squiggle" preserve delay={0.3} className="absolute -bottom-[0.18em] left-0 h-[0.2em] w-full" /></span>
          </h2>
        </div>

        <div className="mt-16 border-t border-[var(--line)]">
          {projects.map((p, i) => p.slug === 'nexus' ? <MinimalNexus key={p.id} p={p} i={i} /> : (
            <article key={p.id} data-sc-act="flow" className="group relative grid gap-8 border-b border-[var(--line)] py-14 lg:grid-cols-12 lg:gap-12">
              <div className={`lg:col-span-7 ${i % 2 ? 'lg:order-2' : ''}`}>
                <div className="lg:sticky lg:top-28">
                  <Link to={`/project/${p.id}`} aria-label={`Open ${p.name} case study`}
                        data-sc-reveal="up" data-sc-reveal-at="0 0.28"
                        className="photo-frame relative block">
                    <ProjectCover project={p} className="size-on-scroll" />
                  </Link>
                </div>
              </div>

              <div className={`flex flex-col justify-between gap-8 lg:col-span-5 ${i % 2 ? 'lg:order-1' : ''}`}>
                <div>
                  <p data-sc-in className="eyebrow">0{i + 1} · {p.category}</p>
                  <h3 data-sc-in className="display mt-3 text-[clamp(3rem,5.4vw,5.2rem)]">
                    <Link to={`/project/${p.id}`} className="ulink">{p.name}</Link>
                  </h3>
                  <p data-sc-kinetic="words" data-sc-cue="0.05 0.4" className="mt-4 max-w-[32ch] text-xl leading-snug text-[var(--muted)]">{p.shortLine}</p>
                </div>

                <div data-sc-in className="grid gap-4 border-t border-[var(--line)] pt-6">
                  <p className="text-sm"><span className="eyebrow mr-3">Role</span>{p.role}</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.tools.split(',').slice(0, 3).map((t) => (
                      <li key={t} className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[0.7rem]">{t.trim()}</li>
                    ))}
                  </ul>
                </div>

                <div data-sc-in className="flex items-center gap-6 text-sm font-medium">
                  <Link to={`/project/${p.id}`} className="btn btn-solid !min-h-[42px] !px-5 text-sm" data-sc-magnet="0.25">Read case study <ArrowUpRight size={15} /></Link>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="ulink inline-flex items-center gap-1.5 text-[var(--muted)]">Live site <ExternalLink size={13} /></a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
