import React from 'react'
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23','2023-24'];

export const data = {
  labels,
  datasets: [
    // {
    //   label: 'Dataset 1',
    //   data: labels.map(() => Math.floor(Math.random() * 600)),
    //   faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(255, 99, 132)',
    //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
    // },
    {
      label: 'Export in Defence (in Rs Cr)',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const LineChart = () => {

  

  return (
    <div className='row d-flex justify-content-center'>
      <div className='col-lg-9 col-md-9 col-12'>
  <Line options={options} data={data} />;
  </div>
    </div>
  )
}

export default LineChart