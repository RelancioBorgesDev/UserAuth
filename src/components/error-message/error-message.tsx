import { ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return <small className="text-red-500 font-extralight">{children}</small>;
}
