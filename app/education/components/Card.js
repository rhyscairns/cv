'use client';

import Image from 'next/image';
import { useState } from 'react';
import BottomNavBar from '../../components/BottomNavBar';

export default function Card({ education }) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleIndexUpdate(newIndex) {
    if (newIndex === index) return;

    education.map((tab) =>
      tab.id === newIndex ? (tab.current = true) : (tab.current = false)
    );

    setIsAnimating(true);

    setTimeout(() => {
      setIndex(newIndex);
      setIsAnimating(false);
    }, 500); // Half the animation duration for crossfade effect (1 second total)
  }

  if (!education || education.length === 0) {
    return (
      <div className='text-center text-blue-200'>
        No education data available
      </div>
    );
  }

  return (
    <>
      <div className='bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700 overflow-hidden mb-20'>
        <div className='p-8 lg:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            <div
              className={`space-y-6 transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? 'opacity-0 transform translate-y-4'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              <div>
                <h2 className='text-3xl lg:text-4xl font-bold text-white mb-2'>
                  {education[index].university}
                </h2>
                <h3 className='text-xl lg:text-2xl font-semibold text-orange-400 mb-4'>
                  {education[index].degree}
                </h3>
              </div>
              <p className='text-blue-200 text-lg leading-relaxed'>
                {education[index].summary}
              </p>
            </div>

            <div
              className={`relative transition-all duration-1000 ease-in-out ${
                isAnimating
                  ? 'opacity-0 transform translate-y-4'
                  : 'opacity-100 transform translate-y-0'
              }`}
            >
              <div className='aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-700/50 p-4'>
                <Image
                  alt={`${education[index].university} degree`}
                  width={500}
                  height={500}
                  src={education[index].degreeImage}
                  className='w-full h-full object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNavBar
        items={education}
        activeIndex={index}
        onIndexChange={handleIndexUpdate}
        type='education'
      />
    </>
  );
}
