"use client";

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

interface Props {
  selectedDate: Date;
}

const BillsDonutChart = ({ selectedDate }: Props) => {
  const data: ChartData<"doughnut"> = {
    labels: ["Rent", "Food", "Utilities"],
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
    <div
      id="container-bills-doughnut-component"
      className="grid place-items-center rounded-lg  p-5 bg-special/50 shadow-onRest"
    >
      <div
        id="flex-container-bills-doughnut-content"
        className="flex items-center gap-5 mx-auto p-2"
      >
        <div
          id="container-doughnut"
          className="relative w-44 h-44 flex items-center justify-center"
        >
          <Doughnut
            id="bills-doughnut-chart"
            data={data}
            options={options}
            className="z-10"
          />
        </div>
        <div id="container-bills-doughnut-text" className="flex flex-col gap-1">
          <p id="breakdown-bills-tite" className="font-bold text-secondary">
            Bills Breakdown:
          </p>
          <p
            id="breakdown-bills-amount"
            className="font-semibold text-secondary/75"
          >
            $2,453.23
          </p>
          <small id="text-bills-month-doughnut">
            on{" "}
            <span className="text-special">
              {selectedDate.toLocaleString("en-US", { month: "long" })}
            </span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default BillsDonutChart;
