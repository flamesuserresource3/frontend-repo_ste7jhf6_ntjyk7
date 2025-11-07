import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:py-28">
        {/* Left: Headline */}
        <div className="relative z-10 max-w-2xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-200 backdrop-blur"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Innovative storytelling through quality-driven software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Muhammad Hariyadi Arjuna
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-lg leading-relaxed text-slate-300"
          >
            Software Quality Assurance Engineer & Full‑Stack Developer crafting
            reliable systems and immersive product stories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              <Rocket className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-800/40 px-5 py-3 font-medium text-slate-200 backdrop-blur transition hover:border-slate-600 hover:bg-slate-800/60"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </motion.div>
        </div>

        {/* Right: Spline */}
        <div className="relative mx-auto w-full max-w-3xl md:max-w-none md:flex-1">
          <div className="relative h-[420px] w-full rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl md:h-[560px]">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient overlay that doesn't block interaction */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
