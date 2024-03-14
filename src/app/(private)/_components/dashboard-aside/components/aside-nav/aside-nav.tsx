import { Home } from "lucide-react";
import Link from "next/link";
import React, { ElementType } from "react";

interface AsideNavProps {
  href: string;
  icon: ElementType;
  name: string;
}

export default function AsideNav({ href, icon: Icon, name }: AsideNavProps) {
  return (
    <Link href={href}>
      <button className="text-white flex items-center gap-2 w-full hover:bg-zinc-900/90 py-4 px-6 cursor-pointer duration-500 ease-in-out">
        <Icon className="" size={22} />
        <span className="text-xl">{name}</span>
      </button>
    </Link>
  );
}
