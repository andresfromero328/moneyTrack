"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  // ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Spending = () => {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);

  useEffect(() => {
    // Simulate fetching data or setting the chart data
    const data = {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["red", "blue", "yellow"],
          hoverOffset: 4,
        },
      ],
    };

    // Set the chart data when the component mounts
    setChartData(data);
  }, []);

  // const data: ChartData<"line"> = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //   datasets: [
  //     {
  //       label: "Spending",
  //       data: [300, 400, 500, 700, 600, 800],
  //       fill: true,
  //       backgroundColor: "rgba(237, 177, 95, .2)",
  //       borderColor: "rgba(237, 177, 95, 1)",
  //       pointRadius: 5,
  //       tension: 0.4,
  //     },
  //   ],
  // };

  // const options: ChartOptions<"line"> = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     tooltip: {
  //       titleFont: {
  //         size: 14,
  //         family: "Funnel Sans, sans-serif",
  //       },
  //       bodyFont: {
  //         size: 14,
  //         family: "Funnel Sans, sans-serif",
  //       },
  //     },
  //   },
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //       },
  //       ticks: {
  //         color: "#272727",
  //         font: {
  //           size: 14,
  //           family: "Funnel Sans, sans-serif",
  //         },
  //       },
  //     },
  //     y: {
  //       grid: {
  //         display: false,
  //       },
  //       ticks: {
  //         color: "#272727",
  //         font: {
  //           size: 14,
  //           family: "Funnel Sans, sans-serif",
  //         },
  //       },
  //     },
  //   },
  // };

  return (
    <div
      id="spending-line-container"
      className="flex flex-col gap-4 w-full h-fit"
    >
      <h2 className="p-2 m-2 rounded-md bg-primary/15 shadow-sm w-fit">
        Spending
      </h2>
      <div className="w-full h-60 p-2">
        {chartData && <Line id="speding-line-chart" data={chartData} />}
      </div>
    </div>
  );
};

export default Spending;
