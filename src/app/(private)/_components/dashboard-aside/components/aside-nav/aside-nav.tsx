import Link from "next/link";
import React, { ElementType } from "react";

interface AsideNavProps {
  href: string;
  icon: ElementType;
  name: string;
  currentPath: string;
}

export default function AsideNav({
  href,
  icon: Icon,
  name,
  currentPath,
}: AsideNavProps) {
  let bgStyle = "";
  if (currentPath === href) {
    bgStyle = "bg-zinc-400/40";
  }
  return (
    <Link href={href}>
      <button
        className={`text-white flex items-center gap-2 w-full hover:bg-zinc-400/40 py-4 px-6 cursor-pointer duration-500 ease-in-out ${bgStyle}`}
      >
        <Icon className="" size={22} />
        <span className="text-xl">{name}</span>
      </button>
    </Link>
  );
}
