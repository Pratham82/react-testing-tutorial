import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import Counter from '../Counter'

let headerEl
let countEl
let inputEl
let addBtn
let subBtn
beforeEach(() => {
  render(<Counter />)
  headerEl = screen.getByTestId('header')
  addBtn = screen.getByTestId('add-btn')
  subBtn = screen.getByTestId('sub-btn')
  countEl = screen.getByTestId('counter')
  inputEl = screen.getByTestId('input')
})

afterEach(() => {
  cleanup()
})

test('Checks if counter is present', () => {
  expect(headerEl).toBeTruthy()
})

test('Counter initially starts at 0', () => {
  expect(countEl.textContent).toBe('0')
})

test('Input contains initial value of 1', () => {
  expect(inputEl.value).toBe('1')
})

test('Add button renders with +', () => {
  expect(addBtn.textContent).toBe('+')
})

test('Subtract button renders with  -', () => {
  expect(subBtn.textContent).toBe('-')
})

test('Changing value of input works correctly', () => {
  // Check initial value
  expect(inputEl.value).toBe('1')

  // Trigger event
  fireEvent.change(inputEl, { target: { value: '5' } })

  // Check modified value
  expect(inputEl.value).toBe('5')
})

test('clicking on plus button increments the count', () => {
  // Click on plus button event
  fireEvent.click(addBtn)

  // Get value of input
  const value = inputEl.value

  // Check if the counter incremented according to inputElements value
  expect(countEl.textContent).toBe(value)
})

test('clicking on subtract button decrements the count', () => {
  expect(countEl.textContent).toBe('0')

  // Check if the counter incremented according to inputElements value
  fireEvent.click(subBtn)

  expect(countEl.textContent).toBe('-1')
})

test('changing input value and clicking on add button works correctly', () => {
  // Change the input value
  fireEvent.change(inputEl, { target: { value: '10' } })

  // Check if the counter incremented according to inputElements value
  fireEvent.click(addBtn)

  expect(countEl.textContent).toBe('10')
})

test('changing input value and clicking on subtract button works correctly', () => {
  // Change the input value
  fireEvent.change(inputEl, { target: { value: '10' } })

  // Check if the counter incremented according to inputElements value
  fireEvent.click(subBtn)

  expect(countEl.textContent).toBe('-10')
})

test('adding and then subtracting leads to correct counter number', () => {
  // Add
  fireEvent.change(inputEl, { target: { value: '10' } })
  fireEvent.click(addBtn)
  expect(countEl.textContent).toBe('10')

  // Subtract
  fireEvent.change(inputEl, { target: { value: '10' } })
  fireEvent.click(subBtn)
  expect(countEl.textContent).toBe('0')
})

test('counter contains correct className', () => {
  expect(countEl.className).toBe('')

  fireEvent.change(inputEl, {
    target: {
      value: '50',
    },
  })

  fireEvent.click(addBtn)

  expect(countEl.className).toBe('')

  fireEvent.click(addBtn)
  expect(countEl.className).toBe('green')

  fireEvent.click(subBtn)
  expect(countEl.className).toBe('')

  fireEvent.click(subBtn)
  fireEvent.click(subBtn)
  expect(countEl.className).toBe('red')
})
