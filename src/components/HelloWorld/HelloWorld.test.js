import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld'

test('Check if Hello World is on the page', () => {
  // Render the component
  render(<HelloWorld />)
  // const linkElement = screen.getByText('Hello World!')
  const linkElement = screen.getByText(/Hello World/i)
  expect(linkElement).toBeInTheDocument()
})
