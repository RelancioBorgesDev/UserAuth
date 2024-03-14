"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, MessageCircleQuestion, Settings, User } from "lucide-react";
import Link from "next/link";
import HeaderAvatar from "../header-avatar/header-avatar";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function HeaderDropdownAvatar() {
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });
    location.reload();
    router.replace("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HeaderAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-zinc-950 text-white border-2 border-gray-600/90 p-2 ">
        <DropdownMenuLabel className="flex gap-2">
          <HeaderAvatar />
          <div>
            <h4>{"Relancio Borges"}</h4>
            <h5 className="font-light leading-5">@{"RelancioBorgesDev"}</h5>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/settings/profile"}>
          <DropdownMenuItem className="flex items-center gap-2">
            <User />
            Perfil
          </DropdownMenuItem>
        </Link>

        <Link href={"/settings/help"}>
          <DropdownMenuItem className="flex items-center gap-2">
            <MessageCircleQuestion />
            Ajuda
          </DropdownMenuItem>
        </Link>

        <Link href={"/settings/setting"}>
          <DropdownMenuItem className="flex items-center gap-2">
            <Settings />
            Configurações
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />

        <Link href={"/settings/setting"}>
          <DropdownMenuItem
            className="flex items-center gap-2 bg-red-500 focus:bg-red-600"
            onClick={logout}
          >
            <LogOut />
            Sair
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
