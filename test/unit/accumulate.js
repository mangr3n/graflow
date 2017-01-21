import { accumulate } from '../../src/graflow'

describe('accumulate', () => {
  it('should emit an object with accumulated values', () => {
    const acc = accumulate()
    const listener = spy()

    acc.out.default.on(listener)

    acc.in.default.send({a: 1})

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.deep.equal({a: 1})

    acc.in.default.send({b: 2, c: 3})

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.deep.equal({a: 1, b: 2, c: 3})

    acc.in.default.send({a:10, b: 20})

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(2).args[0]).to.be.deep.equal({a: 10, b: 20, c: 3})
  })
})
