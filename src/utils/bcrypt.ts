"use server";

import bcrypt from "bcrypt";
import { getUserById } from "./userValidation";

export async function encryptPass(pass: string) {
  return bcrypt.hashSync(pass, 10);
}

export async function decryptPass(userId: string, pass: string) {
  const user = await getUserById(userId);
  if (!user) {
    return {
      status: 404,
      message: "Usuário não encontrado",
    };
  }

  const passEqual = await bcrypt.compare(pass, user.password);

  return passEqual;
}
