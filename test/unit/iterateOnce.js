import { iterateOnce } from '../../src/graflow'

describe('iterateOnce', () => {
  it('should emit a value of an iterable on every input', () => {
    const iterator = iterateOnce([1, 2])
    const listener = spy()

    iterator.out.default.on(listener)

    iterator.in.default.send()

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(1)

    iterator.in.default.send()

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.equal(2)

    iterator.in.default.send()

    expect(listener).to.have.been.calledTwice
  })
})
