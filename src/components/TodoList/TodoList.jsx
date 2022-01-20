import React from 'react'
import Todo from './Todo'
const todos = [
  { title: 'Do Laundry', status: false },
  { title: 'Read Something', status: true },
  { title: 'Work out', status: true },
]
// const todos = [{ title: '', status: 0 }]

export default function TodoList() {
  const TodoListStyles = {
    div: {
      listStyle: 'none',
      display: 'flex',
      textAlign: 'left',
      padding: '10px',
    },
    ul: {
      listStyle: 'none',
    },
  }
  return (
    <div>
      <h2>Todo</h2>
      <div style={TodoListStyles.div}>
        <ul style={TodoListStyles.ul}>
          {todos.map(({ title, status }, i) => (
            <li key={i + Math.random()}>
              <Todo title={title} status={status} id={i} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
