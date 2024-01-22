import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ placeholder, ...rest }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      {...rest}
      className={` p-4 rounded-md border-2 border-zinc-600 bg-transparent outline-none text-white placeholder:text-gray-600`}
    />
  );
}
