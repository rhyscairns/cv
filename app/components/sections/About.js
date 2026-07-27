'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/resumeData';

export default function About() {
  return (
    <section id='about' className='mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32'>
      <div className='grid gap-12 lg:grid-cols-12 lg:gap-16'>
        <div className='lg:col-span-5'>
          <span className='eyebrow'>// The origin story</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className='mt-3 font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl'
          >
            {about.headline}
          </motion.h2>

          <div className='mt-10 flex gap-6'>
            <div className='text-center'>
              <div className='font-display text-5xl text-gradient'>4</div>
              <div className='mt-1 text-xs uppercase tracking-wider text-[#6b6b76]'>
                Yrs collegiate soccer
              </div>
            </div>
            <div className='h-16 w-px bg-[#26262f]' />
            <div className='text-center'>
              <div className='font-display text-5xl text-gradient'>2</div>
              <div className='mt-1 text-xs uppercase tracking-wider text-[#6b6b76]'>
                Yrs coaching
              </div>
            </div>
            <div className='h-16 w-px bg-[#26262f]' />
            <div className='text-center'>
              <div className='font-display text-5xl text-gradient'>1</div>
              <div className='mt-1 text-xs uppercase tracking-wider text-[#6b6b76]'>
                Atlantic crossing
              </div>
            </div>
          </div>
        </div>

        <div className='lg:col-span-7'>
          <div className='space-y-6 border-l-2 border-[#26262f] pl-8'>
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`leading-relaxed ${
                  i === 0 ? 'text-xl text-white' : 'text-lg text-[#a1a1aa]'
                }`}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
