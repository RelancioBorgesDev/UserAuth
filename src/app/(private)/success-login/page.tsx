import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default async function SuccessLoginPage() {
  const session = await getServerSession(nextAuthOptions);
  const userName = session?.user.fullname;
  return (
    <main className="w-full h-screen flex  items-center justify-center gap-4">
      <h1 className="text-white font-bold text-5xl">Olá, {userName}, seja bem vindo, você está logado com sucesso</h1>
      <FaCheck fill="white" size={64} />
    </main>
  );
}
