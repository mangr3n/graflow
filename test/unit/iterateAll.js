import { iterateAll } from '../../src/graflow'

describe('iterateAll', () => {
  it('should emit all values from an iterable on every input', () => {
    const iterator = iterateAll([1, 2])
    const listener = spy()

    iterator.out.default.on(listener)

    iterator.in.default.send()

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(0).args[0]).to.be.equal(1)
    expect(listener.getCall(1).args[0]).to.be.equal(2)
  })
})
