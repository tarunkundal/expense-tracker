import { useState } from "react";
import ExpenseItems from "./components/expense/ExpenseItems";
import NewExpense from "./components/newExpense/NewExpense";

let expenses = [
  // {
  //   id: 1,
  //   title: "School Fee",
  //   amount: 320,
  //   date: new Date().toISOString(),
  // },
  
];

const App = () => {
  const [expense, setExpense] = useState(expenses);

  const addExpenseData = (userExpenseData) => {
    // setExpense([...expense, userExpenseData]);

    {
      userExpenseData.title === "" ||
      userExpenseData.amount === "" ||
      userExpenseData.date === ""
        ? alert("Please enter all inputs !!!")
        : setExpense((prevData) => {
            return [...prevData, userExpenseData];
          });
    }

    // setExpense((prevData)=>{
    //     return [...prevData , userExpenseData]
    // })
  };

  return (
    <> 
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <NewExpense newExpenses={addExpenseData} />
      <ExpenseItems expensesData={expense} />
    </>
  );
};

export default App;
