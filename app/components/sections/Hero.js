'use client';

import { motion } from 'framer-motion';

const line1 = 'RHYS'.split('');
const line2 = 'CAIRNS'.split('');

const letter = {
  hidden: { y: '110%', opacity: 0 },
  show: (i) => ({
    y: '0%',
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.05,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Word({ chars, offset = 0, className = '' }) {
  return (
    <span className={`flex overflow-hidden ${className}`}>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          custom={i + offset}
          variants={letter}
          initial='hidden'
          animate='show'
          className='inline-block'
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id='home'
      className='relative flex min-h-[100svh] items-center overflow-hidden pt-24'
    >
      {/* Background */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -left-40 top-10 h-[36rem] w-[36rem] rounded-full bg-[#ff5a1f]/20 blur-[130px] animate-drift' />
        <div
          className='absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#ff2d6b]/20 blur-[130px] animate-drift'
          style={{ animationDelay: '3s' }}
        />
        <div
          className='absolute inset-0 opacity-[0.12]'
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          }}
        />
      </div>

      {/* Giant ghost jersey number */}
      <motion.span
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className='pointer-events-none absolute -right-6 top-1/2 -z-[5] hidden -translate-y-1/2 select-none font-display text-[38rem] leading-none text-white/[0.03] md:block'
      >
        6
      </motion.span>

      <div className='mx-auto w-full max-w-7xl px-5 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-6 flex items-center gap-3'
        >
          <span className='eyebrow'>// Full Stack Engineer</span>
          <span className='inline-flex items-center gap-2 rounded-full border border-[#c6ff3d]/30 bg-[#c6ff3d]/5 px-3 py-1 text-xs font-medium text-[#c6ff3d]'>
            <span className='pulse-live h-1.5 w-1.5 rounded-full bg-[#c6ff3d]' />
            Open to opportunities
          </span>
        </motion.div>

        <h1 className='font-display text-[19vw] leading-[0.82] sm:text-[15vw] lg:text-[13rem]'>
          <Word chars={line1} className='text-white' />
          <Word chars={line2} offset={line1.length} className='text-gradient' />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className='mt-8 flex max-w-2xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between'
        >
          <p className='max-w-md text-lg leading-relaxed text-[#a1a1aa]'>
            Frontend-leaning full stack engineer at{' '}
            <span className='font-semibold text-white'>Kingfisher</span> —
            shipping production software used by 50,000+ colleagues across
            Europe, powered by the same work ethic that took me across the
            Atlantic to play.
          </p>

          <div className='flex flex-wrap items-center gap-3'>
            <a
              href='#experience'
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('experience')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff5a1f] to-[#ff2d6b] px-6 py-3 font-semibold text-black transition-transform duration-200 hover:scale-105'
            >
              View my work
              <span className='transition-transform duration-200 group-hover:translate-x-1'>
                →
              </span>
            </a>
            <a
              href='#contact'
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='rounded-full border border-[#26262f] px-6 py-3 font-semibold text-white transition-colors duration-200 hover:border-white/60'
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className='pointer-events-none absolute bottom-8 right-6 hidden flex-col items-center gap-2 lg:flex lg:right-8'>
        <div className='flex h-9 w-5 items-start justify-center rounded-full border border-[#26262f] p-1'>
          <span className='animate-scroll-cue h-1.5 w-1.5 rounded-full bg-[#ff5a1f]' />
        </div>
      </div>
    </section>
  );
}
