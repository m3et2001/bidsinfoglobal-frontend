import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import './index.css';
import App from './App';

import { store } from "./store/index.js";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
