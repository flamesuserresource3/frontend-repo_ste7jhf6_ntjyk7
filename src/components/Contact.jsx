import React from 'react';
import { motion } from 'framer-motion';
import { Whatsapp, Linkedin, Github, ExternalLink } from 'lucide-react';

const contacts = [
  {
    label: 'WhatsApp',
    value: '+62 851-5655-9499',
    href: 'https://wa.me/6285156559499',
    icon: Whatsapp,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/your-handle',
    href: 'https://www.linkedin.com/in/your-handle',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/your-handle',
    href: 'https://github.com/your-handle',
    icon: Github,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-xl text-center text-slate-400"
        >
          Prefer direct contact. Choose one of the channels below.
        </motion.p>

        <div className="mt-10 divide-y divide-slate-800 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40">
          {contacts.map(({ label, value, href, icon: Icon }, idx) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex items-center gap-4 px-5 py-4 transition hover:bg-slate-900/60"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-emerald-400">
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">{label}</p>
                  <p className="text-sm text-slate-400">{value}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 opacity-0 transition group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
