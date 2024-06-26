import "server-only"

type ResponseNewsItem = {
  count: number
}

async function fetchNews(cacheInSecond?: number) {
  return await fetch(
    `http://127.0.0.1:8000/fetchNews/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: cacheInSecond ?? 60 * 2, //in seconds
        tags: ['fetchNewsFt'],
      },
    },
  ).then(data => data.json() as ResponseNewsItem)
  // res.then(v -> v.json()).then()
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // return res.json();
}

export default async function LatestNews({}) {
  const results = await fetchNews()
  return (
    <div>
      <h3>Movies</h3>
      <p>Got it {results.count}</p>
    </div>
  )
}