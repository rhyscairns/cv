import Image from 'next/image'

export default function Section ({ sections }) {
  return (
    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
      {sections.map((post) => (
        <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
          <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
            <Image
              alt={post.title}
              height={500}
              width={500}
              src={post.imageUrl}
              className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div>
            <div className="group relative max-w-xl">
              <h3 className="mt-3 text-lg/6 font-semibold text-white">
                <span className="absolute inset-0" />
                {post.title}
              </h3>
              <p className="mt-5 text-sm/7 text-white">{post.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
