import React, { useState } from "react";
import "./ExpenseList.css";

import Card from "./UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const ExpensesList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChange = (event) => setFilteredYear(event.target.value);

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} filterChange={filterChange} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 ? (
        <p>No expenses for this year.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export default ExpensesList;
