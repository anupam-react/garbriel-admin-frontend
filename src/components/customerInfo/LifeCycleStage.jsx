import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Active 60%', 'New 4%', 'Churn 2%', 'Slipping 10%',],

  
  
  datasets: [
    {
      label: '# of Votes',
      data: [60, 10, 15, 10],
      backgroundColor: [
          '#00B050',
        '#ED7D31',
        '#CF2C15',
        '#0096DB',
      ],
      borderColor: [
          '#00B050',
        '#ED7D31',
        '#CF2C15',
        '#0096DB',
      ],
      borderWidth: 1,
    },
  ],
};
const LifeCycleStage = () => {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      }
    }
  };
    return (
        <div>
            <p className="font-semibold text-xl pb-4">Life Cycle Stage</p>
                <div className="rounded-lg shadow-md flex justify-center items-center bg-white p-4 w-80">
                <Doughnut data={data} options={options}/>
                </div>
            </div>
  )
}

export default LifeCycleStage
