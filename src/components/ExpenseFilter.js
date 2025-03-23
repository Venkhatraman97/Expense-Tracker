import React from "react";
import "./styles/ExpenseFilter.css";

const ExpenseFilter = ({ selectedYear, onChangeFilter }) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  
  for (let year = 2000; year <= currentYear; year++) {
    years.push(year);
  }

  return (
    <div className="expense-filter">
      <label>Filter by year: </label>
      <select value={selectedYear} onChange={(e) => onChangeFilter(e.target.value)}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
