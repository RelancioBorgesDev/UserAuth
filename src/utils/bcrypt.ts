"use server";

import bcrypt from "bcrypt";

export async function encryptPass(pass: string) {
  return bcrypt.hashSync(pass, 10);
}

export async function comparePasswords(
  password: string | undefined,
  hashedPassword: string
) {
  if (password) {
    const passEqual = bcrypt.compareSync(password, hashedPassword);
    return passEqual;
  }

  return false;
}
