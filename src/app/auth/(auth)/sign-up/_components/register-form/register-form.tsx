"use client";
import InputWrapper from "../input-wrapper/input-wrapper";
import { BiRightArrow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/input/input";
import Button from "@/components/button/button";
import ErrorMessage from "@/components/error-message/error-message";
import { RegisterSchema } from "@/schemas/schemas";
import { createUserAction } from "@/actions/register";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
export interface RegisterFormData {
  id?: string | null | undefined;
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  async function handleUserCreation(data: RegisterFormData) {
    try {
      const userCreationAction = await createUserAction(data);
      if (userCreationAction.status === 409) {
        return toast.error(userCreationAction.message);
      } else {
        reset();
        toast.success(userCreationAction.message);
        setTimeout(() => {
          router.push("/auth/sign-in");
        }, 1000);
      }
    } catch (error: any) {
      console.error("Error ao criar user:", error);
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

      <Toaster richColors visibleToasts={2} />
    </form>
  );
}
