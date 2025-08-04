import Card from './components/Card';
import { getHomepageProjects } from '@/lib/dataWithFallback';

const projects = getHomepageProjects();

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
      <div className='max-w-4xl mx-auto text-center w-full'>
        <div className='space-y-8 sm:space-y-12'>
          {/* Hero Section */}
          <div className='space-y-4 sm:space-y-6 animate-fade-in'>
            <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 leading-tight'>
              RHYS CAIRNS
            </h1>
            <p className='text-lg sm:text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto leading-relaxed px-2'>
              Software Engineer | Excited for new opportunities and technologies
            </p>

            {/* Animated divider */}
            <div className='flex justify-center'>
              <div className='w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full animate-pulse'></div>
            </div>
          </div>

          {/* Projects Section */}
          <div
            className='space-y-6 sm:space-y-8 animate-slide-up'
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 px-2'>
              UPCOMING PROJECTS
            </h2>

            <div className='grid gap-4 sm:gap-6 md:grid-cols-3 px-2'>
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className='animate-slide-up h-full'
                  style={{
                    animationDelay: `${0.5 + index * 0.2}s`,
                    animationFillMode: 'both',
                  }}
                >
                  <Card
                    title={project.title}
                    description={project.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 animate-slide-up px-4'
            style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
          >
            <a
              href='/contact'
              className='group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-slate-900 font-semibold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 text-center w-full sm:w-auto'
            >
              <span className='relative z-10'>GET IN TOUCH</span>
              <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </a>

            <a
              href='/about-me'
              className='group flex items-center justify-center text-base sm:text-lg font-semibold text-blue-100 hover:text-orange-400 transition-colors duration-200'
            >
              ABOUT ME
              <span
                className='ml-2 transform group-hover:translate-x-1 transition-transform duration-200'
                aria-hidden='true'
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
