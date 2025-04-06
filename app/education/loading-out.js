export default function EducationLoading () {
  return (
    <div className="py-12">
      <div className="mx-auto xl:max-w-7xl lg:max-w-5xl sm:px-6 lg:px-8">
        <div className="isolate overflow-hidden px-6 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-12 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className="lg:row-start-2 lg:max-w-md">
              <div className="animate-pulse">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Loading...
                </h2>
                <p className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-xl mt-2">
                  Loading...
                </p>
                <p className="mt-6 text-lg/8 text-gray-300">
                  Loading...
                </p>
              </div>
            </div>
            <div className="relative h-5/6 -z-20 rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4">
              <div className="animate-pulse h-500 w-500 bg-gray-300"></div>
            </div>
            <div className="max-w-xl lg:row-start-4 lg:mt-10 lg:max-w-md lg:pt-10">
              <div className="py-6">
                <div className="mx-auto max-w-7xl">
                  <div>
                    <nav className="flex py-4">
                      <ul role="list" className="md:flex min-w-full flex-none gap-x-8 px-2 text-sm/6 font-semibold text-white">
                        <li>
                          <button className="text-indigo-400">
                            Loading...
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
