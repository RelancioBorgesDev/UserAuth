import React from "react";
import Separator from "../Separator/Separator";
import SocialWrapper from "./components/SocialWrapper/SocialWrapper";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import Input from "../Input/Input";

export default function LoginForm() {
  return (
    <form
      action=""
      className="w-[400px] bg-zinc-900 rounded-lg flex flex-col px-4 py-8 gap-8 shadow-2xl"
    >
      <Input placeholder="E-mail" type="email" />
      <Input placeholder="Senha" type="senha" />
      <button className="w-full bg-white p-2 font-bold text-slate-950 rounded border-0">
        Enviar
      </button>
      <Separator />
      <div className="flex justify-around w-full">
        <SocialWrapper link="/" icon={FcGoogle} color="" />
        <SocialWrapper link="/" icon={FaXTwitter} color="text-white" />
        <SocialWrapper link="/" icon={FaFacebook} color="text-blue-500" />
      </div>
    </form>
  );
}
