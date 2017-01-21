import { mux } from '../../src/graflow'

describe('mux', () => {
  it('should emit an object with all last inputs', () => {
    const muxer = mux('a', 'b')
    const listener = spy()

    muxer.out.default.on(listener)

    muxer.in.a.send(1)

    expect(listener).to.have.been.not.called

    muxer.in.b.send(2)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.deep.equal({a: 1, b: 2})

    muxer.in.a.send(10)

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.deep.equal({a: 10, b: 2})
  })
})
