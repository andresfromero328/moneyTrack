"use client";

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

interface Props {
  selectedDate: Date;
}

const BillsBarChart = ({ selectedDate }: Props) => {
  const data: ChartData<"bar"> = {
    labels: ["cat 1", "cat 2", "cat 3", "cat 4", "cat 5", "cat 6"],
    datasets: [
      {
        label: "prev month",
        data: [500, 700, 400, 800, 600, 900],
        backgroundColor: "#edb15f",
        borderColor: "#48584a",
        borderWidth: 3,
        borderRadius: 12,
      },
      {
        label: "current month",
        data: [600, 450, 120, 780, 250, 600],
        backgroundColor: "#8a9a74",
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
            family: "Oswald, sans-serif",
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
            family: "Oswald, sans-serif",
          },
        },
      },
    },
  };

  const renderBarChartTitle = () => {
    const prevMonth = new Date(selectedDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);

    return (
      <h2
        id="bills-bar-title"
        className="p-2 rounded-md bg-primary/15 shadow-sm w-fit"
      >
        Bills Trends -{" "}
        {selectedDate.toLocaleString("en-US", {
          month: "short",
          year: "2-digit",
        })}{" "}
        vs{" "}
        {prevMonth.toLocaleString("en-US", { month: "short", year: "2-digit" })}
      </h2>
    );
  };

  return (
    <div
      id="container-bills-bar-component"
      className="rounded-lg p-5 bg-special/50 shadow-onRest"
    >
      <div
        id="flex-container-bills-bar-content"
        className="w-full h-fit flex flex-col gap-2"
      >
        {renderBarChartTitle()}
        <div
          id="container-bills-bar"
          className="md:w-[75%] w-full mx-auto h-52 p-2"
        >
          <Bar id="bill-bar-chart" data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BillsBarChart;
