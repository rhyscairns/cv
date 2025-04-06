'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Card ({ experience }) {
  console.log({ experience: experience })
  const [index, setIndex] = useState(0)

  function handleIndexUpdate (index) {
    experience.map((tab) => (tab.id === index ? tab.current = true : tab.current = false))

    return setIndex(index)
  }
  return (
    <div className="pt-20">
      <div className="mx-auto xl:max-w-7xl lg:max-w-5xl sm:px-6 lg:px-8">
        <div className="px-6 sm:rounded-2xl sm:px-10 sm:py-12 lg:py-3 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-0">
            <Image
              alt="Product screenshot"
              height={500}
              width={500}
              src={experience[index].logo}
              className="relative -z-10 w-full  rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-6"
            />
            <div className="max-w-xl lg:row-start-4 lg:mt-10 lg:max-w-md lg:pt-10">
              <div className="py-2">
                <div className="mx-auto mt-24 max-w-7xl">
                </div>
              </div>
            </div>
            <div className="py-12 lg:row-start-2 lg:max-w-md">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-2xl">
                {experience[index].company} - {experience[index].title}
              </h2>
              <p className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-xl mt-2">
                {experience[index].date}
              </p>
              <br />
              <p className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-xl mt-2">
                {experience[index].companyDescription}
              </p>
              <ul className="mt-6 text-lg/8 text-gray-300 list-disc">
                {experience[index].description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <nav className="flex py-20 xl:fixed xl:bottom-0">
            <ul role="list" className="md:flex min-w-full flex-none gap-x-8 px-2 text-sm/6 font-semibold text-white bg-indigo-950 p-2 rounded-xl">
              {experience.map((tab) => (
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
    </div >
  )
}
