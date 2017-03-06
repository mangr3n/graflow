import { Guard } from '../../src/graflow'

describe('Guard', () => {
  it('should return a component that evaluates the conditions and emit the vale through the correct output', () => {
    const checker = Guard({
      even: v => v % 2 === 0,
      greaterThan10: v => v > 10,
      lesserThan5: v => v < 5
    })

    const listenerEven = spy()
    const listenerGreaterThan10 = spy()
    const listenerLesserThan5 = spy()

    checker.on('even', listenerEven)
    checker.on('greaterThan10', listenerGreaterThan10)
    checker.on('lesserThan5', listenerLesserThan5)

    const input = 12

    checker.send(input)

    expect(listenerEven).to.have.been.calledOnce
    expect(listenerEven.getCall(0).args[0]).to.be.equal(input)

    expect(listenerGreaterThan10).to.have.been.calledOnce
    expect(listenerGreaterThan10.getCall(0).args[0]).to.be.equal(input)

    expect(listenerLesserThan5).to.have.not.been.called
  })
})
