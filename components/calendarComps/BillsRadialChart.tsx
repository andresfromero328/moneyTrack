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

const BillsRadialChart = ({ selectedDate }: Props) => {
  const progressValue = 75;

  const data: ChartData<"doughnut"> = {
    labels: ["Bills paid", "Pending bills"],
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
    <div
      id="container-bills-radial-component"
      className="grid place-items-center rounded-lg  p-5 bg-special/50 shadow-onRest"
    >
      <div
        id="flex-container-radial-content"
        className="flex items-center gap-5 mx-auto p-2"
      >
        <div
          id="container-radial"
          className="relative w-44 h-44 flex items-center justify-center"
        >
          <Doughnut
            id="doughnut-radial-chart"
            data={data}
            options={options}
            className="z-10"
          />
          <div
            id="container-bills-radial-text"
            className="absolute text-white text-xl font-bold"
          >
            <div className="flex flex-col items-center">
              <p id="total-bills-tite" className="font-semibold">
                Total Bills:
              </p>
              <small id="total-bills-amount" className="text-secondary/75">
                $3500.23
              </small>
            </div>
          </div>
        </div>

        <div id="container-bills-info" className="flex flex-col gap-1">
          <p id="pending-bills-title" className="font-bold text-secondary">
            Pending Bills:
          </p>
          <p
            id="pending-bills-amount"
            className="font-semibold text-secondary/75"
          >
            $2,453.23
          </p>
          <small id="text-bills-month-radial">
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

export default BillsRadialChart;
