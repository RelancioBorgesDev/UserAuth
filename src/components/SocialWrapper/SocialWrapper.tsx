import Link from "next/link";
import React, { ElementType } from "react";
interface SocialWrapperProps {
  link: string;
  icon: ElementType;
}
export default function SocialWrapper({
  link,
  icon: Icon,
}: SocialWrapperProps) {
  return (
    <span className="border-2 border-slate-950 p-2 rounded-lg bg-zinc-950">
      <Link href={link}>
        <Icon size={22}/>
      </Link>
    </span>
  );
}
