import { FaGithub } from "react-icons/fa6";

import Link from "next/link";
import SocialLoginOption from "@/components/social-login-option/social-login-option";
import Logo from "@/components/logo/logo";
import Separator from "@/components/separator/separator";
import RegisterForm from "./_components/register-form/register-form";
import AuthOptions from "./_components/auth-options/auth-options";

export default function SignUp() {
  return (
    <main className="flex items-center justify-center h-screen relative">
      <Link href={"/auth/sign-in"} className="absolute top-5 left-5 ">
        <h3 className="text-gray-400 hover:underline">
          Já possui conta ? Faça seu login
        </h3>
      </Link>
      <div className="bg-white flex flex-col items-center p-12 gap-4 rounded-md shadow-2xl">
        <Link href={"/"} className="w-fit">
          <Logo variant={"dark"} />
        </Link>
        <h1 className="text-xl font-bold text-zinc-950">Crie a sua conta</h1>
        <h4 className="text-gray-500">
          Seja bem vindo, cadastre-se para começar
        </h4>
        {/* OAuth Options */}
        <AuthOptions />
        {/* Separating the two types of auth */}
        <div className="w-full flex items-center gap-4">
          <Separator orientation={"horizontal"} />
          <p className="text-gray-500/60">ou</p>
          <Separator orientation={"horizontal"} />
        </div>
        {/* OAuth Form */}
        <RegisterForm />
      </div>
    </main>
  );
}
