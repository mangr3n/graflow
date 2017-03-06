import { Demuxer } from '../../src/graflow'

describe('Demuxer', () => {
  it('should return a component that emits zero or more values from input object', () => {
    const demuxer = Demuxer('a', 'b', 'c')

    const listenerA = spy()
    const listenerB = spy()
    const listenerC = spy()
    const listener = spy()

    demuxer.on(listener)
    demuxer.on('a', listenerA)
    demuxer.on('b', listenerB)
    demuxer.on('c', listenerC)

    demuxer.send({a: 1, c: 2})

    expect(listenerA).to.have.been.calledOnce
    expect(listenerA.getCall(0).args[0]).to.be.equal(1)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.deep.equal({a: 1, c: 2})

    expect(listenerB).to.have.not.been.called

    expect(listenerC).to.have.been.calledOnce
    expect(listenerC.getCall(0).args[0]).to.be.equal(2)
  })
})
