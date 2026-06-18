import Topbar from './components/Topbar';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact, { Footer } from './components/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Topbar />
      <Hero />
      <main className="page">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
