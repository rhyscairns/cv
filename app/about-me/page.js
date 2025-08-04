import Section from './components/Sections.js';
import { getAboutMe } from '@/lib/dataWithFallback';
import NotFound from './not-found.js';
import Link from 'next/link';

export default function AboutMe() {
  async function AboutMe() {
    const data = await getAboutMe();

    if (!data) {
      return <NotFound />;
    }

    return <Section sections={data} />;
  }
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-12 text-center'>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <div className='text-center mb-12 animate-fade-in'>
            <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6'>
              ABOUT ME
            </h1>
            <div className='flex justify-center'>
              <div className='w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full'></div>
            </div>
          </div>
          <Link
            href={'https://www.linkedin.com/in/rhys-cairns-648018aa'}
            className='mt-2 text-lg/8 text-orange-400 hover:text-yellow-400 font-semibold transition-colors duration-200'
          >
            LinkedIn - Rhys Cairns
          </Link>
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
