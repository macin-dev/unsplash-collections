"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { Item } from "../types";
import HeartIcon from "@/public/heart.png";

export default function MasonryWrapper({ results }: { results: Item[] }) {
  return (
    <Masonry
      className="flex gap-6 w-auto mx-6 lg:mx-18"
      columnClassName="bg-clip-padding"
      breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
    >
      {results.map((result) => (
        <div key={result.id} className={`w-full relative cursor-pointer`}>
          <Image
            className="mb-6"
            src={`${result.urls.raw}&w=900&q=75&auto=format&fit=max`}
            width={900}
            height={Math.round((900 * result.height) / result.width)}
            sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
            alt={result.likes.toString()}
            placeholder={result.blurDataURL ? "blur" : "empty"}
            blurDataURL={result.blurDataURL}
          />
          <span className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/80 opacity-0 hover:opacity-100 text-white font-bold flex items-end pl-4 pb-4 transition-opacity z-20">
            <Image
              src={HeartIcon}
              alt="Likes"
              width={24}
              height={24}
              className="mr-1"
            />
            {result.likes}
          </span>
        </div>
      ))}
    </Masonry>
  );
}
