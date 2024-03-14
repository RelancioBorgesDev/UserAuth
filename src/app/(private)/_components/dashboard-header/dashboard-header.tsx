import { Input } from "@/components/input/input";
import Logo from "@/components/logo/logo";
import {
  Bell,
  LogOut,
  MessageCircleQuestion,
  Moon,
  Search,
  Settings,
  User,
} from "lucide-react";
import React from "react";
import HeaderSearch from "./components/header-search/header-search";
import HeaderAvatar from "./components/header-avatar/header-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <header className="border-b-2 border-gray-600/90 w-full py-2 px-5 flex items-center justify-between">
      <Logo variant={"white"} />
      {/* Search Input */}
      <HeaderSearch />
      {/* Avatar */}
      <div className="flex items-center gap-8">
        <Moon className="text-white" />
        <Bell className="text-white" />
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
              <DropdownMenuItem className="flex items-center gap-2 bg-red-500 focus:bg-red-600">
                <LogOut />
                Sair
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
