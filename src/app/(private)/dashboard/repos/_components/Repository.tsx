import { Eye, Star } from "lucide-react";

interface RepositoryProps {
  title: string;
  description: string;
  visibility: string;
  languague: string;
  watchers_count: number;
  stargazers_count: number;
  updated_at: string;
}

export default function Repository({
  title,
  description,
  visibility,
  languague,
  stargazers_count,
  watchers_count,
  updated_at,
}: RepositoryProps) {
  return (
    <li className="border-2 border-white rounded-md px-6 py-4 flex flex-col gap-4 transition-all ease-in-out duration-500 hover:bg-white/85 hover:text-zinc-950 hover:border-white/85 cursor-pointer">
      <header className="flex justify-between ">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">{title}</h1>
            <span className="border-2 border-gray-500 px-2 rounded-full">
              {visibility}
            </span>
          </div>
          <p>{description}</p>
        </div>
        <div>
          <span className="flex items-center gap-2">
            <Eye /> {watchers_count} Watchers
          </span>
          <span className="flex items-center gap-2">
            <Star /> {stargazers_count} Stars
          </span>
        </div>
      </header>
      <footer className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-500"></span>
          <span>{languague}</span>
        </div>
        <span>Atualizado 20 horas atrás</span>
      </footer>
    </li>
  );
}
