"use client";
import React from "react";
import Separator from "../Separator/Separator";
import SocialWrapper from "./components/SocialWrapper/SocialWrapper";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import Input from "../Input/Input";
import * as z from "zod";
import { useForm } from "react-hook-form";import { zodResolver } from "@hookform/resolvers/zod";
interface LoginFormData {
  email: string;
  senha: string;
}

const LoginSchema: z.ZodType<LoginFormData> = z.object({
  email: z.string().email(),
  senha: z.string().min(4).max(12),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  function handleSubmitLoginForm(data: LoginFormData) {
    console.log(data);
  }
  return (
    <form
      action=""
      className="w-[400px] bg-zinc-900 rounded-lg flex flex-col px-4 py-8 gap-8 shadow-2xl"
      onSubmit={handleSubmit(handleSubmitLoginForm)}
    >
      <Input placeholder="E-mail" type="email" {...register("email")} />
      <Input placeholder="Senha" type="senha" {...register("senha")} />
      <button className="w-full bg-white p-2 font-bold text-slate-950 rounded border-0">
        Enviar
      </button>
      <Separator />
      <div className="flex justify-around w-full">
        <SocialWrapper link="/" icon={FcGoogle} color="" />
        <SocialWrapper link="/" icon={FaXTwitter} color="text-white" />
        <SocialWrapper link="/" icon={FaFacebook} color="text-blue-500" />
      </div>
    </form>
  );
}
