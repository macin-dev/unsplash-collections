import Image from "next/image";
import { ButtonProps } from "../types";

export default function Button({
  src,
  text,
  href,
  width = 16,
  height = 16,
}: ButtonProps) {
  return (
    <button
      type="button"
      className="bg-[#E5E7EB] rounded-sm text-sm font-medium hover:bg-[#D1D5DB] transition-colors overflow-hidden"
    >
      <a href={href} className="inline-flex items-center gap-2.5 py-3 px-6 ">
        <Image src={src} width={width} height={height} alt="" />
        {text}
      </a>
    </button>
  );
}
