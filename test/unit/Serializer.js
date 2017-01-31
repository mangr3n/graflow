import { Serializer } from '../../src/graflow'

describe('Serializer', () => {
  it('should return a component that emits all values from an iterable on every input', () => {
    const iterator = Serializer()
    const listener = spy()

    iterator.out.default.on(listener)

    iterator.in.default.send([1, 2])

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(0).args[0]).to.be.equal(1)
    expect(listener.getCall(1).args[0]).to.be.equal(2)
  })
})
