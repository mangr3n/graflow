import { count } from '../../src/graflow'

describe('count', () => {
  it('should emit how many times it has received a signal', () => {
    const counter = count()
    const listener = spy()

    counter.out.default.on(listener)

    counter.in.default.send()

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(1)

    counter.in.default.send()

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.equal(2)

    counter.in.default.send()

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(2).args[0]).to.be.equal(3)
  })
})
