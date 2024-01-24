"use client";
import React, { useEffect } from "react";
import Separator from "../Separator/Separator";
import SocialWrapper from "./components/SocialWrapper/SocialWrapper";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import Input from "../Input/Input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";
interface LoginFormData {
  email: string;
  senha: string;
}

const LoginSchema: z.ZodType<LoginFormData> = z.object({
  email: z.string().email({ message: "Email deve ser preenchido" }),
  senha: z
    .string()
    .min(4, { message: "A senha deve ter no mínimo 4 dígitos" })
    .max(32, { message: "A senha deve ter no máximo 32 dígitos" }),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  function handleSubmitLoginForm(data: LoginFormData) {
    toast.success("Logado com sucesso");
    console.log(data);
    reset();
  }

  useEffect(() => {
    if (errors.email) {
      toast.error("Erro no campo de email.");
    }

    if (errors.senha) {
      toast.error("Erro no campo de senha.");
    }
  }, [errors]);
  return (
    <form
      action=""
      className="w-[400px] bg-zinc-900 rounded-lg flex flex-col px-4 py-8  shadow-2xl gap-3"
      onSubmit={handleSubmit(handleSubmitLoginForm)}
    >
      <Input placeholder="E-mail" type="email" {...register("email")} />
      {errors.email?.message && (
        <small className="text-red-500 font-extralight">
          {errors.email?.message}
        </small>
      )}

      <Input placeholder="Senha" type="password" {...register("senha")} />
      {errors.senha?.message && (
        <small className="text-red-500 font-extralight">
          {errors.senha?.message}
        </small>
      )}
      <button
        className="w-full bg-white p-2 font-bold text-slate-950 rounded border-0 hover:brightness-90"
        type="submit"
      >
        Enviar
      </button>
      <Separator />
      <div className="flex flex-col justify-around w-full gap-2">
        <SocialWrapper
          link="/"
          icon={FcGoogle}
          color=""
          text="Faça login com o Google"
        />
        <SocialWrapper
          link="/"
          icon={FaGithub}
          color="text-white"
          text="Faça login com o Github"
        />
      </div>

      <Toaster richColors />
    </form>
  );
}
