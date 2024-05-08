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
import { Bar, Doughnut } from "react-chartjs-2";
import { DataType } from "../../../_components/bar-chart-section/favorite-langs-chart";
import { generateColors } from "@/utils/chartColors";

export default function Repos() {
  const { repos, languages } = useGithubDataContext();
  const [stars, setStars] = useState(0);
  const [watchers, setWatchers] = useState(0);
  const [issues, setIssues] = useState(0);
  const [data, setData] = useState<DataType>({
    labels: [],
    datasets: [
      {
        label: "Favorite Coding Languages",
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    let totalStars = 0;
    let totalWatchers = 0;
    let totalIssues = 0;
    const allLanguages: string[] = [];

    repos.forEach((repo) => {
      totalStars += repo.stargazers_count;
      totalWatchers += repo.watchers_count;
      totalIssues += repo.open_issues_count;
    });

    setStars(totalStars);
    setWatchers(totalWatchers);
    setIssues(totalIssues);
  }, [repos]);

  useEffect(() => {
    async function getLanguague() {}
    setData({
      labels: languages,
      datasets: [
        {
          label: "Linguagens de programação usadas por você",
          data: languages.map(
            (lang) => repos.filter((repo) => repo.language === lang).length
          ),
          backgroundColor: generateColors(languages),
        },
      ],
    });
  }, [languages, repos]);

  const options = {
    maintainAspectRatio: false,
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
          <div className="w-full h-96 flex items-center justify-center text-white">
            <Bar data={data} options={options} className="text-white" />
          </div>
        </div>
      </section>
    </section>
  );
}
