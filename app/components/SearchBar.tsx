import Image from "next/image";
import SearchIcon from "@/public/search-icon.svg";

export default function SearchBar() {
  return (
    <label
      htmlFor="search"
      className="border border-[#E5E7EB] border-solid flex py-4 px-3.75 rounded-lg focus-within:shadow focus-within:outline focus-within:outline-[#E5E7EB] overflow-x-hidden"
    >
      <input
        type="text"
        placeholder="Enter your keywords..."
        id="search"
        autoComplete="off"
        className="flex-1 text-sm font-light font-vietnam-pro placeholder:tracking-[-3.5%] placeholder:text-[#6C727F] focus:outline-none"
      />
      <Image src={SearchIcon} alt="" />
    </label>
  );
}
