import './ExpenseDate.css';

function ExpenseDate(props){    // 재사용을 위해서 컴포넌트를 작은 단위로 분할하는 거다.
  const month = props.date.toLocaleString('en-US', {month : 'long' });
  const day = props.date.toLocaleString('en-US', {day  : '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
  );
}

export default ExpenseDate;