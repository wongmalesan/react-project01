import React from 'react'
import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ content: '' });

  const onChangeHandler = (e) => {
    setTodo({
      content: e.target.value
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({ 
      content: '' 
    });
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Add new todo :</label>
        <input type="text" onChange={onChangeHandler} value={todo.content} />
      </form>
    </div>
  )
}

export default TodoForm
