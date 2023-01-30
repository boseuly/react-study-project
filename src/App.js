import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

// 원래는 js에서 HTML 문법을 사용할 수 없지만 JSX 덕분에 사용이 가능하다. 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ExpenseItem></ExpenseItem>
        </p>
      </header>
    </div>
  );
}

export default App;
