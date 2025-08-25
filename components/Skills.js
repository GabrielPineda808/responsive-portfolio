import skills from '../data/skills'

export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-teal-400 mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <li key={skill} className="bg-[#112240] text-teal-400 px-3 py-1 rounded">{skill}</li>
        ))}
      </ul>
    </div>
  )
}
