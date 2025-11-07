import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Adaptive Test Orchestrator',
    description:
      'A rules-driven engine that prioritizes E2E scenarios based on risk signals and production telemetry.',
    stack: ['TypeScript', 'Playwright', 'K8s', 'Grafana'],
    links: {
      repo: '#',
      demo: '#',
    },
  },
  {
    title: 'Visual Regression Studio',
    description:
      'Snapshot pipelines with perceptual diffing, component contracts, and GitHub review bots.',
    stack: ['Cypress', 'PNPM', 'GitHub Apps'],
    links: { repo: '#', demo: '#' },
  },
  {
    title: 'Narrative Portfolio Platform',
    description:
      'Framework for interactive product storytelling with performance budgets and analytics hooks.',
    stack: ['React', 'Framer Motion', 'FastAPI', 'MongoDB'],
    links: { repo: '#', demo: '#' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Selected Projects
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6"
            >
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-slate-800 bg-slate-900 px-2 py-1 text-xs text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4">
                <a href={p.links.repo} className="inline-flex items-center gap-1 text-slate-300 hover:text-white">
                  <Github className="h-4 w-4" /> Repo
                </a>
                <a href={p.links.demo} className="inline-flex items-center gap-1 text-slate-300 hover:text-white">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
