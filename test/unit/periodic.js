import { periodic } from '../../src/graflow'

describe('periodic', () => {
  var clock

  before(() => { clock = sinon.useFakeTimers() })
  after(() => { clock.restore() })

  it('should emit a value periodically', () => {
    const timer = periodic(1000, 'tick')
    const listener = spy()

    timer.outputs.default.on(listener)
    timer.inputs.default.send()

    expect(listener).to.have.not.been.called

    clock.tick(1200)

    expect(listener).to.have.been.calledOnce
    expect(listener.getCall(0).args[0]).to.be.equal('tick')

    clock.tick(1200)

    expect(listener).to.have.been.calledTwice
    expect(listener.getCall(1).args[0]).to.be.equal('tick')
  })
})
