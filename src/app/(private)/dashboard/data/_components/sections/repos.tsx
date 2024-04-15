import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
} from "chart.js";
import { BadgeAlert, Eye, FolderGit, Star } from "lucide-react";
import { useState } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

export default function Repos() {
  const [data, setData] = useState({
    labels: ["JavaScript", "Java", "Python", "C#"],
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
    <section className="w-full flex flex-col gap-8 px-8 py-4">
      <header className="flex items-center gap-8">
        <div className="w-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4">
          <FolderGit className="text-white" size={32} />
          <span className="text-xl">96 Repositórios</span>
        </div>
        <div className="w-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4">
          <Star className="text-white" size={32} />
          <span className="text-xl">120 Stars</span>
        </div>
        <div className="w-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4">
          <Eye className="text-white" size={32} />
          <span className="text-xl">120 Watchers</span>
        </div>
        <div className="w-fit bg-zinc-800 p-4 rounded-lg flex items-center  gap-4">
          <BadgeAlert className="text-white" size={32} />
          <span className="text-xl">120 Issues</span>
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
