import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export type TeamMemberCardProps = {
  name: string;
  role: string;
  imgURL: string;
  linkedInURL: string;
};

export function TeamMemberCard({
  name,
  imgURL,
  linkedInURL,
  role,
}: TeamMemberCardProps) {
  return (
    <div className="rounded-md w-fit bg-white shadow-md shadow-sky-800 hover:scale-[1.02] hover:duration-200 duration-200 ease-in hover:shadow-none">
      <Image src={imgURL} alt={`Profile pic - ${name}`} width={256} height={256} className="rounded-t-md"/>
      <div className="flex flex-col items-center gap-1 py-4">
        <h3 className="text-xl font-normal text-sky-950">{name}</h3>
        <h4 className="text-base font-normal text-slate-800">{role}</h4>
        <Link href={linkedInURL} className="text-[#0072b1] text-3xl mt-3">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
