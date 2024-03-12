"use server";

import { LoginSchema } from "@/schemas/schemas";
import * as z from "zod";

import { LoginFormData } from "@/app/auth/(auth)/sign-in/components/login-form/login-form";

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = await LoginSchema.safeParseAsync(values);

  if (validateFields.success) {
    return { success: "Email enviado !" };
  } else {
    return { error: "Campos inválidos" };
  }
};
