import Link from "next/link";
import React from "react";
import LoginForm from "./components/login-form/login-form";
import Logo from "@/components/logo/logo";

export default function SignIn() {
  return (
    <main className="w-full h-screen flex justify-between">
      <div className="w-1/2 px-4 py-8 bg-white h-full flex flex-col ">
        <Link href={"/"} className="w-fit">
          <Logo variant={"dark"} />
        </Link>
        <div className="h-screen text-zinc-950 font-bold flex flex-col gap-2  justify-center">
          <h1 className="text-4xl">Faça login em nossa plataforma</h1>
          <p className="text-md text-gray-600 font-extralight">
            Aproveite os nossos serviços
          </p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center shadow-2xl relative">
        <Link href={"/auth/sign-up"} className="absolute top-5 right-5 ">
          <h3 className="text-gray-400 hover:underline">
            Não possui conta ? Faça seu cadastro
          </h3>
        </Link>
        <LoginForm />
      </div>
    </main>
  );
}
