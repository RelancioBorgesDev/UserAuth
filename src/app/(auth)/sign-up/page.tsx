import { FaGithub, FaGoogle } from "react-icons/fa6";

import Form from "./_components/form/form";
import Link from "next/link";
import SocialLoginOption from "@/components/social-login-option/social-login-option";
import Logo from "@/components/logo/logo";
import Separator from "@/components/separator/separator";

export default function SignUp() {
  return (
    <main className="flex items-center justify-center h-screen relative">
      <Link href={"/"} className="absolute top-5 left-5 ">
        <h3 className="text-gray-400 hover:underline">
          Já possui conta ? Faça seu login
        </h3>
      </Link>
      <div className="bg-white flex flex-col items-center p-12 gap-4 rounded-md shadow-2xl">
        <Logo variant={"dark"} />
        <h1 className="text-xl font-bold text-zinc-950">Crie a sua conta</h1>
        <h4 className="text-gray-500">
          Seja bem vindo, cadastre-se para começar
        </h4>
        {/* OAuth Options */}
        <div className="w-full flex items-center justify-around gap-4">
          <SocialLoginOption icon={FaGoogle} href="#" text="Google" />
          <SocialLoginOption icon={FaGithub} href="#" text="Github" />
        </div>
        {/* Separating the two types of auth */}
        <div className="w-full flex items-center gap-4">
          <Separator orientation={"horizontal"} />
          <p className="text-gray-500/60">ou</p>
          <Separator orientation={"horizontal"} />
        </div>
        {/* OAuth Form */}
        <Form />
      </div>
    </main>
  );
}
