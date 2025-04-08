'use client'

import Link from 'next/link'
import { postEmail } from '@/lib/data'
import { useState } from 'react'

export default function Form () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    await postEmail({ name, email, description })

    setName('')
    setEmail('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-10 rounded-2xl gap-6">
        <div className="sm:col-span-4">
          <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 ml-4">
            Name
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4 mt-5">
          <label htmlFor="email" className="text-sm/6 font-medium text-gray-900 ml-4">
            Email
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="janedoe@gmail.com"
                className="block min-w-full grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900 ml-4 mt-5">
            Reason for contact
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              placeholder="I would like to..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href="/" className="text-sm/6 font-semibold text-white">
          Cancel
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
