import { Filter } from '../../src/graflow'

describe('Filter', () => {
  let filter, listener

  beforeEach(() => {
    filter = Filter(v => v > 0)
    listener = spy()
  })

  it('should return a component that emits the input value if condition is true', () => {
    filter.outputs.default.on(listener)
    filter.start(5)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal(5)
  })

  it('should return a component that doesn\'t emit the input value if condition is not true', () => {
    filter.outputs.default.on(listener)
    filter.start(-3)

    expect(listener).to.have.been.not.called
  })
})
