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
      text: 'MISSION RAKSHA GYAN SHAKTI',
    },
  },
};


const testingData = [
  {
  progress:"200",
},
{
  progress:"500",
},
{
  progress:"200",
},
{
  progress:"600",
},
{
  progress:"700",
},
{
  progress:"200",
},
{
  progress:"900",
},
]

// const storeData = testingData.map((i)=>i.progress)

const labels = ['2017-2018', '2018-2019','2019-2020','2020-2021','2021-2022', '2022-2023', '2023-2024'];

const generateRandomData = () =>
  labels.map(() => Math.floor(Math.random() * 600));

export const data = {
  labels,
  datasets: [
    {
      label: 'IPR Target',
      data:generateRandomData(),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'IPR Filed',
      data: generateRandomData(),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'IPR Granted',
      data: generateRandomData(),
      backgroundColor: 'rgba(23, 122, 135, 0.5)',
    },

    
  ],
};



const MSGColumnCharts = () => {
  return (
    <div className='row d-flex justify-content-center'>
    <div className='col-lg-9 col-md-9 col-12 ' >
      <Bar options={options} data={data} />
    </div>
    </div>
  )
}

export default MSGColumnCharts