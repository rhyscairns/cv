'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { postEmail } from '@/lib/dataWithFallback';
import { profile } from '@/lib/resumeData';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'in/rhys-cairns', href: profile.linkedin },
  { label: 'GitHub', value: 'github.com/rhyscairns', href: profile.github },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await postEmail({ name, email, description });
      setStatus('sent');
      setName('');
      setEmail('');
      setDescription('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id='contact' className='relative overflow-hidden py-24 lg:py-32'>
      <div className='pointer-events-none absolute inset-x-0 top-0 -z-10'>
        <div className='mx-auto h-72 max-w-3xl rounded-full bg-[#ff5a1f]/10 blur-[130px]' />
      </div>

      <div className='mx-auto max-w-6xl px-5 lg:px-8'>
        <div className='grid gap-14 lg:grid-cols-2 lg:gap-20'>
          <div>
            <span className='eyebrow'>// Let's talk</span>
            <h2 className='mt-3 font-display text-6xl leading-[0.9] text-white sm:text-7xl lg:text-8xl'>
              Let's build <span className='text-gradient'>something</span>
            </h2>
            <p className='mt-6 max-w-md text-lg text-[#a1a1aa]'>
              Hiring, collaborating, or just want to talk shop about Vue, React or
              AI-assisted engineering? My inbox is open.
            </p>

            <div className='mt-10 space-y-3'>
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel='noopener noreferrer'
                  className='group flex items-center justify-between rounded-xl border border-[#26262f] bg-[#0e0e12] px-5 py-4 transition-all duration-200 hover:border-[#ff5a1f]/50'
                >
                  <div>
                    <div className='font-mono text-xs uppercase tracking-widest text-[#6b6b76]'>
                      {c.label}
                    </div>
                    <div className='mt-0.5 text-white'>{c.value}</div>
                  </div>
                  <span className='text-[#6b6b76] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#ff5a1f]'>
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === 'sent' ? (
              <div className='flex h-full flex-col items-center justify-center rounded-3xl border border-[#c6ff3d]/30 bg-[#0e0e12] p-10 text-center'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#c6ff3d]/15 text-2xl text-[#c6ff3d]'>
                  ✓
                </div>
                <h3 className='mt-5 font-display text-3xl text-white'>Message sent</h3>
                <p className='mt-2 text-[#a1a1aa]'>
                  Thanks for reaching out — I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className='mt-6 rounded-full border border-[#26262f] px-5 py-2 text-sm font-semibold text-white hover:border-white/60'
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='space-y-5 rounded-3xl border border-[#26262f] bg-[#0e0e12] p-7 sm:p-9'
              >
                <Field label='Name'>
                  <input
                    type='text'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Your name'
                    className='input'
                  />
                </Field>
                <Field label='Email'>
                  <input
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='you@company.com'
                    className='input'
                  />
                </Field>
                <Field label='Message'>
                  <textarea
                    rows={5}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Tell me about the role or project...'
                    className='input resize-none'
                  />
                </Field>

                {status === 'error' && (
                  <p className='text-sm text-[#ff2d6b]'>
                    Something went wrong. Try again or email me directly.
                  </p>
                )}

                <button
                  type='submit'
                  disabled={status === 'sending'}
                  className='w-full rounded-xl bg-gradient-to-r from-[#ff5a1f] to-[#ff2d6b] py-4 font-semibold text-black transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100'
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #26262f;
          background: #141419;
          padding: 0.75rem 1rem;
          color: #f5f5f4;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input::placeholder {
          color: #6b6b76;
        }
        .input:focus {
          border-color: #ff5a1f;
          box-shadow: 0 0 0 3px rgba(255, 90, 31, 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className='block'>
      <span className='mb-2 block font-mono text-xs uppercase tracking-widest text-[#a1a1aa]'>
        {label}
      </span>
      {children}
    </label>
  );
}
