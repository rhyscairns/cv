import Image from 'next/image';

export default function Section({ sections }) {
  return (
    <div className='mt-16 space-y-20 lg:mt-20 lg:space-y-20'>
      {sections.map((post) => (
        <article
          key={post.id}
          className='relative isolate flex flex-col gap-8 lg:flex-row bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-700'
        >
          <div className='relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
            <Image
              alt={post.title}
              height={500}
              width={500}
              src={post.imageUrl}
              className='absolute inset-0 size-full rounded-2xl bg-slate-700 object-cover'
            />
            <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-600' />
          </div>
          <div>
            <div className='group relative max-w-xl'>
              <h3 className='mt-3 text-lg/6 font-semibold text-orange-400'>
                <span className='absolute inset-0' />
                {post.title}
              </h3>
              <p className='mt-5 text-sm/7 text-blue-200'>{post.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
