"use client";
import React, { useState } from "react";
import InputWrapper from "../input-wrapper/input-wrapper";
import { BiRightArrow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input/input";
import Button from "@/components/button/button";
import ErrorMessage from "@/components/error-message/error-message";
import { SignUpSchema } from "@/schemas/schemas";

export interface RegisterFormData {
  fullname: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
}

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
          {...register("fullname")}
          variant={errors.fullname ? "error" : undefined}
        />
        {errors.fullname?.message && (
          <ErrorMessage>{errors.fullname?.message}</ErrorMessage>
        )}
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="">Nome de usuário</label>
        <Input
          type="text"
          {...register("username")}
          variant={errors.username ? "error" : undefined}
        />
        {errors.username?.message && (
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
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
