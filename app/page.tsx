import Image from "next/image";
import SearchBar from "./components/SearchBar";
import LeftImage from "@/public/left-image.png";
import RightImage from "@/public/right-image.png";

export default function Home({}) {
  return (
    <main className="flex flex-col flex-1 items-center px-4 sm:px-0 lg:relative">
      <div className="max-w-132 w-full mt-60">
        <h1 className="text-[2.25rem] font-semibold tracking-[-3.5%] mb-2 leading-11.5 text-center">
          Search
        </h1>
        <p className="text-sm font-light tracking-[-3.5%] mb-6 text-center">
          Search high-resolution images from Unsplash
        </p>
        <SearchBar />
      </div>

      {/* Asymmetric images */}
      <Image
        src={LeftImage}
        alt=""
        className="hidden lg:block lg:absolute lg:left-0 lg:transform lg:top-1/2 lg:-translate-y-1/2"
      />
      <Image
        src={RightImage}
        alt=""
        className="hidden lg:block lg:absolute lg:right-0 lg:transform lg:top-1/2 lg:-translate-y-1/2"
      />
    </main>
  );
}
