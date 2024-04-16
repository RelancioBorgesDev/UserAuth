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
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { useEffect, useState } from "react";
import { getSession } from "@/utils/getUserInfo";

export default function HeaderDropdownAvatar() {
  const router = useRouter();

  const [userName, setUserName] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>();

  async function logout() {
    await signOut({
      redirect: false,
    });
    location.reload();
    router.replace("/");
  }
  async function setInfos() {
    const session = await getSession();

    if (session) {
      setUserName(session.user.fullname);
      setUserEmail(session.user.email);
    }
  }

  useEffect(() => {
    setInfos();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HeaderAvatar profile_pic="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-zinc-950 text-white border-2 border-gray-600/90 p-2 ">
        <DropdownMenuLabel className="flex gap-2">
          <HeaderAvatar profile_pic="" />
          <div>
            <h4>{userName}</h4>
            <h5 className="font-light leading-5">@{userEmail}</h5>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={"/dashboard/settings/help"}>
          <DropdownMenuItem className="flex items-center gap-2">
            <MessageCircleQuestion />
            Ajuda
          </DropdownMenuItem>
        </Link>

        <Link href={"/dashboard/settings/setting"}>
          <DropdownMenuItem className="flex items-center gap-2">
            <Settings />
            Configurações
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />

        <Link href={"/dashboard/settings/setting"}>
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
