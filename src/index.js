import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 위와 같이 import를 해야지 해당 라이브러리의 기능을 index.js 파일에서 사용할 수 있다.
// js를 임포트할 때는 반드시 확장자는 빼준다. (App.js -> X)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
