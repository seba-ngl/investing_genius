import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      beginAtZero: true,
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      beginAtZero: true,
    },
  },
  pointBackgroundColor: "rgb(53, 162, 235)",
  pointRadius: 5,

  pointHoverRadius: 10,
  // responsive: true,

  plugins: {
    legend: {
      display: false,

      labels: {
        boxWidth: 0,
      },
    },
    tooltip: {
      enabled: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "transparent",
    },
  ],
};

export function CustomLinearChart() {
  return <Line options={options} data={data} />;
}
