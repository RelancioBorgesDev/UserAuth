import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getServerSession } from "next-auth";
import { IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { DonutChart, Legend } from "@tremor/react";
import BarChartSection from "./_components/bar-chart-section/bar-chart-section";

export default async function DashboardPage() {
  const session = await getServerSession(nextAuthOptions);
  const fullName = session?.user.fullname;

  return (
    <main className="w-full h-[calc(100vh-82px)] flex flex-col gap-8 p-8">
      <h1 className="text-white font-bold text-4xl">
        Seja Bem Vindo, {fullName}
      </h1>
      <section className="flex flex-col gap-5 text-white h-screen ">
        <section className="h-44 flex flex-col justify-around px-4 bg-zinc-900/95 rounded-lg">
          <p className="text-xl font-semibold">
            Veja os seus principais projetos
          </p>

          <div className="flex items-center w-full gap-8">
            <div className="flex items-center gap-2 px-8 py-2 bg-white text-zinc-950 font-bold rounded-full">
              <IoLogoNodejs size={44} className="text-green-500" />
              <span className="text-xl">Node JS</span>
            </div>
            <div className="flex items-center gap-2 px-8 py-2 bg-white text-zinc-950 font-bold rounded-full">
              <IoLogoPython size={44} />
              <span className="text-xl">Python</span>
            </div>
            <div className="flex items-center gap-2 px-8 py-2 bg-white text-zinc-950 font-bold rounded-full">
              <IoLogoReact size={44} className="text-blue-500" />
              <span className="text-xl">React</span>
            </div>
          </div>
        </section>

        <div className="flex w-full h-full gap-4">
          <BarChartSection />
          <section className="w-full h-full bg-zinc-900/95 px-4 py-2 ">
            <Table>
              <TableCaption>Uma lista dos seus projetos</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-full">Nome do Projeto</TableHead>
                  <TableHead className="w-full">Data</TableHead>
                  <TableHead className="text-right">Linguagens</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">CRUD</TableCell>
                  <TableCell className="font-medium">22/02/2024</TableCell>
                  <TableCell className="text-right flex gap-2">
                    <IoLogoReact size={22} />
                    <IoLogoNodejs size={22} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">CRUD</TableCell>
                  <TableCell className="font-medium">22/02/2024</TableCell>
                  <TableCell className="text-right flex gap-2">
                    <IoLogoReact size={22} />
                    <IoLogoNodejs size={22} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">CRUD</TableCell>
                  <TableCell className="font-medium">22/02/2024</TableCell>
                  <TableCell className="text-right flex gap-2">
                    <IoLogoReact size={22} />
                    <IoLogoNodejs size={22} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
        </div>
      </section>
    </main>
  );
}
