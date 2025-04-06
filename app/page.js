import Card from './components/Card'

const projects = [
  { title: 'COLLEGE ATHLETE BASE', description: 'A new scholarship platform for future or current collegiate athletes. It offers a place where everyone can show off their talents and be recognized by coaches across the nation' },
  { title: 'COPYCAT', description: 'There are hedge funds currently that follow the trades of the top investors in the world. This app will allow you to follow the trades of the top investors in the world without entering a hedge fund.' },
  { title: 'DIY MOVE', description: 'Why pay 3% for someone to sell your house when you can do it yourself? DIYMove is a platform that allows you to sell your house without a real estate agent.' },
]

export default function Home () {
  return (
    <div className="mx-auto max-w-8xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-36">
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            RHYS CAIRNS
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
            Software Engineer | Excited for new opportunities and technoologies
          </p>
          <hr className='mt-8 mb-6' />
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-7xle">UPCOMING PROJECTS</h2>
          <div className="items-center justify-center gap-x-6 lg:flex md:flex-none sm:flex-none">
            {projects.map((project) => (
              <Card key={project.title} title={project.title} description={project.description} />
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              GET IN TOUCH
            </a>
            <a href="about-me" className="text-sm/6 font-semibold text-white">
              ABOUT ME <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
