"use server";

import { RegisterFormData } from "@/app/auth/(auth)/sign-up/_components/register-form/register-form";

export const register = (data: RegisterFormData) => {
  console.log(data);
};
