import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.getDate();
  return (
    <>
      <div className="expense-date-container">
        <div className="expense-date-day">{day}</div>
        <div className="expense-date-month">{month}</div>
        <div className="expense-date-year">{year}</div>
      </div>
    </>
  );
};
export default ExpenseDate;
