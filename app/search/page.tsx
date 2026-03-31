import Form from "next/form";
import SearchBar from "../components/SearchBar";
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

  return (
    <section>
      <div className="bg-linear-to-r from-orange-300 via-red-400 to-fuchsia-700 h-20 relative mb-18">
        <Form
          action="/search"
          className="absolute max-w-132 w-full left-1/2 transForm -translate-x-1/2 bottom-0 translate-y-1/2"
        >
          <SearchBar value={query} />
        </Form>
      </div>

      <MasonryWrapper results={photos} />
    </section>
  );
}
