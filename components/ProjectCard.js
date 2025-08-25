export default function ProjectCard({ repo }) {
  return (
    <a
      href={repo.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg p-4 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">{repo.repo}</h3>
      {repo.description && (
        <p className="mb-4 text-sm text-gray-600">{repo.description}</p>
      )}
      <div className="text-sm text-gray-500">⭐ {repo.stars} &nbsp; ⑂ {repo.forks}</div>
    </a>
  )
}
