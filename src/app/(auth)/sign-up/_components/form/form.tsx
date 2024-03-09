"use client";
import React from "react";
import InputWrapper from "../input-wrapper/input-wrapper";
import { BiRightArrow } from "react-icons/bi";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input/input";
import Button from "@/components/button/button";

interface SignUpFormData {
  fullname: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
}

const SignUpSchema: z.ZodType<SignUpFormData> = z.object({
  fullname: z.string(),
  username: z.string(),
  email: z.string().email({ message: "Email deve ser preenchido" }),
  phone_number: z.string(),
  password: z
    .string()
    .min(4, { message: "A senha deve ter no mínimo 4 dígitos" })
    .max(32, { message: "A senha deve ter no máximo 32 dígitos" }),
});
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
  });
  return (
    <form className="w-full flex flex-col gap-4">
      <InputWrapper>
        <label htmlFor="">Nome completo</label>
        <Input
          className="border-2 p-2 shadow-sm rounded outline-none"
          type="text"
          {...register("fullname")}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="">Nome de usuário</label>
        <Input
          className="border-2 p-2 shadow-sm rounded outline-none"
          type="text"
          {...register("username")}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="">Endereço de email</label>
        <Input
          className="border-2 p-2 shadow-sm rounded outline-none"
          type="email"
          {...register("email")}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="">Número de telefone</label>
        <Input
          className="border-2 p-2 shadow-sm rounded outline-none"
          type="text"
          {...register("phone_number")}
        />
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="">Senha</label>
        <Input
          className="border-2 p-2 shadow-sm rounded outline-none"
          type="password"
          {...register("password")}
        />
      </InputWrapper>
      <Button variant={"black"}>
        Continuar <BiRightArrow className="group-hover:scale-110" />
      </Button>
    </form>
  );
}
