import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((item, index) => (
        <ExpenseItem
          key={item.title}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}
export default Expenses;
