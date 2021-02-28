import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TodoList from './components/todos/TodoList';
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
