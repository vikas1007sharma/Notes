import React from 'react';
import { TodoItemProvider } from './context/TodoItemContext';
import Todo from './Todo';

function App() {
  return (
    <TodoItemProvider>
      <Todo />
    </TodoItemProvider>
  );
}

export default App;
