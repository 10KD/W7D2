import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { todoApiUtil } from './util/todo_api_util.js';
import thunk from './middleware/thunk.js';
import {fetchTodos, createTodo} from './actions/todo_actions';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  const root = document.getElementById('content');
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;
  window.store = store;
  window.thunk = thunk;
  ReactDOM.render(<Root store={store} />, root);
});
