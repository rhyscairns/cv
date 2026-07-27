'use client';

import { profile } from '@/lib/resumeData';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className='border-t border-[#26262f] bg-[#08080a]'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 lg:flex-row lg:justify-between lg:px-8'>
        <button
          onClick={scrollTop}
          className='group flex items-center gap-2.5'
          aria-label='Back to top'
        >
          <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff5a1f] to-[#ff2d6b] font-display text-black transition-transform group-hover:scale-110'>
            6
          </span>
          <span className='font-display text-lg tracking-wide text-white'>
            RHYS<span className='text-[#ff5a1f]'>.</span>CAIRNS
          </span>
        </button>

        <p className='text-sm text-[#6b6b76]'>
          {profile.title} · {profile.location}
        </p>

        <div className='flex items-center gap-5 text-sm'>
          <a href={`mailto:${profile.email}`} className='text-[#a1a1aa] transition-colors hover:text-[#ff5a1f]'>
            Email
          </a>
          <a href={profile.linkedin} target='_blank' rel='noopener noreferrer' className='text-[#a1a1aa] transition-colors hover:text-[#ff5a1f]'>
            LinkedIn
          </a>
          <a href={profile.github} target='_blank' rel='noopener noreferrer' className='text-[#a1a1aa] transition-colors hover:text-[#ff5a1f]'>
            GitHub
          </a>
        </div>
      </div>
      <div className='border-t border-[#26262f] py-4 text-center text-xs text-[#6b6b76]'>
        © {new Date().getFullYear()} Rhys Cairns · Built with Next.js & Framer Motion
      </div>
    </footer>
  );
}
