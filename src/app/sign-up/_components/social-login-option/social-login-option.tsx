import React, { ElementType } from "react";

interface SocialLoginOptionProps {
  icon: ElementType;
  text: string;
}

export default function SocialLoginOption({
  icon: Icon,
  text,
}: SocialLoginOptionProps) {
  return (
    <button className="flex items-center gap-4 border-2 shadow-xl py-2 px-12 rounded">
      <Icon size={24} />
      <span>{text}</span>
    </button>
  );
}
