import Expenses from './components/Expenses';

// 원래는 js에서 HTML 문법을 사용할 수 없지만 JSX 덕분에 사용이 가능하다. 
function App() {
  const expenses = [
    {
      id : 'e1', 
      title: 'Toilet Paper', 
      amount: 94.12, 
      date: new Date('2022, 02, 12'),
    },
    {
      id : 'e2', 
      title: 'New TV', 
      amount: 799.14, 
      date: new Date('2023, 01, 12'),
    },
    {
      id : 'e3', 
      title: 'Car Insurance', 
      amount: 294.55, 
      date: new Date('2023, 02, 22'),
    },
    {
      id : 'e4', 
      title: 'New Desk', 
      amount: 400.12, 
      date: new Date('2023, 03, 11'),
    }
  ]

  return (
    <div>
          <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
