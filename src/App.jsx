import React from 'react';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground relative selection:bg-foreground selection:text-background">
      <Hero />
      <FeaturedWork />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
