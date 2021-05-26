import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Customize from './comp/Customize';
import Home from './comp/Home';
import PizzaOrder from './comp/PizzaOrder';

ReactDOM.render(
  
  <BrowserRouter>
    <Route path="/"  component={App}></Route>
    <Route path="/BuildYourPizza" component={Customize}></Route>
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/Order" component={PizzaOrder}></Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
