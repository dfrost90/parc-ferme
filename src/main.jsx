import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css';
import './index.css';
import { DriversProvider } from './context/drivers_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DriversProvider>
      <App />
    </DriversProvider>
  </React.StrictMode>
);
