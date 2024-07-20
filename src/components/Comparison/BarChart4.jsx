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

const labels = ["Hot Chocolate", "Coffee", "Wine", "Tea", "Cake"];



export const data = {
  labels,
  datasets: [
    {
      label: "Products",
      data: [200, 400, 300, 500, 400],
      backgroundColor: ["#4472C4", "#ED7D31", "#00B0F0", "#7030A0", "#00B050"],
    },
  ],
};

export function BarChart4() {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Product Subcategories",
          color: "#000000",
          font: {
            size: 16
          }
        }
      },
      y: {
        title: {
          display: true,
          text: "Total Sales",
          color: "#000000",
          font: {
            size: 16
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false,
        position: "bottom"
      }
    }
  };
  return <Bar options={options} data={data} />;
}
