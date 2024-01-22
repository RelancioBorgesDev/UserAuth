import LoginForm from "@/components/LoginForm/LoginForm";
import Logo from "@/components/Logo/Logo";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-between">
      <div className="w-1/2 px-4 py-8 bg-zinc-950 h-full flex flex-col ">
        <Logo />
        <div className="h-screen text-white font-bold flex flex-col gap-2  justify-center">
          <h1 className="text-4xl">Faça login em nossa plataforma</h1>
          <p className="text-md text-gray-600 font-extralight">Aproveite os nossos serviços</p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center shadow-2xl">
        <LoginForm />
      </div>
    </main>
  );
}
