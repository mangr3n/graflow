import { id } from '../../src/graflow'

describe('id', () => {
  it('should take an input value and emit that value', () => {
    const comp = id()
    const listener = spy()

    comp.out.default.on(listener)
    comp.in.default.send(2)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(2)
  })
})
