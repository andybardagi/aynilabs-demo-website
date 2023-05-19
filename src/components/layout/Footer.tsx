import React from "react";
import { Logo } from "../ayni-brand/Logo";

export function Footer() {
  return (
    <div className="bg-slate-200 w-full grid place-items-center py-8">
      <div className="flex flex-row gap-4 items-center">
        <Logo variant="primary" height={24} />
        <p> AyniLabs &copy; 2023</p>
      </div>
    </div>
  );
}
