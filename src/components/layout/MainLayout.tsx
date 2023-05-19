import { Inter } from "next/font/google";
import React from "react";

const INTER_FONT = Inter({ subsets: ["latin"] });

type MainLayoutProps = { children: React.ReactNode | React.ReactNode[] };

export default function MainLayout({ children }: MainLayoutProps) {
  return <div className={INTER_FONT.className}>{children}</div>;
}
