"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schemas/schemas";
import { v4 as uuid } from "uuid";
import { RegisterFormData } from "@/app/auth/(auth)/sign-up/_components/register-form/register-form";
import { api } from "@/libs/axios/axios";
import { emailAlreadyExists } from "@/utils/userValidation";

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
    return {
      status: 500,
      message:
        "An error occurred while creating the user. Please try again later.",
    };
  }
};



