import { uniq } from '../../src/graflow'

describe('uniq', () => {
  it('should not emit two consecutive equal input values', () => {
    const norepeater = uniq()
    const listener = spy()

    norepeater.out.default.on(listener)

    norepeater.in.default.send(1)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(1)

    norepeater.in.default.send(1)
    expect(listener).to.have.been.calledOnce

    norepeater.in.default.send(2)
    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.equal(2)
  })
})
