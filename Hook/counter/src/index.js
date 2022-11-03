import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterHook from './components/CounterHook';
import CounterObject from './components/CounterObject';
import CounterArray from './components/CounterArray';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterArray/>
  </React.StrictMode>
);


