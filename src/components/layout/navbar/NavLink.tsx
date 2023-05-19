import Link from "next/link";
import React from "react";

export type NavLinkProps = {
  href: string;
  text: string;
};

export function NavLink({ href, text }: NavLinkProps) {
  return (
    <Link href={href} className="px-2">
      <span className="text-slate-800 hover:text-blue-800 hover:underline font-semibold">{text}</span>
    </Link>
  );
}
