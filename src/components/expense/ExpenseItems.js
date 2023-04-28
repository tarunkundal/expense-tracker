import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
import ExpenseChart from "./ExpenseChart";

const ExpenseItems = (props) => {
  const expenseData = props.expensesData;
  // console.log(expenseData);

  return (
    <>
      <div className="expense-data-container">
      <ExpenseChart expenses={expenseData} />
        {expenseData.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}

        {/* <ExpenseItem title={expenseData[0].title} date={expenseData[0].date} amount={expenseData[0].amount} /> */}
      </div>
    </>
  );
};
export default ExpenseItems;
