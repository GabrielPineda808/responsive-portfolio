const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'gabriel-omar-pineda'

export async function getPinnedRepos() {
  try {
    const res = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${username}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) {
      return []
    }
    return res.json()
  } catch (e) {
    console.error('Failed to fetch pinned repos', e)
    return []
  }
}
