import Form from './components/Form';

export default function Contact() {
  return (
    <div className='min-h-screen'>
      <div className='max-w-2xl mx-auto px-6 lg:px-8 py-12'>
        <div className='text-center mb-12 animate-fade-in'>
          <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6'>
            GET IN TOUCH
          </h1>
          <p className='text-xl text-blue-100 max-w-lg mx-auto'>
            Let's discuss new opportunities and exciting projects
          </p>
          <div className='flex justify-center mt-6'>
            <div className='w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full'></div>
          </div>
        </div>

        <div
          className='animate-slide-up'
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <Form />
        </div>
      </div>
    </div>
  );
}
