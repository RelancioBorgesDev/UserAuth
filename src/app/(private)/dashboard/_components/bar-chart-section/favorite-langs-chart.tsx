"use client";
import { useState } from "react";
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

export default function FavoriteLangsChart() {
  Chart.register(
    LinearScale,
    ArcElement,
    CategoryScale,
    BarElement,
    Colors,
    Legend
  );

  const generateColors = (languages: string[]) => {
    const colors: string[] = [];
    languages.forEach((language) => {
      const color = getColorForLanguage(language);
      colors.push(color);
    });
    return colors;
  };

  const getColorForLanguage = (language: string) => {
    switch (language) {
      case "JavaScript":
        return "rgba(255, 206, 86)";
      case "Java":
        return "#C83E4D";
      case "Python":
        return "rgba(75, 192, 192)";
      default:
        return "rgba(0, 0, 0)";
    }
  };

  const [data, setData] = useState({
    labels: ["JavaScript", "Java", "Python"],
    datasets: [
      {
        label: "Favorite Coding Languages",
        data: [10, 7, 8],
        backgroundColor: generateColors(["JavaScript", "Java", "Python"]),
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

  return (
    <section className="w-full h-full text-white px-4 py-2 bg-zinc-900/95 flex flex-col items-center gap-16">
      <p className="text-xl">Principais linguagens utilizadas</p>
      <div className=" flex items-center justify-center text-white">
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
