import { Identity } from '../../src/graflow'

describe('Identity', () => {
  it('should return a component that takes an input value and emit that value', () => {
    const comp = Identity()
    const listener = spy()

    comp.on(listener)
    comp.send(2)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(2)
  })
})
