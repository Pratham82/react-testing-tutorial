import React from 'react'
export default function Todo({ id, title, status }) {
  const TodoStyles = {
    div: {
      padding: '10px',
    },
    span: {
      fontWeight: 'bold',
    },
    statuses: {
      completed: {
        color: 'green',
        textDecoration: 'line-through',
      },
      pending: {
        color: 'red',
      },
    },
  }
  return (
    <div style={TodoStyles.div} data-testid={`todo-${id}`}>
      &nbsp;
      <span
        style={
          status ? TodoStyles.statuses.completed : TodoStyles.statuses.pending
        }
      >
        {status ? <strike>{title}</strike> : title}
      </span>
    </div>
  )
}
