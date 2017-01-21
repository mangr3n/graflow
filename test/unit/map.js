import { map } from '../../src/graflow'

describe('map', () => {
  it('should emit a mapped value', () => {
    const double = map(v => v*2)
    const listener = spy()

    double.outputs.default.on(listener)
    double.start(2)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(4)
  })
})
