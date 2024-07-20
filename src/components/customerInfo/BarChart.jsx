import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
      width: '20px'
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false
    },
  },
};

const labels = ["Morning", "Lunch", "Afternoon", "Evening",];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [90, 20, 40 , 100],
      borderColor: "#0096DB",
      backgroundColor: "#0096DB",
    },
  ],
  
};

export function BarChart() {
  return (
    <div>
      <p className="font-semibold text-xl pb-4">Favourite Time of the Day:</p>
      <div className="rounded-lg shadow-md flex flex-col justify-center items-center bg-white p-4 w-[700px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
