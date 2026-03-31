import Image from "next/image";
import SearchIcon from "@/public/search-icon.svg";

export default function SearchBar({
  value,
}: {
  value?: string | string[] | undefined;
}) {
  return (
    <label
      htmlFor="search"
      className="bg-white border border-[#E5E7EB] border-solid flex py-4 px-3.75 rounded-lg focus-within:shadow focus-within:outline focus-within:outline-[#E5E7EB] overflow-x-hidden"
    >
      <input
        name="query"
        type="text"
        placeholder="Enter your keywords..."
        id="search"
        defaultValue={value}
        autoComplete="off"
        className="flex-1 text-sm font-light font-vietnam-pro placeholder:tracking-[-3.5%] placeholder:text-[#6C727F] focus:outline-none"
      />
      <Image src={SearchIcon} alt="" />
    </label>
  );
}
