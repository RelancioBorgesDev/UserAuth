import { BarChart, Calendar, Camera, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import AsideNav from "./components/aside-nav/aside-nav";

export default function DashboardAside() {
  return (
    <aside className="w-1/5 border-r-2 border-gray-600/90 h-[calc(100vh-82px)] flex flex-col gap-4 py-8">
      <AsideNav href="/dashboard" icon={Home} name="Inicio" />
      <AsideNav href="/dashboard/data" icon={BarChart} name="Dados" />
      <AsideNav href="/dashboard/pictures" icon={Camera} name="Fotos" />
      <AsideNav href="/dashboard" icon={Calendar} name="Eventos" />
    </aside>
  );
}
