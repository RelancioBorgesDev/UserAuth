import { FaGithub, FaGoogle } from "react-icons/fa6";
import Logo from "@/components/Logo/Logo";
import Separator from "@/components/Separator/Separator";
import Form from "./_components/form/form";
import SocialLoginOption from "./_components/social-login-option/social-login-option";

export default function SignUp() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-white flex flex-col items-center p-12 gap-4 rounded-md shadow-2xl">
        <Logo />
        <h1 className="text-xl font-bold text-zinc-950">Crie a sua conta</h1>
        <h4 className="text-gray-500">
          Seja bem vindo, cadastre-se para começar
        </h4>
        {/* OAuth Options */}
        <div className="w-full flex items-center justify-around gap-4">
          <SocialLoginOption icon={FaGoogle} text="Google" />
          <SocialLoginOption icon={FaGithub} text="Github" />
        </div>
        {/* Separating the two types of auth */}
        <div className="flex">
          <Separator separator_type="horizontal" />
          <p className="text-gray-500/60">ou</p>
          <Separator separator_type="horizontal" />
        </div>
        {/* OAuth Form */}
        <Form />
      </div>
    </main>
  );
}
