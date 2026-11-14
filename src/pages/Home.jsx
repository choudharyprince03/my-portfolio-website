import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../engine/scrollcraft.js';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import TypeBand from '../components/TypeBand';
import Discovery from '../components/Discovery';
import Journey from '../components/Journey';
import LaunchWork from '../components/LaunchWork';
import Craft from '../components/Craft';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const rootRef = useRef(null);
  const location = useLocation();
  const [activeLensId, setActiveLensId] = useState('product');

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.ScrollCraft?.mount) return undefined;

    let cancelled = false;
    let api = null;

    const init = () => {
      if (cancelled || !rootRef.current) return;
      api = window.ScrollCraft.mount(rootRef.current);

      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) {
          requestAnimationFrame(() => target.scrollIntoView({ behavior: 'auto' }));
        }
      }
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    return () => {
      cancelled = true;
      api?.destroy?.();
    };
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.slice(1));
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
    }
  }, [location.hash]);

  return (
    <div ref={rootRef} className="relative min-h-screen w-full bg-[var(--paper)] text-[var(--ink)]">
      <div data-sc-progress aria-hidden="true" />
      <div
        className="sc-grain z-[25]"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <TypeBand />
        <Discovery />
        <Journey />
        <LaunchWork />
        <Craft activeLensId={activeLensId} onSelectLens={setActiveLensId} />
        <Contact activeLensId={activeLensId} onSelectLens={setActiveLensId} />
      </main>
      <Footer />
    </div>
  );
}
