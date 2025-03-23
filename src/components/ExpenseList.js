import React from 'react';
import './styles/ExpenseList.css';

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expense-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expense-list">
      {items.map((expense) => (
        <li key={expense.id} className="expense-item">
          <div>{expense.date.toDateString()}</div>
          <div className="expense-item__description">
            <h2>{expense.title}</h2>
            <div className="expense-item__price">${expense.amount}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
