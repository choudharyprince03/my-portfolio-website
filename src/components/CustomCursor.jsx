import React, { useEffect, useRef, useState } from 'react';

/**
 * Subtle precision trailing cursor for desktop fine pointers.
 * Inactive on touch devices, reduced-motion preferences, and text inputs.
 */
export default function CustomCursor() {
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fineMQ = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncCapability = () => {
      setEnabled(fineMQ.matches && !reduceMQ.matches);
    };
    syncCapability();

    fineMQ.addEventListener('change', syncCapability);
    reduceMQ.addEventListener('change', syncCapability);
    return () => {
      fineMQ.removeEventListener('change', syncCapability);
      reduceMQ.removeEventListener('change', syncCapability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    const el = ringRef.current;
    if (!el) return undefined;

    let rafId = 0;
    let visible = false;
    let interactive = false;
    let hiddenForInput = false;

    const pos = { x: -100, y: -100, tx: -100, ty: -100, s: 1, ts: 1 };

    const updateClasses = () => {
      const active = visible && !hiddenForInput;
      el.style.opacity = active ? '1' : '0';
      pos.ts = interactive ? 1.8 : 1;
      el.style.borderColor = interactive
        ? 'rgba(63, 95, 166, 0.95)'
        : 'rgba(27, 27, 27, 0.75)';
      el.style.backgroundColor = interactive
        ? 'rgba(63, 95, 166, 0.14)'
        : 'transparent';
    };

    const onMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      pos.tx = e.clientX;
      pos.ty = e.clientY;
      if (!visible) {
        pos.x = pos.tx;
        pos.y = pos.ty;
        visible = true;
      }

      const target = e.target;
      hiddenForInput = Boolean(
        target?.closest?.('input, textarea, select, [contenteditable="true"]')
      );
      interactive = Boolean(
        !hiddenForInput &&
          target?.closest?.('a, button, [role="tab"], [data-cursor="interactive"]')
      );
      updateClasses();
    };

    const onLeave = () => {
      visible = false;
      updateClasses();
    };

    const tick = () => {
      pos.x += (pos.tx - pos.x) * 0.22;
      pos.y += (pos.ty - pos.y) * 0.22;
      pos.s += (pos.ts - pos.s) * 0.2;
      el.style.transform = `translate3d(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${pos.s.toFixed(3)})`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-6 w-6 rounded-full border transition-[opacity,border-color,background-color] duration-200 mix-blend-difference"
      style={{ opacity: 0, willChange: 'transform, opacity' }}
    />
  );
}
