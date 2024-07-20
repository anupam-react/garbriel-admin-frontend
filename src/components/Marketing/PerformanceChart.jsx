import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = [
  "Dec 27",
  "Dec 28",
  "Dec 29",
  "Dec 30",
  "Dec 31",
  "Jan 01",
  "Jan 02",
  "Jan 03",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "People Engaged with AD",
      data: [10000, 12000, 14000, 18000, 16000, 20000, 19000, 18000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function PerformanceChart() {
  return <Line options={options} data={data} />;
}
