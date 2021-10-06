import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
// import HelloComponent from './components/HelloComponent';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ทดสอบการสร้าง function Component
// function HelloComponent(){
//   return <h1>ทดสอบการใช้ Component</h1>
// }

// ทดสอบการสร้าง class Component 
// class HelloClassComponent extends React.Component{
//   render(){
//     return <h1>Test my first Component </h1>
//   }
// }

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
