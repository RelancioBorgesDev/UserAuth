import FavoriteLangsChart from "./_components/bar-chart-section/favorite-langs-chart";
import { getSession } from "@/utils/getUserInfo";
import AuthOptions from "@/app/auth/(auth)/sign-up/_components/auth-options/auth-options";
import HomeTableSection from "./_components/home-table-section/home-table-section";
import FeaturedProjects from "./_components/featured-projects/featured-projects";

export default async function DashboardPage() {
  const session = await getSession();
  const name = session?.user.name!;
  const accessToken = session?.accessToken!;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-white font-bold text-4xl">Seja Bem Vindo, {name}</h1>
      <section className="flex flex-col gap-5 text-white">
        {accessToken ? (
          <>
            <section className="h-fit flex flex-col justify-center gap-4 py-2 px-4 bg-zinc-900/95 rounded-lg max-lg:h-full">
              <p className="text-xl font-semibold">
                Veja os seus principais projetos
              </p>
              <FeaturedProjects />
            </section>

            <div className="flex w-full gap-4 max-lg:flex-col">
              <FavoriteLangsChart />
              <section className="w-full bg-zinc-900/95 px-4 py-2">
                <HomeTableSection />
              </section>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center h-96">
            <h1 className="text-5xl">
              Por favor, se conecte com o Github para visualizar seu dados
            </h1>
            <AuthOptions />
          </div>
        )}
      </section>
    </div>
  );
}
