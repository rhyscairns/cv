import { Geist, Geist_Mono, Anton } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: 'Rhys Cairns — Software Engineer',
  description:
    'Software Engineer at Kingfisher. Ex-collegiate athlete turned engineer — £3M/yr saved, 70% faster workflows, 50,000+ colleagues supported across Europe.',
  openGraph: {
    title: 'Rhys Cairns — Software Engineer',
    description:
      'Ex-collegiate athlete turned software engineer. Building software that saves millions and moves fast.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased grain`}
      >
        <Nav />
        <main className='relative z-[2]'>{children}</main>
      </body>
    </html>
  );
}
