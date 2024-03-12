"use client";
import InputWrapper from "../input-wrapper/input-wrapper";
import { BiRightArrow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input/input";
import Button from "@/components/button/button";
import ErrorMessage from "@/components/error-message/error-message";
import { RegisterSchema } from "@/schemas/schemas";
import { createUserAction, registerAction } from "@/actions/register";
import { toast } from "sonner";
import { v4 as uuid } from "uuid";

export interface RegisterFormData {
  id?: string;
  fullname: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  async function handleUserCreation(data: RegisterFormData) {
    const userData: RegisterFormData = {
      id: uuid().toString(),
      fullname: data.fullname,
      username: data.username,
      email: data.email,
      phone_number: data.phone_number,
      password: data.password,
    };

    try {
      const message = await registerAction(userData);
      const newUser = await createUserAction(userData);
      message.success && toast.success(message.success);
      reset();
    } catch (error: any) {
      console.error("Error creating user:", error);
      toast.error("Failed to create user");
    }
  }

  return (
    <form
      action=""
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit(handleUserCreation)}
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
        <Input
          type="tel"
          placeholder="Número de telefone"
          {...register("phone_number")}
          variant={errors.phone_number ? "error" : undefined}
        />
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
      <Button variant={"black"} type="submit">
        Continuar <BiRightArrow className="group-hover:scale-110" />
      </Button>
    </form>
  );
}
