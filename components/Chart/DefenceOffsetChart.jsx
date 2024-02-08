import React, { useCallback, useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DefenceOffsetChart = () => {
  const [graphData, setGraphData] = useState([]);
  const [totalVop, setTotalVop] = useState([]);

  const yearCount = graphData.map((years) => years).flat();
  console.log(totalVop, "orgCount%$5");
  const yearName = yearCount.map((yearNam) => yearNam.Year).flat();
  //console.log(yearName,"orgCount%$5")
  const yearArray = yearName.map((item) => item.Year);

  const totalProd = totalVop.map((total) => total).flat();
  const totpr = totalProd.map((prod) => prod.SumofVOP).flat();
  const orgNam = totalVop.map((name) => name.OrganisationName.Name).flat();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Production Performance",
      },
    },
  };

  function getRandomRGBA() {
    // Generate random values for each color component
    const red = Math.floor(Math.random() * 256); // 0 to 255
    const green = Math.floor(Math.random() * 256); // 0 to 255
    const blue = Math.floor(Math.random() * 256); // 0 to 255
    const alpha = Math.random().toFixed(2); // 0.00 to 0.99 with 2 decimal places

    // Construct the RGBA color string
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  const labels = yearArray;

  const generateRandomData = () => labels.map(() => totpr);
  const data = {
    labels,
    datasets: [
      {
        label: orgNam,
        data: totpr,
        backgroundColor: getRandomRGBA(),
      },
    ],
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/productionPerformance/percentage-org`
      )
      .then((response) => {
        console.log(
          "responce",
          response.data.data.percentageOrganisationByName
        );
        setTotalVop(response.data.data.percentageOrganisationByName);
        setGraphData(response.data.data.percentageOrganisationByName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default DefenceOffsetChart;
