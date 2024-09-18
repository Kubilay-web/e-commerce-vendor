"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"], // X eksenindeki etiketler
  datasets: [
    {
      label: "sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      tension: 0.1,
    },
    {
      label: "orders",
      data: [20, 20, 30, 15, 20, 30, 60],
      fill: false,
      backgroundColor: "rgba(192,75,192,0.2)",
      borderColor: "rgba(192,75,192,1)",
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    title: {
      display: true,
      text: "Weekly Data",
    },
  },
};

export default function WeeklySalesChart() {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
    },
    {
      title: "Orders",
      type: "orders",
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  const filteredData = {
    ...data,
    datasets: data.datasets.filter(
      (dataset) => dataset.label === chartToDisplay
    ),
  };

  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Weekly Sales Chart</h2>
      <div className="p-4">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {tabs.map((tab, i) => (
            <li className="me-2" key={i}>
              <button
                onClick={() => setChartToDisplay(tab.type)}
                className={
                  chartToDisplay === tab.type
                    ? "inline-block text-orange-600 p-4 rounded-t-lg hover:text-orange-600 dark:hover:bg-gray-800 dark:hover:text-gray-300 "
                    : "inline-block text-blue-600 p-4 rounded-t-lg hover:text-orange-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                }
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Grafiği seçilen sekmeye göre göster */}
      <Line data={filteredData} options={options} />
    </div>
  );
}
