import {Chain, Mapper} from '../../src/graflow'

describe('Chain', () => {
  it('should return a component that joins components together', () => {
    const comp = Chain(
      Mapper(v => v * 2),
      Mapper(v => v + 1)
    )

    const listener = spy()

    comp.on(listener)

    comp.send(5)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(11)
  })

/*
it('should return a component that joins components together', () => {
    const comp = Chain(
      Muxer('dividend', 'divisor')
      , Accumulator()
      , Mapper(({dividend, divisor}) => ({
        quotient: Math.floor(dividend / divisor),
        remainder: dividend % divisor
      }))
      , Demuxer('quotient', 'remainder')
    )

    const listenerQuotient = spy()
    const listenerRemainder = spy()

    comp.on('quotient', listenerQuotient)
    comp.on('remainder', listenerRemainder)

    // 26 / 11 = 2 remainder 4
    comp.send('dividend', 26)
    comp.send('divisor', 11)

    expect(listenerQuotient).to.have.been.calledOnce
    expect(listenerQuotient.getCall(0).args[0]).to.be.equal(2)

    expect(listenerRemainder).to.have.been.calledOnce
    expect(listenerRemainder.getCall(0).args[0]).to.be.equal(4)
  })
*/
})
