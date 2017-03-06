import { Muxer } from '../../src/graflow'

describe('Muxer', () => {
  it('should return a component that emits an object with all last inputs', () => {
    const muxer = Muxer('a', 'b')
    const listener = spy()

    muxer.on(listener)

    muxer.send('a', 1)

    expect(listener).to.have.been.not.called

    muxer.send('b', 2)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.deep.equal({a: 1, b: 2})

    muxer.send('a', 10)

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.deep.equal({a: 10, b: 2})
  })
})
