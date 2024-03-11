"use client";
import { useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";
import * as z from "zod";

import { Input } from "@/components/input/input";
import Separator from "@/components/separator/separator";
import SocialLoginOption from "@/components/social-login-option/social-login-option";
import Button from "@/components/button/button";
import ErrorMessage from "@/components/error-message/error-message";
interface LoginFormData {
  email: string;
  password: string;
}

const LoginSchema: z.ZodType<LoginFormData> = z.object({
  email: z.string().email({ message: "Email deve ser preenchido" }),
  password: z
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

    if (errors.password) {
      toast.error("Erro no campo de password.");
    }
  }, [errors]);
  return (
    <form
      action=""
      className="w-[400px] bg-white rounded-lg flex flex-col px-4 py-8  shadow-2xl gap-3"
      onSubmit={handleSubmit(handleSubmitLoginForm)}
    >
      <Input
        placeholder="E-mail"
        type="email"
        {...register("email")}
        variant={errors.email ? "error" : undefined}
      />
      {errors.email?.message && (
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      )}

      <Input
        placeholder="Senha"
        type="password"
        {...register("password")}
        variant={errors.password ? "error" : undefined}
      />
      {errors.password?.message && (
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      )}
      <Button variant={"black"} type="submit">
        Logar
      </Button>
      <Separator orientation={"horizontal"} />
      <div className="flex flex-col justify-around w-full gap-2">
        <SocialLoginOption
          href="/"
          icon={FaGoogle}
          text="Faça login com o Google"
        />
        <SocialLoginOption
          href="/"
          icon={FaGithub}
          text="Faça login com o Github"
        />
      </div>

      <Toaster richColors visibleToasts={2} />
    </form>
  );
}
