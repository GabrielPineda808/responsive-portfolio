import about from '../data/about'

export default function About() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-teal-400 mb-4">About Me</h2>
      <p className="text-lg leading-relaxed whitespace-pre-line text-gray-300">{about}</p>
    </div>
  )
}
