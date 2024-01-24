import React, { InputHTMLAttributes } from "react";
import { ForwardedRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = React.forwardRef(
  (
    { name, placeholder, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        {...rest}
        name={name}
        ref={ref}
        placeholder={placeholder}
        className={`p-4 rounded-md border-2 border-zinc-600 bg-transparent outline-none text-white placeholder:text-gray-00 focus-within:border-2 focus-within:border-slate-50`}
      />
    );
  }
) as React.ForwardRefRenderFunction<HTMLInputElement, InputProps>;

Input.displayName = "Input";

export default Input;
