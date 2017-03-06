import { Accumulator } from '../../src/graflow'

describe('Accumulator', () => {
  it('should return a component that emits an object with accumulated values', () => {
    const acc = Accumulator()
    const listener = spy()

    acc.on(listener)

    acc.send({a: 1})

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.deep.equal({a: 1})

    acc.send({b: 2, c: 3})

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.deep.equal({a: 1, b: 2, c: 3})

    acc.send({a: 10, b: 20})

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(2).args[0]).to.be.deep.equal({a: 10, b: 20, c: 3})
  })
})
