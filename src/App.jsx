import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white" id="home">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-slate-800/60 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Muhammad Hariyadi Arjuna — Crafted with care.
      </footer>
    </div>
  );
}

export default App;
