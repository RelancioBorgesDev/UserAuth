import Logo from "@/components/Logo/Logo";
import Separator from "@/components/Separator/Separator";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import InputWrapper from "./_components/input-wrapper/input-wrapper";
import { BiRightArrow } from "react-icons/bi";

export default function SignUp() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-white flex flex-col items-center p-12 gap-4 rounded-md shadow-2xl">
        {/* OAuth Options */}
        <Logo />
        <h1 className="text-xl font-bold text-zinc-950">Crie a sua conta</h1>
        <h4 className="text-gray-500">
          Seja bem vindo, cadastre-se para começar
        </h4>
        <div className="w-full flex items-center justify-around gap-4">
          <button className="flex items-center gap-4 border-2 shadow-xl py-2 px-12 rounded">
            <FaGoogle size={24} />
            Google
          </button>
          <button className="flex items-center gap-4 border-2 shadow-xl py-2 px-12  rounded">
            <FaGithub size={24} />
            Github
          </button>
        </div>
        <div className="flex">
          <Separator separator_type="horizontal" />
          <p className="text-gray-500/60">ou</p>
          <Separator separator_type="horizontal" />
        </div>
        <form className="w-full flex flex-col gap-4">
          <InputWrapper>
            <label htmlFor="">Nome completo</label>
            <input
              className="border-2 p-2 shadow-sm rounded outline-none"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="">Nome de usuário</label>
            <input
              className="border-2 p-2 shadow-sm rounded outline-none"
              type="text"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="">Endereço de email</label>
            <input
              className="border-2 p-2 shadow-sm rounded outline-none"
              type="email"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="">Número de telefone</label>
            <input
              className="border-2 p-2 shadow-sm rounded outline-none"
              type="text"
            />
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="">Senha</label>
            <input
              className="border-2 p-2 shadow-sm rounded outline-none"
              type="password"
            />
          </InputWrapper>

          <button
            type="submit"
            className="bg-zinc-950/85 text-white font-semibold rounded-lg py-2 flex items-center justify-center gap-2 group"
          >
            Continuar
            <BiRightArrow className="group-hover:scale-110" />
          </button>
        </form>
      </div>
    </main>
  );
}
