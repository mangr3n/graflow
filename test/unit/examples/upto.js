import UpTo from '../../../examples/upto/UpTo'

describe('examples/UpTo', () => {
  it('should return a component that emits values from input value to limit', () => {
    const comp = UpTo(5)
    const listener = spy()

    comp.on(listener)
    comp.send(2)

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(0).args).to.be.deep.equal([3])
    expect(listener.getCall(1).args).to.be.deep.equal([4])
    expect(listener.getCall(2).args).to.be.deep.equal([5])
  })
})
