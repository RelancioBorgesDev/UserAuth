"use client";
import { Input } from "@/components/input/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function Setting() {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

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
    <div className="text-white">
      <h1 className="text-4xl font-bold max-sm:text-center">Configurações</h1>
      <form>
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
      </form>
    </div>
  );
}
