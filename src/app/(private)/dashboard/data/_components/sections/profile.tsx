import Separator from "@/components/separator/separator";
import { useGithubDataContext } from "@/contexts/GithubDataContext";
import { formatDate } from "@/utils/formatDate";
import {
  Building,
  Calendar,
  Computer,
  Mail,
  User,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Profile() {
  const { userData } = useGithubDataContext();
  const {
    login,
    name,
    email,
    company,
    followers,
    following,
    blog,
    created_at,
  } = userData;
  return (
    <section className="w-full flex flex-col gap-8 px-8 py-4 max-lg:px-2">
      <div className="w-full flex flex-col items-center gap-2 bg-zinc-800 p-4 rounded-lg h-fit">
        <header className="flex flex-col items-center gap-4">
          <Image
            className="rounded-full"
            src={`http://github.com/${login}.png`}
            alt="ProfilePic"
            width={120}
            height={120}
          />

          <div className="px-4 flex items-center gap-4 rounded-full">
            <span className="text-2xl uppercase">{name}</span>
          </div>
        </header>

        <div className="flex items-center gap-4">
          <div className="border-2 px-4 py-2 border-white flex items-center gap-4 rounded-full">
            <UserCheck className="text-white" size={32} />
            Seguindo {following}
          </div>
          <div className="border-2 px-4 py-2 border-white flex items-center gap-4 rounded-full">
            <UserCheck className="text-white" size={32} />
            {followers} Seguidores
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 p-4 rounded-lg flex flex-col gap-4">
        <h1 className="text-xl">Informações Gerais</h1>
        <span className="flex items-center gap-2">
          <User className="text-white" size={32} />
          Tag do perifl: @{login}
        </span>
        <Separator />
        <span className="flex items-center gap-2">
          <Mail className="text-white" size={32} />
          Email: {email}
        </span>
        <Separator />

        <span className="flex items-center gap-2">
          <Building className="text-white" size={32} />
          Empresa: {company ? company : "Inativo"}
        </span>
        <Separator />
        <span className="flex items-center gap-2">
          <Computer className="text-white" size={32} />
          Blog: {blog ? blog : "Inativo"}
        </span>
        <Separator />
        <span className="flex items-center gap-2">
          <Calendar className="text-white" size={32} />
          Conta criada em: {formatDate(created_at)}
        </span>
      </div>
    </section>
  );
}
