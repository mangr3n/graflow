import { filter } from '../../src/graflow'

describe('filter', () => {
  let isPositive, listener

  beforeEach(() => {
    isPositive = filter(v => v>0)
    listener = spy()
  })

  it('should emit the input value if condition is true', () => {
    isPositive.outputs.default.on(listener)
    isPositive.start(5)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(5)
  })

  it('should not emit the input value if condition is not true', () => {
    isPositive.outputs.default.on(listener)
    isPositive.start(-3)

    expect(listener).to.have.been.not.called
  })
})
