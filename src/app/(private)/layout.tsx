import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Lexend } from "next/font/google";
import { Metadata } from "next";
import DashboardHeader from "./_components/dashboard-header/dashboard-header";
import DashboardAside from "./_components/dashboard-aside/dashboard-aside";

interface PrivateLayoutProps {
  children: ReactNode;
}

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <main className="h-screen bg-zinc-950">
      <main className="w-full h-screen flex flex-col">
        {/* Dashboard Header */}
        <DashboardHeader />
        <section className="flex">
          <DashboardAside />
          <main className="w-full">{children}</main>
        </section>
      </main>
    </main>
  );
}
