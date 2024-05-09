import React, { ElementType } from "react";

interface CardHelpProps {
  title: string;
  description: string;
  icon: ElementType;
}

export default function CardHelp({
  title,
  description,
  icon: Icon,
}: CardHelpProps) {
  return (
    <div className="bg-white w-96 h-72 flex flex-col text-center items-center justify-center gap-4  text-zinc-950 rounded-lg">
      <Icon size={64} />
      <h1 className="font-bold text-4xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
