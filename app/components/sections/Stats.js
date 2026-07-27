'use client';

import { motion } from 'framer-motion';
import CountUp from '../anim/CountUp';
import { stats } from '@/lib/resumeData';

export default function Stats() {
  return (
    <section id='impact' className='relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32'>
      <div className='mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <span className='eyebrow'>// The scoreboard</span>
          <h2 className='mt-3 font-display text-5xl text-white sm:text-6xl lg:text-7xl'>
            Impact by <span className='text-gradient'>the numbers</span>
          </h2>
        </div>
        <p className='max-w-sm text-[#a1a1aa]'>
          Real figures from production systems I own — not vanity metrics. Every
          number below is something colleagues touch every day.
        </p>
      </div>

      <div className='grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#26262f] bg-[#26262f] md:grid-cols-3'>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className='group relative bg-[#0e0e12] p-7 transition-colors duration-300 hover:bg-[#141419] lg:p-9'
          >
            <span className='absolute right-6 top-6 font-mono text-xs text-[#6b6b76]'>
              0{i + 1}
            </span>
            <div className='font-display text-6xl leading-none text-white lg:text-7xl'>
              <CountUp
                to={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                duration={2}
                className='inline-block bg-gradient-to-br from-white to-[#a1a1aa] bg-clip-text text-transparent group-hover:from-[#ff5a1f] group-hover:to-[#ff2d6b]'
              />
            </div>
            <p className='mt-4 max-w-[14rem] text-sm leading-snug text-[#a1a1aa]'>
              {s.label}
            </p>
            <span className='mt-5 block h-0.5 w-0 bg-gradient-to-r from-[#ff5a1f] to-[#ff2d6b] transition-all duration-500 group-hover:w-full' />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
