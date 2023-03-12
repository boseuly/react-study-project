import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){    // props 모든 매개변수를 담고 있는 객체이다. 
  

    return (
      <div className="expense-item">
        <ExpenseDate date={props.date}/>

        <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
        </div>
      </div>  
    );
}

export default ExpenseItem;