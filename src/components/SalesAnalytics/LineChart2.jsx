import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const labels = ['BEVERAGES', 'SHOES', 'PHONES', 'ELECTRONICS', 'FOOD'];

export const data = {
  labels,
  datasets: [
    {
      label: 'SALES',
      data: [100, 200, 300 , 500 , 400],
      borderColor: '#FEA82F',
      backgroundColor: '#FEA82F',
    },
    {
      label: 'OLD CUSTOMERS',
      data: [100, 300, 500, 400 , 200],
      borderColor: '#0070BC',
      backgroundColor: '#0070BC',
    },
    {
      label: 'OLD CUSTOMERS',
      data: [100, 400, 200, 300 , 500],
      borderColor: '#FD575B',
      backgroundColor: '#FD575B',
    },
  ],
};

export function LineChart2() {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "SUB-Categories",
          color: "#000000",
          font: {
            size: 16
          }
        }
      },
      y: {
        title: {
          display: true,
          text: "SALES",
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
  return <Line options={options} data={data} />;
}
