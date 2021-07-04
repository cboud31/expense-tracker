import React, { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";

const INIT_EXPENSES = [
  {
    id: "e1",
    title: "Computer Repair",
    amount: "45.00",
    date: new Date(new Date(2021, 6, 1)),
  },
  {
    id: "e2",
    title: "Rent",
    amount: "800.00",
    date: new Date(new Date(2021, 6, 1)),
  },
  {
    id: "e3",
    title: "Netflix",
    amount: "13.99",
    date: new Date(new Date(2021, 6, 1)),
  },
  {
    id: "e4",
    title: "Renter's Insurance",
    amount: "34.94",
    date: new Date(new Date(2021, 6, 1)),
  },
];

function App() {
  const [allExpenses, setAllExpenses] = useState(INIT_EXPENSES);

  const newExpenseHandler = (newExpense) => {
    setAllExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={newExpenseHandler} />
      <ExpensesList expenses={allExpenses} />
    </div>
  );
}

export default App;
