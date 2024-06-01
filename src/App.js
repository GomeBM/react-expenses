import Expenses from "./components/Expenses";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";
import { useState } from "react";

function App() {
  // const expense = [
  //   { title: "mazda", amount: 3000, date: new Date(2020, 2, 28) },
  //   { title: "ford", amount: 2000, date: new Date(2021, 3, 28) },
  //   { title: "nisan", amount: 1000, date: new Date(2022, 4, 28) },
  //   { title: "honda", amount: 500, date: new Date(2023, 5, 28) },
  //   { title: "mitsubishi", amount: 300, date: new Date(2003, 5, 28) },
  //   { title: "tesla", amount: 1500, date: new Date(2024, 5, 28) },
  // ];
  // return (
  //   <div className="whole-page">
  //     <Expenses items={expense} />
  //     <ExpenseForm />
  //   </div>
  // );
  const [expenses, setExpenses] = useState([
    { title: "mazda", amount: 3000, date: new Date(2020, 2, 28) },
    { title: "ford", amount: 2000, date: new Date(2021, 3, 28) },
    { title: "nisan", amount: 1000, date: new Date(2022, 4, 28) },
  ]);

  const addExpenseHandler = (expense) => {
    console.log("inside of addExpenseHandler function");
    console.log(`expense item recieved: ${expense.title}`);
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div className="whole-page">
      <Expenses items={expenses} />
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
}

export default App;
