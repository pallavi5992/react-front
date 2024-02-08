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
      text: 'Make-I Projects by SHQs',
    },
  },
};






const labels = ['AIP Accorded', 'AIP Dropped','Net AIP'];

const generateRandomData = () =>
  labels.map(() => Math.floor(Math.random() * 600));

export const data = {
  labels,
  datasets: [
    {
      label: 'Army',
      data:generateRandomData(),
      backgroundColor: 'rgba(1, 99, 2, 0.7)',
    },
    {
      label: 'Air Force',
      data: generateRandomData(),
      backgroundColor: 'rgba(153, 12, 235, 0.5)',
    },
    {
      label: 'Navy',
      data: generateRandomData(),
      backgroundColor: 'rgba(23, 122, 135, 0.5)',
    },

    
  ],
};

const MakePIChart = () => {
  return (

    <div className='p-5' >
      <Bar options={options} data={data} />
    </div>
    
  )
}

export default MakePIChart