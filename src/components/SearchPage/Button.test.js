import { screen, fireEvent, render } from '@testing-library/react'
import Button from './Button'

it('checkButtonRender', () => {
  render(<Button />)
  const btn = screen.queryByTitle('action-btn')
  const btn2 = screen.queryByText('Logged Out')
  // Check if the button is present in the html
  expect(btn).toBeInTheDocument()
  expect(btn).toBeTruthy()
})

// Check button click
describe('clickButton', () => {
  it('onClick', () => {
    // render
    render(<Button />)

    // query
    const btn = screen.queryByTitle('action-btn')

    // check content value before clicking the button
    // expect(btn).toHaveTextContent('Logged Out')
    expect(btn.innerHTML).toBe('Logged Out')

    // fire click event
    fireEvent.click(btn)

    // check content value after clicking the button
    // expect(btn).toHaveTextContent('Logged In')
    expect(btn.innerHTML).toBe('Logged In')
  })
})
