import React, { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const dataNavItemVariants = cva(
  "px-4 py-2 border-2 border-white rounded-full cursor-pointer ",
  {
    variants: {
      variant: {
        white: "bg-white text-zinc-950",
      },
    },
  }
);

interface DataNavItemProps
  extends ComponentProps<"li">,
    VariantProps<typeof dataNavItemVariants> {
  children: ReactNode;
}

export default function DataNavItem({
  children,
  className,
  variant,
  ...props
}: DataNavItemProps) {
  return (
    <li className={cn(dataNavItemVariants({ className, variant }))} {...props}>
      {children}
    </li>
  );
}
