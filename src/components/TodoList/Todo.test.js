import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Todo from './Todo'

afterEach(() => {
  cleanup()
})

// Check if first todo is correct and not empty
test('should render todo component', () => {
  const { id, title, status } = { id: 1, title: 'Do Laundry', status: false }
  render(<Todo id={id} title={title} status={status} />)
  const todoElement = screen.getByTestId('todo-1')
  expect(todoElement).toBeInTheDocument()
  // Check if it is exact todo
  expect(todoElement).toHaveTextContent('Do Laundry')
  // Check if empty
  expect(todoElement).toHaveTextContent(/[A-Z]/gi)
})

// Check completed Todo
test('should render completed todo item', () => {
  const { id, title, status } = { id: 3, title: 'Work out', status: true }
  render(<Todo id={id} title={title} status={status} />)
  const completedTodo = screen.getByTestId('todo-3')
  expect(completedTodo).toContainHTML('strike')
})

// Match snapshot
test('matches snapshot', () => {
  const { id, title, status } = { id: 1, title: 'Do Laundry', status: false }
  //* 1. create a tree of the component (contains the object form of our component)
  const tree = renderer
    .create(<Todo id={id} title={title} status={status} />)
    .toJSON()

  //* 2. Match our tree with the snapshot
  //* This will match the component structure and returns error if there is any change in the structure of the tree
  expect(tree).toMatchSnapshot()
})
