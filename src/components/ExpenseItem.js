import './ExpenseItem.css';

function ExpenseItem(props){    // props 모든 매개변수를 담고 있는 객체이다. 
  const month = props.date.toLocaleString('en-US', {month : 'long' });
  const day = props.date.toLocaleString('en-US', {day  : '2-digit' });
  const year = props.date.getFullYear();

    return (
      <div className="expense-item">
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>

        <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
        </div>
      </div>  
    );
}

export default ExpenseItem;