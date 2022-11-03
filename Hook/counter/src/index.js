import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterHook from './components/CounterHook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterHook/>
  </React.StrictMode>
);


