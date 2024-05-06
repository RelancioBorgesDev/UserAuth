"use client";
import React, { useEffect, useState } from "react";
import { ComboboxFilter } from "./_components/ComboboxFilter";
import { Eye, Star } from "lucide-react";
import Repository from "./_components/Repository";
import axios from "axios";
import { useGithubDataContext } from "@/contexts/GithubDataContext";
interface RepoResponse {
  name: string;
  visibility: string;
  description: string;
  languague: string;
  stargazers_count: number;
  watchers_count: number;
  updated_at: string;
}
export default function Repos() {
  const { userData } = useGithubDataContext();
  const { repos_url } = userData;
  const [repo, setRepo] = useState<RepoResponse[]>([]);
  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await axios.get(repos_url);
        setRepo(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }

    if (repos_url) {
      fetchRepos();
    }
  }, [repos_url]);
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
          {repo.map(
            ({
              name,
              description,
              languague,
              stargazers_count,
              updated_at,
              visibility,
              watchers_count,
            }) => (
              <Repository
                key={name}
                title={name}
                visibility={visibility}
                description={description}
                languague={languague}
                stargazers_count={stargazers_count}
                watchers_count={watchers_count}
                updated_at={updated_at}
              />
            )
          )}
        </ul>
      </section>
    </div>
  );
}
