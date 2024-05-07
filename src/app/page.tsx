import Logo from "@/components/logo/logo";
import Button from "@/components/button/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center  justify-center">
      {/* Header */}
      <header className="p-4 flex items-center justify-center">
        <Logo variant={"white"} />
      </header>
      {/* Intro Message Section */}
      <section className="w-3/4 h-[calc(100vh-80px)] text-center flex flex-col items-center justify-center gap-4">
        <h1 className="text-9xl text-white font-bold">
          Github Analytics
        </h1>

        <p className="text-xl text-slate-200">
          Com esse app você pode ter controle total sobre seus dados do Github
        </p>
        <div className="flex gap-4 items-center">
          <Link href={"/auth/sign-up"}>
            <Button variant={"white"} className="p-4 hover:brightness-90">
              Cadastro
            </Button>
          </Link>
          <Link href={"/auth/sign-in"}>
            <Button variant={"white"} className="p-4 hover:brightness-90">
              Login
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
