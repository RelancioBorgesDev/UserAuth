import React, { ReactNode } from "react";

interface InputWrapperProps {
  children: ReactNode;
}
export default function InputWrapper({ children }: InputWrapperProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}
