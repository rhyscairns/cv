'use client'

import Image from 'next/image'
import { useState } from 'react'
// import { education } from '../data/education'

// TODO remove education import and use prop passed down from page.js
// TODO remove nav below and make common component for experience aswell

export default function Card ({ education }) {
  const [index, setIndex] = useState(0)

  function handleIndexUpdate (index) {
    education.map((tab) => (tab.id === index ? tab.current = true : tab.current = false))
    return setIndex(index)
  }
  return (
    <div className="py-12">
      <div className="mx-auto xl:max-w-7xl lg:max-w-5xl sm:px-6 lg:px-8">
        <div className=" isolate overflow-hidden px-6 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-12 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className={index === 1 || index === 3 ? "lg:mt-16 lg:row-start-2 lg:max-w-md" : "lg:row-start-2 lg:max-w-md"}>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {education[index].university}
              </h2>
              <p className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-xl mt-2">
                {education[index].degree}
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                {education[index].summary}
              </p>
            </div>
            <Image
              alt="Product screenshot"
              width="500"
              height="500"
              src={education[index].degreeImage}
              className="relative h-5/6 -z-20 rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4"
            />
            <div className="max-w-xl lg:row-start-4 lg:mt-10 lg:max-w-md lg:pt-10">
              <div className="py-6">
                <div className="mx-auto max-w-7xl">
                  <div>
                    <nav className="flex py-4">
                      <ul role="list" className="md:flex min-w-full flex-none gap-x-8 px-2 text-sm/6 font-semibold text-white">
                        {education.map((tab) => (
                          <li key={tab.tabName}>
                            <button onClick={() => handleIndexUpdate(tab.id)} className={tab.current ? 'text-indigo-400' : ''}>
                              {tab.tabName}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
