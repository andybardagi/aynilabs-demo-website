import React from "react";
import { Logo } from "../ayni-brand/Logo";
import Link from "next/link";
import { NavLink, NavLinkProps } from "./navbar/NavLink";
import { BiMenu } from "react-icons/bi";
import { useOpenClose } from "@/hooks/useOpenClose";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useWindowResize } from "@/hooks/useWindowResize";

const NavLinks: NavLinkProps[] = [
  {
    href: "#services",
    text: "Services",
  },
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#team",
    text: "Team",
  },
];

export default function Header() {
  const [showMenu, { open, close, toggle }] = useOpenClose(false);
  useClickOutside("menu-dropdown", close);
  useWindowResize(close);

  return (
    <div className="w-full bg-white py-4">
      <div className="w-full max-w-7xl mx-auto flex flex-row justify-between items-center px-4 xl:px-0">
        <Link href="/" className="flex flex-row gap-4 items-center">
          <Logo height={48} variant="primary" />
          <h4 className="text-blue-800 text-3xl">
            <span className="font-semibold">Ayni</span>
            <span className="font-light">Labs</span>
          </h4>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-4 items-center justify-center">
            {NavLinks.map((link) => (
              <li key={link.href}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative md:hidden" onClick={toggle}>
          <BiMenu className="text-3xl" />
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } absolute right-0 mt-2  bg-white rounded-md shadow-lg py-0 z-30 border border-blue-300 menu-dropdown`}
          >
            <div className="flex flex-col items-center justify-center w-56">
              {NavLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="py-2 w-full px-4 max-w-full border-b border-blue-300 hover:bg-blue-100 font-semibold"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
