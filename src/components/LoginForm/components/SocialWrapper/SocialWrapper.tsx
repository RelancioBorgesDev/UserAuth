import Link from "next/link";
import React, { ElementType } from "react";
interface SocialWrapperProps {
  link: string;
  icon: ElementType;
  color: string;
  text: string;
}
export default function SocialWrapper({
  link,
  icon: Icon,
  color,
  text,
}: SocialWrapperProps) {
  return (
    <span
      className={`border-2 border-slate-950 p-2 rounded-lg text-zinc-950 bg-white ${color} hover:brightness-90`}
    >
      <Link href={link} className="flex items-center justify-center gap-4">
        <Icon size={22} />
        <p className="font-bold">{text}</p>
      </Link>
    </span>
  );
}
