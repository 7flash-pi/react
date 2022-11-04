import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataFetch from './components/DataFetch';
import SingleData from './components/SingleData';
import ClickFetch from './components/ClickFetch'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClickFetch/>
  </React.StrictMode>
);


