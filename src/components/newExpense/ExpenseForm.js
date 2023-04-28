import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    const enteredExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: enteredDate,
      // id: Math.random().toString(),
    };
    props.expenseData(enteredExpenseData);
    console.log(enteredExpenseData);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense-form">
          <div className="new-expense-form-input">
            <label>Title</label>
            <input
              type={"text"}
              placeholder="Add expense Title ..."
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense-form-input">
            <label>Amount</label>
            <input
              type={"number"}
              placeholder="Add Expense Amount ..."
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className="new-expense-form-input">
            <label>Date</label>
            <input
              type={"date"}
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense-add-btn">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
