import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataContext from './store/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <DataContext>
      <App />
    </DataContext>
  </>
);
