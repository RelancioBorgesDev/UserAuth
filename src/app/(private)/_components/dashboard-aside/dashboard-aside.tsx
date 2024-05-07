"use client";
import { BarChart, FolderGit, Home } from "lucide-react";
import React from "react";
import AsideNav from "./components/aside-nav/aside-nav";
import { usePathname } from "next/navigation";

export default function DashboardAside() {
  const currentPath = usePathname();
  return (
    <aside className="w-96  h-[calc(100vh-82px)] flex flex-col gap-4  max-lg:w-full max-lg:h-fit max-lg:py-0 fixed z-50 ">
      <AsideNav
        href="/dashboard"
        icon={Home}
        name="Inicio"
        currentPath={currentPath}
      />
      <AsideNav
        href="/dashboard/data"
        icon={BarChart}
        name="Dados"
        currentPath={currentPath}
      />
      <AsideNav
        href="/dashboard/repos"
        icon={FolderGit}
        name="Repositorios"
        currentPath={currentPath}
      />
    </aside>
  );
}
