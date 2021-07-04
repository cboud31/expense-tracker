import React, { useState } from "react";
import "./NewExpense.css";

import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSubmitNewExpense = (inputExpense) => {
    const expenseData = {
      ...inputExpense,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  return (
    <Card className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSubmitNewExpense={onSubmitNewExpense}
          stopEditing={stopEditing}
        />
      )}
    </Card>
  );
};

export default NewExpense;
