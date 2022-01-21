import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import Input from './Input'

it('checks if the static text is present', () => {
  render(<Input />)
  // Check if input is rendering
  const input = screen.getByTitle('dummy-input')
  expect(input).toBeTruthy()

  // Check if the static typed text is rendering
  const text = screen.queryByTitle('typed-text')
  expect(text).toBeInTheDocument()

  // Check if the value is empty in the start
  expect(text.textContent).toBe('')
})

// Type in the input and check if our input has the value
describe('inputTextChecker', () => {
  it('onChange', () => {
    render(<Input />)
    const inputVal = screen.getByTitle('dummy-input')

    // check
    // const placeHolder = screen.queryByPlaceholderText('Type your name 1')
    // expect(placeHolder).toBeInTheDocument()

    // before firing event the input must be empty
    expect(inputVal.textContent).toBe('')

    // Check if whatever value is getting typed is in the input
    // 1. inputVal: the input element selector
    // 2. {target: {value: "any value"}} : this is basically the event.target.value's value, but we are passing programmatically in the function
    fireEvent.change(inputVal, { target: { value: 'testing value' } })

    // check if the type value is matching with the input value which is provided above
    expect(inputVal.value).toBe('testing value')
  })
})
