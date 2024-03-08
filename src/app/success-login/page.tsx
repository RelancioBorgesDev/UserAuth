import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function SuccessLoginPage() {
  return (
    <main className="w-full h-screen flex  items-center justify-center gap-4">
      <h1 className="text-white font-bold text-5xl">Logado com sucesso</h1>
      <FaCheck fill="white" size={64} />
    </main>
  );
}
