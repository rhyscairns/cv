import Form from './components/Form';

export default function Contact () {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <p className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6 text-center">Get In Touch</p>
          <Form />
        </div>
      </div>
    </div>
  )
}
