import React, { useState } from 'react';  // useState 는 리액트 훅이다. 중요한 훅 중 하나이다. 훅은 컴포넌트 안에서 사용되어야 한다.
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {    // props 모든 매개변수를 담고 있는 객체이다.
  const [title, setTitle] = useState(props.title);  // state에 새로운 값을 할당하고 싶다고 리액트에게 말하고 함수는 useState로 state가 등록된 컴포넌트는 재평가되어야 한다고 리액트에게 말해준다. 
  // useState는 항상 두 개의 값을 반환하는데, 첫 번째 요소는 현재 상태값, 두 번째 요소는 그것을 업데이트하는 함수이다.

  const clickHandler = () => {
    setTitle("Updated!!");  // useState를 변경하는 함수
  }
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
                <h2>{title}</h2> 
                <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick =  {clickHandler}>Change Title</button>
      </Card>  
    );
}

export default ExpenseItem;