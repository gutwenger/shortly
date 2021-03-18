import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ShortenProvider } from './context/ShortenContext';

ReactDOM.render(
  <React.StrictMode>
    <ShortenProvider>
      <App />
    </ShortenProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
