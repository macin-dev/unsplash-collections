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
          src={result.urls.small}
          width={result.width}
          height={result.height}
          alt=""
        />
      ))}
    </Masonry>
  );
}
