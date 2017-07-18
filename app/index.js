import React from "react";
import ReactDOM from "react-dom";

import 'styles/main.scss';

import App from './components/App.js';
import AppRouter from './components/App_router.js'

ReactDOM.render(
  <AppRouter />,
document.getElementById('app')
)
