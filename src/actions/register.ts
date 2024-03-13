"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas/schemas";
import { v4 as uuid } from "uuid";
import { RegisterFormData } from "@/app/auth/(auth)/sign-up/_components/register-form/register-form";
import { api } from "@/libs/axios/axios";
import { emailAlreadyExists } from "@/utils/userValidation";
import { encryptPass } from "@/utils/bcrypt";

export const registerAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validateFields = await RegisterSchema.safeParseAsync(values);

  if (validateFields.success) {
    return { success: "Usuário criado com sucesso !" };
  } else {
    return { error: "Campos inválidos" };
  }
};

export const createUserAction = async (data: RegisterFormData) => {
  let emailAlreadyInUse = await emailAlreadyExists(data.email);
  if (emailAlreadyInUse) {
    return {
      status: 409,
      message: "O email já existe, por favor escolha um novo email.",
    };
  } else {
    const newUser: RegisterFormData = {
      id: uuid(),
      fullname: data.fullname,
      username: data.username,
      email: data.email,
      phone_number: data.phone_number,
      password: await encryptPass(data.password),
    };

    await api.post("user", newUser);

    return {
      status: 201,
      message: "Usuário criado com sucesso",
    };
  }
};
