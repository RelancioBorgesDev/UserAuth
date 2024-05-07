"use client";
import { useGithubDataContext } from "@/contexts/GithubDataContext";
import React, { useEffect, useState } from "react";

type FeatureRepoType = {
  name: string;
  stargazers_count: number;
};

export default function FeaturedProjects() {
  const { repos } = useGithubDataContext();
  const [featuredRepos, setFeaturedRepos] = useState<FeatureRepoType[]>([]);

  useEffect(() => {
    const sortedRepos = [...repos].sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
    const hasStars = sortedRepos.some((repo) => repo.stargazers_count > 0);
    if (hasStars) {
      setFeaturedRepos(
        sortedRepos.slice(0, 5).map((repo) => ({
          name: repo.name,
          stargazers_count: repo.stargazers_count,
        }))
      );
    } else {
      const randomSubset = sortedRepos.slice(0, 5).map((repo) => ({
        name: repo.name,
        stargazers_count: repo.stargazers_count,
      }));
      setFeaturedRepos(randomSubset);
    }
  }, [repos]);
  return (
    <div className="flex flex-wrap items-center w-full gap-8">
      {featuredRepos.map((featuredRepo, idx) => (
        <div
          className="flex items-center gap-2 px-8 py-2 bg-white text-zinc-950 font-bold rounded-full"
          key={idx}
        >
          <span className="text-xl">{featuredRepo.name}</span>
        </div>
      ))}
    </div>
  );
}
