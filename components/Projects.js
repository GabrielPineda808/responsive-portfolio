import ProjectCard from './ProjectCard'
import { getPinnedRepos } from '../lib/github'

export default async function Projects() {
  const repos = await getPinnedRepos()
  return (
    <div>
      <h2 className="text-3xl font-bold text-teal-400 mb-8">Projects</h2>
      {repos.length === 0 ? (
        <p className="text-gray-400">No pinned repositories found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {repos.map(repo => (
            <ProjectCard key={repo.repo} repo={repo} />
          ))}
        </div>
      )}
    </div>
  )
}
