'use client';

export default function BottomNavBar({
  items,
  activeIndex,
  onIndexChange,
  type = 'education',
}) {
  // Get abbreviated text for mobile
  const getAbbreviation = (item, index) => {
    const text = item.tabName || item.company || item.university || '';
    if (text.length <= 4) return text;

    // Try to create abbreviation from first letters of words
    const words = text.split(' ');
    if (words.length > 1) {
      return words
        .map((word) => word[0])
        .join('')
        .substring(0, 3)
        .toUpperCase();
    }

    // Fallback to first 3 characters
    return text.substring(0, 3).toUpperCase();
  };

  return (
    <div className='fixed bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-30'>
      <div className='bg-gray-900/95 backdrop-blur-lg rounded-xl md:rounded-2xl shadow-2xl border border-gray-700/50 p-1.5 md:p-2'>
        <nav className='flex items-center justify-center gap-0.5 md:gap-1'>
          {items.map((item, index) => (
            <button
              key={item.id || index}
              onClick={() => onIndexChange(index)}
              className={`flex-shrink-0 flex items-center justify-center px-2 md:px-3 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap bottom-nav-button ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-400 text-slate-900 shadow-lg scale-105'
                  : 'text-gray-300 hover:text-orange-300 hover:bg-white/10 hover:scale-105'
              }`}
            >
              {/* Mobile: Abbreviated text only */}
              <span className='block md:hidden text-center text-[11px] leading-tight font-semibold'>
                {getAbbreviation(item, index)}
              </span>

              {/* Desktop: Full text only */}
              <span className='hidden md:block'>
                {item.tabName || item.company || item.university}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
