const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'gabrielpineda808'
const token = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN

export async function getPinnedRepos() {
  if (!token) return []
  try {
    const query = `query($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              stargazerCount
              forkCount
              url
              primaryLanguage { name }
            }
          }
        }
      }
    }`
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables: { login: username } }),
      next: { revalidate: 3600 },
    })
    if (!res.ok) {
      return []
    }
    const json = await res.json()
    const nodes = json.data?.user?.pinnedItems?.nodes || []
    return nodes.map(repo => ({
      repo: repo.name,
      description: repo.description,
      stars: repo.stargazerCount,
      forks: repo.forkCount,
      url: repo.url,
      language: repo.primaryLanguage?.name || '',
    }))
  } catch (e) {
    console.error('Failed to fetch pinned repos', e)
    return []
  }
}
