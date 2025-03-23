import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./styles/ExpenseChart.css";

// Register Chart.js modules
Chart.register(...registerables);

const ExpenseChart = ({ expenses }) => {
  const chartData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Expenses",
        data: Array(12).fill(0),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Ensure 'expense.date' is a valid Date object
  expenses.forEach((expense) => {
    const date = new Date(expense.date);  // Convert to Date object
    const month = date.getMonth();
    chartData.datasets[0].data[month] += expense.amount;
  });

  return (
    <div className="expense-chart">
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default ExpenseChart;
