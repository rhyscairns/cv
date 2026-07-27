'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/resumeData';

export default function Projects() {
  return (
    <section id='projects' className='mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32'>
      <div className='mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <span className='eyebrow'>// Off the clock</span>
          <h2 className='mt-3 font-display text-5xl text-white sm:text-6xl lg:text-7xl'>
            Things I'm <span className='text-gradient'>building</span>
          </h2>
        </div>
        <p className='max-w-sm text-[#a1a1aa]'>
          Where I explore the frontier — LLM-powered features and AI-assisted
          workflows, outside the constraints of a corporate codebase.
        </p>
      </div>

      <div className='grid gap-5 md:grid-cols-2'>
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className='group relative flex flex-col overflow-hidden rounded-3xl border border-[#26262f] bg-[#0e0e12] p-8 transition-all duration-300 hover:border-[#ff5a1f]/40'
          >
            <div className='pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff5a1f]/0 blur-3xl transition-all duration-500 group-hover:bg-[#ff5a1f]/15' />

            <div className='flex items-center justify-between'>
              <span className='font-mono text-xs uppercase tracking-widest text-[#ff5a1f]'>
                {p.tag}
              </span>
              <span className='flex h-9 w-9 items-center justify-center rounded-full border border-[#26262f] text-[#a1a1aa] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#ff5a1f] group-hover:text-white'>
                ↗
              </span>
            </div>

            <h3 className='mt-5 font-display text-3xl text-white sm:text-4xl'>
              {p.title}
            </h3>
            <p className='mt-4 flex-grow leading-relaxed text-[#a1a1aa]'>
              {p.description}
            </p>

            <div className='mt-6 flex flex-wrap gap-2'>
              {p.stack.map((s) => (
                <span
                  key={s}
                  className='rounded-md border border-[#26262f] bg-[#141419] px-2.5 py-1 font-mono text-xs text-[#a1a1aa]'
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
