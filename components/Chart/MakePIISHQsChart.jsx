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
        text: 'Make-II Projects by SHQs',
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
        backgroundColor: 'rgba(211, 09, 12, 0.5)',
      },
      {
        label: 'Air Force',
        data: generateRandomData(),
        backgroundColor: 'rgba(13, 19, 205, 0.5)',
      },
      {
        label: 'Navy',
        data: generateRandomData(),
        backgroundColor: 'rgba(243, 39, 195, 0.6)',
      },
  
      
    ],
  };
  

const MakePIISHQsChart = () => {
  return (
 
    <div className='p-5' >
      <Bar options={options} data={data} />
    </div>
  )
}

export default MakePIISHQsChart