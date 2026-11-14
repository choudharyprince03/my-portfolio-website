import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/content';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#work', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const ids = ['about', 'experience', 'work', 'skills', 'contact'];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${scrolled ? 'bg-[#FAFAFB]/85 backdrop-blur-md border-b border-[var(--line)]' : ''}`}>
        <div className="sc-wrap flex h-16 items-center justify-between">
          <Link to="/" aria-label="Prince Choudhary, home" className="display text-2xl">
            {profile.shortName}<span className="text-[var(--accent)]">.</span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const on = active === l.href.split('#')[1];
              return (
                <a key={l.href} href={l.href} aria-current={on ? 'true' : undefined}
                   className={`ulink text-sm ${on ? 'text-[var(--ink)] [background-size:100%_1px]' : 'text-[var(--muted)] hover:text-[var(--ink)]'}`}>
                  {l.label}
                </a>
              );
            })}
          </nav>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open}
                  aria-label={open ? 'Close menu' : 'Open menu'}
                  className="inline-flex h-10 w-10 items-center justify-center md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[58] bg-[var(--paper)] pt-24 md:hidden">
          <nav aria-label="Mobile" className="sc-wrap grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 className="display border-b border-[var(--line)] py-4 text-5xl">{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
