"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas/schemas";
import { v4 as uuid } from "uuid";
import { RegisterFormData } from "@/app/auth/(auth)/sign-up/_components/register-form/register-form";
import { api } from "@/api/axios/axios";
import { emailAlreadyExists } from "@/utils/userValidation";
import { encryptPass } from "@/utils/bcrypt";
import { ResponseObjectType, responseObject } from "@/utils/responseObject";

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

export const createUserAction = async (
  data: RegisterFormData
): Promise<ResponseObjectType> => {
  let emailAlreadyInUse = await emailAlreadyExists(data.email);
  if (emailAlreadyInUse) {
    return responseObject(
      409,
      "O email já existe, por favor escolha um novo email."
    );
  } else {
    const newUser: RegisterFormData = {
      id: uuid(),
      name: data.name,
      userName: data.userName,
      email: data.email,
      password: await encryptPass(data.password),
    };

    await api.post("user", newUser);

    return responseObject(201, "Usuário criado com sucesso.");
  }
};
