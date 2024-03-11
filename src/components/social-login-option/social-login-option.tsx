import Link from "next/link";
import React, { ElementType } from "react";

interface SocialLoginOptionProps {
  icon: ElementType;
  text: string;
  href: string;
}

export default function SocialLoginOption({
  icon: Icon,
  text,
  href,
}: SocialLoginOptionProps) {
  return (
    <Link href={href}>
      <button className="w-full flex items-center gap-4 bg-slate-100/70  py-2 px-12 rounded hover:bg-zinc-950/80 hover:text-white ease-in-out duration-100">
        <Icon size={24} />
        <span>{text}</span>
      </button>
    </Link>
  );
}
