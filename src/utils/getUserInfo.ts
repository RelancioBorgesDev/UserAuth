"use server";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function getSession() {
  const session = await getServerSession(nextAuthOptions);

  return session;
}
