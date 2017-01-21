import { demux } from '../../src/graflow'

describe('demux', () => {
  it('should emit zero or more values from input object', () => {
    const demuxer = demux('a', 'b', 'c')

    const listenerA = spy()
    const listenerB = spy()
    const listenerC = spy()

    demuxer.out.a.on(listenerA)
    demuxer.out.b.on(listenerB)
    demuxer.out.c.on(listenerC)

    demuxer.in.default.send({a: 1, c: 2})

    expect(listenerA).to.have.been.calledOnce
    expect(listenerA.getCall(0).args[0]).to.be.equal(1)

    expect(listenerB).to.have.not.been.called

    expect(listenerC).to.have.been.calledOnce
    expect(listenerC.getCall(0).args[0]).to.be.equal(2)
  })
})
