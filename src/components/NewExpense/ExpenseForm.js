import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = () => {
    // 상태저장하기 방법 (2)
    //  1. 독립적인 state 방식 -> 여러 개의 state를 가질 수 있음 
    const [enteredTItle, setEnteredTitle] = useState('');  
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    

    // 2. 객체 state 방식 -> 많은 프로젝트에서 보게 됨
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // 방법1)
        // setUserInput({      // 그냥 enteredTItle만 저장 해주면 다른 값들은 사라지기 때문에 아래와 같이 해줘야 한다.
        //     ...userInput,    // 스프레드 사용 -> userInput을 복사
        //     enteredTitle : event.target.value // 키와 값의 쌍을 오버라이드
        // }) // target : 이벤트가 일어나는 DOM요소를 가리킴
        // 리액트가 상태 업데이트 스케줄을 갖고 있음 -> 바로 실행 X ->동시에 수많은 상태 업데이트 계획 -> 오래된 정보에 의존

        // 방법2) 가장 최신 상태의 스냅샷으로 작업 -> 안전함
    //     setUserInput ((prevState) => {  
    //         return { ...prevState, enteredTItle : event.target.value };
    //     });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({      
        //     ...userInput,   
        //     enteredAmount : event.target.value 
        // })    // value는 모두 문자열을 얻기 때문에 숫자든, 날짜든 문자열로 저장된다.
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({      
        //     ...userInput,   
        //     enteredDate : event.target.value 
        // })
    };

    const submitHandler = () => {

    }
    

    return (
    <form onSubmit={ submitHandler }>
        <div className='new-expense__controls'> 
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2018-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
}


export default ExpenseForm;