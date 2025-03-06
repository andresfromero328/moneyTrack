"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const FinanceBarChart = () => {
  const data: ChartData<"bar"> = {
    labels: ["Jan", "Feb", "March"],
    datasets: [
      {
        label: "earnings",
        data: [500, 700, 400],
        backgroundColor: "#edb15f",
        borderColor: "#48584a",
        borderWidth: 3,
        borderRadius: 12,
      },
      {
        label: "bills",
        data: [600, 450, 120],
        backgroundColor: "#8a9a74",
        borderColor: "#48584a",
        borderWidth: 3,
        borderRadius: 12,
      },
      {
        label: "spending",
        data: [450, 245, 175],
        backgroundColor: "#d5d6d6",
        borderColor: "#48584a",
        borderWidth: 3,
        borderRadius: 12,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
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
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: true,
          width: 2,
          color: "#272727",
        },
        ticks: {
          color: "#272727",
          font: {
            size: 14,
            family: "Funnel Sans, sans-serif",
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: true,
          width: 2,
          color: "#272727",
        },
        ticks: {
          color: "#272727",
          font: {
            size: 14,
            family: "Funnel Sans, sans-serif",
          },
        },
      },
    },
  };

  return (
    <div className="md:w-[75%] w-full mx-auto h-52 p-2">
      <Bar data={data} options={options} />
    </div>
  );
};

export default FinanceBarChart;
