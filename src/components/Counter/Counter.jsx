import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(1)

  return (
    <div>
      <h1 data-testid="header">Counter App</h1>
      <h2 data-testid="counter">{count}</h2>
      <button data-testid="add-btn">+</button>
      <input
        data-testid="input"
        type="number"
        value={input}
        style={{ textAlign: 'center' }}
        onChange={e => setInput(e.target.value)}
      />
      <button data-testid="sub-btn">-</button>
    </div>
  )
}
