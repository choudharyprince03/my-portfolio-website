import React, { useState } from 'react';
import { ArrowUpRight, Check, Github, Linkedin, Mail } from 'lucide-react';
import { lenses, profile } from '../data/content';
import Doodle from './Doodle';

export default function Contact({ activeLensId, onSelectLens }) {
  const [status, setStatus] = useState('idle');
  const activeLens = lenses.find((l) => l.id === activeLensId) || lenses[0];

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        event.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full border-0 border-b border-[rgba(250,250,251,0.3)] bg-transparent px-0 py-3 text-base text-[#FAFAFB] placeholder-[#FAFAFB]/45 transition-colors focus:border-[#FAFAFB] focus:outline-none';

  const social = 'ulink inline-flex items-center gap-2 text-sm text-[#FAFAFB]/80 hover:text-[#FAFAFB]';
  return (
    <section id="contact" data-sc-act="flow" data-sc-drift="#1B1B1B" data-sc-spotlight
      className="dark-zone relative overflow-hidden bg-[#1B1B1B] py-[clamp(5rem,11vw,10rem)] text-[#FAFAFB]">
      <div className="sc-wrap">
        <p className="eyebrow !text-[#FAFAFB]/60">(05) Contact</p>
        <h2 data-sc-in="rise" className="display mt-6 text-[clamp(4rem,13vw,12.5rem)]">
          <span className="block">Let&apos;s build</span><span className="relative block w-fit italic text-[var(--accent)]">together.<Doodle name="sparkle" delay={0.4} className="absolute -right-[0.45em] -top-[0.1em] hidden h-[0.45em] w-[0.45em] md:block" /></span>
        </h2>

        <div data-sc-in className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <p className="max-w-[40ch] text-xl leading-snug text-[#FAFAFB]/80">
              Open to Associate Product Manager roles.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} data-sc-magnet="0.3" className="btn btn-solid">Email Prince <ArrowUpRight size={17} /></a>
            </div>
            <div className="flex flex-wrap gap-6 pt-2">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={social}><Linkedin size={15} />LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={social}><Github size={15} />GitHub</a>
              <a href={`mailto:${profile.email}`} className={social}><Mail size={15} />Email</a>
            </div>
          </div>

          <form method="POST" action="https://api.web3forms.com/submit" onSubmit={onSubmit} className="space-y-3">
            <input type="hidden" name="access_key" value="365d06c2-72b9-45de-862e-da3e54a971f6" />
            <input type="hidden" name="subject" value={`Portfolio inquiry (${activeLens.tab} lens) for Prince Choudhary`} />
            <input type="hidden" name="lens" value={activeLens.tab} />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

            <fieldset className="pb-4">
              <legend className="eyebrow !text-[#FAFAFB]/60">Topic focus</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {lenses.map((l) => {
                  const on = l.id === activeLens.id;
                  return (
                    <button key={l.id} type="button" aria-pressed={on} onClick={() => onSelectLens(l.id)}
                      className={`inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 text-xs transition-colors ${on ? 'border-[#FAFAFB] bg-[#FAFAFB] font-medium text-[#1B1B1B]' : 'border-[#FAFAFB]/30 text-[#FAFAFB]/70 hover:border-[#FAFAFB]'}`}>
                      {on && <Check size={11} strokeWidth={2.5} />}{l.tab}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label htmlFor="name" className="sr-only">Your name</label>
            <input id="name" type="text" name="name" required autoComplete="name" placeholder="Your name" className={field} />
            <label htmlFor="email" className="sr-only">Your email</label>
            <input id="email" type="email" name="email" required autoComplete="email" placeholder="Your email" className={field} />
            <label htmlFor="message" className="sr-only">Your message</label>
            <textarea id="message" name="message" required rows="3" placeholder={`What are you building? (${activeLens.tab} context)`} className={`${field} resize-none`} />

            <button type="submit" disabled={status === 'submitting'} className="btn btn-solid mt-4 w-full sm:w-auto disabled:opacity-60">
              {status === 'submitting' ? 'Sending...' : 'Send message'}
            </button>
            <div aria-live="polite" className="min-h-[1.25rem] text-sm">
              {status === 'success' && <p className="text-[#FAFAFB]">Message sent. I will get back to you soon.</p>}
              {status === 'error' && <p className="text-[#F2A0A0]">Could not deliver right now. Please email directly.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
