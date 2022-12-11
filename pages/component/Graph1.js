import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
const data = {
  labels: [6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      label: " ",
      fill: false,
      lineTension: 0.1,
      backgroundColor: " rgb(84, 101, 250)",
      borderColor: " rgb(84, 101, 250)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: " rgb(84, 101, 250)",
      pointBackgroundColor: "rgb(84, 101, 250)",
      pointBorderWidth: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: " rgb(84, 101, 250)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 1,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [51, 52, 49, 46, 52, 55, 40],
    },
  ],
};

export default () => (
  <div className="graph1">
    <Line data={data} width={400} height={400} />
  </div>
);
