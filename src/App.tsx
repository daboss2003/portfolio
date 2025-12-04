import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { SkillsTicker } from './components/ui/TickerTape';

function App() {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-text">
      {/* Scanlines Overlay */}
      <div className="scanlines" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className='w-full'>
        {/* Hero Section */}
        <Hero />

        {/* Skills Ticker */}
        <SkillsTicker />

        {/* Skills Dashboard */}
        <Skills />

        {/* Experience Timeline */}
        <Experience />

        {/* Projects Grid */}
        <Projects />

        {/* Certifications */}
        <Certifications />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
