import MasonryWrapper from "../components/MasonryWrapper";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query } = await searchParams;

  const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
  let urlAPI: string = "";

  if (query) {
    urlAPI = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${unsplashKey}`;
  } else {
    urlAPI = `https://api.unsplash.com/photos?client_id=${unsplashKey}`;
  }

  const res = await fetch(urlAPI);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = await res.json();
  const photos = results?.results || results;

  return <MasonryWrapper results={photos} />;
}
