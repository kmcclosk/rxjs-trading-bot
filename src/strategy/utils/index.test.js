import { toMarketDataObject } from '.'

describe('Stragedy Utils', () => {
  it('should convert array market data to an object containing arrays', () => {
    const marketDataArr = [
      [
        1514315520,
        15868.76,
        15868.77,
        15850.01,
        15854.51,
        22.70132,
        359945.25,
      ],
      [
        1514315700,
        15854.5,
        15854.5,
        15795,
        15795.02,
        27.408403,
        433701.6,
      ],
      [
        1514315880,
        15795.03,
        15795.03,
        15795.02,
        15795.03,
        10.470616,
        165383.56,
      ],
    ]
    const expectedmarketDataObject = {
      open: [15868.76, 15854.5, 15795.03],
      close: [15854.51, 15795.02, 15795.03],
      high: [15868.77, 15854.5, 15795.03],
      low: [15850.01, 15795, 15795.02],
      volume: [22.70132, 27.408403, 10.470616],
    }
    expect(toMarketDataObject(marketDataArr)).toEqual(expectedmarketDataObject)
  })
})