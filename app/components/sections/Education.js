'use client';

import { motion } from 'framer-motion';
import { education, certifications } from '@/lib/resumeData';

export default function Education() {
  return (
    <section
      id='education'
      className='relative overflow-hidden border-y border-[#26262f] bg-[#0e0e12] py-24 lg:py-32'
    >
      <div className='pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#ff5a1f]/10 blur-[120px]' />
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='mb-14'>
          <span className='eyebrow'>// The foundations</span>
          <h2 className='mt-3 font-display text-5xl text-white sm:text-6xl lg:text-7xl'>
            Education & <span className='text-gradient'>credentials</span>
          </h2>
        </div>

        <div className='grid gap-10 lg:grid-cols-3'>
          <div className='lg:col-span-2 space-y-4'>
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className='group flex flex-col gap-2 rounded-2xl border border-[#26262f] bg-[#141419] p-6 transition-colors duration-300 hover:border-[#ff5a1f]/40 sm:flex-row sm:items-center sm:justify-between'
              >
                <div>
                  <h3 className='text-xl font-bold text-white'>{e.degree}</h3>
                  <p className='mt-1 text-[#a1a1aa]'>
                    {e.school} · {e.place}
                  </p>
                </div>
                <div className='flex items-center gap-4 sm:flex-col sm:items-end'>
                  <span className='font-mono text-sm text-[#6b6b76]'>{e.period}</span>
                  {e.result && (
                    <span className='rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/5 px-3 py-1 text-xs font-semibold text-[#ff5a1f]'>
                      {e.result}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className='rounded-2xl border border-[#26262f] bg-gradient-to-br from-[#141419] to-[#0e0e12] p-6'
          >
            <h3 className='font-mono text-xs uppercase tracking-widest text-[#c6ff3d]'>
              Certifications
            </h3>
            <ul className='mt-5 space-y-4'>
              {certifications.map((c) => (
                <li key={c} className='flex items-start gap-3'>
                  <span className='mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#c6ff3d]/15 text-[10px] text-[#c6ff3d]'>
                    ✓
                  </span>
                  <span className='text-sm leading-snug text-[#d4d4d8]'>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
