export default function Card({ title, description }) {
  return (
    <div className='group relative bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 overflow-hidden h-full flex flex-col'>
      {/* Gradient overlay on hover */}
      <div className='absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl'></div>

      <div className='relative z-10 flex flex-col h-full'>
        <div className='mb-4'>
          <h3 className='text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-200'>
            {title}
          </h3>
        </div>
        <p className='text-blue-200 text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-200 mb-4 flex-grow'>
          {description}
        </p>

        {/* Animated bottom border */}
        <div className='w-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:w-full transition-all duration-500 ease-out mt-auto'></div>
      </div>
    </div>
  );
}
