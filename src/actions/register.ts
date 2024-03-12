"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas/schemas";
import { v4 as uuid } from "uuid";
import { RegisterFormData } from "@/app/auth/(auth)/sign-up/_components/register-form/register-form";
import { api } from "@/libs/axios/axios";

export const registerAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validateFields = await RegisterSchema.safeParseAsync(values);

  if (validateFields.success) {
    return { success: "Email enviado !" };
  } else {
    return { error: "Campos inválidos" };
  }
};

export const createUserAction = async (data: RegisterFormData) => {
  const newUser: RegisterFormData = {
    id: uuid(),
    fullname: data.fullname,
    username: data.username,
    email: data.email,
    phone_number: data.phone_number,
    password: bcrypt.hashSync(data.password, 10),
  };

  await api.post("user", newUser);
  return newUser;
};
