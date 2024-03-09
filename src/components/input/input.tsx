import React, { InputHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

const inputVariants = cva("border-2 p-2 shadow-sm rounded outline-none", {
  variants: {},
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props }: InputProps,
  ref
) {
  return (
    <input ref={ref} className={cn(inputVariants({ className }))} {...props} />
  );
});

Input.displayName = "Input";

export { Input, inputVariants };
