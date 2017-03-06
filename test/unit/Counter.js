import { Counter } from '../../src/graflow'

describe('Counter', () => {
  it('should return a component that emits how many times it has received a signal', () => {
    const counter = Counter()
    const listener = spy()

    counter.on(listener)

    counter.send()

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(1)

    counter.send()

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.equal(2)

    counter.send()

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(2).args[0]).to.be.equal(3)
  })
})
