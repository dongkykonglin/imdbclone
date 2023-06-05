const API_KEY = process.env.API_KEY;
import Results from "./components/Results";
const key = "881c4d4508497518c91eba5e7ab50d34";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${key}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data from server");
  }
  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
