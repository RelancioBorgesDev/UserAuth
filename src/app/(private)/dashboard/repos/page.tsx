import React from "react";
import { ComboboxFilter } from "./_components/ComboboxFilter";
import { Eye, Star } from "lucide-react";
import Repository from "./_components/Repository";

export default function Repos() {
  return (
    <div className="text-white flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Seus repositórios</h1>
      <header className="flex items-center gap-4 max-lg:flex-col">
        <input
          className="w-full px-2 py-4 border-2 border-gray-600 outline-none text-zinc-900 rounded-xl"
          type="text"
          placeholder="Pesquise um repositorio"
        />
        <ul className="flex max-lg:flex-wrap items-center gap-4">
          <li>
            <ComboboxFilter />
          </li>
          <li>
            <ComboboxFilter />
          </li>
          <li>
            <ComboboxFilter />
          </li>
        </ul>
      </header>
      <section>
        <ul className="flex flex-col gap-4">
          <Repository
            title="Projeto 01"
            visibility="Private"
            description=" The Worst Product I've Ever Reviewed... For Now "
            languague="Javascript"
            stargazers_count={30}
            watchers_count={20}
            updated_at={"2021-04-27T11:43:36Z"}
          />
        </ul>
      </section>
    </div>
  );
}
