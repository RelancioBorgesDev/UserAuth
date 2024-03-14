import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Input } from "@/components/input/input";
import Logo from "@/components/logo/logo";
import { BarChart, Home } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import DashboardHeader from "../_components/dashboard-header/dashboard-header";
import DashboardAside from "../_components/dashboard-aside/dashboard-aside";

export default async function DashboardPage() {
  const session = await getServerSession(nextAuthOptions);
  const fullName = session?.user.fullname;
  const userName = session?.user.username;
  return (
    <main className="w-full h-[calc(100vh-82px)] flex flex-col p-8">
      <h1 className="text-white font-bold text-4xl">
        Seja Bem Vindo, {fullName}
      </h1>
    </main>
  );
}
