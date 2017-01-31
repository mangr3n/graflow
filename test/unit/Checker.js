import { Checker } from '../../src/graflow'

describe('Checker', () => {
  it('should return a component that evaluates the condition and emit the value though true or false output', () => {
    const isEven = Checker(v => v % 2 === 0)

    const listenerTrue = spy()
    const listenerFalse = spy()

    isEven.out.true.on(listenerTrue)
    isEven.out.false.on(listenerFalse)

    isEven.in.default.send(5)

    expect(listenerTrue).to.have.not.been.called

    expect(listenerFalse).to.have.been.calledOnce
    expect(listenerFalse.getCall(0).args[0]).to.be.equal(5)
  })
})
