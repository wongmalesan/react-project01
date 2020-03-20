import React from 'react'

function Todos({todos, deleteTodo}) {
  const todoList = (todos.length !== 0) 
      ? todos.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
          </div>
        )
      })
      : <p className="center">You Free To Go</p> 

  return (
    <div className="todo collection">
      {todoList}
    </div>
  )
}

export default Todos
