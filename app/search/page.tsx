import MasonryWrapper from "../components/MasonryWrapper";
import { SearchPageProps, SearchResponseSchema } from "../types";
import { blurHashToDataURL } from "../lib/blurHash";

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query } = await searchParams;

  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
  let urlAPI: string = "";

  if (query) {
    urlAPI = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${unsplashKey}`;
  } else {
    urlAPI = `https://api.unsplash.com/photos?client_id=${unsplashKey}`;
  }

  const res = await fetch(urlAPI);

  // Error handling for failed fetch
  if (!res.ok) {
    return (
      <p className="text-red-500 text-center">Failed to fetch search results</p>
    );
  }

  const json: unknown = await res.json();
  const results = query ? json : { results: json };
  const parsed = SearchResponseSchema.parse(results);

  const photos = parsed.results.map((result) => ({
    ...result,
    blurDataURL: blurHashToDataURL({
      hash: result.blur_hash,
    }),
  }));

  return <MasonryWrapper results={photos} />;
}
