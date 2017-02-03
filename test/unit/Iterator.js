import { Iterator } from '../../src/graflow'

describe('Iterator', () => {
  it('should return a component that emits a value of an iterable on every input', () => {
    const iterator = Iterator([1, 2])
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

  it('should return a component cyclic values of iterator if cyclic option is true', () => {
    const iterator = Iterator([1, 2], {cyclic: true})
    const listener = spy()

    iterator.out.default.on(listener)

    iterator.in.default.send()

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(1)

    iterator.in.default.send()

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.equal(2)

    iterator.in.default.send()

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(2).args[0]).to.be.equal(1)
  })
})
