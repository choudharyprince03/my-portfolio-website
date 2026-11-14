import React, { useEffect, useRef } from 'react';
import '../engine/scrollcraft.js';

// Mounts ScrollCraft on a route's root so inner pages enter with the same
// reveals as the home page. Direct children reveal in a stagger on entry.
export default function PageEngine({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || !window.ScrollCraft?.mount) return undefined;
    window.scrollTo(0, 0);
    const api = window.ScrollCraft.mount(root);
    return () => api?.destroy?.();
  }, []);
  return (
    <div ref={ref}>
      <div data-sc-progress aria-hidden="true" />
      <div data-sc-in data-sc-stagger="90">{children}</div>
    </div>
  );
}
