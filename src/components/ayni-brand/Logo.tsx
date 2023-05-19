import React from "react";
import Image from "next/image";
import logo from "../../assets/ayini-brand/logo.svg";
import logoWhite from "../../assets/ayini-brand/logo-white.svg";
import { Card } from "../layout/Card";
import { assertNever } from "@/utils/assertNever";

type LogoProps = {
  height: number;
  variant: "primary" | "white";
};

export function Logo({ height, variant }: LogoProps) {
  switch (variant) {
    case "white":
      return <Image src={logoWhite} alt="AyniLogo" height={height} />;
    case "primary":
      return <Image src={logo} alt="AyniLogo" height={height} />;
    default:
      assertNever(variant);
  }
  // This is unreachable, but TypeScript doesn't know that - Code shouldn't compile if this is reached
  return <></>;
}
