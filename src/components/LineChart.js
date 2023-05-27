import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [...Array(24).keys()];

export function LineChart(params) {
  console.log(params.data);
  let data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: params.data.temp,
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Pressure",
        data: params.data.pres,
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
      {
        label: "Humidity",
        data: params.data.hum,
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
