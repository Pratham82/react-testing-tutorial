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
  // render(<Counter />)
  // const headerEl = screen.getByTestId('header')
  expect(headerEl).toBeTruthy()
})

test('Counter initially starts at 0', () => {
  // render(<Counter />)
  // const countEl = screen.getByTestId('counter')
  expect(countEl.textContent).toBe('0')
})

test('Input contains initial value of 1', () => {
  // render(<Counter />)
  // const inputEl = screen.getByTestId('input')
  expect(inputEl.value).toBe('1')
})

test('Add button renders with +', () => {
  // render(<Counter />)
  // const addBtn = screen.getByTestId('add-btn')
  expect(addBtn.textContent).toBe('+')
})

test('Subtract button renders with  -', () => {
  // render(<Counter />)
  // const subBtn = screen.getByTestId('sub-btn')
  expect(subBtn.textContent).toBe('-')
})

test('Changing value of input works correctly', () => {
  // render(<Counter />)
  // const inputEl = screen.getByTestId('input')

  // Check initial value
  expect(inputEl.value).toBe('1')

  // Trigger event
  fireEvent.change(inputEl, { target: { value: '5' } })

  // Check modified value
  expect(inputEl.value).toBe('5')
})

test('clicking on plus button increments the count', () => {
  // render(<Counter />)
  // Click on plus button event
  // const addBtn = screen.getByTestId('add-btn')
  fireEvent.click(addBtn)

  // Get value of input
  // const inputEl = screen.getByTestId('input')
  const value = inputEl.value

  // Check if the counter incremented according to inputElements value
  // const countEl = screen.getByTestId('counter')
  expect(countEl.textContent).toBe(value)
})

test('clicking on subtract button decrements the count', () => {
  // render(<Counter />)
  // const subBtn = screen.getByTestId('sub-btn')

  // const countEl = screen.getByTestId('counter')

  expect(countEl.textContent).toBe('0')

  // Check if the counter incremented according to inputElements value
  fireEvent.click(subBtn)

  expect(countEl.textContent).toBe('-1')
})

test('changing input value and clicking on add button works correctly', () => {
  // render(<Counter />)
  // const addBtn = screen.getByTestId('add-btn')
  // const countEl = screen.getByTestId('counter')
  // const inputEl = screen.getByTestId('input')

  // Change the input value
  fireEvent.change(inputEl, { target: { value: '10' } })

  // Check if the counter incremented according to inputElements value
  fireEvent.click(addBtn)

  expect(countEl.textContent).toBe('10')
})

test('changing input value and clicking on subtract button works correctly', () => {
  // render(<Counter />)
  // const subBtn = screen.getByTestId('sub-btn')
  // const countEl = screen.getByTestId('counter')
  // const inputEl = screen.getByTestId('input')

  // Change the input value
  fireEvent.change(inputEl, { target: { value: '10' } })

  // Check if the counter incremented according to inputElements value
  fireEvent.click(subBtn)

  expect(countEl.textContent).toBe('-10')
})

test('adding and then subtracting leads to correct counter number', () => {
  // render(<Counter />)
  // const addBtn = screen.getByTestId('add-btn')
  // const subBtn = screen.getByTestId('sub-btn')
  // const countEl = screen.getByTestId('counter')
  // const inputEl = screen.getByTestId('input')

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
  // render(<Counter />)
  // const addBtn = screen.getByTestId('add-btn')
  // const subBtn = screen.getByTestId('sub-btn')
  // const countEl = screen.getByTestId('counter')
  // const inputEl = screen.getByTestId('input')

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
