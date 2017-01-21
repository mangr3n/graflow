import { chain, accumulate, mux, demux, map } from '../../src/graflow'

describe('chain', () => {
  it('should join components together', () => {
    const comp = chain(
      mux(['dividend', 'divisor'])
      , accumulate()
      , map(({dividend, divisor}) => ({
          quotient:  Math.floor(dividend / divisor)
        , remainder: dividend % divisor
      }))
      , demux(['quotient', 'remainder'])
    )

    const listenerQuotient = spy()
    const listenerRemainder = spy()

    comp.out.quotient.on(listenerQuotient)
    comp.out.remainder.on(listenerRemainder)

    // 26 / 11 = 2 remainder 4
    comp.in.dividend.send(26)
    comp.in.divisor.send(11)

    expect(listenerQuotient).to.have.been.calledOnce
    expect(listenerQuotient.getCall(0).args[0]).to.be.equal(2)

    expect(listenerRemainder).to.have.been.calledOnce
    expect(listenerRemainder.getCall(0).args[0]).to.be.equal(4)
  })
})
