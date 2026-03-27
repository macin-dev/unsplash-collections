import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center px-4 sm:px-0">
      <div className="max-w-132 w-full mt-60">
        <h1 className="text-[2.25rem] font-semibold tracking-[-3.5%] mb-2 leading-11.5 text-center">
          Search
        </h1>
        <p className="text-sm font-light tracking-[-3.5%] mb-6 text-center">
          Search high-resolution images from Unsplash
        </p>
        <SearchBar />
      </div>
    </main>
  );
}
