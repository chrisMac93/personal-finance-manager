import React, { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
} from "chart.js";
import { MdRefresh } from "react-icons/md";

Chart.register(DoughnutController, ArcElement, CategoryScale, Title, Tooltip);

const BalanceCard = () => {
  const accounts = [
    { name: "Bank A", balance: 5000, type: "asset" },
    { name: "Bank B", balance: 3000, type: "asset" },
    { name: "Credit Card C", balance: -1000, type: "debt" },
  ];

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"doughnut", number[], string> | null>(
    null
  );

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        // Add null check for ctx
        // If there's an existing chart instance, destroy it before creating a new one
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Income", "Debt"],
            datasets: [
              {
                label: "D/I Ratio",
                data: [30000, 15000], // Replace these numbers with actual data
                backgroundColor: [
                  "rgba(220, 220, 220, 0.5)",
                  "rgba(255, 99, 132, 0.5)",
                ],
                borderColor: [
                  "rgba(220, 220, 220, 1)",
                  "rgba(255, 99, 132, 1)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "D/I Ratio",
              },
            },
          },
        });
      }
    }
  }, []);

  const refreshBalances = () => {
    console.log("Balances refreshed!");
  };

  return (
    <div className="bg-black bg-opacity-50 p-4 rounded-lg text-white mx-64 my-8 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold text-space-accent1">
          Accounts & D/I Ratio
        </h2>
        <button onClick={refreshBalances} className="text-space-accent1">
          <MdRefresh className="w-6 h-6" />
        </button>
      </div>
      <div className="w-64 h-64 mx-auto">
        <canvas ref={chartRef} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="p-4 border border-space-accent1 rounded"
          >
            <h3 className="text-xl font-bold">{account.name}</h3>
            <p
              className={`text-2xl ${
                account.balance < 0 ? "text-red-500" : "text-yellow-500"
              }`}
            >
              {account.balance}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BalanceCard;
