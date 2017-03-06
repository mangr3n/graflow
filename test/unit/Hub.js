import { Hub } from '../../src/graflow'

describe('Hub', () => {
  it('should return a component that emits an object with last input (name/value)', () => {
    const hub = Hub('a', 'b')
    const listener = spy()

    hub.on(listener)

    hub.send('a', 1)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.deep.equal({a: 1})

    hub.send('b', 2)

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.deep.equal({b: 2})

    hub.send('a', 10)

    expect(listener).to.have.been.calledThrice
    expect(listener.getCall(2).args[0]).to.be.deep.equal({a: 10})
  })
})
