import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Stats from './components/sections/Stats';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
