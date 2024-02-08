import React from 'react'

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Make-II Projects by DPSUs',
    },
  },
};






const labels = ['AIP Accorded', 'AIP Accorded','AIP Accorded'];

const generateRandomData = () =>
  labels.map(() => Math.floor(Math.random() * 600));

export const data = {
  labels,
  datasets: [
    {
      label: 'Army',
      data:generateRandomData(),
      backgroundColor: 'rgba(141, 199, 12, 0.5)',
    },
    {
      label: 'Air Force',
      data: generateRandomData(),
      backgroundColor: 'rgba(193, 92, 235, 0.5)',
    },
    {
      label: 'Navy',
      data: generateRandomData(),
      backgroundColor: 'rgba(239, 192, 15, 0.5)',
    },

    
  ],
};

const MakePIIDpsuChart = () => {
  return (
   
    <div className='p-5' >
      <Bar options={options} data={data} />
    </div>
  )
}

export default MakePIIDpsuChart