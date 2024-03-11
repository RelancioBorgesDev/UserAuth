import React, { ComponentProps, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

const inputVariants = cva("border-2 p-2 shadow-sm rounded outline-none", {
  variants: {
    variant: {
      error: "border-red-500 border-4",
    },
  },
});

interface InputProps
  extends ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, variant, ...props }: InputProps,
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(inputVariants({ className, variant }))}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input, inputVariants };
