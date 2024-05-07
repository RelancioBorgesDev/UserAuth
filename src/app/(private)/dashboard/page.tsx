import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import FavoriteLangsChart from "./_components/bar-chart-section/favorite-langs-chart";
import { getSession } from "@/utils/getUserInfo";
import AuthOptions from "@/app/auth/(auth)/sign-up/_components/auth-options/auth-options";

export default async function DashboardPage() {
  const session = await getSession();
  const name = session?.user.name!;
  const accessToken = session?.accessToken!;

  return (
    <>
      <h1 className="text-white font-bold text-4xl">Seja Bem Vindo, {name}</h1>
      <section className="flex flex-col gap-5 text-white h-screen ">
        {accessToken ? (
          <>
            <section className="h-44 flex flex-col justify-around px-4 bg-zinc-900/95 rounded-lg max-lg:h-full gap-4">
              <p className="text-xl font-semibold">
                Veja os seus principais projetos
              </p>

              <div className="flex flex-wrap items-center w-full gap-8">
                <div className="flex items-center gap-2 px-8 py-2 bg-white text-zinc-950 font-bold rounded-full">
                  <span className="text-xl">Portfolio</span>
                </div>
                <div className="flex items-center gap-2 px-8 py-2 bg-white text-zinc-950 font-bold rounded-full">
                  <span className="text-xl">React Quiz</span>
                </div>
                <div className="flex items-center gap-2 px-8 py-2 bg-white text-zinc-950 font-bold rounded-full">
                  <span className="text-xl">Pizza Shop</span>
                </div>
              </div>
            </section>

            <div className="flex w-full h-full gap-4 max-lg:flex-col">
              <FavoriteLangsChart />
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
          </>
        ) : (
          <div
            className="flex flex-col gap-4 items-center justify-center 
            h-96"
          >
            <h1 className="text-5xl">
              Por favor, se conecte com o Github para visualizar seu dados
            </h1>
            <AuthOptions />
          </div>
        )}
      </section>
    </>
  );
}
