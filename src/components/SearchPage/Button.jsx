import React, { useState } from 'react'

export default function Button() {
  const BtnStyles = {
    backgroundColor: '#0097fc',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
  }
  const [status, setStatus] = useState(false)
  return (
    <button
      style={BtnStyles}
      onClick={() => setStatus(!status)}
      title="action-btn"
    >
      {status ? 'Logged In' : 'Logged Out'}
    </button>
  )
}
