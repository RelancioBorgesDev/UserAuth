import Input from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import Separator from "@/components/Separator/Separator";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-between">
      <div className="w-1/2 px-4 py-8 bg-zinc-950 h-full flex flex-col ">
        <Logo />
        <div className="h-screen text-white font-bold flex flex-col gap-2  justify-center">
          <h1 className="text-4xl">Titulo da empresa</h1>
          <p className="text-md font-semibold">Subtitulo chamativo</p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center shadow-2xl">
        <form
          action=""
          className="w-[400px] bg-zinc-900 rounded-lg flex flex-col px-4 py-8 gap-8 shadow-2xl"
        >
          <Input placeholder="e-mail" type="email" />
          <Input placeholder="senha" type="senha" />
          <button className="w-full bg-white p-2 font-bold text-cyan-950 rounded-lg">
            Enviar
          </button>
          <Separator />
          <div className="flex justify-around w-full">
            <span className="border-2 border-slate-950 p-2 rounded-lg bg-zinc-950">
              <Link href={""}>
                <FcGoogle size={22} />
              </Link>
            </span>

            <span className="border-2 border-slate-950 p-2 rounded-lg bg-zinc-950">
              <Link href={""}>
                <FaXTwitter size={22} className="text-white" />
              </Link>
            </span>

            <span className="border-2 border-slate-950 p-2 rounded-lg bg-zinc-950">
              <Link href={""}>
                <FaFacebook size={22} className="text-blue-500" />
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}
