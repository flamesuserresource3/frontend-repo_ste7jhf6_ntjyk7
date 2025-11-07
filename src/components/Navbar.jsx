import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold tracking-wide text-white"
        >
          ARJUNA.QA
        </motion.a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 shadow-emerald-500/20 transition hover:bg-emerald-400 md:inline"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
