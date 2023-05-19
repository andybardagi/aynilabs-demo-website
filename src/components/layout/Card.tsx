import React from "react";

export type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export function Card({ title, description, icon }: CardProps) {
  return (
    <div className="border border-slate-200 rounded-md h-full w-full p-4 bg-white shadow-lg shadow-blue-200 hover:shadow-none hover:scale-105 hover:duration-200 transition duration-200">
      <div className="flex flex-row items-center gap-1">
        <span className="text-blue-700 text-2xl inline-block align-middle mr-2">
          {icon}
        </span>
        <h3 className="text-2xl font-semibold text-blue-900">{title}</h3>
      </div>
      <hr className="my-2 border-blue-100" />
      <p className="text-lg">{description}</p>
    </div>
  );
}
