import about from '../data/about'

export default function About() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg leading-relaxed whitespace-pre-line">{about}</p>
    </div>
  )
}
