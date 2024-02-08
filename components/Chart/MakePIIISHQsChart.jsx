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
        text: 'Make-III Projects by SHQs',
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
          backgroundColor: 'rgba(201, 49, 132, 0.5)',
        },
        {
          label: 'Air Force',
          data: generateRandomData(),
          backgroundColor: 'rgba(103, 152, 15, 0.5)',
        },
        {
          label: 'Navy',
          data: generateRandomData(),
          backgroundColor: 'rgba(83, 122, 135, 0.5)',
        },
    
        
      ],
  };
  

const MakePIIISHQsChart = () => {
  return (
    
    <div className='p-5' >
      <Bar options={options} data={data} />
    </div>
  )
}

export default MakePIIISHQsChart