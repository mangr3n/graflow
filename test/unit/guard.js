import { guard } from '../../src/graflow'

describe('guard', () => {
  it('should evaluate the conditions and emit the vale through the correct output', () => {
    const checker = guard({
      even: v => v % 2 === 0
      , greaterThan10: v => v > 10
      , lesserThan5: v => v < 5
    })

    const listenerEven = spy()
    const listenerGreaterThan10 = spy()
    const listenerLesserThan5 = spy()

    checker.out.even.on(listenerEven)
    checker.out.greaterThan10.on(listenerGreaterThan10)
    checker.out.lesserThan5.on(listenerLesserThan5)

    const input = 12

    checker.in.default.send(input)

    expect(listenerEven).to.have.been.calledOnce
    expect(listenerEven.getCall(0).args[0]).to.be.equal(input)

    expect(listenerGreaterThan10).to.have.been.calledOnce
    expect(listenerGreaterThan10.getCall(0).args[0]).to.be.equal(input)

    expect(listenerLesserThan5).to.have.not.been.called
  })
})
