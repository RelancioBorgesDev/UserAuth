import React, { InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/utils/cn";

const inputVariants = cva("border-2 p-2 shadow-sm rounded outline-none", {
  variants: {},
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

function Input({ className, ...props }: InputProps) {
  return <input className={cn(inputVariants({ className }))} {...props} />;
}

export { Input, inputVariants };
