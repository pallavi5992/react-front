import React, { useCallback, useState, useEffect } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);



const PieCharts = () => {
  const [peiChartData, setPeiChartData] = useState([]);
  const [totalPercentage, setTotalPercentage] = useState([]);

 // console.log(peiChartData,"peiChartData(*(*")
  //console.log("totalPercentage",totalPercentage)
  const totalProd = totalPercentage.map(tot => tot.totalVopAmount);
 // console.log(totalProd,"totalProd&^&6")
  const orgCount = peiChartData.map((organisations) => organisations).flat()
 //console.log(orgCount,"orgCount%$5")
  const orgName = orgCount.map((orgNam) => orgNam.OrganisationName).flat()
  const codeArray = orgName.map(item => item.Code);
 // console.log(codeArray,"orgCount000000")
  const orgPercentage = orgCount.map(avg => avg.SumofVOP/(totalProd /100) )
 //console.log("OrgPercentage",orgPercentage)
  

   const data = {
   labels: codeArray,
    datasets: [
      {
        label: 'Cr',
        data:orgPercentage,
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2 ,
      },
    ],
  };
  
  
   const options = {
    responsive: true,
    aspectRatio: 2, // You can adjust the aspectRatio to control the size of the pie chart
    // maintainAspectRatio: false,
    // height: 100, // Adjust the height as needed
    // width: 100, // Adjust the width as needed
  };
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/productionPerformance/percentage-org`).then((response) => {
      console.log("responce", response.data.data.percentageOrganisationByName)
       setTotalPercentage(response.data.data.totalVop)
      setPeiChartData(response.data.data.percentageOrganisationByName)
    }).catch((err) => {
      console.log(err)

    })

  }, [])
  return (
    <div>
    
      <Pie data={data} options={options} />
    
      </div>
  )
}

export default PieCharts