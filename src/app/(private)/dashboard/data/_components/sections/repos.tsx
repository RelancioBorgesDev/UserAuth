import { useGithubDataContext } from "@/contexts/GithubDataContext";
import axios from "axios";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
} from "chart.js";
import { BadgeAlert, Eye, FolderGit, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

export default function Repos() {
  const { repos } = useGithubDataContext();
  const [stars, setStars] = useState(0);
  const [watchers, setWatchers] = useState(0);
  const [issues, setIssues] = useState(0);
  const [languagues, setLanguages] = useState([""]);

  useEffect(() => {
    let totalStars = 0;
    let totalWatchers = 0;
    let totalIssues = 0;
    const allLanguages: string[] = [];

    repos.forEach((repo) => {
      totalStars += repo.stargazers_count;
      totalWatchers += repo.watchers_count;
      totalIssues += repo.open_issues_count;
      if (repo.language && !allLanguages.includes(repo.language)) {
        allLanguages.push(repo.language);
      }
    });

    setStars(totalStars);
    setWatchers(totalWatchers);
    setIssues(totalIssues);
    setLanguages(allLanguages);
  }, [repos]);

  const [data, setData] = useState({
    labels: languagues,
    datasets: [
      {
        label: "Linguagens usadas",
        data: [10, 7, 8, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
  };
  Chart.register(BarElement, CategoryScale, LinearScale, ArcElement);
  return (
    <section className="w-full flex flex-col  gap-8 px-8 py-4">
      <header className="flex items-center gap-8 max-lg:grid max-lg:grid-cols-2 max-lg:content-center max-sm:grid-cols-1">
        <div className="w-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4 ">
          <FolderGit className="text-white" size={32} />
          <span className="text-xl">{repos.length} Repositórios</span>
        </div>
        <div className="w-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4">
          <Star className="text-white" size={32} />
          <span className="text-xl">{stars} Stars</span>
        </div>
        <div className="w-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4">
          <Eye className="text-white" size={32} />
          <span className="text-xl">{watchers} Watchers</span>
        </div>
        <div className="w-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4">
          <BadgeAlert className="text-white" size={32} />
          <span className="text-xl">{issues} Issues</span>
        </div>
      </header>
      <section>
        <div className="w-full h-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4">
          <div className=" w-full h-96 flex items-center justify-center text-white">
            <Doughnut
              data={data}
              options={options}
              width={60}
              height={60}
              className="text-white"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
