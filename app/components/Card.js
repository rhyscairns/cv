export default function Card ({ title, description }) {
  return (
    <div className="divide-y overflow-hidden rounded-lg shadow mt-4">
      <div className="px-4 py-5 sm:px-6 bg-indigo-950 text-white">
        <strong>{title}</strong>
      </div>
      <div className="px-4 py-5 sm:p-6 bg-white text-black">{description}</div>
    </div>
  )
}
