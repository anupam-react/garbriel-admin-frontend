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


const labels = ['6:00 AM ', '7:00 AM ', '8:00 AM ', '9:00 AM ', '10:00 AM ', '11:00 AM ', '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM'];

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Time of the Day",
        color: "#000000",
        font: {
          size: 16
        }
      }
    },
    y: {
      title: {
        display: true,
        text: "Transaction",
        color: "#000000",
        font: {
          size: 16
        }
      }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: "top"
    }
  }
};


export const data = {
  labels,
  datasets: [
      {
      label: 'Transaction',
      data:[400, 340,470,500,800,900,400,500,800,900,400] ,
      backgroundColor:'#FD575B'
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
