import React, { useState } from 'react'
import Todos from './Todos';
import TodoForm from './TodoForm';

function TodoContainer() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy some milk" },
    { id: 2, content: "buy some bread" },
  ]);

  const deleteTodo = (id) => {
    const todo = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos(todo);
  }

  const AddTodo = (newTodo) => {
    newTodo.id = Date.now(); 
    let todo = [...todos, newTodo];
    setTodos(todo);
  }


  return (
    <div>
      <h1 className="center blue-text">Todo List</h1>
      <Todos todos={todos} deleteTodo={deleteTodo}/>
      <TodoForm addTodo={AddTodo}/>
    </div>
  )
}

export default TodoContainer
