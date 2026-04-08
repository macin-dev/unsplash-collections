import Image from "next/image";
import { ButtonProps } from "../types";

export default function Button({
  src,
  text,
  width = 16,
  height = 16,
}: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2.5 bg-[#E5E7EB] py-3 px-6 rounded-sm text-sm font-medium hover:bg-[#D1D5DB] transition-colors"
    >
      <Image src={src} width={width} height={height} alt="" />
      {text}
    </button>
  );
}
