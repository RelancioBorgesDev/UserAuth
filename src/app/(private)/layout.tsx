import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import DashboardHeader from "./_components/dashboard-header/dashboard-header";
import DashboardAside from "./_components/dashboard-aside/dashboard-aside";
import DashboardBreadcrumb from "./_components/dashboard-breadcrumb/dashboard-breadcrumb";

interface PrivateLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <main className="h-screen bg-zinc-950 flex flex-col">
      {/* Dashboard Header */}
      <DashboardHeader />
      <section className="flex flex-1">
        {/* Dashboard Aside */}
        <DashboardAside />
        <main className="flex flex-col flex-1 max-w-full ml-[384px] px-4 py-4">
          <DashboardBreadcrumb />
          {children}
        </main>
      </section>
    </main>
  );
}
