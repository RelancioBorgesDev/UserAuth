import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const logoVariants = cva(
  "w-fit px-4 py-2 rounded-full font-bold text-2xl tracking-wide",
  {
    variants: {
      variant: {
        dark: "bg-zinc-950 text-white",
        white: "bg-white text-zinc-900",
      },
    },
  }
);

interface LogoProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof logoVariants> {}

export default function Logo({ className, variant, ...props }: LogoProps) {
  return (
    <h1 className={cn(logoVariants({ className, variant }))} {...props}>
      RBDev
    </h1>
  );
}
