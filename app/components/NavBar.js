'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import Link from 'next/link';

export default function NavBar({ projects }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = projects.length
    ? [
        { name: 'HOME', href: '/' },
        { name: 'EDUCATION', href: '/education' },
        { name: 'EXPERIENCE', href: '/experience' },
        { name: 'PROJECTS', href: '/projects' },
        { name: 'ABOUT ME', href: '/about-me' },
        { name: 'CONTACT', href: '/contact' },
      ]
    : [
        { name: 'HOME', href: '/' },
        { name: 'EDUCATION', href: '/education' },
        { name: 'EXPERIENCE', href: '/experience' },
        { name: 'ABOUT ME', href: '/about-me' },
        { name: 'CONTACT', href: '/contact' },
      ];

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <nav
        aria-label='Global'
        className='flex items-center justify-between p-6 lg:px-8'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent'>
              RC
            </span>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='text-white hover:text-orange-300 hover:bg-white/10 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-200'
          >
            <span className='text-sm font-semibold'>MENU</span>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-8'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-semibold transition-all duration-200 hover:scale-105 relative group text-white hover:text-orange-300'
            >
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900/98 backdrop-blur-lg px-6 py-6 sm:max-w-sm border-l border-slate-700'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent'>
                RC
              </span>
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='text-white hover:bg-white/10 -m-2.5 rounded-md p-2.5 transition-colors duration-200'
            >
              <span className='text-sm font-semibold'>CLOSE</span>
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='group -mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition-all duration-200 transform hover:translate-x-2'
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
