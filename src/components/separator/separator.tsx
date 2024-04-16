import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

const separatorVariants = cva(" border-2 border-gray-200", {
  variants: {
    orientation: {
      vertical: "h-full",
      horizontal: "w-full",
    },
  },
});

interface SeparatorProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {}

export default function Separator({
  className,
  orientation,
  ...props
}: SeparatorProps) {
  return (
    <div
      className={cn(separatorVariants({ className, orientation }))}
      {...props}
    />
  );
}
