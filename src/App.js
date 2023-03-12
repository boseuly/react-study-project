import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

// 원래는 js에서 HTML 문법을 사용할 수 없지만 JSX 덕분에 사용이 가능하다. 
function App() {
  const expenses = [
    {
      id : 'e1', 
      title: 'Toilet Paper', 
      amount: 94.12, 
      date: new Date(2022, 02, 12),
    },
    {
      id : 'e2', 
      title: 'New TV', 
      amount: 799.14, 
      date: new Date(2023, 01, 12),
    },
    {
      id : 'e3', 
      title: 'Car Insurance', 
      amount: 294.55, 
      date: new Date(2023, 02, 22),
    },
    {
      id : 'e4', 
      title: 'New Desk', 
      amount: 400.12, 
      date: new Date(2023, 03, 11),
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ExpenseItem 
          title={expenses[0].title} 
          amount={expenses[0].amount} 
          date={expenses[0].date}
          ></ExpenseItem>
          <ExpenseItem 
          title={expenses[1].title} 
          amount={expenses[1].amount} 
          date={expenses[1].date}
          ></ExpenseItem>
          <ExpenseItem 
          title={expenses[2].title} 
          amount={expenses[2].amount} 
          date={expenses[2].date}
          ></ExpenseItem>
          <ExpenseItem 
          title={expenses[3].title} 
          amount={expenses[3].amount} 
          date={expenses[3].date}
          ></ExpenseItem>
        </p>
      </header>
    </div>
  );
}

export default App;
