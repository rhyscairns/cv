'use client';

const words = [
  'Vue.js',
  'React',
  'TypeScript',
  'Node.js',
  'Nuxt.js',
  'AWS Lambda',
  'Event-Driven',
  'REST APIs',
  'Cypress',
  'LLM Features',
  'Scrum',
  'CI/CD',
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className='relative border-y border-[#26262f] bg-[#0e0e12] py-5 overflow-hidden'>
      <div
        className='flex w-max animate-marquee gap-8 whitespace-nowrap'
        style={{ '--marquee-duration': '32s' }}
      >
        {row.map((w, i) => (
          <span key={i} className='flex items-center gap-8'>
            <span className='font-display text-2xl uppercase tracking-wide text-[#6b6b76] transition-colors hover:text-white'>
              {w}
            </span>
            <span className='text-[#ff5a1f]'>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
