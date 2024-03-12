"use server";

import { RegisterSchema } from "@/schemas/schemas";
import * as z from "zod";

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = await RegisterSchema.safeParseAsync(values);

  if (validateFields.success) {
    return { success: "Email enviado !" };
  } else {
    return { error: "Campos inválidos" };
  }
};
