import { Repeater } from '../../src/graflow'

describe('Repeater', () => {
  it('should return a component that emits the input value n times', () => {
    const repeater = Repeater(3)
    const listener = spy()

    repeater.on(listener)

    repeater.send(1)

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(0).args[0]).to.be.equal(1)
    expect(listener.getCall(1).args[0]).to.be.equal(1)
    expect(listener.getCall(2).args[0]).to.be.equal(1)
  })
})
