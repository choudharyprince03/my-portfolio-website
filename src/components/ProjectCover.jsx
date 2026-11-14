import React from 'react';

// Designed covers for each project: a dark stage with a composed mini-UI.
// Nexus keeps its real interface image. The rest are illustrative UI
// compositions (no figures or screenshots are claimed).
const HUES = { 'produce-pos': 36, nexus: 205, moneyestate: 214, blogged: 8, foodzero: 152 };

const Bar = ({ w = '100%', h = '1.3cqw', o = 0.18, className = '' }) => (
  <span className={`block rounded-full ${className}`} style={{ width: w, height: h, background: `rgba(255,255,255,${o})` }} />
);

function PosCover() {
  const items = ['Tomato', 'Onion', 'Spinach', 'Mango'];
  return (
    <div data-sc-in data-sc-stagger="110" className="absolute inset-0">
      <div className="cv-card absolute left-[7cqw] top-[9cqw] w-[38cqw] rounded-[2cqw] bg-[#F3F0E8] p-[3cqw] text-[#1B1B1B]">
        <p className="font-mono text-[1.5cqw] uppercase tracking-[0.12em] opacity-60">Counter 01</p>
        <ul className="mt-[2cqw] grid gap-[1.8cqw]">
          {items.map((n) => (
            <li key={n} className="flex items-center justify-between text-[2.3cqw]">
              <span>{n}</span><span className="h-[1.2cqw] w-[8cqw] rounded-full bg-[#1B1B1B]/20" />
            </li>
          ))}
        </ul>
        <div className="mt-[2.4cqw] flex items-center justify-between border-t border-[#1B1B1B]/15 pt-[2cqw]">
          <span className="text-[2.4cqw] font-medium">Total</span>
          <span className="cv-pulse h-[1.8cqw] w-[11cqw] rounded-full bg-[hsl(var(--h)_85%_52%)]" />
        </div>
      </div>
      <div className="absolute right-[7cqw] top-[9cqw] w-[36cqw]">
        <div className="mb-[1.6cqw] flex h-[7cqw] items-center justify-end rounded-[1.6cqw] bg-white/10 px-[2cqw] font-mono text-[3cqw] text-white/80">kg</div>
        <div className="grid grid-cols-3 gap-[1.4cqw]">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '✓'].map((k) => (
            <span key={k} className={`cv-key flex h-[7.4cqw] items-center justify-center rounded-[1.4cqw] text-[3cqw] ${k === '✓' ? 'bg-[hsl(var(--h)_85%_52%)] font-semibold text-[#1B1B1B]' : 'bg-white/10 text-white/85'}`}>{k}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function EstateCover() {
  const tiles = [
    { l: '7cqw', t: '22cqw', h: '40cqw', s: 62 },
    { l: '37cqw', t: '12cqw', h: '46cqw', s: 52 },
    { l: '67cqw', t: '26cqw', h: '36cqw', s: 44 },
  ];
  return (
    <div data-sc-in data-sc-stagger="120" className="absolute inset-0">
      <div className="absolute left-[7cqw] top-[7cqw] flex gap-[1.4cqw] text-[2cqw] text-white/80">
        {['Buy', 'Rent', 'Compare'].map((c, i) => (
          <span key={c} className={`rounded-full px-[2.2cqw] py-[0.8cqw] ${i === 2 ? 'bg-[hsl(var(--h)_90%_62%)] text-[#0d1420]' : 'bg-white/10'}`}>{c}</span>
        ))}
      </div>
      {tiles.map((t, i) => (
        <div key={i} className="cv-card absolute w-[26cqw] overflow-hidden rounded-[2cqw] bg-white/[0.07] ring-1 ring-white/10" style={{ left: t.l, top: t.t, height: t.h }}>
          <div className="relative h-[55%]" style={{ background: `linear-gradient(160deg, hsl(var(--h) 80% ${t.s}% / .9), hsl(var(--h) 60% 22% / .9))` }}>
            <span className="absolute bottom-0 left-[18%] h-[52%] w-[64%] bg-white/25" style={{ clipPath: 'polygon(0 100%,0 42%,50% 0,100% 42%,100% 100%)' }} />
          </div>
          <div className="grid gap-[1.2cqw] p-[2cqw]"><Bar w="80%" o={0.5} h="1.5cqw" /><Bar w="55%" o={0.2} /><Bar w="34%" o={0.35} className="mt-[0.6cqw]" /></div>
        </div>
      ))}
    </div>
  );
}

function BlogCover() {
  return (
    <div data-sc-in data-sc-stagger="120" className="absolute inset-0">
      <div className="cv-card absolute left-[7cqw] top-[14cqw] w-[40cqw] rounded-[2cqw] bg-white/[0.08] p-[3cqw] ring-1 ring-white/10">
        <p className="font-mono text-[1.5cqw] uppercase tracking-[0.12em] text-white/50">Draft</p>
        <div className="mt-[2cqw] grid gap-[1.5cqw]">
          <Bar w="70%" h="2.6cqw" o={0.65} />
          <Bar w="100%" /><Bar w="92%" /><Bar w="96%" /><Bar w="60%" />
        </div>
        <div className="mt-[3cqw] flex items-center justify-between">
          <span className="cv-caret h-[3cqw] w-[0.4cqw] bg-white/80" />
          <span className="rounded-full bg-[hsl(var(--h)_85%_60%)] px-[2.6cqw] py-[1cqw] text-[2cqw] font-medium text-[#1B1B1B]">Publish</span>
        </div>
      </div>
      <div className="cv-card absolute right-[7cqw] top-[27cqw] w-[38cqw] rounded-[2cqw] bg-[#F3F0E8] p-[3cqw] text-[#1B1B1B]">
        <p className="display text-[5cqw] leading-[1.05]">Hello, world.</p>
        <div className="mt-[2cqw] grid gap-[1.4cqw]">
          <span className="block h-[1.2cqw] w-full rounded-full bg-[#1B1B1B]/20" />
          <span className="block h-[1.2cqw] w-[88%] rounded-full bg-[#1B1B1B]/20" />
          <span className="block h-[1.2cqw] w-[70%] rounded-full bg-[#1B1B1B]/20" />
        </div>
      </div>
    </div>
  );
}

function FoodCover() {
  const on = [1, 4, 6, 9];
  return (
    <div data-sc-in data-sc-stagger="120" className="absolute inset-0">
      <div className="absolute left-[7cqw] top-[16cqw] w-[44cqw]">
        <p className="mb-[2cqw] font-mono text-[1.6cqw] uppercase tracking-[0.12em] text-white/55">Tonight · tables</p>
        <div className="grid grid-cols-4 gap-[1.8cqw]">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={`cv-key aspect-square rounded-[1.6cqw] ${on.includes(i) ? 'cv-pulse bg-[hsl(var(--h)_65%_55%)]' : 'bg-white/10'}`} />
          ))}
        </div>
      </div>
      <div className="cv-card absolute right-[7cqw] top-[15cqw] w-[34cqw] rounded-[2cqw] bg-white/[0.08] p-[2.4cqw] ring-1 ring-white/10">
        <p className="font-mono text-[1.5cqw] uppercase tracking-[0.12em] text-white/50">Live sheet</p>
        <ul className="mt-[1.8cqw] grid gap-[1.8cqw]">
          {[0, 1, 2, 3, 4].map((r) => (
            <li key={r} className="flex items-center gap-[1.6cqw]">
              <span className="h-[2cqw] w-[2cqw] rounded-full bg-[hsl(var(--h)_65%_55%)]" />
              <Bar w={`${70 - r * 8}%`} o={0.22} /><Bar w="8cqw" o={0.35} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const BY_SLUG = { 'produce-pos': PosCover, moneyestate: EstateCover, blogged: BlogCover, foodzero: FoodCover };

export default function ProjectCover({ project, className = '' }) {
  const Inner = BY_SLUG[project.slug];
  return (
    <div className={`cover ${className}`} style={{ '--h': HUES[project.slug] ?? 210 }} data-sc-spotlight>
      {project.image ? (
        <img src={project.image} alt={`${project.name} interface`} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
      ) : (
        Inner && <Inner />
      )}
      <span className="cover-sheen" aria-hidden="true" />
    </div>
  );
}
