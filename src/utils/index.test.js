import { toUnits } from './'

describe('units utility', () => {
  it('adds the new number to zero', () => {
    expect(toUnits(0, 9)).toBe(9)
  })

  it('it adds to numbers ordinally', () => {
    expect(toUnits(9,1)).toBe(91)
    expect(toUnits(91,5)).toBe(915)
    expect(toUnits(915,7)).toBe(9157)
  })
})
