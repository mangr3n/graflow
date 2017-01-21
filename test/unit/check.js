import { check } from '../../src/graflow'

describe('check', () => {
  it('should evaluate the condition and emit the value though true or false output', () => {
    const isEven = check(v => v % 2 === 0)

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
