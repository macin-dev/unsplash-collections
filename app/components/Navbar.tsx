"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import LogoImage from "@/public/logo-app.png";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border border-solid border-[#E5E7EB] py-4 px-10">
      <nav className="flex items-center">
        <Image src={LogoImage} alt="" />

        <ul className="flex gap-2 ml-auto">
          <li>
            <NavLink href="/" isActive={pathname === "/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/collections" isActive={pathname === "/collections"}>
              Collections
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
