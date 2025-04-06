import Section from './components/Sections.js'
import { getAboutMe } from '@/lib/data.js'
import NotFound from './not-found.js'
import Link from 'next/link'

export default function AboutMe () {
  async function AboutMe () {
    const data = await getAboutMe()

    if (!data) {
      return <NotFound />
    }

    return <Section sections={data} />
  }
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">ABOUT ME</h2>
          <Link href={'https://www.linkedin.com/in/rhys-cairns-648018aa'} className="mt-2 text-lg/8 text-white">LinkedIn - Rhys Cairns</Link>
          <AboutMe />
        </div>
      </div>
    </div>
  )
}
