"use client";

import React from "react";

import { Doughnut } from "react-chartjs-2";
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

const BudgetPieChart = () => {
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
    <div className="flex items-center gap-5 mx-auto">
      <div className="relative w-44 h-44 flex items-center justify-center">
        <Doughnut data={data} options={options} className="z-10" />
        <div className="absolute text-white text-xl font-bold">
          <div className="flex flex-col items-center">
            <p className="font-semibold">Budget:</p>
            <small className="text-secondary/75">$3500.23</small>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-secondary">Left for spending:</p>
        <p className="font-semibold text-secondary/75">$2,453.23</p>
        <small>
          on <span className="text-special">Category</span>
        </small>
      </div>
    </div>
  );
};

export default BudgetPieChart;
