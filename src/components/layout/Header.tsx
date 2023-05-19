import React from "react";
import { Logo } from "../ayni-brand/Logo";
import Link from "next/link";
import { NavLink, NavLinkProps } from "./navbar/NavLink";

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
        <nav>
          <ul className="flex flex-row gap-4 items-center justify-center">
            {NavLinks.map((link) => (
              <li key={link.href}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
