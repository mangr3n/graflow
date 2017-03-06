import { Mapper } from '../../src/graflow'

describe('Mapper', () => {
  it('should returns a component that emits a mapped value', () => {
    const mapper = Mapper(v => v * 2)
    const listener = spy()

    mapper.on(listener)
    mapper.send(2)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(4)
  })
})
