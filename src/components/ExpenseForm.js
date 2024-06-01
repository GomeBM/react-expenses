// import "./ExpenseForm.css";

// import React, { useState } from "react";
// import Clock from "./Clock";

// const ExpenseForm = ({ initialExpenses }) => {
//   const [expenses, setExpenses] = useState(initialExpenses);
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [date, setDate] = useState("");

//   const titleChangeHandeler = (event) => {
//     console.log(event);
//     setTitle(event.target.value);
//   };
//   const AmountChangeHandeler = (event) => {
//     console.log(event.target.value);
//     setAmount(event.target.value);
//   };
//   const DateChangeHandeler = (event) => {
//     console.log(event.target.value);
//     setDate(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const expenseData = {
//       title: title,
//       amount: amount,
//       date: new Date(date),
//     };

//     setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
//     setTitle("");
//     setAmount("");
//     setDate("");

//     fetch("http://localhost:3000/addtomongo/" + expenseData).catch((err) =>
//       console.log(err)
//     );
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" value={title} onChange={titleChangeHandeler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             value={amount}
//             onChange={AmountChangeHandeler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             value={date}
//             onChange={DateChangeHandeler}
//           />
//         </div>
//       </div>

//       <div className="new-expense__actions">
//         <button className="submit-btn" type="submit">
//           Add expense
//         </button>
//         <div className="clock">
//           <Clock />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

import React, { useState } from "react";
import "./ExpenseForm.css";
import Clock from "./Clock";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    onAddExpense(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button className="submit-btn" type="submit">
          Add expense
        </button>
        <div className="clock">
          <Clock />
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
