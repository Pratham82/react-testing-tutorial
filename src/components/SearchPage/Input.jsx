import React, { useState } from 'react'

export default function Input() {
  const [input, setInput] = useState('')
  const styles = {
    input: {
      height: '30px',
      borderRadius: '10px',
      outline: 'none',
      border: 'none',
      padding: '0 10px',
    },
    div: {
      margin: '20px 0',
      fontSize: '1rem',
    },
    div2: {
      marginTop: '15px',
    },
  }
  return (
    <div style={styles.div}>
      <input
        type="text"
        title="dummy-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={styles.input}
        placeholder="Type your name"
      />
      <div style={styles.div2}>
        <b>Typed Text:</b>
      </div>
      <p title="typed-text">{input}</p>
    </div>
  )
}
