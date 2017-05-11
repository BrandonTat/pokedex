import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {configureStore} from './store/store';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
