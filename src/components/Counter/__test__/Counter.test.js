import { getByTestId, render, screen } from '@testing-library/react'
import Counter from '../Counter'

test('Checks if counter is present', () => {
  render(<Counter />)
  const headerEl = screen.getAllByTestId('header')
  expect(headerEl).toBeTruthy()
})

test('Counter initially starts at 0', () => {
  render(<Counter />)
  const counterEl = screen.getByTestId('counter')
  expect(counterEl.textContent).toBe('0')
})

test('Input contains initial value of 1', () => {
  render(<Counter />)
  const inputEl = screen.getByTestId('input')
  expect(inputEl.value).toBe('1')
})

test('Add button renders with +', () => {
  render(<Counter />)
  const addBtn = screen.getByTestId('add-btn')
  expect(addBtn.textContent).toBe('+')
})

test('Subtract button renders with  -', () => {
  render(<Counter />)
  const subtractBtn = screen.getByTestId('sub-btn')
  expect(subtractBtn.textContent).toBe('-')
})
