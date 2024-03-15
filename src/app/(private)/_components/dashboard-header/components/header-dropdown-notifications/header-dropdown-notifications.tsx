import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HeaderDropdownNotifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative">
          <span>
            <Bell className="text-white" />
          </span>
          <span className="w-5 h-5 rounded-full bg-red-500 p-2 text-white absolute flex items-center justify-center -top-3 -right-3">
            1
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-zinc-950 text-white border-2 border-gray-600/90 p-2 ">
        <DropdownMenuLabel className="flex gap-2">
          <h1>Notificações</h1>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/settings/profile"}>
          <DropdownMenuItem className="flex items-center gap-8">
            <span>
              <Mail />
            </span>
            <div>
              <h1>Aviso de boas vindas</h1>
              <p className="text-sm text-gray-500/95">Há 2 horas</p>
            </div>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
