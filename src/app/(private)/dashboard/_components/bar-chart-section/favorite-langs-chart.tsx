"use client";
import { useEffect, useState } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Legend,
} from "chart.js";
import { Colors } from "chart.js";
import { useGithubDataContext } from "@/contexts/GithubDataContext";
import { generateColors } from "@/utils/chartColors";

export type DataType = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
};

export default function FavoriteLangsChart() {
  Chart.register(
    LinearScale,
    ArcElement,
    CategoryScale,
    BarElement,
    Colors,
    Legend
  );
  const { repos, languages } = useGithubDataContext();

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

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };

  useEffect(() => {
    async function getLanguague() {}
    setData({
      labels: languages,
      datasets: [
        {
          label: "Favorite Coding Languages",
          data: languages.map(
            (lang) => repos.filter((repo) => repo.language === lang).length
          ),
          backgroundColor: generateColors(languages),
        },
      ],
    });
  }, [languages, repos]);

  return (
    <section className="w-full h-full text-white px-4 py-2 bg-zinc-900/95 flex flex-col items-center gap-8">
      <p className="text-xl">Principais linguagens utilizadas</p>
      <div className="flex items-center justify-center text-white">
        <Pie
          data={data}
          options={options}
          width={400}
          height={400}
          className="text-white"
        />
      </div>
    </section>
  );
}
