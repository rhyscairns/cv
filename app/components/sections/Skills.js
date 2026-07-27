'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/lib/resumeData';

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden border-y border-[#26262f] bg-[#0e0e12] py-24 lg:py-32'>
      <div className='pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#ff2d6b]/10 blur-[120px]' />
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='mb-14'>
          <span className='eyebrow'>// The toolkit</span>
          <h2 className='mt-3 font-display text-5xl text-white sm:text-6xl lg:text-7xl'>
            Built to <span className='text-gradient'>ship</span>
          </h2>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: gi * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className='group rounded-2xl border border-[#26262f] bg-[#141419] p-6 transition-colors duration-300 hover:border-[#ff5a1f]/40'
            >
              <h3 className='font-mono text-xs uppercase tracking-widest text-[#ff5a1f]'>
                {group.label}
              </h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className='rounded-lg border border-[#26262f] bg-[#0e0e12] px-3 py-1.5 text-sm text-[#d4d4d8] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff5a1f]/50 hover:text-white'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
