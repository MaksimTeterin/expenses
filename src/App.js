import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2024, 10, 4),
      title: "New book",
      price: 10,
    },
    {
      date: new Date(2024, 19, 8),
      title: "New jeans",
      price: 100,
    },
  ];
  return (
    <div className="App">
      <ExpenseItem expenseData={expenses[0]} />
      <ExpenseItem expenseData={expenses[1]} />
    </div>
  );
}

export default App;
