"use client";

import { useSearchParams } from "next/navigation";
import SearchBar from "./SearchBar";

export default function SearchBarWithQuery({}) {
  const params = useSearchParams();
  const query = params.get("query") || "";

  return <SearchBar value={query} />;
}
