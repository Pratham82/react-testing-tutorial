import { useState } from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(1)

  return (
    <div>
      <h1 data-testid="header">Counter App</h1>
      <h2
        data-testid="counter"
        className={count >= 100 ? 'green' : count < 0 ? 'red' : ''}
      >
        {count}
      </h2>
      <button data-testid="add-btn" onClick={() => setCount(count + input)}>
        +
      </button>
      <input
        data-testid="input"
        type="number"
        value={input}
        style={{ textAlign: 'center' }}
        onChange={e => setInput(Number(e.target.value))}
      />
      <button data-testid="sub-btn" onClick={() => setCount(count - input)}>
        -
      </button>
    </div>
  )
}
