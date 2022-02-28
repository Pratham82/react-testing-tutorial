import { render, screen } from '@testing-library/react'
import Counter from '../Counter'

describe('Tests for CounterApp', () => {
  it('Checks if counter is present', () => {
    render(<Counter />)
    const headerEl = screen.getAllByTestId('header')
    expect(headerEl).toBeTruthy()
  })
})
