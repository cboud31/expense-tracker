import React, { useState } from "react";
import "./ExpenseForm.css";

const NewExpenseForm = ({ onSubmitNewExpense, stopEditing }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const clearInputFields = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title,
      amount,
      date: new Date(date),
    };
    onSubmitNewExpense(newExpense);
    clearInputFields();
    stopEditing();
  };

  const titleChange = (event) => setTitle(event.target.value);
  const amountChange = (event) => setAmount(event.target.value);
  const dateChange = (event) => setDate(event.target.value);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            label=" "
            required
            value={title}
            onChange={titleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            required
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-21-31"
            value={date}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={stopEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
