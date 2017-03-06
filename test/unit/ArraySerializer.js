import { ArraySerializer } from '../../src/graflow'

describe('ArraySerializer', () => {
  it('should return a component that emits the input value if it isn\'t an array', () => {
    const iterator = ArraySerializer()
    const listener = spy()

    iterator.on(listener)

    iterator.send(1)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(1)
  })

  it('should return a component that emits all values from an array on every input', () => {
    const iterator = ArraySerializer()
    const listener = spy()

    iterator.on(listener)

    iterator.send([1, 2])

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(0).args[0]).to.be.equal(1)
    expect(listener.getCall(1).args[0]).to.be.equal(2)
  })
})
