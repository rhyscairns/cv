'use client';

import Image from 'next/image';
import { useState } from 'react';
import BottomNavBar from '@/app/components/BottomNavBar';

export default function Card({ experience }) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleIndexUpdate(newIndex) {
    if (newIndex === index) return;

    setIsAnimating(true);

    setTimeout(() => {
      setIndex(newIndex);
      setIsAnimating(false);
    }, 500); // Half the animation duration for crossfade effect (1 second total)
  }
  return (
    <div className='min-h-screen pb-24'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='bg-slate-800/90 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-700 p-8 lg:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Company Logo */}
            <div
              className={`order-2 lg:order-1 flex justify-center transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? 'opacity-0 transform translate-y-4'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              <div className='relative group'>
                <div className='absolute -inset-4 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200'></div>
                <div className='relative w-full max-w-md min-h-[300px] bg-slate-700/50 rounded-2xl p-6 shadow-2xl ring-1 ring-slate-600 transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center'>
                  <Image
                    alt={`${experience[index].company} logo`}
                    height={400}
                    width={400}
                    src={experience[index].logo}
                    className='max-w-full max-h-full object-contain'
                    style={{ minWidth: '150px', minHeight: '150px' }}
                  />
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div
              className={`order-1 lg:order-2 space-y-6 transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? 'opacity-0 transform translate-y-4'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              <div className='space-y-3'>
                <h2 className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
                  {experience[index].company}
                </h2>
                <p className='text-xl lg:text-2xl font-semibold text-orange-400'>
                  {experience[index].title}
                </p>
                <p className='text-lg font-medium text-blue-200'>
                  {experience[index].date}
                </p>
              </div>

              <div className='space-y-4'>
                <p className='text-lg text-blue-100 leading-relaxed'>
                  {experience[index].companyDescription}
                </p>

                <div className='space-y-3'>
                  <h3 className='text-lg font-semibold text-white'>
                    Key Responsibilities:
                  </h3>
                  <ul className='space-y-2'>
                    {experience[index].description.map((item, descIndex) => (
                      <li key={descIndex} className='flex items-start gap-3'>
                        <div className='w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-2 flex-shrink-0'></div>
                        <span className='text-blue-100 leading-relaxed'>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar
        items={experience}
        activeIndex={index}
        onIndexChange={handleIndexUpdate}
        type='experience'
      />
    </div>
  );
}
