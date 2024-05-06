"use client";
import React, { useState } from "react";
import InputWrapper from "../input-wrapper/input-wrapper";
import { BiRightArrow } from "react-icons/bi";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input/input";
import Button from "@/components/button/button";
import ErrorMessage from "@/components/error-message/error-message";

interface RegisterFormData {
  name: string;
  userName: string;
  email: string;
  phone_number: string;
  password: string;
}

const SignUpSchema: z.ZodType<RegisterFormData> = z.object({
  name: z.string().min(1, { message: "Nome completo deve ser preenchido" }),
  userName: z
    .string()
    .min(1, { message: "Nome de usuário deve ser preenchido" }),
  email: z.string().email({ message: "Email deve ser preenchido" }),
  phone_number: z.string().min(1),
  password: z
    .string()
    .min(4, { message: "A senha deve ter no mínimo 4 dígitos" })
    .max(32, { message: "A senha deve ter no máximo 32 dígitos" }),
});

export default function RegisterForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(SignUpSchema),
  });
  const [phone, setPhone] = useState("");
  function onSubmit(data: RegisterFormData) {
    console.log(data);
  }
  return (
    <form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputWrapper>
        <label htmlFor="">Nome completo</label>
        <Input
          type="text"
          {...register("name")}
          variant={errors.name ? "error" : undefined}
        />
        {errors.name?.message && (
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="">Nome de usuário</label>
        <Input
          type="text"
          {...register("userName")}
          variant={errors.userName ? "error" : undefined}
        />
        {errors.userName?.message && (
          <ErrorMessage>{errors.userName?.message}</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="">Endereço de email</label>
        <Input
          type="email"
          {...register("email")}
          variant={errors.email ? "error" : undefined}
        />
        {errors.email?.message && (
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="">Número de telefone</label>
        <Input type="tel" {...register("phone_number")} />
        {errors.phone_number?.message && (
          <ErrorMessage>{errors.phone_number?.message}</ErrorMessage>
        )}
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="">Senha</label>
        <Input
          type="password"
          {...register("password")}
          variant={errors.password ? "error" : undefined}
        />
        {errors.password?.message && (
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        )}
      </InputWrapper>
      <Button variant={"black"}>
        Continuar <BiRightArrow className="group-hover:scale-110" />
      </Button>
    </form>
  );
}
