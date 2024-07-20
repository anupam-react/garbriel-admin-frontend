import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12','OUTLET #12', ];



export const data = {
  labels,
  datasets: [
      {
      label: 'OUTLETS ',
      data:[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0] ,
      backgroundColor:'#FEA82F'
    },
  ],
};

export function BarChart2() {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "OUTLETS",
          color: "#000000",
          font: {
            size: 16
          }
        }
      },
      y: {
        title: {
          display: true,
          text: "PERCENTAGES",
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
        position: "top"
      }
    }
  };
  return <Bar options={options} data={data} />;
}
