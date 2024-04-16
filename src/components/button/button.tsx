import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  "font-semibold rounded-lg py-2 flex items-center justify-center gap-2 group hover:brightness-95 ease-in-out duration-500",
  {
    variants: {
      variant: {
        black: "bg-zinc-950/85 text-white",
        white: "bg-white text-zinc-950",
      },
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  className,
  variant,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ className, variant }))} {...props}>
      {children}
    </button>
  );
}
