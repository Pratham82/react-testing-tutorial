import React from 'react'
import Button from './Button'
import Input from './Input'

export default function Search() {
  return (
    <div>
      <h2 data-testid="search-heading">Search</h2>
      <Button />
      <Input />
    </div>
  )
}
