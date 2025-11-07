import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Frontend only demo. Backend endpoint can be added later.
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! I will get back to you soon.');
  };

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
          Let’s collaborate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-xl text-center text-slate-400"
        >
          Have a product to ship or quality to scale? Drop a message.
        </motion.p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4">
          <div className="grid gap-2 md:grid-cols-2">
            <input
              required
              type="text"
              placeholder="Your name"
              className="rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200 outline-none ring-emerald-500/0 transition focus:ring-2"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200 outline-none ring-emerald-500/0 transition focus:ring-2"
            />
          </div>
          <textarea
            required
            placeholder="Project brief or message"
            rows={5}
            className="rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-slate-200 outline-none ring-emerald-500/0 transition focus:ring-2"
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
            <span className="text-sm text-slate-400">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
