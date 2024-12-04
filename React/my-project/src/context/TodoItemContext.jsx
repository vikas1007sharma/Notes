import React, { createContext, useContext, useState } from 'react';

export const TodoItemContext = createContext();

export const useTodo = () => useContext(TodoItemContext);

export const TodoItemProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const addTodo = (item) => {
    setTodo((prev) => [...prev, item]);
  };

  const removeTodo = (itemToDel) => {
    setTodo((prev) => prev.filter((item) => item !== itemToDel)); 
  };

  return (
    <TodoItemContext.Provider value={[ todo, addTodo, removeTodo ]}>
      {children}
    </TodoItemContext.Provider>
  );
};

