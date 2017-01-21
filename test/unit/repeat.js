import { repeat } from '../../src/graflow'

describe('repeat', () => {
  it('should emit input value n times', () => {
    const repeater = repeat(3)
    const listener = spy()

    repeater.out.default.on(listener)

    repeater.in.default.received(1)

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(0).args[0]).to.be.equal(1)
    expect(listener.getCall(1).args[0]).to.be.equal(1)
    expect(listener.getCall(2).args[0]).to.be.equal(1)
  })
})
