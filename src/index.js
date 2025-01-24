import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Add this import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Add basename for React Router */}
    <BrowserRouter basename="/Fetch%20API">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
