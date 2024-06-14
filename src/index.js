import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // provider로 App을 감싸서 전역으로 사용할 수 있게 함
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
