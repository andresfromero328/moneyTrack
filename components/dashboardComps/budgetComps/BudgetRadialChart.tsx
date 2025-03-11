"use client";

import dynamic from "next/dynamic";
// import { Doughnut } from "react-chartjs-2";
const Doughnut = dynamic(() => import("react-chartjs-2").then((mod) => mod.Doughnut), {
  ssr: false,
});
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { colorGenerator } from "@/lib/colorGenerator";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetRadialChart = () => {
  const progressValue = 75;

  const data: ChartData<"doughnut"> = {
    labels: ["Already spent", "Left to spend"],
    datasets: [
      {
        data: [progressValue, 100 - progressValue],
        backgroundColor: colorGenerator(2),
        borderColor: ["#48584a"],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    plugins: {
      tooltip: {
        titleFont: {
          size: 14,
          family: "Funnel Sans, sans-serif",
        },
        bodyFont: {
          size: 14,
          family: "Funnel Sans, sans-serif",
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-44 h-44 flex items-center justify-center">
      <Doughnut
        id="budget-radial-chart"
        data={data}
        options={options}
        className="z-10"
      />
      <div
        id="budget-info-summary"
        className="absolute text-white text-xl font-bold"
      >
        <div className="flex flex-col items-center">
          <p className="font-semibold">Budget:</p>
          <small id="budget-amount" className="text-secondary/75">
            $3500.23
          </small>
        </div>
      </div>
    </div>
  );
};

export default BudgetRadialChart;
