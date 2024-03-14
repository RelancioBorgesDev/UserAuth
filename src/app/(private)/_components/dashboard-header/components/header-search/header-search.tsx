import { Input } from "@/components/input/input";
import { Search } from "lucide-react";
import React from "react";

export default function HeaderSearch() {
  return (
    <div className="flex items-center rounded-l-lg w-fit">
      <Input
        className="w-96 bg-transparent text-white border-2 border-zinc-600 rounded-t-none rounded-b-none rounded-l-xl border-r-0"
        placeholder="Pesquise um projeto"
      />
      <button type="submit">
        <Search className="text-white bg-zinc-600 p-2 rounded-r-lg" size={44} />
      </button>
    </div>
  );
}
