import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const getEnteredExpenseData = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.newExpenses(expenseData);
  };

  return (
    <>
      <div className="new-expense">
        <ExpenseForm expenseData={getEnteredExpenseData} />
      </div>
    </>
  );
};

export default NewExpense;
