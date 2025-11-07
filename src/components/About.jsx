import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Bug, Code2, Workflow } from 'lucide-react';

const skills = [
  { icon: ShieldCheck, title: 'Quality Strategy', desc: 'Test plans, risk analysis, shift-left testing culture.' },
  { icon: Bug, title: 'Automation', desc: 'Playwright, Cypress, API tests, CI pipelines.' },
  { icon: Code2, title: 'Full‑Stack', desc: 'TypeScript/React, Node, Python, FastAPI, MongoDB.' },
  { icon: Workflow, title: 'QAOps', desc: 'Metrics, release hygiene, observability-informed testing.' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Precision meets storytelling
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-slate-400"
        >
          I design robust QA strategies and build tools that help teams ship faster with confidence. My craft blends
          empathy for users, technical depth, and a love for interactive narratives.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-xl border border-slate-800 bg-slate-900/40 p-5 shadow hover:shadow-emerald-500/10"
            >
              <div className="inline-flex rounded-lg border border-slate-800 bg-slate-900 p-2 text-emerald-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-400">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
