"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { Item } from "../types";

export default function MasonryWrapper({ results }: { results: Item[] }) {
  return (
    <Masonry
      className="flex gap-6 w-auto mx-6 lg:mx-18"
      columnClassName="bg-clip-padding"
      breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
    >
      {results.map((result) => (
        <Image
          className="mb-6"
          key={result.id}
          src={`${result.urls.raw}&w=900&q=75&auto=format&fit=max`}
          width={900}
          height={Math.round((900 * result.height) / result.width)}
          sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw"
          alt=""
          placeholder={result.blurDataURL ? "blur" : "empty"}
          blurDataURL={result.blurDataURL}
        />
      ))}
    </Masonry>
  );
}
