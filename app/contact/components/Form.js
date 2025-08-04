'use client';

import { postEmail } from '@/lib/dataWithFallback';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await postEmail({ name, email, description });
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setDescription('');
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could add error state here to show user feedback
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className='bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-700 text-center'>
        <div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4'>
          <svg
            className='w-8 h-8 text-slate-900'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
        </div>
        <h3 className='text-2xl font-bold text-white mb-2'>Message Sent!</h3>
        <p className='text-blue-200 mb-6'>
          Thank you for reaching out. I'll get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className='px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-slate-900 font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200'
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-700 space-y-6'
    >
      <div className='space-y-6'>
        {/* Name Field */}
        <div className='group'>
          <label
            htmlFor='name'
            className='block text-sm font-semibold text-white mb-2'
          >
            Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            required
            placeholder='Your full name'
            className='w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-orange-400 focus:ring-2 focus:ring-orange-200/20 transition-all duration-200 outline-none bg-slate-700/50 text-white placeholder-slate-400'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        {/* Email Field */}
        <div className='group'>
          <label
            htmlFor='email'
            className='block text-sm font-semibold text-white mb-2'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            placeholder='your.email@example.com'
            className='w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-orange-400 focus:ring-2 focus:ring-orange-200/20 transition-all duration-200 outline-none bg-slate-700/50 text-white placeholder-slate-400'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Message Field */}
        <div className='group'>
          <label
            htmlFor='description'
            className='block text-sm font-semibold text-white mb-2'
          >
            Message
          </label>
          <textarea
            id='description'
            name='description'
            rows={5}
            required
            placeholder='Tell me about your project or opportunity...'
            className='w-full px-4 py-3 rounded-xl border border-slate-600 focus:border-orange-400 focus:ring-2 focus:ring-orange-200/20 transition-all duration-200 outline-none resize-none bg-slate-700/50 text-white placeholder-slate-400'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-slate-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
      >
        {isSubmitting ? (
          <div className='flex items-center justify-center'>
            <svg
              className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
            Sending...
          </div>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
