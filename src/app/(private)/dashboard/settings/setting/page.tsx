"use client";
import HeaderAvatar from "@/app/(private)/_components/dashboard-header/components/header-avatar/header-avatar";
import { Input } from "@/components/input/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getSession } from "@/utils/getUserInfo";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function Setting() {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userInitials, setUserInitials] = useState<string | undefined>("");

  async function getUserName() {
    const session = await getSession();

    let userName = "";
    if (session) {
      userName = session.user.name;
    }

    setUserInitials(userName?.split("")[0]);
  }
  useEffect(() => {
    getUserName();
  }, []);

  async function retrieveUserData() {
    if (session) {
      if (session.user) {
        const { name, email, userName } = session.user;
        setName(name);
        setEmail(email);
        setUserName(userName);
      }
    }
  }

  useEffect(() => {
    retrieveUserData();
  }, [session]);
  return (
    <div className="text-white flex flex-col">
      <h1 className="text-4xl font-bold max-sm:text-center">Configurações</h1>
      <div className="flex items-center gap-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={"profile_pic"} />
          <AvatarFallback className="text-black text-4xl">{userInitials}</AvatarFallback>
        </Avatar>
        <h1 className="text-7xl">{name}</h1>
      </div>
      <form className="flex flex-col gap-4">
        <div>
          <Label>Nome</Label>
          <Input className="text-zinc-950" type="text" value={name} />
        </div>
        <div>
          <Label>Username</Label>
          <Input className="text-zinc-950" type="text" value={userName} />
        </div>
        <div>
          <Label>Email</Label>
          <Input className="text-zinc-950" type="text" value={email} />
        </div>

        <div className="w-full flex gap-4 items-center">
          <Button variant={"outline"} className="bg-white text-zinc-950">
            Cancelar
          </Button>
          <Button className="bg-zinc-700">Salvar</Button>
        </div>
      </form>
    </div>
  );
}
