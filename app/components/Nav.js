'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#08080a]/80 backdrop-blur-xl border-b border-[#26262f]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <nav className='mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8'>
          <a
            href='#home'
            onClick={go('home')}
            className='group flex items-center gap-2.5'
          >
            <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff5a1f] to-[#ff2d6b] font-display text-lg text-black shadow-lg transition-transform duration-300 group-hover:scale-110'>
              6
            </span>
            <span className='font-display text-xl tracking-wide text-white'>
              RHYS<span className='text-[#ff5a1f]'>.</span>CAIRNS
            </span>
          </a>

          <div className='hidden items-center gap-1 lg:flex'>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={go(l.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  active === l.id
                    ? 'text-white'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId='nav-pill'
                    className='absolute inset-0 -z-10 rounded-full bg-[#1b1b22] ring-1 ring-[#ff5a1f]/40'
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {l.label}
              </a>
            ))}
          </div>

          <a
            href='#contact'
            onClick={go('contact')}
            className='hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#ff5a1f] lg:block'
          >
            Get in touch
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className='flex h-10 w-10 items-center justify-center rounded-lg border border-[#26262f] text-white lg:hidden'
            aria-label='Toggle menu'
          >
            <div className='space-y-1.5'>
              <span
                className={`block h-0.5 w-5 bg-current transition-all ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-40 bg-[#08080a]/95 backdrop-blur-xl lg:hidden'
          >
            <div className='flex h-full flex-col items-center justify-center gap-2'>
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={go(l.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className='font-display text-4xl uppercase tracking-wide text-white transition-colors hover:text-[#ff5a1f]'
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
