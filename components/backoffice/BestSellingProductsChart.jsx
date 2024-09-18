"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ["Cabbage", "Watermelon", "Brocoli", "Maize"],
    datasets: [
      {
        labels: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgb(0, 0, 255,0.7)",
          "rgb(255, 0, 221,0.7)",
          "rgb(2, 139, 71,0.7)",
          "rgba(0, 0, 0, 0.7)",
        ],
        borderColor: [
          "rgb(0, 0, 255,0.3)",
          "rgb(255, 0, 221,0.3)",
          "rgb(2, 139, 71,0.7)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Charts</h2>
      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
}
