import { multiply, makeLowerCase } from './HelperFunctions'

test('testing multiply function', () => {
  //* Very basic test for checking the variable has the same value as written in test
  // const number = 100
  // expect(number).toBe(100)

  // Testing functions
  expect(multiply(10, 10)).toBe(100)
  expect(multiply(0, 100)).toBe(0)
  expect(multiply(-5, 100)).toBe(-500)
})

// Testing makeLowercase function
// naming convention according to the jest validation
test('makeLowerCase function', () => {
  expect(makeLowerCase('JOEY')).toBe('joey')
  expect(makeLowerCase('RoSss')).toBe('rosss')
  expect(makeLowerCase('treVOR')).toBe('trevor')
})
