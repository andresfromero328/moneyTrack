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

const SpendingPieChart = () => {
  const data: ChartData<"doughnut"> = {
    labels: ["Food & Drinks", "Recreation", "Technology"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: colorGenerator(3),
        borderColor: ["#48584a"],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
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
    },
  };
  return (
    <div className="relative w-44 h-44 flex items-center justify-center mx-auto">
      <Doughnut data={data} options={options} className="z-10" />
      <div className="absolute text-white text-xl font-bold">
        <div className="flex flex-col items-center">
          <p className="font-semibold">Total Spending:</p>
          <small className="text-secondary/75">$100</small>
        </div>
      </div>
    </div>
  );
};

export default SpendingPieChart;
