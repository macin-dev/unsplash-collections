import Image from "next/image";
import SearchBar from "./components/SearchBar";
import LeftImage from "@/public/left-image.png";
import RightImage from "@/public/right-image.png";
import Form from "next/form";

export default function Home({}) {
  return (
    <main className="flex flex-col flex-1 items-center px-4 sm:px-0 lg:relative lg:overflow-x-hidden">
      <div className="max-w-132 w-full mt-42.5">
        <h1 className="text-[2.25rem] font-semibold tracking-[-3.5%] mb-2 leading-11.5 text-center">
          Search
        </h1>
        <p className="text-sm font-light tracking-[-3.5%] mb-6 text-center">
          Search high-resolution images from Unsplash
        </p>
        <Form action="/search">
          <SearchBar />
        </Form>
      </div>

      {/* Asymmetric images */}
      <Image
        src={LeftImage}
        alt=""
        className="hidden lg:block lg:absolute lg:-left-36 lg:transform lg:top-1/2 lg:-translate-y-1/2 xl:-left-6"
      />
      <Image
        src={RightImage}
        alt=""
        className="hidden lg:block lg:absolute lg:-right-36 lg:transform lg:top-1/2 lg:-translate-y-1/2 xl:-right-6"
      />
    </main>
  );
}
