import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(nextAuthOptions);
  const fullName = session?.user.fullname;
  return (
    <main className="w-full h-[calc(100vh-82px)] flex flex-col p-8">
      <h1 className="text-white font-bold text-4xl">
        Seja Bem Vindo, {fullName}
      </h1>
    </main>
  );
}
