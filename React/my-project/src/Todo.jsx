import React, { useContext, useState } from 'react';
import {TodoItemContext, useTodo} from './context/TodoItemContext';

const Todo = () => {
    const [ todo, addTodo, removeTodo ] = useTodo();
    const [newItem, setnewItem] = useState("");

    return (
        <div>
            <input type="text" placeholder='Enter Item to add' value={newItem} onChange={(e) => setnewItem(e.target.value)} />
            <button onClick={()=>{addTodo(newItem)}}>add</button>
            <ul>
                {
                    todo.map((item, index) => {
                        return <li key={index}>{item} <button onClick={()=>{removeTodo(item)}}>delete</button></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todo