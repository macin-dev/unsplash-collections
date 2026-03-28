import Link from "next/link";
import { NavLinkProps } from "../types";

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      className={`px-5 py-2 inline-block rounded-sm text-sm font-semibold tracking-[-3.5%] text-[#6C727F] ${isActive ? "bg-[#E5E7EB] text-[#121826]" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}
