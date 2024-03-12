import { LoginFormData } from "@/app/auth/(auth)/sign-in/components/login-form/login-form";
import { RegisterFormData } from "@/app/auth/(auth)/sign-up/_components/register-form/register-form";
import * as z from "zod";

export const LoginSchema: z.ZodType<LoginFormData> = z.object({
  email: z.string().email({ message: "Email deve ser preenchido" }),
  password: z
    .string()
    .min(4, { message: "A senha deve ter no mínimo 4 dígitos" })
    .max(32, { message: "A senha deve ter no máximo 32 dígitos" }),
});

export const RegisterSchema: z.ZodType<RegisterFormData> = z.object({
  fullname: z.string().min(1, { message: "Nome completo deve ser preenchido" }),
  username: z
    .string()
    .min(1, { message: "Nome de usuário deve ser preenchido" }),
  email: z.string().email({ message: "Email deve ser preenchido" }),
  phone_number: z.string().min(1),
  password: z
    .string()
    .min(4, { message: "A senha deve ter no mínimo 4 dígitos" })
    .max(32, { message: "A senha deve ter no máximo 32 dígitos" }),
});
