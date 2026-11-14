import React from 'react';

// Hand-drawn doodles. Each is one stroked path set that ScrollCraft draws in
// (the engine adds .sc-in on entry; CSS animates the stroke).
const SHAPES = {
  sparkle: { vb: '0 0 100 100', d: ['M50 6C52 36 64 48 94 50C64 52 52 64 50 94C48 64 36 52 6 50C36 48 48 36 50 6Z'] },
  cross: { vb: '0 0 40 40', d: ['M20 4V36', 'M4 20H36', 'M9 9L31 31', 'M31 9L9 31'] },
  squiggle: { vb: '0 0 100 40', d: ['M3 22C12 4 22 4 28 22S44 40 52 22S68 4 76 22S90 36 97 18'] },
  loop: { vb: '0 0 100 70', d: ['M4 58C28 62 42 14 62 24C82 34 62 70 46 50C34 34 68 8 96 22'] },
  underline: { vb: '0 0 300 20', d: ['M3 13C60 4 120 17 180 8S270 6 297 11', 'M30 17C100 12 190 18 270 15'] },
  arrow: { vb: '0 0 90 90', d: ['M6 10C34 4 70 22 70 76', 'M54 62L70 78L84 60'] },
  circle: { vb: '0 0 220 90', d: ['M30 46C24 18 96 6 150 14C206 22 214 62 150 78C94 90 22 80 16 46C12 24 60 8 110 8'] },
  burst: { vb: '0 0 60 60', d: ['M30 4V16', 'M30 44V56', 'M4 30H16', 'M44 30H56', 'M12 12L20 20', 'M40 40L48 48', 'M48 12L40 20', 'M20 40L12 48'] },
};

export default function Doodle({ name, className = '', delay = 0, preserve = false, title }) {
  const s = SHAPES[name];
  return (
    <svg
      data-sc-in
      viewBox={s.vb}
      preserveAspectRatio={preserve ? 'none' : 'xMidYMid meet'}
      aria-hidden="true"
      focusable="false"
      className={`doodle pointer-events-none ${className}`}
      style={{ '--dd': `${delay}s` }}
    >
      {s.d.map((d, i) => (
        <path key={i} d={d} pathLength="1" style={{ '--i': i }} />
      ))}
    </svg>
  );
}
