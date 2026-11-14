import React from 'react';
import { profile } from '../data/content';

const links = [
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'GitHub', href: profile.github },
  { label: 'Instagram', href: profile.instagram },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="dark-zone border-t border-[#FAFAFB]/15 bg-[#1B1B1B] py-8 text-[#FAFAFB]">
      <div className="sc-wrap flex flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex items-center gap-3">
          <p className="display text-2xl">
            {profile.name}
            <span className="text-[var(--accent)]">.</span>
          </p>
          <span className="font-mono text-xs text-[#FAFAFB]/60">{profile.year}</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-[#FAFAFB]/60">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="ulink hover:text-[#FAFAFB]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-[#FAFAFB]/60">
          {profile.role} · {profile.company}
        </p>
      </div>
    </footer>
  );
}
