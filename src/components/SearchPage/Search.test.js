import { screen, render } from '@testing-library/react'
import Search from './Search'

it('checkSearchRender', () => {
  render(<Search />)
  const searchHeading = screen.getByTestId('search-heading')
  expect(searchHeading).toBeTruthy()
})
