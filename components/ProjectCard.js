export default function ProjectCard({ repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-700 rounded-lg p-6 bg-[#112240] hover:bg-[#1a3553] transition-colors"
    >
      <h3 className="text-xl font-semibold text-gray-100 mb-2">{repo.repo}</h3>
      {repo.description && (
        <p className="mb-4 text-sm text-gray-400">{repo.description}</p>
      )}
      <div className="flex justify-between text-sm text-gray-500">
        <span>{repo.language}</span>
        <span>⭐ {repo.stars} • ⑂ {repo.forks}</span>
      </div>
    </a>
  )
}
