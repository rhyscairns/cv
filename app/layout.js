import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import { getProjects } from '@/lib/dataWithFallback';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'RHYS CAIRNS CV',
  description: 'CV for Rhys Cairns',
};

export default async function RootLayout({ children }) {
  const projects = await getProjects();

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
          {/* Animated background elements */}
          <div className='fixed inset-0 -z-10 overflow-hidden'>
            <div className='absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse'></div>
            <div
              className='absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse'
              style={{ animationDelay: '2s' }}
            ></div>
            <div
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-2xl animate-pulse'
              style={{ animationDelay: '4s' }}
            ></div>
          </div>

          <NavBar projects={projects} />
          <main className='relative pt-20'>{children}</main>
        </div>
      </body>
    </html>
  );
}
