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

import "../styles/chart.css";

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
  type: "line",
  responsive: true,
  tension: 0.5,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white",
        font: {
          size: 18,
        },
      },
    },
  },
  scales: {
    y: {
      grid: {
        color: "#FFFFFF",
      },
      ticks: {
        color: "white",
        font: {
          size: 18,
        },
      },
      title: {
        display: true,
        text: "Value",
        font: {
          size: 18,
        },
        color: "white",
      },
    },
    x: {
      grid: {
        color: "#FFFFFF",
      },
      ticks: {
        color: "white",
        font: {
          size: 18,
        },
      },
      title: {
        display: true,
        text: "Hour [HH]",
        font: {
          size: 18,
        },
        color: "white",
      },
    },
  },
};

const labels = [...Array(24).keys()];

export function LineChart(params) {
  let data = {
    labels,
    datasets: [
      {
        label: "Temperature [C]",
        data: params.data.temp,
        borderColor: "red",
        backgroundColor: "red",
      },
      {
        label: "Pressure [hPa]",
        data: params.data.pres,
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
      {
        label: "Humidity [%]",
        data: params.data.hum,
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };

  return <Line className="chart" options={options} data={data} />;
}
