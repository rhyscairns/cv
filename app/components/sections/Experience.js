'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience } from '@/lib/resumeData';

function Entry({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className='relative pl-16 sm:pl-24'
    >
      {/* Node */}
      <div className='absolute left-3 top-2 sm:left-7'>
        <span
          className={`relative flex h-4 w-4 items-center justify-center rounded-full ${
            item.current ? 'bg-[#c6ff3d]' : 'bg-[#ff5a1f]'
          }`}
        >
          {item.current && (
            <span className='pulse-live absolute inset-0 rounded-full bg-[#c6ff3d]' />
          )}
        </span>
      </div>

      {/* Big index number */}
      <span className='pointer-events-none absolute -left-2 -top-8 select-none font-display text-7xl text-white/[0.04] sm:left-16'>
        0{experience.length - index}
      </span>

      <div
        className={`group rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
          item.current
            ? 'border-[#c6ff3d]/25 bg-gradient-to-br from-[#141419] to-[#0e0e12] hover:border-[#c6ff3d]/50'
            : 'border-[#26262f] bg-[#0e0e12] hover:border-[#ff5a1f]/40'
        }`}
      >
        <div className='flex flex-wrap items-center gap-3'>
          <span className='font-mono text-xs uppercase tracking-widest text-[#ff5a1f]'>
            {item.period}
          </span>
          {item.current && (
            <span className='inline-flex items-center gap-1.5 rounded-full bg-[#c6ff3d]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#c6ff3d]'>
              <span className='h-1.5 w-1.5 rounded-full bg-[#c6ff3d]' /> Current
            </span>
          )}
          <span className='text-xs text-[#6b6b76]'>{item.location}</span>
        </div>

        <h3 className='mt-3 font-display text-3xl text-white sm:text-4xl'>
          {item.company}
        </h3>
        <p className='mt-1 text-lg font-semibold text-[#a1a1aa]'>
          {item.role}
          {item.meta && (
            <span className='ml-2 text-sm font-normal text-[#6b6b76]'>
              · {item.meta}
            </span>
          )}
        </p>
        <p className='mt-1 text-sm text-[#6b6b76]'>{item.tag}</p>

        <p className='mt-5 leading-relaxed text-[#d4d4d8]'>{item.summary}</p>

        <ul className='mt-5 grid gap-2.5'>
          {item.highlights.map((h, i) => (
            <li key={i} className='flex gap-3 text-sm leading-relaxed text-[#a1a1aa]'>
              <span
                className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                  item.current ? 'bg-[#c6ff3d]' : 'bg-[#ff5a1f]'
                }`}
              />
              {h}
            </li>
          ))}
        </ul>

        <div className='mt-6 flex flex-wrap gap-2'>
          {item.stack.map((t) => (
            <span
              key={t}
              className='rounded-md border border-[#26262f] bg-[#141419] px-2.5 py-1 font-mono text-xs text-[#a1a1aa] transition-colors group-hover:border-[#ff5a1f]/30'
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 60%'],
  });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id='experience' className='mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-32'>
      <div className='mb-16'>
        <span className='eyebrow'>// Career highlight reel</span>
        <h2 className='mt-3 font-display text-5xl text-white sm:text-6xl lg:text-7xl'>
          Where I've <span className='text-gradient'>played</span>
        </h2>
      </div>

      <div ref={ref} className='relative'>
        {/* Rail */}
        <div className='absolute left-[19px] top-0 h-full w-0.5 bg-[#26262f] sm:left-[35px]' />
        <motion.div
          style={{ height }}
          className='absolute left-[19px] top-0 w-0.5 bg-gradient-to-b from-[#c6ff3d] via-[#ff5a1f] to-[#ff2d6b] sm:left-[35px]'
        />

        <div className='space-y-12'>
          {experience.map((item, i) => (
            <Entry key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
